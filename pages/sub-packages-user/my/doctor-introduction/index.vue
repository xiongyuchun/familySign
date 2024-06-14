<template>
	<view class="">
		<my-navbar title="医生介绍"></my-navbar>
		<view class="px-3">
			<view class="doctor-wz" :style="{top: statusBarHeight}">
				<view class="mb-2 flex align-center">
					<img class="screen" src="@/pages/sub-packages-user/static/screen.png" alt="" srcset="">
					<text class="screen-text">筛选</text>
				</view>
				<view class="addrs mb-3">
					<view class="addrs-item mr-2">
						<uni-data-select
							v-model="cuttentArea"
							placeholder="地区"
							emptyTips="无数据"
							:localdata="areaInfo.areaList"
							@change="handelAreaList"
						></uni-data-select>
					</view>
					<view class="addrs-item mr-2">
						<uni-data-select
							v-model="cuttentAreaUni"
							placeholder="单位"
							emptyTips="无数据"
							:localdata="areaInfo.areaUni"
							@change="handelAreaUniList"
						></uni-data-select>
					</view>
					<view class="addrs-item mr-2">
						<uni-data-select
							v-model="cuttentAreaUniDep"
							placeholder="科室"
							emptyTips="无数据"
							:localdata="areaInfo.areaUniDep"
							@change="handelAreaUniDepList"
						></uni-data-select>
					</view>
				</view>
			</view>
			<view>
				<view @click="$U.gotoPage(`/pages/sub-packages-user/my/doctor-details/index?id=${item.DoctorId}`)" v-for="(item, index) in doctorList" :key="index" class="doc-list">
					<view class="doc-list-photo flex align-center">
						<view class="mr-2">
							<img class="doc-list-photo_img" :src="item.HeadImgUrl" alt="" srcset="">
						</view>
						<view class="flex flex-column justify-between">
							<view class="flex align-center mb-2">
								<view class="doc-list-username">{{item.Name}}</view>
								<view v-for="(tTag, tIndex) in item.TagArray" :key="tIndex" class="flex">
									<view class="doc-list-dep">{{tTag}}</view>
								</view>
							</view>
							<view class="doc-list-name">
								{{item.MajorInfo}}
							</view>
						</view>
					</view>
					<view class="doc-list-score flex justify-between align-center mb-3">
						<view class="flex align-center">
							<view class="star-review">医师星评:</view>
							<view class="">
								<view class="flex align-center">
									<img class="score" src="@/pages/sub-packages-user/static/score.png" alt="" srcset="">
									<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
									<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
									<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
									<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
								</view>
							</view>
						</view>
						<view class="flex align-center">
							<view class="star-review">医院星评:</view>
							<view class="">
								<view class="flex align-center">
									<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
									<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
									<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
									<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
									<img class="score" src="@/pages/sub-packages-user/static/un-score.png" alt="" srcset="">
								</view>
							</view>
						</view>
					</view>
					<view class="doc-list-desc mb-3 overflow-hidden-2">
						{{item.WorkUnitName ? item.WorkUnitName : ''}}
					</view>
					<view class="flex justify-end">
						<view @click.stop="$U.gotoPage('/pages/sub-packages-user/my/online-signing/index?type=user&doctorId=' + item.DoctorId)" class="go-sign mr-3">
							去签约
						</view>
						<view @click.stop="talk(item)" class="go-seek">医生咨询</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'docuor-introduction',
		data() {
			return {
				statusBarHeight: 20,
				doctorList: [],
				currentPage: 1, // 当前医生列表页
				isLoad: false, // 是否有下一页
				areaInfo: {  // 科室信息
					areaList: [], // 地区列表
					areaUni: [], // 单位列表
					areaUniDep: [] // 科室列表
				},
				cuttentArea: '', // 当前选中地区
				cuttentAreaUni: '', // 当前选中单位
				cuttentAreaUniDep: '',  // 当前选中科室
			}
		},
		onLoad() {
			// 获取医生列表
			this.getDoctorList()
			// 查询地区列表
			this.getAreaList()
			
		},
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 44 + 'px'
		},
		methods: {
			// 获取用户信息
			getUserInfo() {
				this.$H.get('/api/APP/WXUser/GetUserInfo')
					.then(res => {
						if(res.Data) {
							this.$store.dispatch('user/setUserInfo', res.Data);
						}
					}).catch(err => {
						console.log('err:', err)
					})
			},
			// 医生咨询
			talk(item) {
				let obj = {
					id: item.DoctorId,
					name: item.Name,
					avatar: item.HeadImgUrl
				}
				this.$U.gotoPage(`/pages/im/privateChat?to=${JSON.stringify(obj)}`)
			},
			// 地区列表-change
			handelAreaList(e) {
				console.log('e:', e)
				this.getAreaUniList(e);
				this.cuttentArea = e;
				this.doctorList = []; // 清空之前列表
				this.currentPage = 1;
				// 更新医生列表
				this.getDoctorList();
			},
			// 单位列表-change
			handelAreaUniList(e) {
				this.cuttentAreaUni = e;
				this.doctorList = []; // 清空之前列表
				this.currentPage = 1;
				this.getAreaUniDepList(e);
				// 更新医生列表
				this.getDoctorList();
			},
			// 当前选中的科室
			handelAreaUniDepList(e) {
				this.cuttentAreaUniDep = e;
				this.doctorList = []; // 清空之前列表
				this.currentPage = 1;
				// 更新医生列表
				this.getDoctorList();
			},
			// 查询地区列表
			getAreaList() {
				this.$H.get('/api/APP/WXUser/GetAreaList')
					.then(res => {
						if(res.Code === 200) {
							// 数据格式转换
							this.areaInfo.areaList = res.Data && res.Data.map(item => {
								return {
									...item,
									text: item.Name,
									value: item.Code
								}
							})
						}
					})
			},
			// 查询单位列表
			getAreaUniList(area) {
				if(area === '') return;
				this.$H.get('/api/APP/WXUser/GetAreaUnitList', { area })
					.then(res => {
						if(res.Code === 200) {
							// 数据格式转换
							this.areaInfo.areaUni = res.Data && res.Data.map(item => {
								return {
									...item,
									text: item.Name,
									value: item.Code
								}
							})
						}
					})
			},
			// 查询科室列表
			getAreaUniDepList(unitId) {
				if(unitId === '') return;
				this.$H.get('/api/APP/WXUser/GetAreaUnitDeptList', { unitId })
					.then(res => {
						if(res.Code === 200) {
							// 数据格式转换
							this.areaInfo.areaUniDep = res.Data && res.Data.map(item => {
								return {
									...item,
									text: item.Name,
									value: item.Code
								}
							})
						}
					})
			},
			// 获取医生列表
			getDoctorList() {
				const params = {
					currentPage: this.currentPage, 
					pageSize: 10
				}
				if(this.cuttentArea) {
					params.area = this.cuttentArea
				}
				if(this.cuttentAreaUni) {
					params.unitId = this.cuttentAreaUni
				}
				if(this.cuttentAreaUniDep) {
					params.dept = this.cuttentAreaUniDep
				}
				this.$H.get('/api/APP/WXUser/GetDoctorList', params, {} ,{ show: true })
					.then(res => {
						if(res.Code === 200) {
							// 处理格式
							const formatData = res.Data && res.Data.map(item => {
								let TagArray = '';
								if(item.TagArray) {
									TagArray = item.TagArray.split('|')
								}
								return {
									...item,
									TagArray: TagArray,
									HeadImgUrl: this.$C.webUrl + '/' + item.HeadImgUrl
								}
							})
							this.doctorList = [...this.doctorList, ...formatData];
							this.isLoad = res.Data && res.Data.length >= 10 ? true : false;
						}
					})
			},
			// 监听上拉加载
			onReachBottom() {
				if(this.isLoad) {
					this.currentPage = this.currentPage + 1;
					this.getDoctorList();
				}
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
	.doctor-wz {
		position: sticky;
		background-color: #fdfdfd;
		padding-top: 50rpx;
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
	::v-deep .uni-select {
		padding: 0;
		height: 45rpx;
		font-size: 28rpx;
		color: #999;
		border: none;
		min-width: 25vw;
		max-width: 28vw;
	}
</style>