import Vue from 'vue'
import App from './App.vue'

import Select from "../lib/definedSelect.umd";
import '../lib/definedSelect.css';

Vue.use(Select)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
