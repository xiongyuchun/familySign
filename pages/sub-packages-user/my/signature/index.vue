<template>
	<view class="sign-contain">
		<view class="sign-top">
			请在空白处签字
		</view>
		<my-sign @init="onSignInit" @end="endConfirm" bgColor="#fff" width="100%" :height="signHeight">
		</my-sign>

		<!-- 按钮 -->
		<view class="signBtn-box">
			<view class="signBtn-item1">
				<button type="default" plain="true" class="lnvestor-btn" hover-class="hover"
					@click="$U.backPage(1)">取消</button>
			</view>
			<view class="signBtn-item2">
				<button type="default" plain="true" class="lnvestor-btn1" hover-class="hover"
					@click="clear">清空重写</button>
				<button type="primary" class="lnvestor-btn2" hover-class="hover"
					@click="saveTempFilePath" :disabled="vsignDisabled">提交签名</button>
				<!-- <button @click="saveTempFilePath">保存临时图片路径</button>
				<button @click="saveImage">保存图片</button> -->
			</view>
		</view>
	</view>
</template>

<script>
	import mySign from '@/pages/sub-packages-user/components/my-sign/index.vue'
	export default {
		components: {
			mySign
		},
		data() {
			return {
				signHeight: '375px',
				vsignDisabled: true
			}
		},
		onLoad() {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					// console.log('屏幕信息', res)
					that.signHeight = (res.windowHeight-130)+"px";
				}
			})
		},
		methods: {
			// 清除
			clear() {
				this.signCtx.clear();
				this.vsignDisabled = true;
			},
			onSignInit(signCtx) {
				this.signCtx = signCtx
			},
			// 绘画结束触发
			endConfirm() {
				this.vsignDisabled = false;
			},
			// 保存为临时图片路
			// 保存 png 图片
			saveImage() {
				this.signCtx.saveImage()
			},
			// 获取临时路径，转base64
			async saveTempFilePath() {
				const res = await this.signCtx.canvasToTempFilePath()
				uni.compressImage({
					src: res,
					quality: 15,
					success: ret => {
						this.$U.pathToBase64(ret.tempFilePath)
							.then(path => {
								this.signBase64 = path;
								// 更新store值
								// this.$store.commit('updateSignPath', path)
								this.$U.backPage(1)
							})
							.catch(error => {
								console.error(error)
							})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.sign-contain {
		padding-left: 35rpx;
		padding-right: 35rpx;

		.sign-top {
			width: 100%;
			height: 50px;
			line-height: 50px;
			font-size: 16px;
			text-align: center;
			color: #999999;
		}

		.signBtn-box {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.signBtn-item1 {

				// 按钮样式
				.lnvestor-btn {
					margin-top: 11px;
					width: 94px;
					height: 40px;
					border-radius: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 16px;
				}

				.hover {
					border: 1px solid #ccc !important;
					color: #ccc !important;
					font-size: 16px !important;
				}
			}

			.signBtn-item2 {
				display: flex;

				// 按钮样式
				.lnvestor-btn1 {
					margin-top: 11px;
					width: 128px;
					height: 40px;
					border-radius: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 16px;
					margin-right: 16px;
				}

				.lnvestor-btn2 {
					margin-top: 11px;
					width: 128px;
					height: 40px;
					border-radius: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
					background: #b99c65;
					font-size: 16px;
				}

				.hover {
					border: 1px solid #ccc !important;
					color: #ccc !important;
					font-size: 16px !important;
				}
			}
		}
	}
</style>

