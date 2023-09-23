<template>
	<view class="w-100">
		<my-navbar title="统计管理"></my-navbar>
		<view class="px-3 mt-5">
			<view class="leadge flex align-center justify-between">
				<view class="flex align-center">
					<img class="icon-line" src="@/static/my/sign-number.png" alt="" srcset="">
					<text class="color-333 font-30">本月签约人数</text>
				</view>
				<view class="">

				</view>
			</view>
			<view class="echarts-wrap">
				<my-echarts id="main" ref="mapChart" :onInit="initChart" />
			</view>
		</view>
		<view class="px-3 mt-5">
			<view class="leadge flex align-center justify-between">
				<view class="flex align-center">
					<img class="icon-line" src="@/static/my/seek-advice-from.png" alt="" srcset="">
					<text class="color-333 font-30">本月咨询人数</text>
				</view>
				<view class="">

				</view>
			</view>
			<view class="echarts-wrap">
				<my-echarts id="main1" ref="mapChart1" :onInit="initChart1" />
			</view>
		</view>
	</view>
</template>

<script>
	import * as echarts from "../../static/echarts.min.js"; //这里根据自己存放的路径修改
	import myEcharts from "@/pages/sub-packages-doctor/components/mpvue-echarts/echarts.vue"; //这里根据自己存放的路径修改

	let chart = null; //放外层方便拿到echart实例
	export default {
		components: {
			myEcharts,
		},
		data() {
			return {
				echarts,
			};
		},
		onReady() {},
		mounted() {},
		methods: {
			initChart1(canvas, width, height) {
				// console.log(echarts, 'echarts', 1)
				chart = echarts.init(canvas, null, {
					width: width,
					height: height,
				});
				canvas.setChart(chart);
				let option = option = {
					xAxis: {
						type: 'category',
						data: ['1-01', '1-06', '1-12', '1-18', '1-24', '1-30']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [20, 60, 45, 90, 75, 30],
						type: 'bar',
						itemStyle: {
							color: "#4EB4F8"
						},
					}]
				}
				chart.setOption(option);

				return chart; // 返回 chart 后可以自动绑定触摸操作
			},
			initChart(canvas, width, height) {
				console.log(echarts, 'echarts', 1)
				chart = echarts.init(canvas, null, {
					width: width,
					height: height,
				});
				canvas.setChart(chart);
				let option = option = {
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['1-01', '1-06', '1-12', '1-18', '1-24', '1-30']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [20, 60, 45, 90, 75, 30],
						type: 'line',
						smooth: true,
						itemStyle: {
							color: "#4EB4F8"
						},
						areaStyle: {
							color: "rgba(78, 180, 248, 1)",
							opacity: 0.8
						}
					}]
				}
				chart.setOption(option);

				return chart; // 返回 chart 后可以自动绑定触摸操作
			},
			updateData() {
				console.log(echarts, 'echarts', 2)
				setTimeout(() => {
					chart.setOption({
						series: [{
							data: [30, 90, 111, 20, 70, 88, 11]
						}]
					})
				}, 1000)
			},
		},
	};
</script>

<style scoped lang="scss">
	.leadge {
		position: absolute;
	}

	.icon-line {
		width: 39rpx;
		height: 39rpx;
		margin-right: 20rpx;
	}

	.echarts-wrap {
		width: 100%;
		height: 600rpx;
	}
</style>