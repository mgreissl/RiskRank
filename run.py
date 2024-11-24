import os
from flask import Flask
from flask import json
from flask import render_template
from flask import send_from_directory
from flask import request
from flask import jsonify
import requests
import configparser

from neo4j import GraphDatabase, RoutingControl, Driver, Session, Result
from neo4j.exceptions import DriverError, Neo4jError




config_nvd = configparser.ConfigParser()
config_nvd.read('nvd_api.config')

config_graph = configparser.ConfigParser()
config_graph.read('graph_api.config')

API_KEY = config_nvd.get('API', 'key')
BASE_URL = "https://services.nvd.nist.gov/rest/json/cves/2.0"


# start date should be now
# end date should be now - 7 days
start_date = "2021-03-01T00:00:00:000 UTC-00:00"
end_date = "2021-03-08T00:00:00:000 UTC-00:00"

params = {"cveId": "CVE-2021-26855"}
headers = {"apiKey": API_KEY}

# Setup connection details
URI = "neo4j+s://hackatum-one.graphdatabase.ninja:443"
AUTH = (config_graph.get('AUTH', 'username'), config_graph.get('AUTH', 'password'))
DATABASE = "attendee14"

# Create a Neo4j session
def create_session(uri: str, auth: tuple, database: str) -> Session:
    """
    Initializes a Neo4j driver

    Args:
        uri (str): The Neo4j URI.
        auth (tuple): Authentication credentials (username, password).


    Returns:
        Session: A Neo4j Session instance.
    """
    try:
        driver: Driver = GraphDatabase.driver(uri, auth=auth, max_connection_lifetime=60)
        driver.database = database
        print("Successfully connected to Neo4j.")

        session: Session = driver.session()
        return session
    except Neo4jError as e:
        print(f"Error connecting to Neo4j: {e}")
        return None
    

# Query Neo4j
def query_neo4j(driver: Session, query: str):
    """
    Runs a query on Neo4j.

    Args:
        driver (Driver): The Neo4j driver instance.
        query (str): The Cypher query to execute.
        database (str): Optional, the database to target.

    Returns:
        Result: Query results.
    """
    try:
       return driver.run(query)
    except Neo4jError as e:
        print(f"Error executing query: {e}")
        return None

app = Flask(__name__, template_folder='dist', static_folder='dist/static')

@app.route('/')
def index():
    print(request.remote_addr)
    return render_template('index.html')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'dist/static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/api/myip')
def myip():


    response = app.response_class(
        response=json.dumps(
            {
                'myip': request.remote_addr
            }
        ),
        status=200,
        mimetype='application/json'
    )

    return response


@app.route('/api/cve', methods=['GET'])
def cve():
    # Make the API request
    response = requests.get(BASE_URL, headers=headers, params=params, timeout=120)
    print(response)

    response.raise_for_status()  # Raise HTTPError for bad responses (4xx and 5xx)
    data = response.json()
    return data

@app.route('/api/weightedRisk', methods=['GET'])
def rank_affected_systems():
    # Extract query parameters from the URL
    product = request.args.get('product', '').strip()  # Default to an empty string if not provided
    min_version = request.args.get('min_version', '').strip()
    max_version = request.args.get('max_version', '').strip()

    # Validate input parameters
    if not product or not min_version or not max_version:
        error_message = {
            "error": "Missing required query parameters: 'product', 'min_version', or 'max_version'"
        }
        return jsonify(error_message), 400

    try:
        # Create Neo4j session
        sess = create_session(URI, AUTH, DATABASE)

        query = """
        MATCH (n:SoftwareInstallation)-[:related_software]-(system:System)
        WHERE 
            n.product CONTAINS $product AND n.version >= $min_version AND n.version <= $max_version
        OPTIONAL MATCH (system)-[:assigned_for]-()  // Match :assigned_for relationships
        WITH system, system.critical AS critical, system.type AS type, COUNT(*) AS assigned_connections
        RETURN DISTINCT 
            system.id AS system_id,
            critical,
            type,
            assigned_connections  // Count only :assigned_for relationships
        """

        # Run the Neo4j query
        result = sess.run(query, product=product, min_version=min_version, max_version=max_version)

        records = []
        for record in result:
            critical = record["critical"]
            type = record["type"]
            assigned_connections = record["assigned_connections"]

            # Assign weight based on type
            type_weight = 1.0 if type == "Server" else 0.5  # "Other" or "Client"

            # Define weights for different factors
            alpha = 0.4  # Weight for critical
            beta = 0.3   # Weight for type
            gamma = 0.3  # Weight for assigned connections

            # Normalize the connectivity score (scale if necessary)
            connectivity_score = assigned_connections / 54.0  # Assuming 54 is the max number of assigned connections

            # Calculate the weighted score
            score = (alpha * critical + beta * type_weight + gamma * connectivity_score)

            # Add the record to the list
            records.append({
                "System ID": record["system_id"],
                "critical": critical,
                "type": type,
                "assigned_connections": assigned_connections,
                "score": score
            })

        # If no records are found, return a message
        if not records:
            return jsonify({"message": "No affected systems found."}), 404

        # Sort records by score in descending order
        records = sorted(records, key=lambda x: x["score"], reverse=True)

        # Return the records as a JSON response
        return jsonify(records)

    except Exception as e:
        # Handle errors and return a detailed error message
        error_message = {"error": str(e)}
        return jsonify(error_message), 500

    finally:
        # Ensure the session is closed
        if 'sess' in locals():
            sess.close()


@app.route('/api/affectedSoftware', methods=['GET'])
def affected_software():
    # Extract query parameters from the URL
    product = request.args.get('product', '')  # Default to an empty string if not provided
    min_version = request.args.get('min_version', '')  # Default to an empty string if not provided
    max_version = request.args.get('max_version', '')  # Default to an empty string if not provided

    # Neo4j query with parameters
    query = """
    MATCH (n:SoftwareInstallation)
    WHERE 
        (n.product CONTAINS $product AND n.version >= $min_version AND n.version <= $max_version)
    RETURN n
    """

    # Check that required query parameters are provided
    if not product or not min_version or not max_version:
        return jsonify({"error": "Missing required query parameters: product, min_version, and max_version"}), 400

    # Create Neo4j session
    session = create_session(URI, AUTH, DATABASE)
    
    # Execute the query and pass parameters
    result = session.run(query, product=product, min_version=min_version, max_version=max_version)

    records = []
    for record in result:
        node = record["n"]
        node_dict = dict(node.items())  # Convert the Node to a dictionary
        records.append(node_dict)

    # Convert the list of records to JSON format
    json_data = json.dumps(records, indent=4)
    
    # Optional: Print the JSON data for debugging
    print(json_data)

     # Serialize Neo4j nodes into JSON-serializable dictionaries
    #serialized_result = [serialize_node(record["n"]) for record in result]

    session.close()
    # Return the result as a JSON response
    return json_data

#############################################################################################################################
@app.route('/api/contact', methods=['GET'])
def find_responsible_person():
    # Extract query parameters from the URL
    product = request.args.get('product', '')  # Default to an empty string if not provided
    min_version = request.args.get('min_version', '')  # Default to an empty string if not provided
    max_version = request.args.get('max_version', '')  # Default to an empty string if not provided
    sess = None  # Initialize sess to None to ensure it's always defined
    print(f"Product: {product}, Min Version: {min_version}, Max Version: {max_version}")


    try:
        query = """
        MATCH (n:SoftwareInstallation)
        WHERE 
            (n.product CONTAINS $product AND n.version >= $min_version AND n.version <= $max_version)
        MATCH (n)-[:related_software]-(system:System)
        MATCH (system)-[:runs_on]-(app:Application)
        MATCH (app)-[:owned_by]-(org:OrgUnit)
        MATCH (org)-[:head_of]-(person:Person)
        RETURN DISTINCT system, person, org, app
        """

        # Check that required query parameters are provided
        if not product or not min_version or not max_version:
            return jsonify({"error": "Missing required query parameters: product, min_version, and max_version"}), 400

        # Create Neo4j session
        sess = create_session(URI, AUTH, DATABASE)
        result = sess.run(query, product=product, min_version=min_version, max_version=max_version)

        records = [{"system": record["system"], "person": record.get("person", None), 
                    "application": record.get("app", None), "org_unit": record.get("org", None)} 
                    for record in result]

        responsible_data = []
        for record in records:
            system_id = record["system"].id if record["system"] else None
            person_name = record["person"].get("fullname") if record["person"] else "No responsible person"
            app_name = record["application"].get("name") if record["application"] else "No application"
            org_name = record["org_unit"].get("orgCode") if record["org_unit"] else "No org unit"
            
            responsible_data.append({
                "System ID": system_id,
                "Application": app_name,
                "Responsible Person": person_name
            })

        # Output the result as JSON
        return json.dumps(responsible_data, indent=4)

    except Exception as e:
        return json.dumps({"error": str(e)}, indent=4)

    finally:
        # Ensure that sess is only closed if it was successfully created
        if sess:
            sess.close()


@app.route('/api/affectedSystem', methods=['GET'])
def affected_system():
    # Extract query parameters from the URL
    product = request.args.get('product', '')  # Default to an empty string if not provided
    min_version = request.args.get('min_version', '')  # Default to an empty string if not provided
    max_version = request.args.get('max_version', '')  # Default to an empty string if not provided

    # Neo4j query with parameters
    query = """
    MATCH (n:SoftwareInstallation)
    WHERE 
        (n.product CONTAINS $product AND n.version >= $min_version AND n.version <= $max_version)
    MATCH (n)-[:related_software]-(system:System)
    RETURN DISTINCT system
    """

    # Check that required query parameters are provided
    if not product or not min_version or not max_version:
        return jsonify({"error": "Missing required query parameters: product, min_version, and max_version"}), 400

    # Create Neo4j session
    session = create_session(URI, AUTH, DATABASE)
    
    # Execute the query and pass parameters
    result = session.run(query, product=product, min_version=min_version, max_version=max_version)

    records = []
    for record in result:
        node = record["system"]
        node_dict = dict(node.items())  # Convert the Node to a dictionary
        records.append(node_dict)

    # Convert the list of records to JSON format
    json_data = json.dumps(records, indent=4)
    
    # Optional: Print the JSON data for debugging
    print(json_data)

     # Serialize Neo4j nodes into JSON-serializable dictionaries
    #serialized_result = [serialize_node(record["n"]) for record in result]

    session.close()
    # Return the result as a JSON response
    return json_data


@app.route('/<path:invalid>')
def page_not_found(*args, **kwargs):

    response = app.response_class(
        response=json.dumps(
            {
                'error': 'not found'
            }
        ),
        status=404,
        mimetype='application/json'
    )

    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081, debug=True)
