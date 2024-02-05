<template>
	<div class="index">
		<p v-if="userType === 'user'" class="index-button" @click="gotoSign">去签约</p>
		<p class="index-button" @click="openConversation">打开消息列表</p>
		<!-- <p class="index-button" @click="openContact">打开 TUIKit 联系人</p> -->
	</div>
</template>
<script>
import { TUIChatKit, genTestUserSig } from "../../TUIKit/index.ts";
import { TUILogin } from "@tencentcloud/tui-core";
import TUIChatEngine, {
  TUIStore,
  StoreName,
  TUIConversationService,
} from "@tencentcloud/chat-uikit-engine";
	export default {
		computed: {
			userType() {
				return this.$store.getters.userType
			},
		},
		data() {
			return {
			}
		},
		mounted() {
			this.login()
		},
		methods: {
			login() {
				if(!TUIChatKit) return;
				TUIChatKit.init();
				uni.showLoading({
					title: '加载中'
				})
				// 获取登录的userid
				// 用户端登录
				let userID = '';
				console.log('this.userType:', this.userType === 'user')
				if(this.userType === 'user') {
					console.log('this.$store.getters.userInfo:', this.$store.getters.userInfo)
					userID = this.$store.getters.userInfo.UserId
				} else {
					console.log('this.$store.getters.userInfoDoctor:', this.$store.getters.userInfoDoctor)
					userID = this.$store.getters.userInfoDoctor.DoctorId
				}
				uni.$chat_userSig = genTestUserSig({
					userID: userID,
					SDKAppID: uni.$chat_SDKAppID,
					secretKey: uni.$chat_secretKey
				}).userSig;
				// login 
				let _this = this;
				TUILogin.login({
					SDKAppID: uni.$chat_SDKAppID,
					userID: userID,
					// UserSig 是用户登录即时通信 IM 的密码，其本质是对 UserID 等信息加密后得到的密文。
					// 该方法仅适合本地跑通 Demo 和功能调试，详情请参见 https://cloud.tencent.com/document/product/269/32688     
					userSig: uni.$chat_userSig, 
					// 如果您需要发送图片、语音、视频、文件等富媒体消息，请设置为 true
					useUploadPlugin: true,
					// 本地审核可识别、处理不安全、不适宜的内容，为您的产品体验和业务安全保驾护航
					// 此功能为增值服务，请参考：https://cloud.tencent.com/document/product/269/79139
					// 如果您已购买内容审核服务，开启此功能请设置为 true
					useProfanityFilterPlugin: false,
					framework: `vue2` // 当前开发使用框架 vue2 / vue3
				}).then(() => {
					uni.hideLoading()
					// uni.showToast({
					// 	title: "login success"
					// });
					// this.openConversation()
				});
				uni.hideLoading()
			},
			gotoSign() {
				this.$U.gotoPage('/pages/sub-packages-user/my/doctor-introduction/index');
			},
			// 打开 TUIKit 会话列表
			openConversation() {
				uni.navigateTo({
					url: "/TUIKit/components/TUIConversation/index",
				});
			},
			// 打开 TUIKit 联系人
			openContact() {
				uni.navigateTo({
					url: "/TUIKit/components/TUIContact/index",
				});
			},
		},
	};
</script>
<style lang="scss" scoped>
	.index {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		&-button {
			width: 180px;
			padding: 10px 40px;
			color: #fff;
			background-color: #006eff;
			font-size: 16px;
			margin-top: 65px;
			border-radius: 30px;
			text-align: center;
		}
	}
</style>