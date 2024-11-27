<template>
  <div class="home">
    <AdminHeader />
    <main>
      <admin-edit/>
    </main>

    <Footer />
  </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue';

import Footer from '@/components/Footer.vue';
import AdminEdit from "@/components/AdminEdit.vue";

export default {
  name: 'Home',
  components: {
    AdminEdit,
    "AdminHeader": AdminHeader,
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
