const FlashCardApp = {
    data () {
         return {
           title : 'Card Manager',
           cards : cards,
           editIndex: -1,
           fontSize: 15,
           textSizeControl: {
             textAlign:'center',
             cursor:'pointer'
           }
         };
    },
};

const app = Vue.createApp(FlashCardApp).mount('#app');