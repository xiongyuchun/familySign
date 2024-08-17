<template>
	<scroll-view ref="scrollView" scroll-y="true">
		<view class="upload-info">
			<view class="top-bg">
				<img class="w-100 bg-upload" src="@/pages/sub-packages-doctor/static/bg-upload.png" alt="" srcset="">
				<view :style="{ height: statusBarHeight }" class="w-100"></view>
				<view class="title text-white font flex justify-center align-center">
					<view @click="$U.backPage(1)">
						<uni-icons class="back" type="back" size="20" color="#fff"></uni-icons>
					</view>
					<view class="">注册</view>
				</view>
			</view>
			<view style="padding: 0 30rpx; position: relative; margin-top: -300rpx;">
				<view class="upload-info_item">
					<uni-forms ref="baseForm" :modelValue="alignmentFormData" label-position="top">
						<uni-forms-item label="头像" required>
							<view class="flex flex-column justify-center align-center" @click="chooseImage('HeadImgUrl')">
								<img v-if="baseFormData.HeadImgUrl" style="width: 128rpx; height: 128rpx;"
									:src="baseFormData.HeadImgUrl" alt="" srcset="">
								<img v-else style="width: 128rpx; height: 128rpx;" src=":src="$C.imgDomain('/static/default.jpg')" alt="" srcset="">
								<view style="color: #5581FF; font-size: 20rpx;">更换头像</view>
							</view>
						</uni-forms-item>
						<uni-forms-item label="姓名" required>
							<uni-easyinput v-model="baseFormData.Name" placeholder="请输入姓名" />
						</uni-forms-item>
						<uni-forms-item label="身份证号" required>
							<uni-easyinput v-model="baseFormData.IDCard" placeholder="请输入身份证号" />
						</uni-forms-item>
						<uni-forms-item label="性别" required>
							<uni-data-checkbox v-model="baseFormData.Sex" :localdata="sexs" />
						</uni-forms-item>
						<uni-forms-item label="手机号" required>
							<uni-easyinput v-model="baseFormData.PhoneNumber" placeholder="请输入手机号码" />
						</uni-forms-item>
						<uni-forms-item label-width="300" label="工作单位" required>
							<uni-data-picker placeholder="请输入工作单位" popup-title="请选择所在地区" :localdata="dataTree" v-model="baseFormData.UnitId"
								@change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
							</uni-data-picker>
						</uni-forms-item>
						<uni-forms-item label-width="300" label="上传身份证正反面" required>
							<text class="tip flex">请拍摄并上传你的有效身份证</text>
							<view class="flex">
								<img @click="chooseImage('IDCardFrontUrl')" v-if="baseFormData.IDCardFrontUrl" class="id-card" :src="baseFormData.IDCardFrontUrl" alt=""
									srcset="" style="margin-right: 40rpx;">
								<img @click="chooseImage('IDCardFrontUrl')" v-else class="id-card" src="@/pages/sub-packages-doctor/static/idcard1.png" alt="" srcset=""
									style="margin-right: 40rpx;">
								<img @click="chooseImage('IDCardBackUrl')" v-if="baseFormData.IDCardBackUrl" class="id-card" :src="baseFormData.IDCardBackUrl" alt=""
									srcset="" style="margin-right: 40rpx;">
								<img @click="chooseImage('IDCardBackUrl')" v-else class="id-card" src="@/pages/sub-packages-doctor/static/idcard2.png" alt="" srcset="">
							</view>
						</uni-forms-item>
						<uni-forms-item label-width="300" label="职业资格证书" required>
							<text class="tip flex">请拍摄并上传你的职业资格证书</text>
							<view class="flex justify-center">
								<img @click="chooseImage('CertificationUrl')" v-if="baseFormData.CertificationUrl" class="id-card" :src="baseFormData.CertificationUrl" alt=""
									srcset="" style="margin-right: 40rpx;">
								<img @click="chooseImage('CertificationUrl')" v-else class="id-card" src="@/pages/sub-packages-doctor/static/professionalCertificate.png" alt="" srcset=""
									style="margin-right: 40rpx;">
							</view>
						</uni-forms-item>
						<uni-forms-item label-width="280rpx" label="登录密码" name="Password" label-align="left" required>
							<uni-easyinput v-model="baseFormData.Password" type="password" placeholder="请输入8到16位密码" />
						</uni-forms-item>
						<uni-forms-item label-width="280rpx" label="确认密码" name="confirmPassword" label-align="left" required>
							<uni-easyinput v-model="baseFormData.confirmPassword" type="password" placeholder="请再次确认密码" />
						</uni-forms-item>
					</uni-forms>
				</view>
			</view>
			<view class="auth">
				<label @click="handAuth" class="auth-radio">
					<radio color="rgb(0, 122, 255)" :checked="auth" />
					<text style="line-height: 1;">
						我已阅读
						<text @click.stop="queryPrivacyAuth" class="auth-text">(用户协议及隐私条款)</text>
					</text>
				</label>
			</view>
			<view @click="register" class="flex justify-center w-100 pb-5 pt-5">
				<view class="submit flex align-center justify-center">确定</view>
			</view>
			<privacy-authorization ref="privacyAuth"></privacy-authorization>
		</view>
	</scroll-view>
</template>

<script>
	import privacyAuthorization from './components/privacy-authorization/privacy-authorization.vue';
	export default {
		components: {
			privacyAuthorization
		},
		data() {
			return {
				auth: false,
				statusBarHeight: 25,
				// 基础表单数据
				baseFormData: {
					HeadImgUrl: "",
					Name: "",
					IDCard: "",
					Password: "",
					confirmPassword: "",
					Sex: 1,
					PhoneNumber: "",
					UnitId: "be370a98-3c97-4a49-95f8-359a8ab88e63",
					IDCardFrontUrl: "",
					IDCardBackUrl: "",
					CertificationUrl: ""
				},
				HeadImgUrl: '',
				IDCardFrontUrl: '',
				IDCardBackUrl: '',
				CertificationUrl: '',
				// 表单数据
				alignmentFormData: {
					name: '',
					age: '',
				},
				// 单选数据源
				sexs: [{
					text: '男',
					value: 1
				}, {
					text: '女',
					value: 2
				}],
				classes: '',
				dataTree: [{
						text: "江西",
						value: "1-0",
						children: [{
								text: "南昌",
								value: "be370a98-3c97-4a49-95f8-359a8ab88e63"
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
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
		},
		methods: {
			// 隐私协议点击
			handAuth() {
				this.auth = !this.auth;
			},
			// 查看隐私协议-打开弹窗
			queryPrivacyAuth() {
				this.$refs.privacyAuth.open()
			},
			// 立即注册
			async register() {
				const { Name, Sex, PhoneNumber, IDCard, verify, Password, confirmPassword, UnitId } = this.baseFormData;
				if(this.$U.dateUtils.isEmpty(Name)) {
					this.$U.checkTip('姓名不能为空！')
					return;
				}
				if(this.$U.dateUtils.isEmpty(IDCard)) {
					this.$U.checkTip('身份证号不能为空！')
					return;
				}
				if(!this.$U.dateUtils.isIDcard(IDCard)) {
					this.$U.checkTip('身份证号格式错误！')
					return;
				}
				if(this.$U.dateUtils.isEmpty(PhoneNumber)) {
					this.$U.checkTip('手机号不能为空！')
					return;
				}
				if(!this.$U.dateUtils.isTel(PhoneNumber)) {
					this.$U.checkTip('手机号格式错误！')
					return;
				}
				if(this.$U.dateUtils.isEmpty(UnitId)) {
					this.$U.checkTip('工作单位不能为空！')
					return;
				}
				if(this.$U.dateUtils.isEmpty(Password)) {
					this.$U.checkTip('登录密码不能为空！')
					return;
				}
				if(!this.$U.dateUtils.validatePassword(Password)) {
					this.$U.checkTip('密码必须8-16位，字母和数字组合！')
					return;
				}
				if(this.$U.dateUtils.isEmpty(confirmPassword)) {
					this.$U.checkTip('确认密码不能为空！')
					return;
				}
				if(Password !== confirmPassword) {
					this.$U.checkTip('登录密码与确认密码不一致！')
					return;
				}
				if(!this.auth) {
					this.$U.checkTip('请先阅读用户协议及隐私条款')
					return;
				}
				// 先上传图片
				await this.uploadImg();
				const params = {
					...this.baseFormData
				}
				if(this.HeadImgUrl && !this.HeadImgUrl.startsWith('http')) {
					params.HeadImgUrl = this.HeadImgUrl // 头像远程数据
				}
				if(this.IDCardFrontUrl && !this.IDCardFrontUrl.startsWith('http')) {
					params.IDCardFrontUrl = this.IDCardFrontUrl // 身份证远程数据正面
				}
				if(this.IDCardBackUrl && !this.IDCardBackUrl.startsWith('http')) {
					params.IDCardBackUrl = this.IDCardBackUrl // 身份证远程数据反面
				}
				if(this.CertificationUrl && !this.CertificationUrl.startsWith('http')) {
					params.CertificationUrl = this.CertificationUrl // 资格证
				} 
				this.$H.post('/api/APP/WXUser/RegisterDoctor', params, {}, {show: true, text: '加载中'})
					.then(res => {
						if(res.Code === 200) {
							this.$U.gotoPage('/pages/login/login-doctor')
						}
					})
			},
			// 上传图片-服务器
			async uploadImg() {
				const imgList = [
					{
						key: 'HeadImgUrl',
						val: this.baseFormData.HeadImgUrl
					}, 
					{
						key: 'IDCardBackUrl',
						val: this.baseFormData.IDCardBackUrl
					},
					{
						key: 'IDCardFrontUrl',
						val: this.baseFormData.IDCardFrontUrl
					},
					{
						key: 'CertificationUrl',
						val: this.baseFormData.CertificationUrl
					}
				]
				for (var i = 0; i < imgList.length; i++) {
					const res = await this.$H.upload('/api/APP/WXUser/UploadFile',{
						filePath: imgList[i].val,
						name: 'upload',
						header: {
							'content-type': 'multipart/form-data'
						}
					});
					this[imgList[i].key] = res.Data;
				}
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
			chooseImage(type) {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {
						const tempFilePaths = res.tempFilePaths[0]
						switch (type) {
							case 'HeadImgUrl':
								this.baseFormData.HeadImgUrl = tempFilePaths
								break;
							case 'IDCardFrontUrl':
								this.baseFormData.IDCardFrontUrl = tempFilePaths
								break;
							case 'IDCardBackUrl':
								this.baseFormData.IDCardBackUrl = tempFilePaths
								break;
							case 'CertificationUrl':
								this.baseFormData.CertificationUrl = tempFilePaths
								break;
							default:
								break;
						}
					}
				});
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
	.back {
		position: absolute;
		left: 30rpx;
		top: 14px;
		color: #fff;
	}
	.top-bg {
		height: 493rpx;
		width: 100%;
		// background: linear-gradient(to right, #05a6f6, #1482fd);
		// padding-top: 93rpx;
		position: relative;
	}

	.title {
		position: relative;
		z-index: 3;
		height: 44px;
	}

	.upload-info_item {
		padding: 45rpx 30rpx;
		background-color: #fff;
		border-radius: 24rpx;
		box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(0, 0, 0, 0.06);
	}

	.tip {
		color: #ABABAB;
		font-size: 21rpx;
		margin-top: 24rpx;
		margin-bottom: 24rpx;
	}

	.id-card {
		width: 298rpx;
		height: 256rpx;
	}
	
	.submit {
		width: 630rpx;
		height: 86rpx;
		background-color: #2878ff;
		font-size: 36rpx;
		color: #fff;
		border-radius: 60rpx;
	}
	
	.bg-upload {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 493rpx;
	}
	
	.auth {
		padding: 20rpx;
		font-size: 30rpx;
		
		&-radio {
			display: flex;
			align-items: center;
			
			radio {
				transform: scale(0.7);
			}
		}
		
		&-text {
			color: #2878ff;
		}
	}

	::v-deep .is-input-border {
		border: none !important;
		background-color: #F7F8FA !important;
	}
	::v-deep .arrow-area {
		transform: rotate(-135deg) !important;
	}
	::v-deep .input-value {
		border: none !important;
		background-color: #F7F8FA !important;
	}
</style>