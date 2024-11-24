<template>
  <div class="container mt-4 custom">
    <div class="card mb-3 customCard">
          <div class="card-body">
            <h5 class="card-title">Current Incidents</h5>
            <table class="table">
              <thead>
                <tr>
                  <th>Incident ID</th>
                  <th>Published</th>
                  <th >Severity</th>
                  <th>CVSS Score</th>
                  <th>Detect/Assess</th>

                </tr>
              </thead>
              <tbody>
                <tr  v-for="incident in incidentData"
                  :key="incident.id"
                >
                  <td>{{ incident.id}}</td>
                  <td>{{ formatPublishedDate(incident.published_date) }}</td>
                  <td :style="getCriticalStyle(incident.severity)">{{ incident.severity }}</td>
                  <td>{{ incident.cvss_score }}</td>
                  <td><div class="btn-group" role="group" aria-label="Basic example">
                      <button  type="button" class="btn btn-secondary" @click="viewIncidentDetails(incident)" >Detect</button>
                      <button type="button" class="btn btn-secondary" @click="viewAssesDetails(incident)" >Assess</button>
                    </div>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Incident',

  methods: {
  },
  created() {
    // Example API call to fetch the public IP address
    this.$http.get('/api/myip').then(function(response) {
      this.msg = response.data.myip;
    });
  },
  data() {
    return {
      incidents: null,

      incidentData: [

      {
        "id": "CVE-1900-8033",
        "description": "This vulnerability allows an attacker to execute arbitrary code on the host system by exploiting a flaw in the handling of API requests.",
        "published_date": "November 22, 2024; 10:00:00 pm -0500",
        "cvss_score": 9.8,
        "severity": "CRITICAL",
        "min_version": "23.0",
        "max_version": "26.1.3",
        "product": "Docker"
      },

      {
        "id": "CVE-1900-2453",
        "description": "This vulnerability allows an attacker to execute arbitrary code on the host system by exploiting a flaw in the handling of API requests.",
        "published_date": "November 23, 2024; 10:00:00 pm -0500",
        "cvss_score": 8.3,
        "severity": "CRITICAL",
        "min_version": "2003",
        "max_version": "2016",
        "product": "Office"
      },

      {
        "id": "CVE-2024-10965",
        "description": "A vulnerability classified as problematic was found in emqx neuron up to 2.10.0. Affected by this vulnerability is an unknown functionality of the file /api/v2/schema of the component JSON File Handler. The manipulation leads to information disclosure.",
        "published_date": "November 07, 2024; 12:15:06 pm -0500",
        "cvss_score": 6.5,
        "severity": "MEDIUM",
        "min_version": "2.0.0",
        "max_version": "2.10.0",
        "product": "emqx neuron"
      },
      {
        "id": "CVE-2024-11026",
        "description": "A vulnerability was found in Intelligent Apps Freenow App 12.10.0 on Android. Affected by this issue is some unknown functionality of the file ch/qos/logback/core/net/ssl/SSL.java of the component Keystore Handler.",
        "published_date": "November 08, 2024; 5:15:14 pm -0500",
        "cvss_score": 7.4,
        "severity": "HIGH",
        "min_version": "12.0.0",
        "max_version": "12.10.0",
        "product": "Intelligent Apps Freenow App"
      },
      {
        "id": "CVE-2024-11049",
        "description": "A vulnerability classified as problematic has been found in ZKTeco ZKBio Time 9.0.1. Affected is an unknown function of the file /auth_files/photo/ of the component Image File Handler. The manipulation leads to direct request.",
        "published_date": "November 10, 2024; 1:15:03 am -0500",
        "cvss_score": 3.7,
        "severity": "LOW",
        "min_version": "9.0.0",
        "max_version": "9.0.1",
        "product": "ZKTeco ZKBio Time"
      },
      {
        "id": "CVE-2024-11050",
        "description": "A vulnerability was found in AMTT Hotel Broadband Operation System up to 3.0.3.151204 and classified as problematic. This issue affects some unknown processing of the file /language.php.",
        "published_date": "November 10, 2024; 2:15:03 am -0500",
        "cvss_score": 5.4,
        "severity": "MEDIUM",
        "min_version": "3.0.0",
        "max_version": "3.0.3.151204",
        "product": "AMTT Hotel Broadband Operation System"
      },
      {
        "id": "CVE-2024-11070",
        "description": "A vulnerability, which was classified as problematic, has been found in Sanluan PublicCMS 5.202406.d. This issue affects some unknown processing of the file /admin/cmsTagType/save of the component Tag Type Handler.",
        "published_date": "November 11, 2024; 10:15:04 am -0500",
        "cvss_score": 5.4,
        "severity": "MEDIUM",
        "min_version": "5.202400.d",
        "max_version": "5.202406.d",
        "product": "Sanluan PublicCMS"
      },
      {
        "id": "CVE-2024-11078",
        "description": "A vulnerability has been found in code-projects Job Recruitment 1.0 and classified as problematic. Affected by this vulnerability is an unknown functionality of the file /register.php.",
        "published_date": "November 11, 2024; 3:15:17 pm -0500",
        "cvss_score": 5.4,
        "severity": "MEDIUM",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "code-projects Job Recruitment"
      },
      {
        "id": "CVE-2024-11096",
        "description": "A vulnerability, which was classified as critical, was found in code-projects Task Manager 1.0. This affects an unknown part of the file /newProject.php. The manipulation of the argument projectName leads to SQL injection.",
        "published_date": "November 11, 2024; 8:15:03 pm -0500",
        "cvss_score": 6.5,
        "severity": "MEDIUM",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "code-projects Task Manager"
      },
      {
        "id": "CVE-2024-11485",
        "description": "A vulnerability, which was classified as critical, has been found in Code4Berry Decoration Management System 1.0. Affected by this issue is some unknown functionality of the file /decoration/admin/userregister.php of the component User Handler.",
        "published_date": "November 20, 2024; 11:15:19 am -0500",
        "cvss_score": 8.1,
        "severity": "HIGH",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "Code4Berry Decoration Management System"
      },
      {
        "id": "CVE-2024-11484",
        "description": "A vulnerability classified as critical was found in Code4Berry Decoration Management System 1.0. Affected by this vulnerability is an unknown functionality of the file /decoration/admin/update_image.php of the component User Image Handler.",
        "published_date": "November 20, 2024; 11:15:19 am -0500",
        "cvss_score": 8.8,
        "severity": "HIGH",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "Code4Berry Decoration Management System"
      },
      {
        "id": "CVE-2024-51208",
        "description": "File Upload vulnerability in change-image.php in Anuj Kumar's Boat Booking System version 1.0 allows local attackers to upload a malicious PHP script via the Image Upload Mechanism parameter.",
        "published_date": "November 20, 2024; 10:15:08 am -0500",
        "cvss_score": 7.2,
        "severity": "HIGH",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "Anuj Kumar's Boat Booking System"
      },
      {
        "id": "CVE-2024-10872",
        "description": "The Getwid – Gutenberg Blocks plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the template-post-custom-field block in all versions up to, and including, 2.0.12 due to insufficient input sanitization and output escaping.",
        "published_date": "November 20, 2024; 6:15:04 am -0500",
        "cvss_score": 5.4,
        "severity": "MEDIUM",
        "min_version": "2.0.0",
        "max_version": "2.0.12",
        "product": "Getwid – Gutenberg Blocks plugin"
      },
      {
        "id": "CVE-2018-9412",
        "description": "In removeUnsynchronization of ID3.cpp there is a possible resource exhaustion due to improper input validation. This could lead to denial of service with no additional execution privileges needed.",
        "published_date": "November 19, 2024; 5:15:18 pm -0500",
        "cvss_score": 5.5,
        "severity": "MEDIUM",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "ID3.cpp"
      },
      {
        "id": "CVE-2024-6687",
        "description": "The CTT Expresso para WooCommerce plugin for WordPress is vulnerable to sensitive information exposure in all versions up to and including 3.2.12 via the /wp-content/uploads/cepw directory.",
        "published_date": "July 31, 2024; 10:15:02 pm -0400",
        "cvss_score": 7.5,
        "severity": "HIGH",
        "min_version": "3.2.0",
        "max_version": "3.2.12",
        "product": "CTT Expresso para WooCommerce"
      },
      {
        "id": "CVE-2024-6698",
        "description": "The FundEngine plugin for WordPress is vulnerable to privilege escalation in all versions up to, and including, 1.7.0.",
        "published_date": "August 01, 2024; 12:15:04 am -0400",
        "cvss_score": 7.5,
        "severity": "HIGH",
        "min_version": "1.0.0",
        "max_version": "1.7.0",
        "product": "FundEngine plugin"
      },
      {
        "id": "CVE-2024-5924",
        "description": "Dropbox Desktop Folder Sharing Mark-of-the-Web Bypass Vulnerability. This vulnerability allows remote attackers to bypass the Mark-of-the-Web protection mechanism.",
        "published_date": "June 13, 2024; 4:15:16 pm -0400",
        "cvss_score": 8.8,
        "severity": "HIGH",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "Dropbox Desktop"
      }
    ]
  }
  },
  methods: {
    // Method to fetch incident data from the API
    fetchIncidents() {
      // Make a GET request to fetch incident data
      this.$http.get('/api/cve').then(response => {
        // Update the incidents data with the response
        this.incidents = response.data;
        console.log('Fetched incidents:', this.incidents);
      }).catch(error => {
        console.error('Error fetching incidents:', error);
      });
    },
    getCriticalStyle: function(critical) {
        if (critical == "CRITICAL" || critical == "HIGH") {
          return {
            backgroundColor: 'rgba(255, 0, 0, 0.5)'
          };
        } else if (critical == "MEDIUM") {
          return {
            backgroundColor: 'rgba(255, 255, 0, 0.5)'
          };
        } else {
          return {

          };
        }
      },
    formatPublishedDate(dateTime) {
    // Use a regular expression to remove the timezone offset
    return dateTime.replace(/^(.*?);(.*?)-\d{4}$/, "$1;$2").trim();
    },
    // Method for clicking and routing to the incident details page with specific paramters
    viewIncidentDetails(incident) {
      console.log('Viewing incident details:', incident);
      // Navigate to the incident details page with the incident ID as a parameter
      this.$router.push({ name: 'risk', params: { id: incident.id, publish: incident.published_date, ser: incident.severity, cvss: incident.cvss_score, min_version: incident.min_version, max_version: incident.max_version, product: incident.product } });
    },

    viewAssesDetails(incident) {
      console.log('Viewing incident details:', incident);
      // Navigate to the incident details page with the incident ID as a parameter
      this.$router.push({ name: 'assesment', params: { id: incident.id, publish: incident.published_date, ser: incident.severity, cvss: incident.cvss_score, min_version: incident.min_version, max_version: incident.max_version, product: incident.product } });
    }


  },
  mounted() {

  }


};
</script>

<style scoped>
/* Scoped styling for the component */
h1 {
  font-weight: normal;
  color: #007bff; /* Blue color for headings */
  margin-bottom: 20px;
}

.table {
  width: 100%;
  margin-top: 20px;
}

h5 {
  color: white;
}

.table-striped tbody tr:nth-child(odd) {
  background-color: #f9f9f9; /* Light gray row for odd rows */
}

.table th, .table td {
  vertical-align: middle; /* Center align content vertically */
  padding: 15px;
}

.table-bordered {
  border: 1px solid #ddd; /* Light border around the table */
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

  div.card-body {
    overflow: auto;
    max-height: 700px;
    background-color: transparent;
  }

  div.custom {
    background-color: #010127 ;
    border: solid #009999 ;
  }

  tr:hover {
    background-color: rgba(0, 153, 153, 0.7);
    cursor: pointer;
  }

  th {
    color: white;
    background-color: transparent;
  }

  td {
    color: white;
    background-color: transparent;
  }
  /* Table styling adjustments */
  .table-container .table {
    margin-bottom: 0; /* Remove bottom margin for proper alignment */
    width: 100%; /* Ensure the table fits within the container */
  }

  div.custom {
    background-color: #010127 ;
    border: solid #009999 ;
  }

  div.customCard {
    background-color: #010127 ;

  }
</style>
