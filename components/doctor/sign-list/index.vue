<template>
	<view @click="$U.gotoPage('/pages/sub-packages-doctor/my/user-detail/index')" class="doc-list position-relative">
		<view class="doc-list-photo flex align-center">
			<view class="mr-2">
				<img class="doc-list-photo_img" src="@/static/default.jpg" alt="" srcset="">
			</view>
			<view class="flex flex-column justify-between">
				<view class="flex align-center mb-2">
					<view class="doc-list-username">和天真</view>
					<view class="flex">
						<view class="doc-list-dep">男</view>
						<view class="doc-list-dep">26岁</view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex justify-end">
			<view @click.stop="btnClick(item.btns[0])" class="" v-if="item.btns.length === 1">
				<view class="width-160 go-seek">{{item.btns[0]['name']}}</view>
			</view>
			<template v-else>
				<view @click.stop="btnClick(item.btns[0])" class="width-160 go-sign mr-3">
					{{item.btns[0]['name'] || ''}}
				</view>
				<view @click.stop="btnClick(item.btns[1])" class="width-160 go-seek">{{item.btns[1]['name'] || ''}}</view>
			</template>
		</view>
		<!-- 箭头 -->
		<uni-icons class="forward" type="forward" size="20" color="#999"></uni-icons>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			item: {
				type: Object,
				default: {}
			}
		},
		methods: {
			btnClick(item) {
				this.$emit('btnClick', item)
			}
		},
	}
</script>

<style scoped lang="scss">
	.width-160 {
		width: 160rpx;
		height: 52rpx;
	}
	.forward {
		position: absolute;
		right: 60rpx;
		top: 100rpx;
	}
	.go-sign {
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
				width: 120rpx;
				height: 120rpx;
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
			font-size: 30rpx;
			margin-right: 28rpx;
		}
		
		&-desc {
			color: #666666;
			font-size: 24rpx;
		}
	}
</style>