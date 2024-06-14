import Vue from 'vue'
import App from './App'
import store from './store/index.js';
// 引入主包依赖
import TencentCloudChat  from "@tencentcloud/chat";
import TUICore from "@tencentcloud/tui-core";
import './uni.promisify.adaptor'
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);


import GoEasy from './lib/GOEASY-IM/js_sdk/goeasy-2.12.4.esm.min.js'
// import GRTC from './lib/goeasy-rtc-0.1.8.esm.min.js'

GoEasy.init({
    host:"hangzhou.goeasy.io",//应用所在的区域地址: 【hangzhou.goeasy.io |singapore.goeasy.io】
    appkey:"BC-c94a3e06d5c2485ebe7dc4690cb86af9",// common key
    modules: ['im']
});
// GRTC.init(GoEasy);

uni.$GoEasy = GoEasy;
// uni.$GRTC = GRTC;

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
// 权限验证操作
Vue.prototype.checkAuth = (callback,checkPhone = true)=>{
	// 权限验证
	if (!store.state.loginStatus) {
		uni.showToast({
			title: '请先登录',
			icon: 'none'
		});
		return uni.navigateTo({
			url: '/pages/login/login'
		});
	}
	// 验证是否绑定手机号
	if(checkPhone && !store.state.user.phone){
		uni.showToast({
			title: '请先登录',
			icon: 'none'
		});
		return uni.navigateTo({
			url: '/pages/user-phone/user-phone'
		});
	}
	callback()
}

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
