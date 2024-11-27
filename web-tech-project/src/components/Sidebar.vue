<template>
  <aside>
    <h2>More Stories</h2>
    <ul>
      <li> <router-link to="/" class="article1">
        <img src="@/assets/article1.png" alt="Article image" />
      </router-link></li>
      <li> <router-link to="TopStory.vue" class="article1">
        <img src="@/assets/article1.png" alt="Article image" />
      </router-link></li>
      <li> <router-link to="Home.vue" class="article1">
        <img src="@/assets/article1.png" alt="Article image" />
      </router-link></li>
      <li> <router-link to="Home.vue" class="article1">
        <img src="@/assets/article1.png" alt="Article image" />
      </router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
aside {
  float: left;
  width: 245px;
  padding: 25px 0 0 30px;
}
aside h2 {
  font-size: 130%;
  color: maroon;
  margin-bottom: 8px;
}
aside ul {
  line-height: 1.5;
  margin: 0;
  list-style: none;
}
aside a:link,
aside a:visited {
  color: steelblue;
}
aside a:hover,
aside a:focus {
  color: maroon;
}
a:link {
  text-decoration: none;
  padding: inherit;
}
a:hover {
  text-decoration: none;
  padding: inherit;
}
a:visited {
  text-decoration: none;
  padding: inherit;
}
a:active {
  text-decoration: none;
  padding: inherit;
}
aside .article1 img{
  margin-right: 20px;
  margin-bottom: 40px;
  max-width: 100%;
}
</style>
