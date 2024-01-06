import { TUIChatKit, genTestUserSig } from "../../index.ts";
import { vueVersion, onMounted } from "../../adapter-vue";
import { TUILogin } from "@tencentcloud/tui-core";

// TUIChatKit 初始化
TUIChatKit.init();
uni.$chat_userSig = genTestUserSig({
	userID: uni.$chat_userID,
	SDKAppID: uni.$chat_SDKAppID,
	secretKey: uni.$chat_secretKey
}).userSig;

// login 
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
}).then(() => {
  uni.showToast({
    title: "login success"
  });
});