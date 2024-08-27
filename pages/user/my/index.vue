<template>
	<view class="my">
		<special-navbar>
			<view class="flex flex-column" style="position: relative;">
				<view class="top-title">我的</view>
				<view class="navbar-info flex">
					<view class="navbar-info_photo">
						<img v-if="userInfo.HeadImgUrl" :src="$C.imgDomain('/'+userInfo.HeadImgUrl)" class="navbar-info_photo_img" alt="" srcset="">
						<img v-else src="@/pages/sub-packages-user/static/default.jpg" class="navbar-info_photo_img" alt="" srcset="">
					</view>
					<view class="navbar-info_introduce flex flex-column w-100">
						<view class="navbar-info_introduce_name mb-3 font flex justify-between align-center w-100">
							<view class="flex align-center">
								<text>{{userInfo.Name}}</text>
								<text class="un-sign">未签约</text>
							</view>
							<view @click="$U.gotoPage('/pages/sub-packages-user/my/change-user/index')" class="flex align-center">
								<img style="width: 29rpx; height: 29rpx;" src="@/static/my/change-user.png" alt="" srcset="">
								<text style="font-size: 25rpx;margin-left: 10rpx;" class="text-white">切换成员</text>
							</view>
						</view>
						<view class="navbar-info_introduce_main flex align-center">
							<text class="font-small flex justify-center align-center text">{{userInfo.Sex == 1 ? '男' : '女'}}</text>
							<text v-if="userInfo.Age" class="font-small flex justify-center align-center text">{{userInfo.Age}}</text>
						</view>
					</view>
				</view>
			</view>
		</special-navbar>
		<view class="my-list shadow">
			<view @click="$U.gotoPage('/pages/sub-packages-user/my/upload-info/index?type=info')" class="my-list-item flex align-center justify-between">
				<view class="flex align-center">
					<img class="my-list-item_img" :src="$C.imgDomain('/static/my/info.png')" alt="">
					<text class="my-list-item_info">个人资料</text>
				</view>
				<view class="flex align-center">
					<uni-icons class="my-list-item_icon" type="forward"></uni-icons>
				</view>
			</view>
			<view @click="$U.gotoPage('/pages/sub-packages-user/my/change-user/index?type=bind')" class="my-list-item flex align-center justify-between">
				<view class="flex align-center">
					<img class="my-list-item_img" :src="$C.imgDomain('/static/my/bind-user.png')" alt="">
					<text class="my-list-item_info">绑定成员</text>
				</view>
				<view class="flex align-center">
					<uni-icons class="my-list-item_icon" type="forward"></uni-icons>
				</view>
			</view>
			<view @click="$U.gotoPage('/pages/sub-packages-user/my/add-file/index')" class="my-list-item flex align-center justify-between">
				<view class="flex align-center">
					<img class="my-list-item_img" :src="$C.imgDomain('/static/index/uploadInfo.png')" alt="">
					<text class="my-list-item_info">上传健康档案</text>
				</view>
				<view class="flex align-center">
					<uni-icons class="my-list-item_icon" type="forward"></uni-icons>
				</view>
			</view>
			<view  @click="$U.gotoPage('/pages/sub-packages-user/my/review-file/index')" class="my-list-item flex align-center justify-between">
				<view class="flex align-center">
					<img class="my-list-item_img" :src="$C.imgDomain('/static/my/review.png')" alt="">
					<text class="my-list-item_info">查看健康档案</text>
				</view>
				<view class="flex align-center">
					<uni-icons class="my-list-item_icon" type="forward"></uni-icons>
				</view>
			</view>
			<view @click="$U.gotoPage('/pages/sub-packages-user/my/contact-us/index')" class="my-list-item flex align-center justify-between">
				<view class="flex align-center">
					<img class="my-list-item_img" :src="$C.imgDomain('/static/my/email.png')" style="height: 30rpx;" alt="">
					<text class="my-list-item_info">联系我们</text>
				</view>
				<view class="flex align-center">
					<uni-icons class="my-list-item_icon" type="forward"></uni-icons>
				</view>
			</view>
			<view @click="$U.gotoPage('/pages/sub-packages-user/my/about/index')" class="my-list-item flex align-center justify-between">
				<view class="flex align-center">
					<img class="my-list-item_img" :src="$C.imgDomain('/static/my/about.png')" alt="">
					<text class="my-list-item_info">关于</text>
				</view>
				<view class="flex align-center">
					<uni-icons class="my-list-item_icon" type="forward"></uni-icons>
				</view>
			</view>
			<view @click="logout" class="my-list-item flex align-center justify-between">
				<view class="flex align-center">
					<img class="my-list-item_img" :src="$C.imgDomain('/static/my/logout.png')" alt="">
					<text class="my-list-item_info">退出登录</text>
				</view>
				<view class="flex align-center">
					<uni-icons class="my-list-item_icon" type="forward"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	const GoEasy = uni.$GoEasy;
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		computed: {
			...mapState(['user']),
		},
		watch: {
			user: {
				handler(newValue, oldValue) {
					console.log('newValue:', newValue)
					for (let key in newValue.userInfo) {
						this.$set(this.userInfo, key, newValue.userInfo[key])
					}
				},
				deep: true,
				immediate: true,
			}
		},
		methods: {
			async logout(path) {
				uni.showLoading({
					title: '退出成功',
				});
				setTimeout(() => {
					this.$store.dispatch('app/clearToken')
					this.imOff();
					this.$U.gotoPageAndClosePage('/pages/login/index')
				}, 100)
			},
			// im 断开连接
			imOff() {
				GoEasy.disconnect({
					onSuccess: function(){
						console.log("GoEasy disconnect successfully.")
					},
					onFailed: function(error){
						console.log("Failed to disconnect GoEasy, code:"+error.code+ ",error:"+error.content);
					}
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	.un-sign {
		font-size: 25rpx;
		font-weight: 500;
		color: #FFFFFF;
		border: 1px solid #fff;
		border-radius: 40rpx;
		margin-left: 16rpx;
		padding: 0rpx 11rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.top-title {
		height: 44px;
		display: flex;
		color: #fff;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.navbar_title {
		margin-top: 68rpx;
		color: #fff;
		font-size: 32rpx;
		margin-bottom: 42rpx;
	}
	.navbar-info {
		padding: 0 30rpx;
		padding-top: 20rpx;
		&_photo {
			margin-right: 24rpx;
			&_img {
				width: 128rpx;
				height: 128rpx;
				border-radius: 50%;
				background-color: transparent;
			}
			
		}
		
		&_introduce {
			color: #fff;
			&_name {
			}
			
			&_main {
				
			}
			
		}
	}
	
	.my-list {
		margin: 0 30rpx;
		border-radius: 30rpx;
		margin-top: -110rpx;
		background-color: #fff;
		position: relative;
		z-index: 2;
		
		&-item {
			height: 100rpx;
			padding: 0 30rpx;
			background-color: transparent;
			border-bottom: 1rpx solid #EEEFF7;
			
			&_img {
				width: 40rpx;
				height: 40rpx;
				margin-right: 23px;
				background-color: transparent;
			}
			
			&_info {
				color: #333333;
				font-size: 28rpx;
			}
			
			&_icon {
				color: #BBBBBB;
			}
			
		}
		
	}
	
	.text {
		color: #fff;
		background-color: #4eb4f8;
		width: 50rpx;
		height: 32rpx;
		border-radius: 8rpx;
		margin-right: 16rpx;
	} 
	::v-deep .navbar {
		height: 468rpx;
		
		&::after {
			height: 468rpx;
		}
	}
</style>