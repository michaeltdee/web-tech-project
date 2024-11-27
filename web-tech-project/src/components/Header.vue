
<template>
  <header>
    <section class="header-content">
      <!-- Logo links to the homepage -->
      <router-link to="/" class="logo">
        <img src="@/assets/news_logo.png" alt="Logo" />
      </router-link>
    </section>

    <!-- Main navigation menu with two-tier structure -->
    <nav id="nav_menu">
      <ul>
        <!-- Home Link -->
        <li>
          <router-link to="/" exact-active-class="current">Home</router-link>
        </li>

        <!-- Strength Training Link -->
        <li>
          <router-link to="/strength" exact-active-class="current">Ireland</router-link>
        </li>

        <!-- Cardio Exercises Link -->
        <li>
          <router-link to="/cardio" exact-active-class="current">Sport</router-link>
        </li>

        <!-- Stress Relief with Submenu -->
        <li class="has-submenu">
          <router-link to="/stress" exact-active-class="current">Business</router-link>
        </li>
        <li>
          <router-link to="/diet" exact-active-class="current">World</router-link>
        </li>
        <li>
          <router-link to="/diet" exact-active-class="current"><img src="@/assets/account_image.png" alt="Article image" /></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
/* General styles for header layout */
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #38617A;
  color: white;
  padding: 20px 0;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

.logo img {
  height: 80px;
  max-width: 100%;
}

.header-text {
  display: flex;
  flex-direction: column;
}

.header-text h2 {
  font-size: 160%;
  color: white;
  margin: 0;
}

.header-text h3 {
  font-size: 100%;
  color: black;
  margin: 0;
}

/* Main navigation styling */
#nav_menu {
  width: 100%;
}

#nav_menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

#nav_menu li {
  position: relative;
}

#nav_menu .current {
  font-weight: bold;
  color: black;
}

/* Style for main menu items */
#nav_menu > ul > li > .router-link {
  color: white;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 18px;
  display: inline-block;
}

#nav_menu > ul > li > .router-link:hover {
  background-color: lightsteelblue;
  border-radius: 4px;
}

/* Submenu styling */
.submenu {
  display: none !important; /* Ensure submenu is hidden initially */
  position: absolute;
  top: 100%;
  left: 0;
  background-color: steelblue;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 4px;
  z-index: 1000;
  min-width: 180px;
}

/* Show submenu on hover */
.has-submenu:hover .submenu {
  display: block !important; /* Force display on hover */
}

.submenu li {
  width: 100%;
}

.submenu li .router-link {
  color: white;
  padding: 10px 15px;
  font-size: 14px;
  text-decoration: none;
  display: block;
}

.submenu li .router-link:hover {
  background-color: lightsteelblue;
}
a:link {
  text-decoration: none;
  color: white;
  padding: 30px;
}
a:hover {
  text-decoration: none;
  color: white;
  padding: 30px;
}
a:visited {
  text-decoration: none;
  color: white;
  padding: 30px;
}
a:active {
  text-decoration: none;
  color: white;
  padding: 30px;
}
#nav_menu img {
  max-width: 100%;
  max-height: 20px;
}
</style>
