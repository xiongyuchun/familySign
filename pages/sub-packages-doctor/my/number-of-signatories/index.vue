<template>
	<view class="">
		<my-navbar title="签约人数"></my-navbar>
		<view class="px-3 my-3 search">
			<uni-easyinput prefixIcon="search" v-model="searchVal" placeholder="姓名/身份证号模糊查询" />
		</view>
		<view class="px-3">
			<sign-list :item="signList"></sign-list>
		</view>
	</view>
</template>

<script>
	import signList from '@/pages/sub-packages-doctor/components/doctor/sign-list/index'
	export default {
		components: {
			signList
		},
		data() {
			return {
				signList: {
					btns: [
						{
							name: '问答',
							type: 3
						}
					]
				},
				searchVal: ''
			}
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
	.search {
		width: 576rpx;
		height: 60rpx;
	}
	.user-list {
		height: 213rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0,0,0,0.04);
		border-radius: 30rpx;
	}
	.text-main {
		color: #0D92FB;
		position: relative;
		
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 15%;
			width: 70%;
			height: 4rpx;
			background: #0D92FB;
			border-radius: 2rpx;
		}
	}
	.tip-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// padding: 0 150rpx;
		margin: 36rpx 0;
		box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(0,0,0,0.06);
	}
	.score {
		width: 26rpx;
		height: 26rpx;
		margin-right: 6rpx;
	}
	.go-sign {
		padding: 14rpx 42rpx;
		background-color: #FFFFFF;
		border: 1px solid #4EB4F8;
		border-radius: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #4EB4F8;
		font-size: 23rpx;
	}
	.go-seek {
		padding: 14rpx 32rpx;
		background: linear-gradient(90deg, #17BDFF, #1D8CFF);
		border-radius: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 23rpx;
	}
	.doc-list {
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0,0,0,0.04);
		border-radius: 30rpx;
		padding: 30rpx 60rpx 40rpx 30rpx;
		margin-bottom: 28rpx;
		
		&-photo {
			margin-bottom: 25rpx;
			
			&_img {
				width: 115rpx;
				height: 115rpx;
				border: 50%;
				
			}
			
		}
		
		&-dep {
			padding: 10rpx;
			background: #F0F5FF;
			border-radius: 4rpx;
			margin-right: 20rpx;
			font-size: 20rpx;
			color: #999;
		}
		
		&-name {
			font-size: 27rpx;
			font-weight: 400;
			color: #666666;
		}
		
		&-username {
			color: #333;
			font-size: 28rpx;
			margin-right: 28rpx;
		}
		
		&-desc {
			color: #666666;
			font-size: 24rpx;
		}
	}
	::v-deep .is-input-border {
		border: none !important;
		background-color: #e7e7e7 !important;
		border-radius: 40rpx;
	}
	::v-deep .arrow-area {
		transform: rotate(-135deg) !important;
	}
	::v-deep .input-value {
		border: none !important;
		background-color: #e7e7e7 !important;
		border-radius: 40rpx;
	}
</style>