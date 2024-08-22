const app =Vue.createApp({
  data() {
      return {
          deskName: 'Vue.js Fundamentals',
          cards : cards ,
          isFlipped : false,
          readMoreUrl:"https://v3.vuejs.org/guide",
          userInput:'default'
      }
  },
  methods: {

  }

});

app.mount('#app');