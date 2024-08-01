<template>
	<view class="">
		<special-navbar>
			<view class="top-title text-white flex align-center justify-center">
				<view @click="$U.backPage(1)" class="back">
					<uni-icons type="back" size="20" color="#fff"></uni-icons>
				</view>
				<view>查阅健康档案</view>
			</view>
		</special-navbar>
		<view class="user-info pl-3">
			<view class="user-info-main flex">
				<view class="user-info-main_left">
					<img class="user-photo" src="https://jtysqy.cuixiaoler.com:1703/static/default.jpg" alt="" srcset="">
				</view>
				<view class="user-info-main_right w-100">
					<view class="user-info-main_right_top flex justify-between align-end w-100">
						<view class="flex align-end">
							<view class="font text-white mr-2">陈磊</view>
							<view class="user-sign text-white">已签约</view>
						</view>
						<view class="text-white" style="font-size: 16rpx;">医生：胡珍珍</view>
					</view>
					<view class="user-info-main_right_bottom flex justify-between align-center w-100">
						<view class="flex">
							<view class="user-icon mr-2">男</view>
							<view class="user-icon">26</view>
						</view>
						<view class="text-white" style="font-size: 16rpx;">日期：2023-8-8</view>
					</view>
				</view>
			</view>
		</view>
		<view class="px-3 mt-4">
			<view class="user-content">
				<!-- <view class="user-content-time">2023年</view> -->
				<view class="user-content-time">
					<picker mode="date" fields="year" :value="date" @change="bindDateChange">
						<view class="uni-input">{{date}}年</view>
					</picker>
				</view>
				<view>
					<view class="user-time-icon">
						<img class="user-step-time" src="@/pages/sub-packages-user/static/time.png" alt="" srcset="">
						<view class="user-time-icon-line"></view>
					</view>
					<my-steps :item="stepList"></my-steps>
				</view>
			</view>
		</view>
		<view style="height: 88rpx;"></view>
	</view>
</template>

<script>
	import mySteps from '@/components/my-steps/index.vue';
	export default {
		components: {
			mySteps
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date: currentDate,
				statusBarHeight: 25,
				stepList: [
					{
						"id": 1,
						"MMDD": "06.25",
						"data": [{
							"doc": {
								"d_name": "张三",
								"HMS": "10:30:48",
								"talk": "测试数据测试数据测试数据测试数据"
							},
							"user": {
								"u_name": "李四",
								"HMS": "10:20:18",
								"talk": "测试数据测试数据测试数据",
								"imgUrl": ["/static/my/add.png"]
							}
						}]
					},
					{
						"id": 2,
						"MMDD": "08.25",
						"data": [
							{
								"u_name": "李四",
								"HMS": "10:20:18",
								"talk": "测试数据测试数据测试数据",
								"imgUrl": ["/static/my/add.png"]
							},
						]
					},
				]
			}
		},
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
		},
		methods: {
			bindDateChange(e) {
				this.date = e.detail.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}`;
			},
			handleClick() {
				console.log(123);
			}
		},
	}
</script>

<style scoped lang="scss">
	.back {
		position: absolute;
		left: 30rpx;
		top: 14px;
		color: #fff;
		z-index: 990;
	}
	.user-time-icon {
		margin-left: calc(10% + 56rpx);
		position: relative;
		
		&-line {
			height: 58rpx;
			top: 46rpx;
			left: 19rpx;
			border-left: #c6c6c6 1px solid;
			position: absolute;
			border-left-width: 1px;
			border-left-style: solid;
			border-left-color: rgb(198, 198, 198);
		}
	}
	.top-title {
		height: 44px;
		display: flex;
		color: #fff;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.user-info {
		position: relative;
		margin-top: -270rpx;
		padding-right: 70rpx;
		
		&-main {
			
			&_right {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
			}
			
		}
		
	}
	.user-content {
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(0,0,0,0.06);
		border-radius: 24rpx;
	}
	.user-photo {
		width: 128rpx;
		height: 128rpx;
		border-radius: 50%;
		margin-right: 25rpx;
	}
	.user-icon {
		width: 50rpx;
		height: 32rpx;
		background-color: #4EB4F8;
		border-radius: 4rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
		color: #fff;
	}
	.user-sign {
		width: 64rpx;
		height: 25rpx;
		background-color: #0982DB;
		border-radius: 13rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16rpx;
	}
	.user-content {
		padding: 50rpx 30rpx;
		overflow: hidden;
		
		&-time {
			width: 150rpx;
			height: 40rpx;
			border-radius: 40rpx;
			display: flex;
			align-items: center;
			background-color: #069cf8;
			color: #fff;
			font-weight: 400;
			font-size: 28rpx;
			position: relative;
			padding-left: 11rpx;
			margin-bottom: 16rpx;
			
			&::after {
				display: flex;
				position: absolute;
				right: 20rpx;
				height: 13rpx;
				content: '';
				width: 0;
				height: 0;
				border-left: 10rpx solid transparent; /* 左边透明 */
				border-right: 10rpx solid transparent; /* 右边透明 */
				border-top: 17rpx solid white; /* 上边白色 */
			}
			
		}
		
	}
	.user-step-time {
		width: 47rpx;
		height: 47rpx;
		margin-left: -2rpx;
	}
	
	::v-deep .navbar {
		height: 468rpx;
		
		&::after {
			height: 468rpx;
		}
	}
</style>