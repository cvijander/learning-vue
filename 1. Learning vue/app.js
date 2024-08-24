const app = Vue.createApp({
   data () {
     return {
        name:'zdravo'
     }
   }


});

// app.mount('#direct');


const appInstance = app.mount('#direct');

window.vieApp = appInstance;

console.log('neki teskt' , window.vieApp);





const FlashCardApp = {
  data () {
      return {
        deskName : "Vue js Fundamentals",
        cards : cards,
        flipped : false,
        userInput :'default',
        index : 0,
        readMoreUrl : "https://v3.vuejs.org/guide" ,

      };
  }, 
  methods: {
    flippedMe() {
      this.flipped =!this.flipped;
    },
    move(change) {
      // if(this.cards[this.index +change]) {
      // this.index += change;
      // this.flipped = false;
      // }
       this.index = (this.index + change + this.cards.length) % this.cards.length;
       this.flipped = false;
    }
  },
  computed : {
    front() {
      return this.cards[this.index].front;
    },
    back() {
      for(let i =0; i < 3e9; i++ ) {}
      
      return this.cards[this.index].back;
    }
  }
};

 const aplica =  Vue.createApp(FlashCardApp).mount('#app')