<template>
	<view v-if="show" class="privacy-auth">
		<view @click.stop="hide" class="privacy-auth-container">
			<scroll-view scroll-y="true" class="privacy-auth-container-main">
				<view>
					<view class="privacy-auth-container-main-title">用户协议及隐私保密条款</view>
					<view>景德镇市三院家庭医生签约小程序隐私保护说明</view>
					<view>本指引是景德镇市三院家庭医生签约小程序开发者（以下简称“开发者”）为处理你的个人信息而制定。</view>
					<view class="height-30rpx"></view>
					<view>1、开发者处理的信息</view>
					<view>根据法律规定，开发者仅处理实现小程序功能所必要的信息。</view>
					<view>为了注册、登录小程序，开发者收集你的用户信息（手机号、身份证号、照片、地区）。</view>
					<view>开发者收集你的手机号码，用于建立您的健康档案并方便联系您。</view>
					<view>开发者收集你的身份证号码和照片，用于验证是否为您本人操作。</view>
					<view>开发者收集你的地区，用于为您就近推荐家庭医生。</view>
					<view class="height-30rpx"></view>
					<view>2、你的权益</view>
					<view>开发者承诺，除法律法规另有规定外，开发者对你的信息的保存期限应当为实现处理目的所必要的最短时间。</view>
					<view>关于你的个人信息，你可以通过以下方式与开发者联系，行使查阅、复制、更正、删除等法定权利。</view>
					<view>邮箱： 154295604@qq.com</view>
					<view class="height-30rpx"></view>
					<view>3、 开发者对信息的存储</view>
					<view>开发者承诺，除法律法规另有规定外，开发者对你的信息的保存期限应当为实现处理目的所必要的最短时间。</view>
					<view class="height-30rpx"></view>
					<view>4、信息的使用规则</view>
					<view>开发者将会在本指引所明示的用途内使用收集的信息</view>
					<view>如开发者使用你的信息超出本指引目的或合理范围，开发者必须在变更使用目的或范围前，再次以短信方式告知并征得你的明示同意。</view>
					<view class="height-30rpx"></view>
					<view>5、信息对外提供</view>
					<view>开发者承诺，不会主动共享或转让你的信息至任何第三方，如存在确需共享或转让时，开发者应当直接征得或确认第三方征得你的单独同意。</view>
					<view>开发者承诺，不会对外公开披露你的信息，如必须公开披露时，开发者应当向你告知公开披露的目的、披露信息的类型及可能涉及的信息，并征得你的单独同意。</view>
					<view>你认为开发者未遵守上述约定，或有其他的投诉建议、或未成年人个人信息保护相关问题，可通过以下方式与开发者联系；或者向微信进行投诉。</view>
					<view class="height-30rpx"></view>
					<view>电话： 13879857747</view>
					<view>更新日期：2024-08-01</view>
					<view>生效日期：2024-08-01</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
		},
		data() {
			return {
				show: false
			}
		},
		mounted() {
			
		},
		methods: {
			open() {
				if (this.show) return;
				this.show = true;
			},
			hide() {
				if (!this.show) return;
				this.show = false;
			}
		}
	}
</script>

<style scoped lang="scss">
	.privacy-auth {
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.3);
		z-index: 9;
		width: 100vw;
		height: 100vh;
		
		&-container {
			position: relative;
			background-color: #fff;
			justify-content: center;
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			background-color: transparent;
			padding: 0 40rpx;
			box-sizing: border-box;
			
			&-main {
				padding: 20rpx 30rpx;
				padding-top: 0;
				height: 800rpx;
				background-color: #fff;
				position: relative;
				border-radius: 20rpx;
				position: relative;
				z-index: 10;
				box-sizing: border-box;
				
				&-title {
					font-weight: bold;
					position: sticky;
					top: 0;
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 88rpx;
					background-color: #fff;
				}
			}
		}
	}
	.height-30rpx {
		height: 30rpx;
	}
</style>