<template>
  <section>
    <div class="container">
      <div class="item">
        <img src="@/assets/view-article.png" alt="Image 1">
        <p>View Articles</p>
      </div>
      <div class="item">
        <img src="@/assets/edit-article.jpg" alt="Image 2">
        <p>Edit Articles</p>
      </div>
      <div class="item">
        <img src="@/assets/add-article.png" alt="Image 3">
        <p>Add Articles</p>
      </div>
      <div class="item">
        <img src="@/assets/delete-article.png" alt="Image 4">
        <p>Delete Articles</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminEdit',
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  text-align: center;
  max-width: 800px;
  margin: auto;
}
.item {
  background: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.item p {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
}
</style>
