<template>
	<view class="">
		<my-navbar title="关于我们"></my-navbar>
		<view class="about">
			<view class="flex w-100 justify-center">
				<img class="logo" src="@/static/my/about-logo.png" alt="" srcset="">
			</view>
			<view class="platform">
			我们是一家专门为患者家庭签约平台，通过这个平台您能够轻松在线预约签约，让您的生活合理安排之下非常的便捷与实用，我们用最完善的服务带给您最好的体验，这是我们一直以来最大的追求！
			</view>
			<view class="evaluate">直观选择医生</view>
			<view class="dot-evaluate">平台以医生头衔、医生擅长医生履历等信息直观的展现了医生的介绍，便于用户选择最合适自己的医生。</view>
			<view class="evaluate">软件版本号</view>
			<view class="dot-evaluate">v1.0</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 25
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:res=>{
					this.statusBarHeight = res.statusBarHeight
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	.about {
		padding: 0 30rpx;
	}
	.logo {
		width: 133rpx;
		height: 133rpx;
		background-color: transparent;
		margin: 69rpx 0;
	}
	.platform {
		color: #5D5D5D;
		font-size: 25rpx;
		text-indent: 2rem;
		margin-bottom: 137rpx;
	}
	.evaluate {
		color: #000000;
		font-size: 29rpx;
		margin-bottom: 29rpx;
	}
	.dot-evaluate {
		color: #5D5D5D;
		font-size: 25rpx;
		margin-bottom: 110rpx;
	}
</style>