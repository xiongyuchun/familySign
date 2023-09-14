<template>
	<view class="">
		<my-navbar title="切换成员"></my-navbar>
		<view class="user-list">
			<view @click="cahngeList(1)" class="user-item" :class="{'user-item-active' : sign_status === 1}">
				<view class="flex">
					<img class="user-item_photo" src="@/static/default.jpg" alt="" srcset="">
					<view class="flex flex-column" style="justify-content: space-around;">
						<text class="font" style="color: #0A1117;">崔磊</text>
						<text class="sign" :class="{'sign-active' : sign_status === 1}">{{sign_status === 1 ? '已签约' : '未签约'}}</text>
					</view>
				</view>
				<view v-if="sign_status === 1" class="flex justify-between align-center">
					<text style="margin-right: 6rpx; color: #069CF8; font-size: 20rpx;">当前默认</text>
					<img class="user-item_select" src="@/static/my/select-user.png" alt="" srcset="">
				</view>
			</view>
			<view @click="cahngeList(2)" class="user-item" :class="{'user-item-active' : sign_status === 2}">
				<view class="flex">
					<img class="user-item_photo" src="@/static/default.jpg" alt="" srcset="">
					<view class="flex flex-column" style="justify-content: space-around;">
						<text class="font" style="color: #0A1117;">崔丽丽</text>
						<text class="sign" :class="{'sign-active' : sign_status === 2}">{{sign_status === 2 ? '已签约' : '未签约'}}</text>
					</view>
				</view>
				<view v-if="sign_status === 2" class="flex justify-between align-center">
					<text style="margin-right: 6rpx; color: #069CF8; font-size: 20rpx;">当前默认</text>
					<img class="user-item_select" src="@/static/my/select-user.png" alt="" srcset="">
				</view>
			</view>
			<view class="user-item">
				<view class="flex">
					<img class="user-item_photo" src="@/static/my/add.png" alt="" srcset="">
					<view class="flex flex-column" style="justify-content: space-around;">
						<text class="font" style="color: #069CF8;">添加成员</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sign_status: 1
			}
		},
		methods: {
			cahngeList(val) {
				this.sign_status = val
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
	.user-list {
		padding: 30rpx;
	}
	.user-item {
		padding: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 159rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(0,0,0,0.06);
		border-radius: 24rpx;
		margin-bottom: 40rpx;
		border: 2rpx solid transparent;
		
		&_photo {
			width: 128rpx;
			height: 128rpx;
			border-radius: 50%;
			margin-right: 24rpx;
		}
		
		&_select {
			width: 25rpx;
			height: 25rpx;
		}
	}
	.user-item-active {
		border: 2rpx solid #069CF8;
	}
	.sign {
		width: 64rpx;
		height: 25rpx;
		background: #C1C1C1;
		border-radius: 13rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16rpx;
		color: #FFFFFF;
	}
	.sign-active {
		background: #069CF8;
	}
</style>