<template>
	<view class="">
		<my-navbar title="在线签约列表"></my-navbar>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x :scroll-into-view="scrollInto" scroll-with-animation
		class="scroll-row tip-list" 
		style="height: 100rpx;color: #999;padding-left: 105rpx;">
			<view v-for="(item,index) in tabBars" :key="index" 
			class="scroll-row-item px-5 py-2 font-30" :id="'tab'+index"
			:class="tabIndex === index?'text-main font-30 font-weight-bold':''"
			@click="changeTab(index)">{{item.classname}}</view>
		</scroll-view>
		<view class="px-3">
			<view class="mb-2 flex align-center">
				<img class="screen" src="@/static/my/screen.png" alt="" srcset="">
				<text class="screen-text">筛选</text>
			</view>
			<view class="addrs mb-3">
				<view class="addrs-item mr-2">
					<text>省</text>
					<uni-icons class="flex" type="bottom" size="14" color="#999"></uni-icons>
				</view>
				<view class="addrs-item mr-2">
					<text>市</text>
					<uni-icons class="flex" type="bottom" size="14" color="#999"></uni-icons>
				</view>
				<view class="addrs-item mr-2">
					<text>区县</text>
					<uni-icons class="flex" type="bottom" size="14" color="#999"></uni-icons>
				</view>
				<view class="addrs-item mr-2">
					<text>乡镇</text>
					<uni-icons class="flex" type="bottom" size="14" color="#999"></uni-icons>
				</view>
			</view>
		</view>
		<swiper :duration="150" :current="tabIndex" @change="onChangeTab"
		:style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newsList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
				@scrolltolower="loadmore(index)">
					<view class="user-list w-100 px-3">
						<sign-list :item="signList"></sign-list>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import signList from '@/components/doctor/sign-list/index'
	export default {
		components: {
			signList
		},
		data() {
			return {
				signList: {
					btns: ['拒签', '去签约']
				},
				// 列表高度
				scrollH:600,
				// 顶部选项卡
				scrollInto:"",
				tabIndex:0,
				tabBars: [
					{
						classname: '待签约'
					},
					{
						classname: '待续约'
					},
					{
						classname: '已拒签'
					}
				],
				newsList:[
					{
						id: 0
					},
					{
						id: 1
					},
					{
						id: 2
					}
				]
			}
		},
		methods: {
			// 切换选项
			changeTab(index){
				if (this.tabIndex === index) {
					return;
				}
				this.tabIndex = index
				// 滚动到指定元素
				this.scrollInto = 'tab'+index
			},
			// 监听滑动
			onChangeTab(e){
				this.changeTab(e.detail.current)
			},
			// 切换选项
			changeTab(index){
				if (this.tabIndex === index) {
					return;
				}
				this.tabIndex = index
				// 滚动到指定元素
				this.scrollInto = 'tab'+index
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
	.user-list {
		height: 213rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0,0,0,0.04);
		border-radius: 30rpx;
	}
	.text-main {
		color: #0D92FB;
		position: relative;
		
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 15%;
			width: 70%;
			height: 4rpx;
			background: #0D92FB;
			border-radius: 2rpx;
		}
	}
	.tip-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// padding: 0 150rpx;
		margin: 36rpx 0;
		box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(0,0,0,0.06);
	}
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