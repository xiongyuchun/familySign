<script>
	export default {
		onLaunch: function () {
			const token = uni.getStorageSync('token');
			if(!token && !token.Token) {
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
	/* @import "./static/iconfont/iconfont.css"; */
	/* 动画库 */
	/* @import "./common/animate.css"; */
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