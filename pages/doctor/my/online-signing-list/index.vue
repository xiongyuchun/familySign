<template>
	<view class="">
		<my-navbar title="在线签约列表"></my-navbar>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x :scroll-into-view="scrollInto" scroll-with-animation
		class="scroll-row tip-list" 
		style="height: 100rpx;color: #999;">
			<view v-for="(item,index) in tabBars" :key="index" 
			class="scroll-row-item px-5 py-2 font-30" :id="'tab'+index"
			:class="tabIndex === index?'text-main font-30 font-weight-bold':''"
			@click="changeTab(index)">{{item.classname}}</view>
		</scroll-view>
		<swiper :duration="150" :current="tabIndex" @change="onChangeTab"
		:style="'height:'+scrollH+'px;'">
			<swiper-item v-for="(item,index) in newsList" :key="index">
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'"
				@scrolltolower="loadmore(index)">
					{{item.id}}
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
</style>