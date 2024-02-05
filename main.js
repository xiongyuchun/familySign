import Vue from 'vue'
import App from './App'
import store from './store/index.js';
import './uni.promisify.adaptor'
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

Vue.prototype.$store = store;

Vue.config.productionTip = false;


// 引入全局组件
import myNavBar from './components/navbar/index.vue';
Vue.component('my-navbar',myNavBar);
import specialNavbar from './components/special-navbar/index.vue';
Vue.component('special-navbar',specialNavbar);
// import divider from './components/common/divider.vue';
// Vue.component('divider',divider)
// import noThing from './components/common/no-thing.vue';
// Vue.component('no-thing',noThing)

// 引入配置文件
import $C from './common/config.js';
Vue.prototype.$C = $C
// 挂在助手函数库
import $U from './common/util.js';
Vue.prototype.$U = $U
// 引入请求库
import $H from './api/request.js';
Vue.prototype.$H = $H



App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
