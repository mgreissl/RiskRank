webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Hello__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Incident__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Incident___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Incident__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Risk__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Risk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Risk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_RiskAssesment__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_RiskAssesment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_RiskAssesment__);



// Import components for each route

 // New component for About page
 // New component for Contact page
 // New component for Contact page

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  base: '/http://localhost:8080/',
  routes: [{
    path: '/',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Hello___default.a
  }, {
    path: '/incident',
    name: 'incident',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Incident___default.a // This will render the About component
  }, {
    path: '/risk',
    name: 'risk',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Risk___default.a,
    props: route => ({
      id: route.params.id,
      publish: route.params.publish,
      ser: route.params.ser,
      cvss: route.params.cvss,
      max_version: route.params.max_version,
      min_version: route.params.min_version,
      product: route.params.product

    }) // This will render the Contact component
  }, {
    path: '/assesment',
    name: 'assesment',
    component: __WEBPACK_IMPORTED_MODULE_5__components_RiskAssesment___default.a,
    props: route => ({
      id: route.params.id,
      publish: route.params.publish,
      ser: route.params.ser,
      cvss: route.params.cvss,
      max_version: route.params.max_version,
      min_version: route.params.min_version,
      product: route.params.product

    }) // This will render the Contact component  // This will render the Contact component
  }]
}));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(16)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(28),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Welcome to RiskRank!',
  data() {
    return {
      msg: 'Loading your IP address...'
    };
  },
  created() {
    // Fetch public IP address from the API
    this.$http.get('/api/myip').then(response => {
      this.msg = response.data.myip;
    }).catch(error => {
      this.msg = 'Failed to fetch IP address';
    });
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Incident',

  methods: {},
  created() {
    // Example API call to fetch the public IP address
    this.$http.get('/api/myip').then(function (response) {
      this.msg = response.data.myip;
    });
  },
  data() {
    return {
      incidents: null,

      incidentData: [{
        "id": "CVE-1900-8033",
        "description": "This vulnerability allows an attacker to execute arbitrary code on the host system by exploiting a flaw in the handling of API requests.",
        "published_date": "November 22, 2024; 10:00:00 pm -0500",
        "cvss_score": 9.8,
        "severity": "CRITICAL",
        "min_version": "23.0",
        "max_version": "26.1.3",
        "product": "Docker"
      }, {
        "id": "CVE-1900-2453",
        "description": "This vulnerability allows an attacker to execute arbitrary code on the host system by exploiting a flaw in the handling of API requests.",
        "published_date": "November 23, 2024; 10:00:00 pm -0500",
        "cvss_score": 8.3,
        "severity": "CRITICAL",
        "min_version": "2003",
        "max_version": "2016",
        "product": "Office"
      }, {
        "id": "CVE-2024-10965",
        "description": "A vulnerability classified as problematic was found in emqx neuron up to 2.10.0. Affected by this vulnerability is an unknown functionality of the file /api/v2/schema of the component JSON File Handler. The manipulation leads to information disclosure.",
        "published_date": "November 07, 2024; 12:15:06 pm -0500",
        "cvss_score": 6.5,
        "severity": "MEDIUM",
        "min_version": "2.0.0",
        "max_version": "2.10.0",
        "product": "emqx neuron"
      }, {
        "id": "CVE-2024-11026",
        "description": "A vulnerability was found in Intelligent Apps Freenow App 12.10.0 on Android. Affected by this issue is some unknown functionality of the file ch/qos/logback/core/net/ssl/SSL.java of the component Keystore Handler.",
        "published_date": "November 08, 2024; 5:15:14 pm -0500",
        "cvss_score": 7.4,
        "severity": "HIGH",
        "min_version": "12.0.0",
        "max_version": "12.10.0",
        "product": "Intelligent Apps Freenow App"
      }, {
        "id": "CVE-2024-11049",
        "description": "A vulnerability classified as problematic has been found in ZKTeco ZKBio Time 9.0.1. Affected is an unknown function of the file /auth_files/photo/ of the component Image File Handler. The manipulation leads to direct request.",
        "published_date": "November 10, 2024; 1:15:03 am -0500",
        "cvss_score": 3.7,
        "severity": "LOW",
        "min_version": "9.0.0",
        "max_version": "9.0.1",
        "product": "ZKTeco ZKBio Time"
      }, {
        "id": "CVE-2024-11050",
        "description": "A vulnerability was found in AMTT Hotel Broadband Operation System up to 3.0.3.151204 and classified as problematic. This issue affects some unknown processing of the file /language.php.",
        "published_date": "November 10, 2024; 2:15:03 am -0500",
        "cvss_score": 5.4,
        "severity": "MEDIUM",
        "min_version": "3.0.0",
        "max_version": "3.0.3.151204",
        "product": "AMTT Hotel Broadband Operation System"
      }, {
        "id": "CVE-2024-11070",
        "description": "A vulnerability, which was classified as problematic, has been found in Sanluan PublicCMS 5.202406.d. This issue affects some unknown processing of the file /admin/cmsTagType/save of the component Tag Type Handler.",
        "published_date": "November 11, 2024; 10:15:04 am -0500",
        "cvss_score": 5.4,
        "severity": "MEDIUM",
        "min_version": "5.202400.d",
        "max_version": "5.202406.d",
        "product": "Sanluan PublicCMS"
      }, {
        "id": "CVE-2024-11078",
        "description": "A vulnerability has been found in code-projects Job Recruitment 1.0 and classified as problematic. Affected by this vulnerability is an unknown functionality of the file /register.php.",
        "published_date": "November 11, 2024; 3:15:17 pm -0500",
        "cvss_score": 5.4,
        "severity": "MEDIUM",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "code-projects Job Recruitment"
      }, {
        "id": "CVE-2024-11096",
        "description": "A vulnerability, which was classified as critical, was found in code-projects Task Manager 1.0. This affects an unknown part of the file /newProject.php. The manipulation of the argument projectName leads to SQL injection.",
        "published_date": "November 11, 2024; 8:15:03 pm -0500",
        "cvss_score": 6.5,
        "severity": "MEDIUM",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "code-projects Task Manager"
      }, {
        "id": "CVE-2024-11485",
        "description": "A vulnerability, which was classified as critical, has been found in Code4Berry Decoration Management System 1.0. Affected by this issue is some unknown functionality of the file /decoration/admin/userregister.php of the component User Handler.",
        "published_date": "November 20, 2024; 11:15:19 am -0500",
        "cvss_score": 8.1,
        "severity": "HIGH",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "Code4Berry Decoration Management System"
      }, {
        "id": "CVE-2024-11484",
        "description": "A vulnerability classified as critical was found in Code4Berry Decoration Management System 1.0. Affected by this vulnerability is an unknown functionality of the file /decoration/admin/update_image.php of the component User Image Handler.",
        "published_date": "November 20, 2024; 11:15:19 am -0500",
        "cvss_score": 8.8,
        "severity": "HIGH",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "Code4Berry Decoration Management System"
      }, {
        "id": "CVE-2024-51208",
        "description": "File Upload vulnerability in change-image.php in Anuj Kumar's Boat Booking System version 1.0 allows local attackers to upload a malicious PHP script via the Image Upload Mechanism parameter.",
        "published_date": "November 20, 2024; 10:15:08 am -0500",
        "cvss_score": 7.2,
        "severity": "HIGH",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "Anuj Kumar's Boat Booking System"
      }, {
        "id": "CVE-2024-10872",
        "description": "The Getwid – Gutenberg Blocks plugin for WordPress is vulnerable to Stored Cross-Site Scripting via the template-post-custom-field block in all versions up to, and including, 2.0.12 due to insufficient input sanitization and output escaping.",
        "published_date": "November 20, 2024; 6:15:04 am -0500",
        "cvss_score": 5.4,
        "severity": "MEDIUM",
        "min_version": "2.0.0",
        "max_version": "2.0.12",
        "product": "Getwid – Gutenberg Blocks plugin"
      }, {
        "id": "CVE-2018-9412",
        "description": "In removeUnsynchronization of ID3.cpp there is a possible resource exhaustion due to improper input validation. This could lead to denial of service with no additional execution privileges needed.",
        "published_date": "November 19, 2024; 5:15:18 pm -0500",
        "cvss_score": 5.5,
        "severity": "MEDIUM",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "ID3.cpp"
      }, {
        "id": "CVE-2024-6687",
        "description": "The CTT Expresso para WooCommerce plugin for WordPress is vulnerable to sensitive information exposure in all versions up to and including 3.2.12 via the /wp-content/uploads/cepw directory.",
        "published_date": "July 31, 2024; 10:15:02 pm -0400",
        "cvss_score": 7.5,
        "severity": "HIGH",
        "min_version": "3.2.0",
        "max_version": "3.2.12",
        "product": "CTT Expresso para WooCommerce"
      }, {
        "id": "CVE-2024-6698",
        "description": "The FundEngine plugin for WordPress is vulnerable to privilege escalation in all versions up to, and including, 1.7.0.",
        "published_date": "August 01, 2024; 12:15:04 am -0400",
        "cvss_score": 7.5,
        "severity": "HIGH",
        "min_version": "1.0.0",
        "max_version": "1.7.0",
        "product": "FundEngine plugin"
      }, {
        "id": "CVE-2024-5924",
        "description": "Dropbox Desktop Folder Sharing Mark-of-the-Web Bypass Vulnerability. This vulnerability allows remote attackers to bypass the Mark-of-the-Web protection mechanism.",
        "published_date": "June 13, 2024; 4:15:16 pm -0400",
        "cvss_score": 8.8,
        "severity": "HIGH",
        "min_version": "1.0.0",
        "max_version": "1.0.0",
        "product": "Dropbox Desktop"
      }]
    };
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
    getCriticalStyle: function (critical) {
      if (critical == "CRITICAL" || critical == "HIGH") {
        return {
          backgroundColor: 'rgba(255, 0, 0, 0.5)'
        };
      } else if (critical == "MEDIUM") {
        return {
          backgroundColor: 'rgba(255, 255, 0, 0.5)'
        };
      } else {
        return {};
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
  mounted() {}

});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Risk',

  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      affectedSoftware: null,
      affectedSoftwareCount: 0,
      affectedSystem: null,
      affectedSystemCount: 0,
      isModalOpen: true // Controls modal visibility

    };
  },
  methods: {
    // Computed property to determine the criticality style
    getCriticalStyle: function (critical) {
      if (critical == 1) {
        return {
          backgroundColor: 'rgba(255, 0, 0, 0.5)'
        };
      } else {
        return {};
      }
    },

    getAffectedSoftware: function (product, min_version, max_version) {
      // Construct the query parameters
      const params = new URLSearchParams({
        product: product,
        min_version: min_version,
        max_version: max_version
      }).toString();

      // Make the GET request with query parameters
      this.$http.get(`/api/affectedSoftware?${params}`).then(function (response) {
        // Handle the response
        this.affectedSoftware = response.data;
        console.log("Affected systems:", this.affectedSoftware);
        this.affectedSoftwareCount = this.affectedSoftware.length;
      }).catch(function (error) {
        // Handle errors
        console.error("Error fetching affected systems:", error);
      });
    },

    getAffectedSystems: function (product, min_version, max_version) {
      // Construct the query parameters
      const params = new URLSearchParams({
        product: product,
        min_version: min_version,
        max_version: max_version
      }).toString();

      // Make the GET request with query parameters
      this.$http.get(`/api/affectedSystem?${params}`).then(function (response) {
        // Handle the response
        this.affectedSystem = response.data;
        console.log("Affected systems:", this.affectedSystem);
        this.affectedSystemCount = this.affectedSystem.length;
      }).catch(function (error) {
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
    }

  },
  created: function () {
    this.$http.get('/api/myip').then(function (response) {
      this.msg = response.data.myip;
    });
  },

  watch: {
    '$route': function (to, from) {
      // Check if params are available after route change
      console.log('New Route Params:', to.params);
      console.log('New Query Params:', to.query);
    }
  },

  mounted: function () {
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

    if (product != undefined && minVersion != undefined && maxVersion != undefined) {
      this.getAffectedSoftware(product, minVersion, maxVersion);
      this.getAffectedSystems(product, minVersion, maxVersion);
    } else {
      this.getAffectedSoftware('Docker', '23.0', '26.1.3');
      this.getAffectedSystems('Docker', '23.0', '26.1.3');
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RiskAssessment',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      weightedRisk: null, // The weighted risk data
      contactInformation: null,
      EPPS: null,
      weightedRisk: null,
      Incident: null
    };
  },
  methods: {
    getWeightedAverage: function (product, min_version, max_version) {
      // Construct the query parameters
      const params = new URLSearchParams({
        product: product,
        min_version: min_version,
        max_version: max_version
      }).toString();

      // Make the GET request with query parameters
      this.$http.get(`/api/weightedRisk?${params}`).then(function (response) {
        // Handle the response
        this.weightedRisk = response.data;
        console.log("Affected systems:", this.weightedRisk);
      }).catch(function (error) {
        // Handle errors
        console.error("Error fetching affected systems:", error);
      });
    },

    fetchContactInformation: function (product, min_version, max_version) {
      const params = new URLSearchParams({
        product: product,
        min_version: min_version,
        max_version: max_version
      }).toString();
      // Make the GET request
      // Make the GET request with query parameters
      this.$http.get(`/api/contact?${params}`).then(function (response) {
        // Handle the response
        this.contactInformation = response.data;
        console.log("Contacts", response.data);
      }).catch(function (error) {
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

    if (product != undefined && minVersion != undefined && maxVersion != undefined) {
      this.getWeightedAverage(product, minVersion, maxVersion);
      this.fetchContactInformation(product, minVersion, maxVersion);
    } else {
      // Fetch incidents data when the component is mounted
      this.getWeightedAverage('Docker', '23.0', '26.1.3');
      this.fetchContactInformation('Docker', '23.0', '26.1.3');
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a }
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(15)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(27),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-174e387a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(17)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(29),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3e14c34c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(18)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(30),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a6481452",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(14)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(26),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-141acf34",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container mt-4"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "card text-white mb-3"
  }, [_c('div', {
    staticClass: "card-body customCard"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("Incident")]), _vm._v(" "), _c('p', {
    staticClass: "card-text"
  }, [_vm._v(_vm._s(_vm.routeParams.id))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "card text-white mb-3"
  }, [_c('div', {
    staticClass: "card-body customCard"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("CVSS")]), _vm._v(" "), _c('p', {
    staticClass: "card-text"
  }, [_vm._v(_vm._s(_vm.routeParams.cvss) + "/10")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "card text-white mb-3"
  }, [_c('div', {
    staticClass: "card-body customCard"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("Most Severe Risk")]), _vm._v(" "), _c('p', {
    staticClass: "card-text"
  }, [_vm._v(_vm._s(_vm.weightedRisk[0]['System ID']))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "card mb-3"
  }, [_c('div', {
    staticClass: "card-body custom"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("System Risk Rank")]), _vm._v(" "), _c('div', {
    staticClass: "chart-container",
    staticStyle: {
      "height": "300px"
    }
  }, [_c('table', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.weightedRisk), function(weight) {
    return _c('tr', {
      key: weight.id
    }, [_c('td', [_vm._v(_vm._s(weight['System ID']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(weight.type))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(weight.critical))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(Math.round(weight.score * 100) / 100))])])
  }), 0)])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "card mb-3"
  }, [_c('div', {
    staticClass: "card-body custom"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("Contact Information")]), _vm._v(" "), _c('div', {
    staticClass: "chart-container",
    staticStyle: {
      "height": "300px"
    }
  }, [_c('table', {
    staticClass: "table"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.contactInformation), function(contact) {
    return _c('tr', {
      key: contact.id
    }, [_c('td', [_vm._v(_vm._s(contact.Application))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(contact['System ID']))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(contact['Responsible Person']))])])
  }), 0)])])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("System ID")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Type")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Critical")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Weighted Risk")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Application")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("System ID")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Responsible Person")])])])
}]}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dashboard"
  }, [_c('div', {
    staticClass: "content",
    staticStyle: {
      "background-color": "#010127"
    }
  }, [_c('h1', {
    staticClass: "title",
    staticStyle: {
      "font-size": "45px"
    }
  }, [_vm._v("Hallo")])])])
}]}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('nav', {
    staticClass: "navbar navbar-expand-lg"
  }, [_c('a', {
    staticClass: "navbar-brand text-highlight",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("RiskRank")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "navbarNavAltMarkup"
    }
  }, [_c('div', {
    staticClass: "navbar-nav"
  }, [_c('router-link', {
    staticClass: "nav-item nav-link",
    attrs: {
      "to": "incident"
    }
  }, [_vm._v("Incidents Overview")])], 1)])]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "navbar-toggler",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNavAltMarkup",
      "aria-controls": "navbarNavAltMarkup",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }
  }, [_c('span', {
    staticClass: "navbar-toggler-icon"
  })])
}]}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container mt-4 custom"
  }, [_c('div', {
    staticClass: "card mb-3 customCard"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("Current Incidents")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.incidentData), function(incident) {
    return _c('tr', {
      key: incident.id
    }, [_c('td', [_vm._v(_vm._s(incident.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatPublishedDate(incident.published_date)))]), _vm._v(" "), _c('td', {
      style: (_vm.getCriticalStyle(incident.severity))
    }, [_vm._v(_vm._s(incident.severity))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(incident.cvss_score))]), _vm._v(" "), _c('td', [_c('div', {
      staticClass: "btn-group",
      attrs: {
        "role": "group",
        "aria-label": "Basic example"
      }
    }, [_c('button', {
      staticClass: "btn btn-secondary",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function($event) {
          return _vm.viewIncidentDetails(incident)
        }
      }
    }, [_vm._v("Detect")]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-secondary",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function($event) {
          return _vm.viewAssesDetails(incident)
        }
      }
    }, [_vm._v("Assess")])])])])
  }), 0)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Incident ID")]), _vm._v(" "), _c('th', [_vm._v("Published")]), _vm._v(" "), _c('th', [_vm._v("Severity")]), _vm._v(" "), _c('th', [_vm._v("CVSS Score")]), _vm._v(" "), _c('th', [_vm._v("Detect/Assess")])])])
}]}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container mt-4"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "card text-white mb-3"
  }, [_c('div', {
    staticClass: "card-body custom"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("Detected Software Products")]), _vm._v(" "), _c('p', {
    staticClass: "card-text"
  }, [_vm._v(_vm._s(_vm.affectedSoftwareCount))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "card text-white mb-3"
  }, [_c('div', {
    staticClass: "card-body custom"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("Affected System")]), _vm._v(" "), _c('p', {
    staticClass: "card-text"
  }, [_vm._v(_vm._s(_vm.affectedSystemCount))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "card mb-3 customCard"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("Detected Software")]), _vm._v(" "), _c('div', {
    staticClass: "chart-container",
    staticStyle: {
      "height": "300px"
    }
  }, [_c('table', {
    staticClass: "table"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.affectedSoftware), function(software, index) {
    return _c('tr', {
      key: software.id
    }, [_c('td', [_vm._v(_vm._s(software.product))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(software.edition))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(software.publisher))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(software.version))])])
  }), 0)])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "card mb-3 customCard"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("Affected Systems")]), _vm._v(" "), _c('table', {
    staticClass: "table"
  }, [_vm._m(2), _vm._v(" "), _c('tbody', _vm._l((_vm.affectedSystem), function(system, index) {
    return _c('tr', {
      key: system.id
    }, [_c('td', [_vm._v(_vm._s(system.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(system.state))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(system.type))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(system['sub_type']))]), _vm._v(" "), _c('td', {
      style: (_vm.getCriticalStyle(system.critical))
    }, [_vm._v("\n                  " + _vm._s(system.critical === 1 ? 'Yes' : 'No') + "\n                ")])])
  }), 0)])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-4"
  }, [_c('div', {
    staticClass: "card text-white mb-3"
  }, [_c('div', {
    staticClass: "card-body custom"
  }, [_c('h5', {
    staticClass: "card-title"
  }, [_vm._v("Incident")]), _vm._v(" "), _c('p', {
    staticClass: "card-text"
  }, [_vm._v("Choose your Incident")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Product")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Edition")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Publisher")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Version")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("SystemID")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("State")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Type")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Sub Type")]), _vm._v(" "), _c('th', {
    attrs: {
      "scope": "col"
    }
  }, [_vm._v("Critical")])])])
}]}

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[13]);
//# sourceMappingURL=app.3f3bbd62c3afb2790598.js.map