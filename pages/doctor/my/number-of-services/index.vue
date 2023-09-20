<template>
	<view class="">
		<my-navbar title="服务次数"></my-navbar>
		<view class="calendar px-3">
			<uni-calendar class="uni-calendar--hook" :selected="info.selected" :showMonth="false" @change="change" @monthSwitch="monthSwitch" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showCalendar: false,
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.calendar {
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0,0,0,0.04);
		border-radius: 10rpx;
	}
</style>