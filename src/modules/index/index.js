import Vue from 'vue'
import App from './App'
import router from './core/router'
import store from './core/vuex'
import filter from '@/common/filter.js';
import pie from '@/common/pie.js';
Vue.prototype.$pie = pie;
import '@/sass/common.scss';
import bus from './core/bus.js';
window.Bus = bus;
import basil from './core/basil.js'
window.basil = basil;
//axios
import axios from 'axios'
Vue.prototype.$http = axios;
// axios.defaults.baseURL = '/pie'
//ElementUI
import ElementUI from 'element-ui'
import '@/../theme/index.css'
Vue.use(ElementUI);
Vue.config.productionTip = false;
//组件
import ActItem from '../../components/ActItem'
Vue.component('act-item', ActItem);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, //路由
    store, //状态管理
    template: '<App/>',
    components: { App }
});
//modal层:z-index: 90;