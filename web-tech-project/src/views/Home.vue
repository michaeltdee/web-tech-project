<template>
  <div class="home">
    <Header />
    <main>
      <Sidebar />
      <MainContent />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import MainContent from '@/components/MainContent.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    "Header": Header,
    "MainContent": MainContent,
    "Sidebar": Sidebar,
    "Footer": Footer,
  },
};
</script>
<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  border: 3px solid steelblue;
  box-shadow: 0 10px 20px 10px;
  display: grid;
  grid-template-rows: auto 1fr auto; /* Header, main content, footer */
}

.content-container {
  display: grid;
  grid-template-columns: 1fr 3fr; /* Sidebar 1 part, MainContent 3 parts */
  gap: 20px; /* Space between sidebar and main content */
  padding: 20px;
}
</style>
