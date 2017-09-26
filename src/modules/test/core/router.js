import Vue from 'vue'
import store from './vuex'
import Router from 'vue-router'
//页面
const Home = () =>
    import ('../views/Home');
//路由
Vue.use(Router);
const router = new Router({
    routes: [{
        path: '/',
        name: 'Home',
        meta: {
            title: '首页'
        },
        component: Home
    }]
});
//路由拦截
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    Bus.$emit('modalClose');
    next();
})
export default router;