<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand text-highlight" href="#">RiskRank</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="incident">Incidents Overview</router-link>

        </div>
      </div>
    </nav>
    <!-- This is where the routed components will be rendered -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* Global background styling */
html,
body {
  height: 100%;
  background-color: #010127; /* Main background color */
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #eeeeee;
  margin-top: 60px;
}

/* Bootstrap Navbar Styling */
.navbar {
  background-color: #010127; /* Match the main background color */
  margin: 60px !important;
}

.navbar-brand {
  color: #009999 !important; /* Highlighted color for brand */
  
}

.navbar-nav .nav-link {
  font-size: 1.2rem; /* Larger font size */
  color: #009999  !important; /* Highlighted color for links */
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.3s ease, text-decoration 0.3s ease;
  margin-left: 20px !important;
}

.navbar-nav .nav-link:hover {
  color: #009999 !important; /* Brighter highlight on hover */
  text-decoration: underline; /* Underline effect */
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 204, 0, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Highlighting the brand name */
.text-highlight {
  font-weight: bold;
}
</style>
