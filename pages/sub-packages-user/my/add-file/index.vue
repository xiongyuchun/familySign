<template>
	<view class="upload-info">
		<view class="top-bg">
			<img class="w-100 bg-upload" src="@/pages/sub-packages-user/static/bg-upload.png" alt="" srcset="">
			<view :style="{ height: statusBarHeight }" class="w-100"></view>
			<view class="title text-white font flex justify-center align-center">
				<view @click="$U.backPage(1)">
					<uni-icons class="back" type="back" size="20" color="#fff"></uni-icons>
				</view>
				<view class="">上传资料</view>
			</view>
		</view>
		<view style="padding: 0 30rpx; position: relative; margin-top: -300rpx;">
			<view class="upload-info_item">
				<uni-forms ref="baseForm" label-position="top">
					<uni-forms-item label="就诊日期" required>
						<uni-datetime-picker
							type="date"
							:border="false"
							v-model="baseFormData.TreatmentDate"
						/>
					</uni-forms-item>
					<uni-forms-item label="信息备注" required>
						<uni-easyinput v-model="baseFormData.Remark" placeholder="请输入信息备注" />
					</uni-forms-item>
					<uni-forms-item label="上传图片或文件" label-width="300" required>
						<view class="flex flex-wrap">
							<view class="position-relative" v-for="(item, index) in baseFormData.photo">
								<img @click="previewImg(baseFormData.photo, index)" class="mr-2 add-img" style="width: 180rpx; height: 180rpx;"
									:src="item" alt="" srcset="">
								<img @click="delImage(index)" class="close-img" src="@/pages/sub-packages-user/static/close.png" alt="" srcset="">
							</view>
							<view @click="chooseImage()" class="add-filed">
								<uni-icons class="mb-1" type="plusempty" size="20" color="#ABABAB"></uni-icons>
								<text>添加</text>
							</view>
						</view>
					</uni-forms-item>
					<uni-forms-item label="其他">
						<uni-easyinput v-model="baseFormData.Other" placeholder="请输入其他情况" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</view>
		<view class="flex justify-center w-100 pb-5 pt-5">
			<view @click="createHealthRecord" class="submit flex align-center justify-center">提交</view>
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
					TreatmentDate: '',
					Remark: '',
					FilesUrl: '',
					Other: '',
					photo: [], // 本地资源图片数组
				},
				remotePhoto: [], // 本地文件路径换远程路径
			}
		},
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
		},
		methods: {
			async createHealthRecord() {
				const { TreatmentDate, Remark, FilesUrl, Other, photo } = this.baseFormData
				if(this.$U.dateUtils.isEmpty(TreatmentDate)) {
					this.$U.checkTip('就诊日期不能为空！')
					return;
				}
				if(this.$U.dateUtils.isEmpty(Remark)) {
					this.$U.checkTip('信息备注不能为空！')
					return;
				}
				if(photo.length === 0) {
					this.$U.checkTip('图片或文件不能为空！')
					return;
				}
				await this.uploadImg();
				if(this.remotePhoto.length > 0) {
					this.baseFormData.FilesUrl = (this.remotePhoto).join('|');
				}
				delete this.baseFormData.photo;
				this.$H.post('/api/APP/WXUser/CreateHealthRecord', this.baseFormData, {}, { show: true })
					.then(res => {
						if(res.Code === 200) {
							this.$U.backPage(1)
						}
					})
			},
			// 上传图片-服务器
			async uploadImg() {
				uni.showLoading({
					title: '加载中'
				})
				for (var i = 0; i < this.baseFormData.photo.length; i++) {
					const res = await this.$H.upload('/api/APP/WXUser/UploadFile',{
						filePath: this.baseFormData.photo[i],
						name: 'upload',
						header: {
							'content-type': 'multipart/form-data'
						}
					});
					this.remotePhoto.push(res.Data);
				}
				uni.hideLoading()
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
			// 预览图片
			previewImg(urls, i) {
				uni.previewImage({
					urls, //所有要预览的图片的地址集合 必须数组形式 
					current: urls[i] //当前图片地址,点击预览哪个预览的哪个传的 i 是索引
				})
			},
			// 上传图片
			chooseImage(type) {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {
						const tempFilePaths = res.tempFilePaths
						this.baseFormData.photo.push(tempFilePaths[0])
					}
				});
			},
			// 删除图片
			delImage(id) {
				this.baseFormData.photo.splice(id, 1)
			},
		},
	}
</script>

<style>
	page {
		background-color: #fdfdfd;
	}
</style>

<style scoped lang="scss">
	.add-img {
		position: relative;
		overflow: initial;
		
	}
	.close-img {
		position: absolute;
		right: 10rpx;
		top: -15rpx;
		width: 30rpx;
		height: 30rpx;
	}
	.add-filed {
		border: 1rpx solid #d2d2d2;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 180rpx;
		height: 180rpx;
		flex-direction: column;
		color: #ABABAB;
	}
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
	::v-deep .uni-date-x {
		background-color: #F7F8FA !important;
	}
</style>