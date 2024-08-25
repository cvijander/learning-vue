// const app = Vue.createApp({
//    data () {
//      return {
//         name:'zdravo'
//      }
//    }


// });

// // app.mount('#direct');


// const appInstance = app.mount('#direct');

// window.vieApp = appInstance;

// console.log('neki teskt' , window.vieApp);





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
      if(this.cards[this.index + change]) {
      this.index += change;      
      }
      else 
      {
        this.index = change == 1 ? 0: this.cards.length -1;        
      }
      this.flipped = false;
      //  this.index = (this.index + change + this.cards.length) % this.cards.length;
      //  this.flipped = false;
    },
    gotIt() {
      if(this.cards.length ===1 )
      {
        return alert('Well done');
      }
      this.cards.splice(this.index, 1);
      if(!this.cards[this.index]) {
        this.index = 0;
      }
      this.flipped = false;
    },
    again() {
      this.cards[this.index].isRepeat = true;
      this.move(1);
    }
  },
  computed : {
    front() {
      return this.cards[this.index].front;
    },
    back() {           
      return this.cards[this.index].back;
    },
    isRepeat() {
      return this.cards[this.index].isRepeat;
    }
  }
};

 const aplica =  Vue.createApp(FlashCardApp);

 aplica.component('read-more', {
   template: '<a :href="url" >Read more</a>',
   name:'ReadMore',
   props:['url']
 });

 aplica.component('flash-card', {
        template : '<div @click="$emit(\'flip\')" :class="{again : isRepeat}" class="card"> \
                      <h2 v-if="!flipped" v-text="front"></h2> \
                      <div v-else> \
                        <div v-html="back"></div> \
                        <div class="score"> \
                          <button @click.stop="$emit(\'yes\')">Got it</button> \
                          <button @click.stop="$emit(\'no\')">Again</button> \
                        </div> \
                      </div> \
                    </div> ',
         name: 'FlashCard',
         props: ['flipped','isRepeat','front','back']           
 });

 aplica.mount('#app');