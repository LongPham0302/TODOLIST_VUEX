import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './plugins/index'
new Vue({
    store,
    render: h => h(App),
}).$mount('#app')