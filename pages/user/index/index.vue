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
					<swiper-item v-for="(item, index) in bannerList" :key="index">
						<view class="swiper-item">
							<img :src="item.LinkUrl" class="w-100 bg-transparent" alt="" srcset="">
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="grid px-3 mt-5">
			<view class="flex mb-3">
				<view @click="$U.gotoPage('/pages/sub-packages-user/my/upload-info/index')" class="grid-shadow flex align-center bg-white flex-1 mr-3 bg-white px-1">
					<img src="@/static/index/uploadInfo.png" alt="" srcset=""
						style="width: 108rpx; height: 103rpx;margin-right: 4rpx;">
					<text class="font-30 text-333">上传健康档案</text>
				</view>
				<view @click="$U.gotoPage('/pages/sub-packages-user/my/un-sign/index')" class="grid-shadow flex align-center bg-white flex-1 bg-white px-3">
					<img src="@/static/index/sign.png" alt="" srcset=""
						style="width: 95rpx; height: 101rpx;margin-right: 19rpx;">
					<text class="font-30 text-333">在线签约</text>
				</view>
			</view>
			<view class="flex">
				<view @click="$U.gotoPage(`/pages/sub-packages-user/my/online-signing/index?title=在线续约`)" class="grid-shadow flex align-center bg-white flex-1 mr-3 bg-white px-2">
					<img src="@/static/index/container.png" alt="" srcset=""
						style="width: 93rpx; height: 101rpx;margin-right: 9rpx;">
					<text class="font-30 text-333">在线续约</text>
				</view>
				<view @click="$U.gotoPage('/pages/sub-packages-user/my/doctor-introduction/index')" class="grid-shadow flex align-center bg-white flex-1 bg-white px-3">
					<img src="@/static/index/signdot.png" alt="" srcset=""
						style="width: 114rpx; height: 83rpx;margin-right: 12rpx;">
					<text class="font-30 text-333">签约医生</text>
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
					<img src="@/static/index/reservation.png" alt="" srcset="" style="width: 85rpx; height: 90rpx;">
					<text class="font-small text-333">在线预约</text>
				</view>
				<view @click="$U.gotoPage('/pages/sub-packages-user/my/review-file/index')" class="flex flex-column justify-center align-center">
					<img src="@/static/index/review.png" alt="" srcset="" style="width: 82rpx; height: 85rpx;">
					<text class="font-small text-333">查阅健康档案</text>
				</view>
			</view>
		</view>
		<view class="news px-3">
			<view class="news-main px-3 py-3">
				<view class="news-title">
					<img class="news-icon" src="@/static/index/news.png" alt="">
					<text class="news-tip">新闻公告</text>
				</view>
				<block v-for="(item,index) in newsList" :key="index">
					<view @click="$U.gotoPage(`/pages/sub-packages-user/index/news-info/index?id=${item.NewsId}`)" class="news-item">
						<view class="">
							<img class="news-item_img" :src="item.Thumbnai1" alt="" srcset="">
						</view>
						<view class="flex flex-column justify-between pt-1 pb-1">
							<view class="news-item_title overflow-hidden-1">{{ item.Title }}</view>
							<view class="news-item_desc overflow-hidden-2">{{ item.Subheading }}</view>
						</view>
					</view>
				</block>
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
				bannerList: [],
				newsList: [],
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
		created() {
			this.getNewsList();
			this.getBannerList();
		},
		methods: {
			// 获取新闻列表
			getNewsList() {
				this.$H.get('/api/APP/WXUser/GetNewsList')
					.then(res => {
						if(res.Code === 200) {
							this.newsList = res.Data;
						}
					})
			},
			// 获取Banner
			getBannerList() {
				this.$H.get('/api/APP/WXUser/GetBannerList')
					.then(res => {
						if(res.Code === 200) {
							this.bannerList = res.Data;
						}
					})
			},
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
	.news-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx 0;
		border-bottom: 2rpx solid #dcdcdc;
		
		&_img {
			width: 150rpx;
			height: 150rpx;
			margin-right: 30rpx;
		}
		
		&_title {
			color: #797979;
			font-size: 36rpx;
		}
		
		&_desc {
			color: #979797;
			font-size: 32rpx;
		}
	}
	.news-main {
		border-radius: 40rpx;
		background-color: #fff;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.04);
	}
	.news-icon {
		width: 50rpx;
		height: 40rpx;
		margin-right: 13rpx;
	}
	.news-title {
		display: flex;
		align-items: center;
		padding-bottom: 12rpx;
		border-bottom: 2rpx solid #dcdcdc;
	}
	.news-tip {
		font-size: 25rpx;
		font-weight: 400;
		color: #26ACF7;
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
		border-radius: 20rpx;
	}
	
</style>