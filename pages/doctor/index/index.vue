<template>
	<view class="">
		<view class="doctor-top">
			<img class="doctor-top-bg" src="http://182.61.31.42:1001/static/index/doctor-bg.png" alt="" srcset="">
			<!-- 状态栏 -->
			<view :style="{ height: statusBarHeight }" class="w-100"></view>
			<view class="top-navbar">
				<img src="@/static/index/map.png" class="bg-transparent mr-1 map" alt="" srcset="">
				<text class="text-white font-sm mr-2">签约单位地址</text>
				<text class="text-white font-small">景德镇第三人民医院</text>
			</view>
			<view class="doctor-top-photo flex">
				<img class="mr-2" style="width: 137rpx;height: 137rpx;border-radius: 50%;" :src="webUrl + '/' + userInfo.HeadImgUrl" alt="" srcset="">
				<text class="mt-2 text-white" style="font-size: 28rpx;">{{userInfo.Name}}</text>
			</view>
			<view class="px-4 mt-3">
				<view class="px-2 py-2 flex position-relative" style="height: 125rpx; border-top: 2rpx solid rgba(255, 255, 255, 0.4);">
					<view @click="$U.gotoPage('/pages/sub-packages-doctor/my/number-of-signatories/index')" class="flex flex-column flex-1 justify-center align-center">
						<text class="text-white mb-1" style="font-size: 58rpx; font-weight: 500;line-height: 1">23</text>
						<text class="text-white" style="font-size: 25rpx;line-height: 1">签约人数</text>
					</view>
					<view class="position-absolute doctor-top-line">
						
					</view>
					<view @click="$U.gotoPage('/pages/sub-packages-doctor/my/number-of-services/index')" class="flex flex-column flex-1 justify-center align-center">
						<text class="text-white mb-1" style="font-size: 58rpx; font-weight: 500;line-height: 1;">32</text>
						<text class="text-white" style="font-size: 25rpx;line-height: 1">服务次数</text>
					</view>
				</view>
			</view>
		</view>
		<view class="grid px-3 mt-5">
			<view class="flex">
				<view @click="$U.gotoPage(`/pages/sub-packages-doctor/my/online-signing-list/index?title=在线续约`)" class="grid-shadow flex align-center bg-white flex-1 mr-3 bg-white px-2">
					<img src="http://182.61.31.42:1001/static/index/container.png" alt="" srcset=""
						style="width: 93rpx; height: 101rpx;margin-right: 9rpx;">
					<text class="font-30 text-333">在线续约</text>
				</view>
				<view @click="$U.gotoPage(`/pages/sub-packages-doctor/my/online-signing-list/index?title=在线签约`)" class="grid-shadow flex align-center bg-white flex-1 bg-white px-3">
					<img src="http://182.61.31.42:1001/static/index/sign.png" alt="" srcset=""
						style="width: 95rpx; height: 101rpx;margin-right: 19rpx;">
					<text class="font-30 text-333">在线签约</text>
				</view>
			</view>
		</view>
		<view class="px-3">
			<view class="px-3 bg-white icon-list flex my-3 grid-shadow">
				<view class="flex flex-column justify-center align-center">
					<img src="http://182.61.31.42:1001/static/index/consultation.png" alt="" srcset="" style="width: 105rpx; height: 90rpx;">
					<text class="font-small text-333">在线咨询</text>
				</view>
				<view class="flex flex-column justify-center align-center">
					<img src="http://182.61.31.42:1001/static/index/review.png" alt="" srcset="" style="width: 82rpx; height: 85rpx;">
					<text class="font-small text-333">查阅健康档案</text>
				</view>
				<view @click="$U.gotoPage('/pages/sub-packages-doctor/my/statistics-manage/index')" class="flex flex-column justify-center align-center">
					<img src="http://182.61.31.42:1001/static/index/tongji.png" alt="" srcset="" style="width: 85rpx; height: 90rpx;">
					<text class="font-small text-333">统计管理</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'doctorIndex',
		computed: {
			...mapState(['userDoctor']),
		},
		watch: {
			userDoctor: {
				handler(newValue, oldValue) {
					for (let key in newValue.userInfo) {
						this.$set(this.userInfo, key, newValue.userInfo[key])
					}
				},
				deep: true,
				immediate: true,
			}
		},
		data() {
			return {
				statusBarHeight: 25,
				userInfo: {},
				webUrl: '',
			}
		},
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
		},
		mounted() {
			this.webUrl = this.$C.webUrl;
		},
		methods: {
			
		},
	}
</script>

<style>
	page {
		background-color: #fdfdfd;
	}
</style>

<style scoped lang="scss">
	.doctor-top {
		position: relative;
		width: 100%;
		height: 563rpx;
		
		&-line {
			height: 70rpx; 
			border: 2rpx solid rgba(255, 255, 255, 0.4);
			left: calc(50% - 2rpx);
			top: 46rpx;
		}
		
		&-bg {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			z-index: -1;
		}
		
		&-photo {
			margin-left: 55rpx;
		}
		
	}
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
	
</style>