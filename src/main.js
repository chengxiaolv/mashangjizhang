// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/reset.css'; // 清除全局样式
import store from "./store/store.js" // vuex



Vue.use(ElementUI);


import utils from "./utils/utils.js"; // 引入封装的全局方法
Vue.prototype.utils = utils; //引入到原型上。

import https from "./utils/axios.js"; //引入封装的axios  
Vue.prototype.https = https; //引入到原型上。

import * as filters from './utils/filters' //引入所有过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
})

// 引入图片预览功能。
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)

// 全局注册组件
Vue.component('tabBarList', resolve => require(['./common/common_assemblys/tabBarList.vue'], resolve)); // 状态列表（比如待处理、进行中、已完成等）
Vue.component('tabBar', resolve => require(['./common/common_assemblys/tabBar.vue'], resolve)); // 标签页按钮
Vue.component('breadcrumb', resolve => require(['./common/common_assemblys/breadcrumb.vue'], resolve)); // 面包屑
Vue.component('listSelect', resolve => require(['./common/common_assemblys/listSelect.vue'], resolve)); // 列表查询搜索框
Vue.component('secondaryBtn', resolve => require(['./common/common_assemblys/secondaryBtn.vue'], resolve)); // 次级辅色按钮集合
Vue.component('auxiliaryBtn', resolve => require(['./common/common_assemblys/auxiliaryBtn.vue'], resolve)); // 辅色按钮集合
Vue.component('mainBtn', resolve => require(['./common/common_assemblys/mainBtn.vue'], resolve)); // 主色按键
Vue.component('deletePopup', resolve => require(['./common/common_assemblys/deletePopup.vue'], resolve)); // 删除弹窗
Vue.component('myUpload', resolve => require(['./common/common_assemblys/myUpload.vue'], resolve)); // 上传文件组件
Vue.component('uploadFile', resolve => require(['./common/common_assemblys/uploadFile.vue'], resolve)); // 上传展示成功文件。
Vue.component('previewImg', resolve => require(['./common/common_assemblys/previewImg.vue'], resolve)); // 预览pdf格式的上传文件
Vue.component('annexDownload', resolve => require(['./common/common_assemblys/annexDownload.vue'], resolve)); // 文件下载按钮


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