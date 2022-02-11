import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

import VueRouter from 'vue-router';
import Allblogs from './components/Allblogs.vue'
import Home from './components/Home.vue'
import Addblogs from './components/Addblogs.vue'
import Oneblog from './components/Oneblog.vue'
import Updateblog from './components/Updateblog.vue'

Vue.use(VueRouter);


const routes = [
    { path: '/', component: Home },
    { path: '/Allblogs', component: Allblogs },
    { path: '/Addblogs', component: Addblogs },
    { path: '/Updateblog/:id', component: Updateblog },
    { path: '/Oneblog/:id', component: Oneblog },
    { path: '*', component: Home },
]

const routers = new VueRouter({
    routes,
    mode: 'history'
})


Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
    router: routers,
    render: h => h(App),
}).$mount('#app')