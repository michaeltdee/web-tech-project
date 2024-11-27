<template>
  <div class="login">
    <Header />
    <main>
      <Login />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Login from '@/components/Login.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    "Header": Header,
    "Login": Login,
    "Footer": Footer,
  },
};
</script>
<style scoped>
/* Reset some default browser styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Full height and center the box */
body, html {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0; /* Light background color */
}

/* Style the login box */
.login-box {
  width: 300px;  /* You can adjust this width */
  height: 300px; /* Keep it square by setting the same height and width */
  background-color: white; /* Background color of the box */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Slight shadow for depth */
  border-radius: 10px; /* Optional: rounded corners */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

/* Styling for the form's heading */
h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

/* Style for the input containers */
.input-container {
  width: 100%;
  margin-bottom: 15px;
}

/* Styling the input fields */
.input-container input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

/* Style for the button */
.btn {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50; /* Green background */
  color: white;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Hover effect for the button */
.btn:hover {
  background-color: #45a049;
}

</style>
