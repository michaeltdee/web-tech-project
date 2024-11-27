<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-container">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" placeholder="Enter your username" required />
        </div>
        <div class="input-container">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" class="btn">Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Check if the credentials are correct
      if (this.username === 'Admin1' && this.password === '1234') {
        // Redirect to the home page
        this.$router.push('/AdminView');
      } else {
        alert('Invalid username or password');
      }
    }
  }
};
</script>

<style scoped>
/* Same styles as before */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login-box {
  width: 300px;
  height: 300px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
}

.input-container {
  width: 100%;
  margin-bottom: 15px;
}

.input-container input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #38617A;
  color: white;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}
</style>
