<template>
	<view class="sign-main" :style="{padding: top + 'rpx'}">
		<slot name="img">
			<img v-if="imgPath" :src="imgPath" class="imgPath" alt="" srcset="" mode="aspectFill">
		</slot>
		<view v-if="title" class="title">{{title}}</view>
		<view v-if="desc" class="desc">
			<view v-for="item in desc" class="flex flex-column">
				<view class="">{{item}}</view>
			</view>
		</view>
		<slot name="sign-btn">
		</slot>
	</view>
</template>

<script>
	export default {
		name: 'signTip',
		props: {
			imgPath: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			desc: {
				type: Array,
				default: []
			},
			top: {
				type: Number,
				default: 156
			},
			btn: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped lang="scss">
	.sign-main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 156rpx;
	}
	.imgPath {
		width: 437rpx;
		height: 593rpx;
		margin-bottom: 42rpx;
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 33rpx;
		font-weight: 500;
		color: #2878FF;
		line-height: 36rpx;
		margin-bottom: 35rpx;
	}
	.desc {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		font-weight: 500;
		color: #999999;
		line-height: 42rpx;
	}
</style>