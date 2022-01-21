import Vue from 'vue'
import App from './App.vue'
import home from "./Home"

Vue.component("lamp-compenent",home);

new Vue({
  el: '#app',
  render: h => h(App)//ecmascrip6 el prop karşısında bulunan elementı alır render eder
})
