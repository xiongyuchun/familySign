<template>
	<view class="">
		<my-navbar title="联系我们"></my-navbar>
		<view class="px-3">
			<map style="width: 100%; height: 300px;margin-top: 70rpx;" :latitude="latitude"
				:longitude="longitude"></map>
			<view class="map-info">
				<view class="map-info-item flex align-center">
					<img style="width: 36rpx; height: 36rpx;" src="@/pages/sub-packages-user/static/tel.png" alt="" srcset="">
					<text class="color-333">联系电话:</text>
					<text class="color-89">0798-8443182</text>
				</view>
				<view class="map-info-item flex align-center">
					<img src="@/static/my/map.png" alt="" srcset="" style="width: 33rpx; height: 43rpx;">
					<text class="color-333">详细地址:</text>
					<text class="color-89">景德镇市珠山区陶阳中路76号</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				// latitude: 39.909,
				// longitude: 116.39742,
				latitude: '',
				longitude: ''
			}
		},
		mounted() {
			// this.getLocation()
			this.latitude = 22.71991
			this.longitude = 114.24779
		},
		methods: {
			// 获取当前位置
			getLocation() {
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						console.log('abc')
						uni.getLocation({
							type: 'wgs84',
							success(res) {
								console.log('当前位置的经度：' + res.longitude);
								console.log('当前位置的纬度：' + res.latitude);
								// console.log('当前位置：', res);
								this.latitude = 114.24779
								this.longitude = 22.71991
							}
						});
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.map-info {
		background-color: #fff;
		box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(0, 0, 0, 0.06);
		border-radius: 18rpx;
		padding: 35rpx;
		margin-top: 37rpx;

		&-item {
			padding: 35rpx 0;
		}

		&-item:first-child {
			border-bottom: 1rpx solid #EEEFF7;
		}
	}

	.color-333 {
		color: #333;
		font-size: 28rpx;
		margin-left: 14rpx;
		margin-right: 28rpx;
	}

	.color-89 {
		color: #898989;
		font-size: 25rpx;
	}
</style>