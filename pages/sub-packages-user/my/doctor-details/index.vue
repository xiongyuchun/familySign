<template>
	<view class="">
		<my-navbar title="医生详情"></my-navbar>
		<view class="doc-main">
			<view class="doc-list">
				<view class="doc-list-photo flex align-center">
					<view class="mr-2">
						<img class="doc-list-photo_img" :src="doctorInfo.HeadImgUrl" alt="" srcset="">
					</view>
					<view class="flex flex-column justify-between">
						<view class="flex align-center mb-2">
							<view class="doc-list-username">{{doctorInfo.Name}}</view>
							<view v-for="(tTag, tIndex) in doctorInfo.TagArray" :key="tIndex" class="flex">
								<view class="doc-list-dep">{{tTag}}</view>
							</view>
						</view>
						<view class="doc-list-name mb-2">
							{{doctorInfo.MajorInfo}}
						</view>
						<view class="flex align-center">
							<view class="star-review">医师星评:</view>
							<view class="flex align-center">
								<img class="score" src="@/pages/sub-packages-user/static/score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
								<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="px-3">
			<uni-section class="mb-3" title="主治" type="line">
				<view class="px-4 skill">{{doctorInfo.MajorInfo}}</view>
			</uni-section>
			<uni-section class="mb-3" title="学术任职" type="line">
				<view class="px-4 skill">{{doctorInfo.AcademicInfo}}</view>
			</uni-section>
			<uni-section class="mb-3" title="科学研究" type="line">
				<view class="px-4 skill">{{doctorInfo.ResearchInfo}}</view>
			</uni-section>
			<uni-section class="mb-3" title="教育培训" type="line">
				<view class="px-4 skill">{{doctorInfo.EducationInfo}}</view>
			</uni-section>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'doctor-details',
		data() {
			return {
				doctorInfo: [],
			}
		},
		onLoad(options) {
			// 获取医生列表
			this.getDoctorInfo(options.id)
		},
		methods: {
			getDoctorInfo(id) {
				if(!id) return;
				this.$H.get('/api/APP/WXUser/GetDoctorInfo', {doctorId: id})
					.then(res => {
						if(res.Code === 200) {
							const formatData = res.Data;
							if(formatData.TagArray) {
								formatData.TagArray = formatData.TagArray.split('|')
							}
							if(formatData.HeadImgUrl) {
								formatData.HeadImgUrl = this.$C.webUrl + '/' + formatData.HeadImgUrl
							}
							this.doctorInfo = formatData;
						}
					})
			}
		},
	}
</script>

<style scoped lang="scss">
	.skill {
		color: #666;
		font-size: 24rpx;
	}
	.score {
		width: 26rpx;
		height: 26rpx;
		margin-right: 10rpx;
	}
	.doc-main {
		background-color: #fcfcfc;
		padding: 30rpx;
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
	.star-review {
		color: #999999;
		font-size: 24rpx;
		margin-right: 14rpx;
	}
</style>