<template>
	<view class="upload-info">
		<view class="top-bg">
			<img class="w-100 bg-upload" src="@/pages/sub-packages-doctor/static/bg-upload.png" alt="" srcset="">
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
				<uni-forms ref="baseForm" :modelValue="alignmentFormData" label-position="top">
					<uni-forms-item label="头像" required>
						<view class="flex flex-column justify-center align-center" @click="chooseImage('photo')">
							<img v-if="baseFormData.photo" style="width: 128rpx; height: 128rpx;"
								:src="baseFormData.photo" alt="" srcset="">
							<img v-else style="width: 128rpx; height: 128rpx;" src="@/static/default.jpg" alt=""
								srcset="">
							<view style="color: #5581FF; font-size: 20rpx;">更换头像</view>
						</view>
					</uni-forms-item>
					<uni-forms-item label="姓名" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="身份证号" required>
						<uni-easyinput v-model="baseFormData.card" placeholder="请输入身份证号" />
					</uni-forms-item>
					<uni-forms-item label="性别" required>
						<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="手机号" required>
						<uni-easyinput v-model="baseFormData.tel" placeholder="请输入手机号码" />
					</uni-forms-item>
					<uni-forms-item label-width="300" label="工作单位" required>
						<uni-data-picker placeholder="请输入工作单位" popup-title="请选择所在地区" :localdata="dataTree" v-model="classes"
							@change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
						</uni-data-picker>
					</uni-forms-item>
					<uni-forms-item label-width="300" label="上传身份证正反面" required>
						<text class="tip flex">请拍摄并上传你的有效身份证</text>
						<view class="flex">
							<img @click="chooseImage('idcard1')" v-if="baseFormData.idcard1" class="id-card" :src="baseFormData.idcard1" alt=""
								srcset="" style="margin-right: 40rpx;">
							<img @click="chooseImage('idcard1')" v-else class="id-card" src="@/pages/sub-packages-doctor/static/idcard1.png" alt="" srcset=""
								style="margin-right: 40rpx;">
							<img @click="chooseImage('idcard2')" v-if="baseFormData.idcard2" class="id-card" :src="baseFormData.idcard2" alt=""
								srcset="" style="margin-right: 40rpx;">
							<img @click="chooseImage('idcard2')" v-else class="id-card" src="@/pages/sub-packages-doctor/static/idcard2.png" alt="" srcset="">
						</view>
					</uni-forms-item>
					<uni-forms-item label-width="300" label="职业资格证书" required>
						<text class="tip flex">请拍摄并上传你的职业资格证书</text>
						<view class="flex justify-center">
							<img @click="chooseImage('professionalCertificate')" v-if="baseFormData.professionalCertificate" class="id-card" :src="baseFormData.professionalCertificate" alt=""
								srcset="" style="margin-right: 40rpx;">
							<img @click="chooseImage('professionalCertificate')" v-else class="id-card" src="@/pages/sub-packages-doctor/static/professionalCertificate.png" alt="" srcset=""
								style="margin-right: 40rpx;">
						</view>
					</uni-forms-item>
				</uni-forms>
			</view>
		</view>
		<view class="flex justify-center w-100 pb-5 pt-5">
			<view class="submit flex align-center justify-center">确定</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 25,
				// 基础表单数据
				baseFormData: {
					photo: '',
					name: '',
					card: '',
					introduction: '',
					sex: 1,
					tel: '',
					idcard1: '',
					idcard2: '',
					professionalCertificate: ''
				},
				// 表单数据
				alignmentFormData: {
					name: '',
					age: '',
				},
				// 单选数据源
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
				classes: '',
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
		},
		methods: {
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
						const tempFilePaths = res.tempFilePaths
						switch (type) {
							case 'photo':
								this.baseFormData.photo = tempFilePaths
								break;
							case 'idcard1':
								this.baseFormData.idcard1 = tempFilePaths
								break;
							case 'idcard2':
								this.baseFormData.idcard2 = tempFilePaths
								break;
							case 'professionalCertificate':
								this.baseFormData.professionalCertificate = tempFilePaths
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