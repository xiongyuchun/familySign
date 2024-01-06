<script lang="ts">
	// #ifdef APP-PLUS || H5
	import { TUIChatKit, genTestUserSig } from "./TUIKit";
	import { vueVersion } from "./TUIKit/adapter-vue";
	import { TUILogin } from "@tencentcloud/tui-core";
	// #endif
	// 必填信息
	const config = {
		userID: "simon", //User ID
		SDKAppID: 1600019728, // Your SDKAppID
		secretKey: "62bdffc5d604eb1894f27f10721bda57dcfb760c3e9efc5c691af8faf7aed292", // Your secretKey
	};
	uni.$chat_userID = config.userID;
	uni.$chat_SDKAppID = config.SDKAppID;
	uni.$chat_secretKey = config.secretKey;


	// #ifdef APP-PLUS || H5
	uni.$chat_userSig = genTestUserSig(config).userSig;
	// TUIChatKit 初始化
	TUIChatKit.init();
	// #endif
	export default {
		onLaunch: function () {
			// #ifdef APP-PLUS || H5
			// TUICore login
			TUILogin.login({
				SDKAppID: uni.$chat_SDKAppID,
				userID: uni.$chat_userID,
				// UserSig 是用户登录即时通信 IM 的密码，其本质是对 UserID 等信息加密后得到的密文。
				// 该方法仅适合本地跑通 Demo 和功能调试，详情请参见 https://cloud.tencent.com/document/product/269/32688     
				userSig: uni.$chat_userSig,
				// 如果您需要发送图片、语音、视频、文件等富媒体消息，请设置为 true
				useUploadPlugin: true,
				// 本地审核可识别、处理不安全、不适宜的内容，为您的产品体验和业务安全保驾护航
				// 此功能为增值服务，请参考：https://cloud.tencent.com/document/product/269/79139
				// 如果您已购买内容审核服务，开启此功能请设置为 true
				useProfanityFilterPlugin: false,
				framework: `vue${vueVersion}` // 当前开发使用框架 vue2 / vue3
			});
			// #endif
			if(!this.$store.getters.token) {
				// 没有登录则隐藏tabbar
				uni.hideTabBar({ animation: true });
			}
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	};
</script>


<style>
	/*每个页面公共css */
	/* 官方css库 */
	/* @import "./common/uni.css"; */
	/* 自定义图标库 */
	@import "./static/iconfont/iconfont.css";
	/* 动画库 */
	@import "./common/animate.css";
	/* 自定义样式库 */
	@import "./common/free.css";
	/* 全局样式 */
	@import "./common/common.css";

	page {
		background: #FFFFFF;
		height: 100%;
	}

	::-webkit-scrollbar {
		display: none;
	}
</style>