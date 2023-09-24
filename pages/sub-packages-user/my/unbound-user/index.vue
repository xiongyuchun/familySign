<template>
	<view class="">
		<sign-tip :title="signObj.title" :desc="signObj.desc" :imgPath="signObj.imgPath" :imgStyle="signObj.imgStyle" :top="signObj.top" :btn="signObj.btn">
			<template v-slot:img>
				<img :src="signObj.imgPath" class="imgPath" alt="" srcset="" mode="aspectFill">
			</template>
			<template v-slot:sign-btn>
				<view class="flex align-center justify-center">
					<view class="unsign-btn">去绑定</view>
				</view>
			</template>
		</sign-tip>
	</view>
</template>

<script>
	import signTip from '@/pages/sub-packages-user/components/sign-tip/index.vue';
	export default {
		components: {
			signTip
		},
		data() {
			return {
				signObj: {
					desc: ['未绑定用户'],
					imgPath: '/pages/sub-packages-user/static/unbound-user.png',
					top: 274,
					btn: true
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.imgPath {
		width: 596rpx;
		height: 471rpx;
		margin-bottom: 42rpx;
	}
	.unsign-btn {
		width: 80vw;
		height: 86rpx;
		background-color: #2878ff;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		border-radius: 80rpx;
		margin-top: 224rpx;
	}
</style>