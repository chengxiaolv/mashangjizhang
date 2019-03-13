// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/reset.css';
import store from "./store/store.js"



Vue.use(ElementUI);


import utils from "./utils/utils.js"; // 引入封装的全局方法
Vue.prototype.utils = utils; //引入到原型上。

import https from "./utils/axios.js"; //引入封装的axios  
Vue.prototype.https = https; //引入到原型上。

import * as filters from './utils/filters' //引入所有过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
})

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',

    created() { //刷新重新赋值，vuex
        var val = this.$store.getters.getCityFn;
        if (!val && localStorage.getItem("state") != 'null') {
            var num = localStorage.getItem("state");
            this.$store.dispatch("setCityName", num)
        }
    }

})