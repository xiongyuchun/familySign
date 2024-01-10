<template>
	<view>
		<view class="list" :style="{height:height+'rpx'}">
			<picker class="picker" mode="multiSelector" :range="region" range-key="name" :value="regionIndex"
				@change="pickerChange" @columnchange="pickerColumnchange">
				<view class="pbox" :class="{'pbox_hover':regionStr != '请选择所在地区'}">
					<uni-easyinput class="upload-info_item" :value="regionStr" readonly placeholder="请选择所在地区" :clearable="false" />
					<text class="iconfont icon-you"></text>
				</view>
			</picker>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				// 原数组
				oldRegion: [],
				// 处理后的数组
				region: [
					[],
					[],
					[],
					[]
				],
				// 选择省市区的下标Index  传则默认选中传递的
				regionIndex: [0, 0, 0, 0],

				// 选择的id
				// previnceId: 11,
				// cityId: 1101,
				// districtId: 110101,
				// countyId: 110101001

				// 省市区字符串
				regionStr: ''
			};
		},
		props: {
			// 组件高度
			height: {
				type: [Number],
				default: 92
			},
			// 组件宽度
			width: {
				type: [Number],
				default: 710
			},
			// 省id
			previnceId: {
				type: [Number],
				default: 11
			},
			// 市辖区id
			cityId: {
				type: [Number],
				default: 1101
			},
			// 区id
			districtId: {
				type: [Number],
				default: 110101
			},
			// 县
			countyid: {
				type: [Number],
				default: 110101001
			},
			// 是否是为修改(true为修改)
			isRevise: {
				type: [Boolean],
				default: false
			}
		},
		mounted() {
			
		},
		methods: {
			pickerChange(e) {
				this.regionIndex = e.detail.value;
				this.regionStr = this.region[0][this.regionIndex[0]].name + ' ' + this.region[1][this.regionIndex[1]]
					.name + ' ' +
					this.region[2][this.regionIndex[2]].name + ' ' + this.region[3][this.regionIndex[3]].name;
				//组件传值
				this.$emit('region', [this.region[0][this.regionIndex[0]].name, this.region[1][this.regionIndex[1]].name,
					this.region[2][this.regionIndex[2]].name, this.region[3][this.regionIndex[3]].name
				]);

			},
			pickerColumnchange(e) {
				// console.log(e);
				// // 第几列滑动
				// console.log(e.detail.column);
				// // 第几列滑动的下标
				// console.log(e.detail.value)

				if (e.detail.column === 0) {
					// 声明城市数组
					let cityArr = [];
					let districtArr = [];
					let countyArr = []
					// 设置下标
					this.regionIndex = [e.detail.value, 0, 0, 0];
					// 改变市辖区列表
					this.region[1] = this.oldRegion[e.detail.value].children.map(item => {
						cityArr.push({
							name: item.name,
							code: item.code
						});
					})
					// console.log('cityArr1', cityArr)
					this.$set(this.region, 1, cityArr);
					// 没有港澳台的详细地区信息 制空
					if (cityArr.length == 0) {
						this.$set(this.region, 2, cityArr);
						this.$set(this.region, 3, cityArr);
					}
					//因为港澳台没有地址信息，children会报错，所以有children的时候再渲染
					if (this.oldRegion[e.detail.value].children && this.oldRegion[e.detail.value].children[0]) {
						// 改变区列表
						this.oldRegion[e.detail.value].children[0].children.map(item => {
							districtArr.push({
								name: item.name,
								code: item.code
							});
						})
						// console.log('districtArr1', districtArr)
						this.$set(this.region, 2, districtArr);
						//改变县镇列表
						this.oldRegion[e.detail.value].children[0].children[0].children.map(item => {
							countyArr.push({
								name: item.name,
								code: item.code
							});
						})
						this.$set(this.region, 3, countyArr);
						// console.log('countyArr1', countyArr)
					}

				}
				if (e.detail.column === 1) {
					this.regionIndex[1] = e.detail.value;
					this.regionIndex[2] = 0;
					this.regionIndex[3] = 0;
					let districtArr = [];
					let countyArr = [];
					if (this.oldRegion[this.regionIndex[0]].children[this.regionIndex[1]]) {
						this.oldRegion[this.regionIndex[0]].children[this.regionIndex[1]].children.map(item => {
							districtArr.push({
								name: item.name,
								code: item.code
							});
						})
						this.$set(this.region, 2, districtArr);
						this.oldRegion[this.regionIndex[0]].children[this.regionIndex[1]].children[0].children.map(
							item => {
								countyArr.push({
									name: item.name,
									code: item.code
								});
							})
						this.$set(this.region, 3, countyArr);
					}

				}
				if (e.detail.column === 2) {
					this.regionIndex[2] = e.detail.value;
					this.regionIndex[3] = 0;
					let countyArr = [];
					if (this.oldRegion[this.regionIndex[0]].children[this.regionIndex[1]]) {
						this.oldRegion[this.regionIndex[0]].children[this.regionIndex[1]].children[this.regionIndex[2]]
							.children.map(item => {
								countyArr.push({
									name: item.name,
									code: item.code
								});
							})
						// console.log('countyArr3',countyArr)
						this.$set(this.region, 3, countyArr);
					}

				}
				if (e.detail.column === 3) {
					this.regionIndex[3] = e.detail.value;
				}
			}
		},
		created() {
			let provinceArr = [];
			let cityArr = [];
			let districtArr = [];
			//获取regin[]
			const region = uni.getStorageSync('region');
			if(region) {
				this.oldRegion = region;
			}
			this.oldRegion.map((item, index) => {
				this.region[0].push({
					name: item.name,
					code: item.code
				});
				if (this.previnceId == item.code) {
					provinceArr = item.children;
					this.regionIndex[0] = index;
				}
			})
			provinceArr.map((item, index) => {
				this.region[1].push({
					name: item.name,
					code: item.code
				});
				if (this.cityId == item.code) {
					cityArr = item.children;
					this.regionIndex[1] = index;
				}
			})
			cityArr.map((item, index) => {
				this.region[2].push({
					name: item.name,
					code: item.code
				});
				if (this.districtId == item.code) {
					districtArr = item.children;
					this.regionIndex[2] = index;
				}
			})
			districtArr.map((item, index) => {
				this.region[3].push({
					name: item.name,
					code: item.code
				});
				if (this.countyId == item.code) {
					this.regionIndex[3] = index;
				}
			})
			if (this.isRevise) {
				this.regionStr = this.region[0][this.regionIndex[0]].name + ' ' + this.region[1][this.regionIndex[1]]
					.name + ' ' +
					this.region[2][this.regionIndex[2]].name;
			} else {
				this.regionStr = '';
			}
		}
	}
</script>

<style lang="scss">
	.list {
		// border-bottom: 1rpx solid #eee;
		// padding: 0 0 0 18rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: relative;

		.picker {
			height: 92rpx;
			width: 100%;
			// width: 500rpx;

			.pbox {
				width: 100%;
				height: 92rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				color: #808080;

				view {
					width: 100%;
				}

				.icon-you {
					font-size: 28rpx;
				}
			}

			.pbox_hover {
				color: #383838;
			}

		}

		.name {
			width: 168rpx;
			font-size: 32rpx;
			color: #383838;
		}

		.icon-you {
			font-size: 28rpx;
			color: #999999;
		}

		.input {
			flex: 1;
			height: 100%;
			line-height: 92rpx;
			color: #9080A1;
		}

		.textarea {
			flex: 1;
			height: 100%;
			color: #A9A9A9;
		}
	}
	.upload-info_item {
		border: none;
		background-color: #F7F8FA !important;
		border-radius: 4px;
		line-height: 35px;
		padding-left: 10px;
	}
</style>