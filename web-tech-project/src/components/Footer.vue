<template>
  <footer>
    <p>&copy; Copyright - Villager News</p>
    <p>Sign up to our Newsletter!</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #38617A;
  font-size: 14px;
  color: white;
}

/* Optional styling for the name */
.author-name {
  font-style: italic;
}
</style>