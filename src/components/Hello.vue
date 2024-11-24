<template>
  <div class="dashboard">
    <div class="content" style="background-color: #010127 ;">
      <!-- Logo Section -->
      <!-- Title Section -->
      <h1 class="title" style="font-size: 45px;">Hallo</h1>
    </div>
  </div>
</template>

<script>
export default {
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
}
</script>

<style scoped>
/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f7fb; /* Light background */
  color: #2b3d51; /* Dark text for contrast */
  margin: 0;
  padding: 0;
}

.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 600px;
}

h1 {
  font-size: 2rem;
  color: #0061A8; /* Clean blue color */
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5rem;
  color: #333333; /* Dark grey for the IP address */
  margin-top: 10px;
  font-weight: normal;
}

/* Styling for the preformatted text box */
pre {
  background-color: #e1f3f8; /* Light blue background for the IP address */
  border-radius: 5px;
  padding: 15px;
  font-size: 1.2em;
  color: #1A5C73; /* Slightly darker blue for the text */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: inline-block;
  max-width: 90%;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
