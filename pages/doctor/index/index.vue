<template>
	<view class="">
		<special-navbar :mode="1">
			<view class="top-navbar">
				<img src="@/static/index/map.png" class="bg-transparent mr-1 map" alt="" srcset="">
				<text class="text-white font-sm mr-2">签约单位地址</text>
				<text class="text-white font-small">景德镇第三人民医院</text>
			</view>
		</special-navbar>
		<view class="rotation px-3">
			<uni-swiper-dot class="uni-swiper-dot-box" :current="current" mode="round" :dots-styles="dotsStyles"
				field="content">
				<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
					<swiper-item v-for="(item, index) in 1" :key="index">
						<view class="swiper-item">
							<img src="@/static/index/horse.png" class="w-100 bg-transparent" alt="" srcset="">
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="grid px-3 mt-5">
			<view class="flex">
				<view @click="$U.gotoPage(`/pages/user/my/online-signing/index?title=在线续约`)" class="grid-shadow flex align-center bg-white flex-1 mr-3 bg-white px-2">
					<img src="@/static/index/container.png" alt="" srcset=""
						style="width: 93rpx; height: 101rpx;margin-right: 9rpx;">
					<text class="font-30 text-333">在线续约</text>
				</view>
				<view @click="$U.gotoPage('/pages/user/my/un-sign/index')" class="grid-shadow flex align-center bg-white flex-1 bg-white px-3">
					<img src="@/static/index/sign.png" alt="" srcset=""
						style="width: 95rpx; height: 101rpx;margin-right: 19rpx;">
					<text class="font-30 text-333">在线签约</text>
				</view>
			</view>
		</view>
		<view class="px-3">
			<view class="px-3 bg-white icon-list flex my-3 grid-shadow">
				<view class="flex flex-column justify-center align-center">
					<img src="@/static/index/consultation.png" alt="" srcset="" style="width: 105rpx; height: 90rpx;">
					<text class="font-small text-333">在线咨询</text>
				</view>
				<view class="flex flex-column justify-center align-center">
					<img src="@/static/index/review.png" alt="" srcset="" style="width: 82rpx; height: 85rpx;">
					<text class="font-small text-333">查阅健康档案</text>
				</view>
				<view @click="$U.gotoPage('/pages/sub-packages-doctor/my/statistics-manage/index')" class="flex flex-column justify-center align-center">
					<img src="@/static/index/tongji.png" alt="" srcset="" style="width: 85rpx; height: 90rpx;">
					<text class="font-small text-333">统计管理</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'userIndex',
		data() {
			return {
				last_id: '',
				reload: false,
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				dotsStyles: {
					backgroundColor: 'rgba(127, 180, 249, .3)',
					border: '1px rgba(255, 255, 255, .3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(255, 255, 255, .9)',
					selectedBorder: '1px rgba(255, 255, 255, .9) solid'
				},
				swiperDotIndex: 0
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			selectStyle(index) {
				this.dotsStyles = this.dotStyle[index]
				this.styleIndex = index
			},
			selectMode(mode, index) {
				this.mode = mode
				this.modeIndex = index
				this.styleIndex = -1
				this.dotsStyles = this.dotStyle[0]
			},
			clickItem(e) {
				this.swiperDotIndex = e
			},
			onBanner(index) {
				console.log(22222, index);
			}
		},
	}
</script>

<style>
	page {
		background-color: #fdfdfd;
	}
</style>

<style scoped lang="scss">
	.top-navbar {
		height: 44px;
		display: flex;
		align-items: center;
		padding-left: 30rpx;
	}
	.title {
		margin-top: 70rpx;
		margin-bottom: 35rpx;
	}

	.map {
		width: 26rpx;
		height: 30rpx;
	}

	.grid {
		background-color: #fdfdfd;
		border-radius: 32rpx;

		&-shadow {
			height: 150rpx;
			box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.04);
		}
	}

	.icon-list {
		border-radius: 16rpx;
		height: 200rpx;
		justify-content: space-around;
	}

	.rotation {
		margin-top: -163rpx;
	}

	.swiper-box {
		height: 260rpx;
	}

	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 260rpx;
		color: #fff;
	}
	
</style>