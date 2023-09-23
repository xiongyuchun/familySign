<template>
	<view class="">
		<my-navbar title="服务次数"></my-navbar>
		<view class="uni-list-cell-db px-3 mt-5">
			<picker mode="date" fields="month" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="uni-input">{{date}}</view>
			</picker>
			<uni-icons type="bottom" size="30" color="#009CFF"></uni-icons>
		</view>
		<view class="px-3">
			<view class="calendar px-3 mt-3 mb-5">
				<uni-calendar class="uni-calendar--hook" :date="date" :selected="info.selected" :showMonth="false" />
			</view>
		</view>
		<view class="px-3">
			<view class="user-list w-100">
				<sign-list :item="signList"></sign-list>
			</view>
		</view>
	</view>
</template>

<script>
	import signList from '@/components/doctor/sign-list/index'
	export default {
		components: {
			signList
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				signList: {
					btns: ['拒签', '去签约']
				},
				showCalendar: false,
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
				date: currentDate
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			 bindDateChange: function(e) {
				this.date = e.detail.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}/${month}`;
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
	.uni-list-cell-db {
		color: #009CFF;
		font-size: 60rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.user-list {
		height: 213rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.04);
		border-radius: 30rpx;
	}

	.calendar {
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.04);
		border-radius: 10rpx;
	}

	::v-deep .uni-calendar-item--checked {
		background-color: rgb(0, 156, 255) !important;
		border-radius: 50%;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.2);
	}
	::v-deep .uni-calendar-item--isDay-text {
		color: rgb(0, 156, 255) !important;
	}
	::v-deep .uni-calendar-item--isDay {
		background-color: rgb(0, 156, 255) !important;
		color: #FFFFFF !important;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.2);
		border-radius: 50%
	}
	::v-deep .uni-calendar__header {
		display: none !important;
	}
	::v-deep .uni-calendar-item__weeks-box-item {
		width: 90rpx !important;
		height: 90rpx !important;
	}
</style>