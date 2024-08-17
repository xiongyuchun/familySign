<template>
	<view class="upload-info">
		<view class="top-bg">
			<img class="w-100 bg-upload" src="@/pages/sub-packages-user/static/bg-upload.png" alt="" srcset="">
			<view :style="{ height: statusBarHeight }" class="w-100"></view>
			<view class="title text-white font flex justify-center align-center">
				<view @click="$U.backPage(1)">
					<uni-icons class="back" type="back" size="20" color="#fff"></uni-icons>
				</view>
				<view class="">建档/完善信息</view>
			</view>
		</view>
		<view style="padding: 0 30rpx; position: relative; margin-top: -300rpx;">
			<view class="upload-info_item">
				<uni-forms ref="form" :modelValue="alignmentFormData" label-position="top">
					<uni-forms-item label="头像" required>
						<view class="flex flex-column justify-center align-center" @click="chooseImage('HeadImgUrl')">
							<img v-if="baseFormData.HeadImgUrl" style="width: 128rpx; height: 128rpx;"
								:src="webUrl + '/' + baseFormData.HeadImgUrl" alt="" srcset="">
							<img v-else style="width: 128rpx; height: 128rpx;" :src="$C.imgDomain('/static/default.jpg')" alt=""
								srcset="">
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
					<uni-forms-item label-width="300" label="居住地所在省、市、区县、乡镇、村寨" required>
						<!-- <uni-data-picker placeholder="请选择班级" popup-title="请选择所在地区" :localdata="dataTree" v-model="baseFormData.City"
							@change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
						</uni-data-picker> -->
						<Region @region="regionClick" :regionStr="regionStr" lg="35px" />
					</uni-forms-item>
					<uni-forms-item label="婚否" required>
						<uni-data-checkbox v-model="baseFormData.MaritalStatus" :localdata="marrys" />
					</uni-forms-item>
					<uni-forms-item label-width="300" label="上传身份证正反面" required>
						<text class="tip">请拍摄并上传你的有效身份证</text>
						<view class="flex">
							<img @click="chooseImage('IDCardFrontUrl')" v-if="baseFormData.IDCardFrontUrl" class="id-card" :src="webUrl + '/' + baseFormData.IDCardFrontUrl" alt=""
								srcset="" style="margin-right: 40rpx;">
							<img @click="chooseImage('IDCardFrontUrl')" v-else class="id-card" src="@/pages/sub-packages-user/static/idcard1.png" alt="" srcset=""
								style="margin-right: 40rpx;">
							<img @click="chooseImage('IDCardBackUrl')" v-if="baseFormData.IDCardBackUrl" class="id-card" :src="webUrl + '/' + baseFormData.IDCardBackUrl" alt=""
								srcset="" style="margin-right: 40rpx;">
							<img @click="chooseImage('IDCardBackUrl')" v-else class="id-card" src="@/pages/sub-packages-user/static/idcard2.png" alt="" srcset="">
						</view>
					</uni-forms-item>
				</uni-forms>
			</view>
		</view>
		<view class="flex justify-center w-100 pb-5 pt-5">
			<view @click="submit()" class="submit flex align-center justify-center">确定</view>
		</view>
	</view>
</template>

<script>
	import Region from '@/pages/login/components/city-select/index.vue';
	export default {
		components: {
			Region
		},
		data() {
			return {
				type: '',
				webUrl: '',
				statusBarHeight: 25,
				// 基础表单数据
				baseFormData: {
					HeadImgUrl: '',
					Name: '',
					IDCard: '',
					introduction: '',
					Sex: 1,
					MaritalStatus: 0,
					PhoneNumber: '',
					Province: '', // 省
				    City: '', // 市
				    Area: '', // 区
				    Address: '', // 街道
					IDCardFrontUrl: '',
					IDCardBackUrl: ''
				},
				HeadImgUrl: '', // 头像远程数据
				IDCardFrontUrl: '', // 身份证远程数据正面
				IDCardBackUrl: '', // 身份证远程数据反面
				regionStr: '', // 回显示数据
				// 表单数据
				alignmentFormData: {
					Name: '',
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
				// 婚否
				marrys: [{
						text: '是',
						value: 0
					},
					{
						text: '否',
						value: 1
					}
				],
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
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
			this.webUrl = this.$C.webUrl;
		},
		onLoad(options) {
			this.type = options.type;
			// 个人资料-需要获取用户信息
			if(options.type === 'info') {
				this.getUserInfo();
			}
		},
		methods: {
			// 当前选中的地区
			regionClick(e) {
				this.baseFormData.Province = e[0];
				this.baseFormData.City = e[1];
				this.baseFormData.Area = e[2];
				this.baseFormData.Address = e[3];
				this.regionStr = e[0] + e[1] + e[2] + e[3];
			},
			// 获取用户信息
			getUserInfo() {
				this.$H.get('/api/APP/WXUser/GetUserInfo')
					.then(res => {
						if(res.Data) {
							// 处理头像，身份证
							const { Province, City, Area, Address } = res.Data;
							this.baseFormData = res.Data;
							if(Province) {
								this.regionStr = Province + City + Area + Address;
							}
						}
					}).catch(err => {
						console.log('err:', err)
					})
			},
			// 确定
			async submit() {
				const { HeadImgUrl, Name, IDCard, introduction, Sex, PhoneNumber, City, IDCardFrontUrl, IDCardBackUrl } = this.baseFormData
				// if(this.$U.dateUtils.isEmpty(HeadImgUrl)) {
				// 	this.$U.checkTip('请上传头像！')
				// 	return
				// }
				if(this.$U.dateUtils.isEmpty(Name)) {
					this.$U.checkTip('姓名不能为空！')
					return
				}
				if(this.$U.dateUtils.isEmpty(IDCard)) {
					this.$U.checkTip('身份证号不能为空！')
					return
				}
				if(!this.$U.dateUtils.isIDcard(IDCard)) {
					this.$U.checkTip('身份证号格式错误！')
					return
				}
				if(this.$U.dateUtils.isEmpty(PhoneNumber)) {
					this.$U.checkTip('手机号不能为空！')
					return;
				}
				if(!this.$U.dateUtils.isTel(PhoneNumber)) {
					this.$U.checkTip('手机号格式错误！')
					return;
				}
				if(this.$U.dateUtils.isEmpty(City)) {
					this.$U.checkTip('居住地不能为空！')
					return;
				}
				if(this.$U.dateUtils.isEmpty(IDCardFrontUrl)) {
					this.$U.checkTip('身份证正面不能为空！')
					return;
				}
				if(this.$U.dateUtils.isEmpty(IDCardBackUrl)) {
					this.$U.checkTip('身份证反面不能为空！')
					return;
				}
				// 根据type来判断是修改，还是信息
				const url = this.type === 'info' ? '/api/APP/WXUser/Edit' : '/api/APP/WXUser/Create';
				this.$H.post(url, this.baseFormData)
					.then(res => {
						if(res.Code === 200) {
							uni.showToast({
								title: res.Message,
								icon: 'none'
							});
							this.$U.gotoPageTab('/pages/index/index');
							this.$store.dispatch('user/setUserInfo', this.baseFormData);
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
			// 上传图片
			async uploadImg(obj) {
				const res = await this.$H.upload('/api/APP/WXUser/UploadFile',{
					filePath: obj.val,
					name: 'upload',
					header: {
						'content-type': 'multipart/form-data'
					}
				});
				this.baseFormData[obj.key] = res.Data;
			},
			chooseImage(type) {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {
						const tempFilePaths = res.tempFilePaths[0];
						switch (type) {
							case 'HeadImgUrl':
								this.uploadImg({
									key: 'HeadImgUrl',
									val: tempFilePaths
								});
								break;
							case 'IDCardFrontUrl':
								this.uploadImg({
									key: 'IDCardFrontUrl',
									val: tempFilePaths
								});
								break;
							case 'IDCardBackUrl':
								this.uploadImg({
									key: 'IDCardBackUrl',
									val: tempFilePaths
								});
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