<script>
	export default {
		onLaunch: function() {
			const token = uni.getStorageSync('token');
			if (!token && !token.Token) {
				// 没有登录则隐藏tabbar
				uni.hideTabBar({
					animation: true
				});
			}

			const updateManager = uni.getUpdateManager();

			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
				console.log(res.hasUpdate);
			});

			updateManager.onUpdateReady(function(res) {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}
				});

			});

			updateManager.onUpdateFailed(function(res) {
				// 新的版本下载失败
				uni.showModal({
					title: '更新失败',
					content: '新版本下载失败，请检查网络设置',
					showCancel: false
				});
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {

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