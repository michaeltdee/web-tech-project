<template>
  <section>
    <h1>Explore top stories.</h1>
    <router-link to="mainstory.vue" class="mainstory">
      <img src="@/assets/article1.png" alt="top story" />
    </router-link>
    <p>As fitness expert Amanda Russell said:</p>
    <blockquote>Fitness is about so much more than exercise. It’s a catalyst for positive change, and it affects every aspect of your life.</blockquote>
    <h2>What we offer</h2>
    <h3></h3>
    <p>
      Tired of being tired? Strength training can help you manage or lose weight and
      increase your metabolism to help you burn more calories. It can also increase bone
      density and reduce the risk of osteoporosis.
    </p>
    <h3></h3>
    <p>
      Want to lose weight? Cardiovascular exercise burns calories and improves overall
      health. It can reduce belly fat, promote brain growth, prevent stress, and help you
      focus.
    </p>
    <h3></h3>
    <p>
      Stressed out fortnite? Stress can weaken the immune system and cause high blood pressure,
      fatigue, depression, anxiety, and even heart disease. Learn ways to manage and reduce
      stress.
    </p>
    <h3></h3>
    <p>
      Are you really what you eat? Lose weight, gain weight, or just feel great! Maintaining
      a healthy diet is probably the most important thing you can do to promote overall
      health.
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
