<template>
	<view class="">
		<view class="top-bg">
			<img style="width: 100%;" src="@/static/my/user-register.png" alt="" srcset="">
		</view>
		<view class="register-main">
			<view class="bg-white px-3 register-main-item">
				<uni-forms ref="form" :modelValue="baseFormData" :rules="rules">
					<uni-forms-item label-width="280rpx" label="姓名" name="Name" label-align="left" required>
						<uni-easyinput v-model="baseFormData.Name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label-width="280rpx" label="性别" name="Sex" label-align="left" required>
						<uni-data-checkbox v-model="baseFormData.Sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label-width="280rpx" label="年龄" name="Age" label-align="left" required>
						<uni-easyinput v-model="baseFormData.Age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label-width="280rpx" label="身份证号" name="IDCard" label-align="left" required>
						<uni-easyinput v-model="baseFormData.IDCard" placeholder="请输入身份证号" />
					</uni-forms-item>
					<uni-forms-item label-width="280rpx" label="手机号" name="PhoneNumber" label-align="left" required>
						<uni-easyinput v-model="baseFormData.PhoneNumber" placeholder="请输入手机号" />
					</uni-forms-item>
					<uni-forms-item label-width="280rpx" label="验证码" label-align="left" required>
						<uni-easyinput v-model="baseFormData.verify" placeholder="请输入验证码">
							<template v-slot:right>
								<view class="get-verify">获取验证码</view>
							</template>
						</uni-easyinput>
					</uni-forms-item>
					<uni-forms-item label-width="280rpx" label="选择居住地" name="City" label-align="left" required>
						<uni-data-picker placeholder="请选择居住地" popup-title="请选择所在地区" :localdata="dataTree"
							v-model="baseFormData.City" @change="onchange" @nodeclick="onnodeclick"
							@popupopened="onpopupopened" @popupclosed="onpopupclosed">
						</uni-data-picker>
					</uni-forms-item>
					<uni-forms-item label-width="280rpx" label="登录密码" name="Password" label-align="left" required>
						<uni-easyinput v-model="baseFormData.Password" placeholder="请输入8到16位密码" />
					</uni-forms-item>
					<uni-forms-item label-width="280rpx" label="确认密码" name="confirmPassword" label-align="left" required>
						<uni-easyinput v-model="baseFormData.confirmPassword" placeholder="请再次确认密码" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</view>
		<view class="submit">
			<view @click="register()" class="submit-btn">
				立即注册
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
					Name: '',
					Age: '',
					Sex: 2,
					PhoneNumber: '',
					IDCard: '',
					verify: '',
					Password: '',
					confirmPassword: '',
					City: '',

				},
				rules: {
					Name: {
						rules: [
							{
								required: true,
								errorMessage: '请输入姓名',
							}
						]
					},
					Age: {
						rules: [
							{
								required: true,
								errorMessage: '请输入年龄',
							}
						]
					},
					Sex: {
						rules: [
							{
								required: true,
								errorMessage: '请选择性别',
							}
						]
					},
					IDCard: {
						rules: [
							{
								required: true,
								errorMessage: '请输入身份证号',
							}
						]
					},
					PhoneNumber: {
						rules: [
							{
								required: true,
								errorMessage: '请输入手机号',
							},
							{
								minLength: 0,
								maxLength: 11,
								errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					}
				},
				// 单选数据源
				sexs: [{
					text: '男',
					value: 1
				}, {
					text: '女',
					value: 2
				}],
				dataTree: [{
						text: "江西",
						value: "1-0",
						children: [{
								text: "南昌",
								value: "1-1"
							},
							{
								text: "九江",
								value: "1-2"
							}
						]
					},
					{
						text: "广东",
						value: "2-0",
						children: [{
								text: "深圳",
								value: "2-1"
							},
							{
								text: "广州",
								value: "2-2"
							}
						]
					}
				]
			}
		},
		methods: {
			// 立即注册
			register() {
				this.$H.post('/api/APP/WXUserAccount/Register', this.baseFormData)
					.then(res => {
						if(res.Code === 200) {
							this.$U.gotoPage('/pages/login/index')
						}
					})
			},
			onnodeclick(e) {
				console.log(e);
			},
			onpopupopened(e) {
				console.log('popupopened');
			},
			onpopupclosed(e) {
				console.log('popupclosed');
			},
			onchange(e) {
				console.log('onchange:', e);
			},
		},
	}
</script>

<style scoped lang="scss">
	.top-bg {
		height: 300rpx;
	}
	.register-main {
		background-color: #fdfdfd;
		border-radius: 35rpx;
		padding: 0rpx 20rpx;
		position: relative;
		
		&-item {
			padding: 30rpx;
			border-radius: 35rpx;
			box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(0, 0, 0, 0.06);
		}
		
	}
	.submit {
		width: 100%;
		padding: 0 60rpx;
		height: 168rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
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
		align-items: center;
		height: 88rpx;
		border-bottom: 1rpx solid #EEEFF7;
		margin-bottom: 0;
		
		&:last-child {
			border-bottom: none;
		}
		
	}
	::v-deep .uni-forms-item__error.msg--active {
		transform: translateY(-75%);
		left: 10px;
	}
</style>