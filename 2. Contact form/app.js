// const app = Vue.createApp({
//   data () {
//      return {
//         deskName: 'Neki naslov'
//      }
//   }


// });

// app.mount('#first');


const FormApp = {
    data() {
         return {
            deskName : 'Vue Form',
            deskDescription : '',
            // reverse : false
            options : [],
            leech : 'tag',
            categoryId : ""
         };
    },
    computed : {
        charsLeft() {
            return 200- this.deskDescription.length;
        }
    },    
    methods : {
        submit() {
            alert('submitujemo formu') ;           
        }
    }
};

const aplica = Vue.createApp(FormApp).mount('#app');