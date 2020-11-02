import Vue from 'vue'
import App from './App.vue'
import router from './router'
/*importing the bootstrap poper and jquery*/
import "bootstrap";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
/*importing sass loader*/
import "sass-loader"


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')