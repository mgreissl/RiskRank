        <template>
          <div class="container mt-4">
            <!-- Row 1: Kacheln -->
            <div class="row">
              <div class="col-md-4">
                <div class="card text-white mb-3">
                  <div class="card-body custom">
                    <h5 class="card-title">Incident</h5>
                    <p class="card-text">Choose your Incident</p>

                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card text-white mb-3">
                  <div class="card-body custom">
                    <h5 class="card-title">Detected Software Products</h5>
                    <p class="card-text">{{affectedSoftwareCount}}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card text-white mb-3">
                  <div class="card-body custom">
                    <h5 class="card-title">Affected System</h5>
                    <p class="card-text">{{ affectedSystemCount }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 2: Grafik Bereich 1 -->
            <div class="row">
              <div class="col-md-12">
                <div class="card mb-3 customCard">
                  <div class="card-body">
                    <h5 class="card-title">Detected Software</h5>
                    <div class="chart-container" style="height: 300px;">
                      <!-- Platz für Grafik 1 -->
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Edition</th>
                            <th scope="col">Publisher</th>
                            <th scope="col">Version</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(software, index) in affectedSoftware" :key="software.id">
                            <td>{{ software.product }}</td>
                            <td>{{ software.edition }}</td>
                            <td>{{ software.publisher }}</td>
                            <td>{{ software.version }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 3: Grafik Bereich 2 -->
            <div class="row">
              <div class="col-md-12">
                <div class="card mb-3 customCard">
                  <div class="card-body">
                    <h5 class="card-title">Affected Systems</h5>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">SystemID</th>
                          <th scope="col">State</th>
                          <th scope="col">Type</th>
                          <th scope="col">Sub Type</th>
                          <th scope="col">Critical</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(system, index) in affectedSystem" :key="system.id">
                          <td>{{ system.id}}</td>
                          <td>{{ system.state}}</td>
                          <td>{{ system.type}}</td>
                          <td>{{ system['sub_type'] }}</td>
                          <td :style="getCriticalStyle(system.critical)">
                            {{ system.critical === 1 ? 'Yes' : 'No' }}
                          </td>

                        </tr>
                      </tbody>
                    </table>



                  </div>
                </div>
              </div>
            </div>
          </div>

        </template>

  <script>
  export default {
    name: 'Risk',

    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        affectedSoftware: null,
        affectedSoftwareCount: 0,
        affectedSystem: null,
        affectedSystemCount: 0,
        isModalOpen: true, // Controls modal visibility

      }
    },
    methods: {
        // Computed property to determine the criticality style
        getCriticalStyle: function(critical) {
        if (critical == 1) {
          return {
            backgroundColor: 'rgba(255, 0, 0, 0.5)'
          };
        } else {
          return {

          };
        }

      },

      getAffectedSoftware: function(product, min_version, max_version) {
        // Construct the query parameters
        const params = new URLSearchParams({
          product: product,
          min_version: min_version,
          max_version: max_version
        }).toString();

        // Make the GET request with query parameters
        this.$http.get(`/api/affectedSoftware?${params}`)
          .then(function(response) {
            // Handle the response
            this.affectedSoftware = response.data;
            console.log("Affected systems:", this.affectedSoftware);
            this.affectedSoftwareCount = this.affectedSoftware.length;
          })
          .catch(function(error) {
            // Handle errors
            console.error("Error fetching affected systems:", error);
          });
      },

      getAffectedSystems: function(product, min_version, max_version) {
        // Construct the query parameters
        const params = new URLSearchParams({
          product: product,
          min_version: min_version,
          max_version: max_version
        }).toString();

        // Make the GET request with query parameters
        this.$http.get(`/api/affectedSystem?${params}`)
          .then(function(response) {
            // Handle the response
            this.affectedSystem = response.data;
            console.log("Affected systems:", this.affectedSystem);
            this.affectedSystemCount = this.affectedSystem.length;
          })
          .catch(function(error) {
            // Handle errors
            console.error("Error fetching affected systems:", error);
          });
      },
        openModal() {
        this.isModalOpen = true;
        console.log("Modal opened");
          },
        closeModal() {
          this.isModalOpen = false;
        },
        handleAction() {
          alert("Action confirmed!");
          this.closeModal();
        },



    },
    created: function(){
        this.$http.get('/api/myip').then(function(response) {
          this.msg = response.data.myip
        })


    },

    watch: {
    '$route': function(to, from) {
      // Check if params are available after route change
      console.log('New Route Params:', to.params);
      console.log('New Query Params:', to.query);
    },
  },




    mounted: function() {
      // Fetch the affected software products
      // Accessing parameters passed through the route
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
        this.getAffectedSoftware(product, minVersion, maxVersion);
        this.getAffectedSystems(product, minVersion, maxVersion);
      } else {
        this.getAffectedSoftware('Docker', '23.0', '26.1.3');
        this.getAffectedSystems('Docker', '23.0', '26.1.3');
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
  /* Custom table styles */
.custom-table {
  background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
  color: white; /* White font */
  border-collapse: collapse; /* For clean borders */
}

div.customCard {
  background-color: transparent;
  border: solid white ;
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

  div.card-body {
    overflow: auto;
    max-height: 500px;
    background-color: transparent;
  }

  div.custom {
    background-color: #010127 ;
    border: solid #009999 ;
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
