<template>
    <div class="container mt-4">
    <!-- Row 1: Kacheln -->
    <div class="row">
      <div class="col-md-4">
        <div class="card text-white mb-3">
          <div class="card-body customCard">
            <h5 class="card-title">Incident</h5>
            <p class="card-text">{{ routeParams.id }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white  mb-3">
          <div class="card-body customCard ">
            <h5 class="card-title">CVSS</h5>
            <p class="card-text">{{ routeParams.cvss }}/10</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card text-white mb-3">
          <div class="card-body customCard ">
            <h5 class="card-title">Most Severe Risk</h5>
            <p class="card-text">{{weightedRisk[0]['System ID']}}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Row 2: Grafik Bereich 1 -->
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="card-body custom">
            <h5 class="card-title">System Risk Rank</h5>
            <div class="chart-container" style="height: 300px;">
              <!-- Platz für Grafik 1 -->
              <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">System ID</th>
                            <th scope="col">Type</th>
                            <th scope="col">Critical</th>
                            <th scope="col">Weighted Risk</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(weight) in weightedRisk" :key="weight.id">
                            <td>{{ weight['System ID'] }}</td>
                            <td>{{ weight.type }}</td>
                            <td>{{ weight.critical }}</td>
                            <td>{{ Math.round(weight.score * 100) / 100 }}</td>
                          </tr>
                        </tbody>
                      </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="card-body custom">
            <h5 class="card-title">Contact Information</h5>
            <div class="chart-container" style="height: 300px;">
              <!-- Platz für Grafik 1 -->
              <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Application</th>
                            <th scope="col">System ID</th>
                            <th scope="col">Responsible Person</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(contact) in contactInformation" :key="contact.id">
                            <td>{{ contact.Application }}</td>
                            <td>{{ contact['System ID'] }}</td>
                            <td>{{ contact['Responsible Person']}}</td>
                          </tr>
                        </tbody>
                      </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

  <script>
  export default {
    name: 'RiskAssessment',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        weightedRisk: null, // The weighted risk data
        contactInformation: null,
        EPPS: null,
        weightedRisk: null,
        Incident: null
      }
    },
    methods: {
        getWeightedAverage: function(product, min_version, max_version) {
        // Construct the query parameters
        const params = new URLSearchParams({
          product: product,
          min_version: min_version,
          max_version: max_version
        }).toString();

        // Make the GET request with query parameters
        this.$http.get(`/api/weightedRisk?${params}`)
          .then(function(response) {
            // Handle the response
            this.weightedRisk= response.data;
            console.log("Affected systems:", this.weightedRisk);

          })
          .catch(function(error) {
            // Handle errors
            console.error("Error fetching affected systems:", error);
          });
      },

      fetchContactInformation: function(product, min_version, max_version) {
        const params = new URLSearchParams({
          product: product,
          min_version: min_version,
          max_version: max_version
        }).toString();
        // Make the GET request
         // Make the GET request with query parameters
         this.$http.get(`/api/contact?${params}`)
          .then(function(response) {
            // Handle the response
            this.contactInformation= response.data;
            console.log("Contacts", response.data);

          })
          .catch(function(error) {
            // Handle errors
            console.error("Error fetching affected systems:", error);
          });
      }

    },

    computed: {
        routeParams() {
            return this.$route.params;
        }
      },


    mounted() {

        const incidentId = this.$route.params.id;
        const publishDate = this.$route.params.publish;
        const severity = this.$route.params.ser;
        const cvssScore = this.$route.params.cvss;
        const minVersion = this.$route.params.min_version;
        const maxVersion = this.$route.params.max_version;
        const product = this.$route.params.product;
        console.log("Incident ID:", incidentId);
        console.log('product:', product);
        console.log('minVersion:', minVersion);
        console.log('maxVersion:', maxVersion);

        if(product != undefined && minVersion != undefined && maxVersion != undefined) {
            this.getWeightedAverage(product, minVersion, maxVersion);
            this.fetchContactInformation(product, minVersion, maxVersion);


      } else {
        // Fetch incidents data when the component is mounted
        this.getWeightedAverage('Docker', '23.0', '26.1.3');
        this.fetchContactInformation('Docker', '23.0', '26.1.3');
      }

    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  div.custom {
    max-height: 500px;
    overflow-y: auto;
  }


div.custom {
  background-color: #010127 ;
  border: solid white ;
}

h5.card-title {
  color: white;
}

.custom-table thead th {
  color: white; /* White font for header */
  border-bottom: 2px solid rgba(255, 255, 255, 0.3); /* Light border for header */
}

.custom-table tbody tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Subtle row separator */
}

.custom-table tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Slight highlight on hover */
}




  .table-container {
    max-height: 400px; /* Adjust max height as needed */
    overflow-y: auto; /* Vertical scrolling */
    border: 1px solid #ddd; /* Optional: Add a border around the table container */
  }

  /* Optional: Make the table headers sticky for better usability */
  .table thead th {
    position: sticky;
    top: 0; /* Sticks to the top of the container when scrolling */
    background-color: transparent; /* Matches Bootstrap table header background */
    z-index: 1;
  }

  div.customCard {
    background-color: #42b983;
  }

  div.custom {
    background-color: #010127 ;
    border: solid #009999 ;
  }

  div.customCard {
    background-color: #010127;
    color: white;
  }

  .table thead th {
    position: sticky;
    top: 0; /* Sticks to the top of the container when scrolling */
    background-color: transparent; /* Matches Bootstrap table header background */
    z-index: 1;
    color: white;
  }

  td {
    color: white;
    background-color: #010127;
  }

  .blink {
       /* color: orange; */
      -webkit-animation-name: blinker;
      -webkit-animation-duration: 1s;
      -webkit-animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;

      -moz-animation-name: blinker;
      -moz-animation-duration: 1s;
      -moz-animation-timing-function: linear;
      -moz-animation-iteration-count: infinite;

      animation-name: blinker;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
  }

  @-moz-keyframes blinker {
      0% { opacity: 1.0; }
      50% { opacity: 0.0; }
      100% { opacity: 1.0; }
  }

  @-webkit-keyframes blinker {
      0% { opacity: 1.0; }
      50% { opacity: 0.0; }
      100% { opacity: 1.0; }
  }

  @keyframes blinker {
      0% { opacity: 1.0; }
      50% { opacity: 0.0; }
      100% { opacity: 1.0; }
  }
  </style>
