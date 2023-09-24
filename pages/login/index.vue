<template>
	<view class="">
		<view class="top-bg">
			<img style="width: 100%;" src="@/static/my/user-login.png" alt="" srcset="">
			<text class="top-bg-txt">登录</text>
		</view>
		<view class="register-main">
			<view class="bg-white register-main-item">
				<uni-forms ref="baseForm" :modelValue="baseFormData" label-position="top">
					<uni-forms-item label-width="280rpx" label="账户" label-align="left">
						<template v-slot:label>
							<view class="flex align-center height-50rpx">
								<img style="width: 38rpx; height: 49rpx;" class="mr-2" src="@/static/my/username.png" alt="">
								<text style="font-size: 34rpx; color: #333;">账户</text>
							</view>
						</template>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入身份证号" />
					</uni-forms-item>
					<uni-forms-item label-width="280rpx" label="密码" label-align="left">
						<template v-slot:label>
							<view class="flex align-center height-50rpx">
								<img style="width: 42rpx; height: 53rpx;" class="mr-2" src="@/static/my/password.png" alt="">
								<text style="font-size: 34rpx; color: #333;">密码</text>
							</view>
						</template>
						<uni-easyinput v-model="baseFormData.pass" placeholder="请输入密码" />
					</uni-forms-item>
					<uni-forms-item label-width="280rpx" label="居住地" label-align="left">
						<template v-slot:label>
							<view class="flex align-center height-50rpx">
								<img style="width: 44rpx; height: 46rpx;" class="mr-2" src="@/static/my/address.png" alt="">
								<text style="font-size: 34rpx; color: #333;">居住地</text>
							</view>
						</template>
						<view class="" style="font-size: 27rpx; color: #999;">{{baseFormData.introduction}}</view>
					</uni-forms-item>
				</uni-forms>
			</view>
		</view>
		<view class="submit">
			<view @click="login" class="submit-btn">
				立即登录
			</view>
			<view class="" style="font-size: 27rpx; color: #999; margin-top: 40rpx;">
				<text>还没有账号？</text><text @click="$U.gotoPage('/pages/login/register')" style="color: #1A85EB;">注册</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 基础表单数据
				baseFormData: {
					name: '',
					pass: '',
					introduction: '江西省景德镇市',

				},
			}
		},
		methods: {
			login() {
				if(this.baseFormData.name === '') {
					uni.showToast({
						icon: 'none',
						title: '账户不能为空！'
					});
					return;
				}
				if(this.baseFormData.pass === '') {
					uni.showToast({
						icon: 'none',
						title: '密码不能为空！'
					});
					return;
				}
				this.$store.commit('login',{
					name: this.baseFormData.name,
					token: 'token'
				})
				this.$U.gotoPageTab('/pages/index/index');
				// 显示tabbar
				uni.showTabBar({ animation: true });
			}
		},
	}
</script>

<style>
	page {
		background-color: #fff !important;
	}
</style>

<style scoped lang="scss">
	.top-bg {
		height: 463rpx;
		display: flex;
		justify-content: center;
		position: relative;
		
		&-txt {
			position: absolute;
			top: 240rpx;
			color: #fff;
			font-size: 50rpx;
		}
		
	}
	.height-50rpx {
		height: 50rpx;
		margin-bottom: 20rpx;
	}
	.register-main {
		border-radius: 35rpx;
		padding: 50rpx 20rpx;
		position: relative;
		
		&-item {
			padding: 30rpx;
			// border-radius: 35rpx;
			// box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(0, 0, 0, 0.06);
		}
		
	}
	.submit {
		width: 100%;
		padding: 0 60rpx;
		height: 168rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 60rpx;
		left: 0;
		box-sizing: border-box;
		
		&-btn {
			height: 88rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: rgb(40, 120, 255);
			color: #fff;
			font-size: 32rpx;
			border-radius: 44rpx;
		}
		
	}
	.get-verify {
		background-color: rgb(40, 120, 255);
		color: #fff;
		border-radius: 20rpx;
		width: 160rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
	}
	::v-deep .uni-forms-item__label {
		color: #333 !important;
		font-size: 30rpx !important;
	}
	::v-deep .is-input-border {
		border: none !important;
	}
	::v-deep .input-value {
		border: none !important;
	}
	::v-deep .uni-forms-item {
		display: flex;
		height: 160rpx;
		border-bottom: 1rpx solid #EEEFF7;
		margin-bottom: 0;
		padding: 18rpx 0;
		box-sizing: border-box;
	}
</style>