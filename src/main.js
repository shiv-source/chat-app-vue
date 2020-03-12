import Vue from 'vue'
import App from './App.vue'
// import VueSocketIO from 'vue-socket.io'
// import store from './store'



 
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: SocketIO('http://localhost:3000/', options), //options object is Optional
//   vuex: {
//     store,
//     actionPrefix: "SOCKET_",
//     mutationPrefix: "SOCKET_"
//   }
// })
// );

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
