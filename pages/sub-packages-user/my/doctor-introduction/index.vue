<template>
	<view class="">
		<my-navbar title="医生介绍"></my-navbar>
		<view class="px-3 pt-5">
			<view class="mb-2 flex align-center">
				<img class="screen" src="@/pages/sub-packages-user/static/screen.png" alt="" srcset="">
				<text class="screen-text">筛选</text>
			</view>
			<view class="addrs mb-3">
				<view class="addrs-item mr-2">
					<text>地区</text>
					<uni-icons class="flex" type="bottom" size="14" color="#999"></uni-icons>
				</view>
				<view class="addrs-item mr-2">
					<text>单位</text>
					<uni-icons class="flex" type="bottom" size="14" color="#999"></uni-icons>
				</view>
				<view class="addrs-item mr-2">
					<text>科室</text>
					<uni-icons class="flex" type="bottom" size="14" color="#999"></uni-icons>
				</view>
			</view>
			<view @click="$U.gotoPage('/pages/sub-packages-user/my/doctor-details/index')" class="doc-list">
				<view class="doc-list-photo flex align-center">
					<view class="mr-2">
						<img class="doc-list-photo_img" src="@/static/default.jpg" alt="" srcset="">
					</view>
					<view class="flex flex-column justify-between">
						<view class="flex align-center mb-2">
							<view class="doc-list-username">和天真</view>
							<view class="flex">
								<view class="doc-list-dep">皮肤科</view>
							</view>
						</view>
						<view class="doc-list-name">
							景德镇市第三人民医院
						</view>
					</view>
				</view>
				<view class="doc-list-score flex justify-between align-center mb-3">
					<view class="flex align-center">
						<view class="star-review">医师星评:</view>
						<view class="">
							<view class="flex align-center">
								<img class="score" src="@/pages/sub-packages-user/static/score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
							</view>
						</view>
					</view>
					<view class="flex align-center">
						<view class="star-review">医院星评:</view>
						<view class="">
							<view class="flex align-center">
								<img class="score" src="@/pages/sub-packages-user/static/score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
							</view>
						</view>
					</view>
				</view>
				<view class="doc-list-desc mb-3 overflow-hidden-2">
					主治：擅长中西医治疗方法，消化病（营养不良、腹泻腹痛等）、呼吸系统疾病（感冒、发烧、咳嗽、浑身乏力等）
				</view>
				<view class="flex justify-end">
					<view @click.stop="$U.gotoPage('/pages/sub-packages-user/my/online-signing/index')" class="go-sign mr-3">
						去签约
					</view>
					<view class="go-seek">医生咨询</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style>
	page {
		background-color: #fdfdfd;
	}
</style>
<style scoped lang="scss">
	.score {
		width: 26rpx;
		height: 26rpx;
		margin-right: 6rpx;
	}
	.go-sign {
		padding: 14rpx 42rpx;
		background-color: #FFFFFF;
		border: 1px solid #4EB4F8;
		border-radius: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #4EB4F8;
		font-size: 23rpx;
	}
	.go-seek {
		padding: 14rpx 32rpx;
		background: linear-gradient(90deg, #17BDFF, #1D8CFF);
		border-radius: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 23rpx;
	}
	.doc-list {
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0,0,0,0.04);
		border-radius: 30rpx;
		padding: 30rpx 60rpx 40rpx 30rpx;
		margin-bottom: 28rpx;
		
		&-photo {
			margin-bottom: 25rpx;
			
			&_img {
				width: 115rpx;
				height: 115rpx;
				border: 50%;
				
			}
			
		}
		
		&-dep {
			padding: 10rpx;
			background: #F0F5FF;
			border-radius: 4rpx;
			margin-right: 20rpx;
			font-size: 20rpx;
			color: #999;
		}
		
		&-name {
			font-size: 27rpx;
			font-weight: 400;
			color: #666666;
		}
		
		&-username {
			color: #333;
			font-size: 28rpx;
			margin-right: 28rpx;
		}
		
		&-desc {
			color: #666666;
			font-size: 24rpx;
		}
	}
	.addrs {
		display: flex;
		
		&-item {
			padding: 14rpx 18rpx;
			background-color: #f1f1f1;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 20rpx;
			color: #999;
			min-width: 118rpx;
			border-radius: 40rpx;
		}
		
	}
	.screen {
		width: 30rpx;
		height: 30rpx;
		margin-right: 4rpx;
		&-text {
			font-size: 28rpx;
			font-weight: 400;
			color: #999999;
		}
		
	}
	.star-review {
		color: #999999;
		font-size: 24rpx;
		margin-right: 14rpx;
	}
</style>