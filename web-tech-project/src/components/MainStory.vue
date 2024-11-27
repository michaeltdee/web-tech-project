<template>
  <section>
    <h1>Article 1 - Lorem Ipsum</h1>
    <router-link to="/MainStory.vue" class="mainstory">
      <img src="@/assets/article1.png" alt="top story" />
    </router-link>
    <h2>Top Story</h2>
    <h3></h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla efficitur, libero in pretium sagittis, lectus justo cursus justo, ac auctor nulla nisl nec odio.
      Pellentesque gravida cursus magna, sit amet condimentum mi feugiat in.
      Nulla vulputate efficitur arcu, vel faucibus diam tristique quis.
    </p>
    <h3></h3>
    <p>
      Quisque id vestibulum mauris, vitae tincidunt eros.
      Nunc sit amet dui id enim sagittis auctor. Aliquam sagittis orci et nunc euismod placerat.
      Phasellus quis augue purus. Nulla facilisi. Nunc diam est, sagittis ut arcu eu, scelerisque lobortis tellus.
      Sed nec placerat elit.
    </p>
    <h3></h3>
    <p>
      Aliquam sed eros ultrices, porta ante sit amet, condimentum elit.
      Sed congue congue fringilla.
      Cras scelerisque, tortor vel commodo posuere, diam nisl auctor eros, a eleifend libero ante a metus.
      Maecenas sed orci purus.
      Aliquam lectus ex, auctor sit amet enim in, iaculis faucibus quam.
    </p>
    <h3></h3>
    <p>
      Mauris lobortis, turpis sit amet tristique convallis, enim odio elementum massa, id consectetur orci mi quis lorem.
      Quisque nulla dui, tincidunt id ligula in, porta luctus felis. Donec non luctus sem.
      Vivamus tincidunt eros at metus rhoncus molestie.
      Nam id mi id turpis auctor lobortis.
    </p>
  </section>
</template>

<script>
export default {
  name: 'MainContent',
};
</script>

<style scoped>
section {
  width: 565px;
  float: right;
  padding: 25px 30px;
}
section h1 {
  font-size: 160%;
  margin-bottom: 0.3em;
}
section h2 {
  font-size: 130%;
  margin-bottom: 0.5em;
}
section h3 {
  color: maroon;
  font-size: 110%;
  margin-bottom: 0.4em;
}
section p {
  font-size: 100%;
  margin-bottom: 0.7em;
}
section a:link,
section a:visited {
  color: maroon;
}
section a:hover,
section a:focus {
  color: #38617A;
}
blockquote {
  font-style: italic;
  margin: 10px 0;
  padding-left: 15px;
  border-left: 4px solid steelblue;
}
section .mainstory img{
  max-width: 80%;
  margin-right: 60px;

}
</style>
