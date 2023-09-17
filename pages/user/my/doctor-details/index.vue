<template>
	<view class="">
		<my-navbar title="医生详情"></my-navbar>
		<view class="doc-main">
			<view class="doc-list">
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
						<view class="doc-list-name mb-2">
							景德镇市第三人民医院
						</view>
						<view class="flex align-center">
							<view class="star-review">医师星评:</view>
							<view class="flex align-center">
								<img class="score" src="@/static/my/score.png" alt="" srcset="">
								<img class="score" src="@/static/my/score.png" alt="" srcset="">
								<img class="score" src="@/static/my/score.png" alt="" srcset="">
								<img class="score" src="@/static/my/score.png" alt="" srcset="">
								<img class="score" src="@/static/my/un-score.png" alt="" srcset="">
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="px-3">
			<uni-section class="mb-3" title="主治" type="line">
				<view class="px-4 skill">小儿湿疹皮炎、荨麻疹以及胎记，成人过敏性，痤疮，瘢痕，脱发，银屑病，性病，带状疱疹，单纯疱疹，脓疱疮，疖肿，各种癣！</view>
			</uni-section>
			<uni-section class="mb-3" title="学术任职" type="line">
				<view class="px-4 skill">全军心血管内科专业委员会主任委员、中华医学会心血管病分会常务委员、女性学组组长、北京医师协会心血管内科专科医师分会副会长、美国心脏病学会委员、欧洲心脏病学会委员。科技部及国家自然基金评审专家。《Journal of Geriatric Cardiology》主编、《中华老年多器官疾病杂志》副主编、《中国心脏介入杂志》副主编。
            </view>
			</uni-section>
			<uni-section class="mb-3" title="科学研究" type="line">
				<view class="px-4 skill">总后勤部“科技银星”，国家“十三五”重点研发计划首席科学家，承担国家及省部级以上课题12项，获国家专利13项，获军队医疗成果一等奖1项。发表SCI 74篇，总IF 168.392，主编专著6部。
            </view>
			</uni-section>
			<uni-section class="mb-3" title="教育培训" type="line">
				<view class="px-4 skill">毕业于首都医科大学，医学博士。意大利米兰圣多纳托心脏中心访问学者。培养研究生60余名。
				</view>
			</uni-section>
		</view>
	</view>
</template>

<script>
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