<template>
	<view class="">
		<my-navbar title="切换成员"></my-navbar>
		<view class="user-list">
			<view @longpress="handleLongPress(index)" @click="changeList(item, index)" v-for="(item, index) in sign_list" class="user-item" :class="{'user-item-active' : item.active}">
				<view class="flex">
					<img v-if="item.HeadImgUrl" class="user-item_photo" :src="webUrl + '/' + item.HeadImgUrl" alt="" srcset="">
					<img v-else class="user-item_photo" src="@/static/default.jpg" alt="" srcset="">
					<view class="flex flex-column" style="justify-content: space-around;">
						<text class="font" style="color: #0A1117;">{{ item.Name }}</text>
						<text class="sign" :class="{'sign-active' : item.SignStatus === 1}">{{item.SignStatus === 1 ? '已签约' : '未签约'}}</text>
					</view>
				</view>
				<view v-if="item.active" class="flex justify-between align-center">
					<text style="margin-right: 6rpx; color: #069CF8; font-size: 20rpx;">当前默认</text>
					<img class="user-item_select" src="@/pages/sub-packages-user/static/select-user.png" alt="" srcset="">
				</view>
			</view>
			<view class="user-item">
				<view @click="addUser" class="flex">
					<img class="user-item_photo" src="@/pages/sub-packages-user/static/add.png" alt="" srcset="">
					<view class="flex flex-column" style="justify-content: space-around;">
						<text class="font" style="color: #069CF8;">添加成员</text>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog :type="msgType" cancelText="取消" confirmText="确定" title="提示" content="是否删除当前用户！" @confirm="dialogConfirm"
				@close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		<!-- 添加账号 -->
		<uni-popup ref="popup" type="bottom">
			<view class="popup-main">
				<view class="popup-main-title">
					<text>添加账号</text>
					<text>(仅支持身份证号搜索)</text>
				</view>
				<view class="popup-main-search">
					<input type="text" v-model="addUserSearch" placeholder="请输入身份证号" />
				</view>
				<view class="popup-main-info">
					<text>没有账号？</text>
					<text @click="$U.gotoPage('/pages/sub-packages-user/my/upload-info/index')">直接新建用户</text>
				</view>
				<view @click="directBind" class="popup-main-submit">
					<view class="">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webUrl: '',
				sign_status: 1,
				sign_list: [],
				sign_current: 0,
				handle_sign_current: 0, // 长按的index
				msgType: 'info',
				addUserSearch: '', // 添加账号-身份证号搜索
			}
		},
		onLoad() {
			this.webUrl = this.$C.webUrl
			this.getUserBindList()
		},
		methods: {
			// 直接绑定
			directBind() {
				if(this.$U.dateUtils.isEmpty(this.addUserSearch)) {
					this.$U.checkTip('请输入搜索的身份证号！')
					return;
				}
				this.$H.post('/api/APP/WXUser/CreateUserRelation', { IdCard: this.addUserSearch })
					.then(res => {
						
					})
			},
			addUser() {
				 this.$refs.popup.open('bottom')
			},
			dialogConfirm() {
				this.delUser(this.sign_list[this.handle_sign_current])
			},
			dialogToggle(type) {
				this.msgType = type
				this.$refs.alertDialog.open()
			},
			dialogClose() {
				
			},
			// 长按事件处理函数
			handleLongPress(index) {
				this.handle_sign_current = index
				this.dialogToggle('info')
			},
			changeList(val, index) {
				if(this.sign_current === index) return;
				this.sign_current = index;
				this.sign_list = this.sign_list.map(item => {
					return {
						...item,
						active: false
					}
				});
				this.sign_list[index].active = true;
				// 调用切换用户方法
				this.changeUser(val);
			},
			getUserBindList() {
				this.$H.get('/api/APP/WXUser/GetBindUserList')
					.then(res => {
						if(res.Code === 200) {
							const list = res.Data && res.Data.map((item, index) => {
								return {
									...item,
									active: index === 0 ? true : false
								}
							})
							this.sign_list = list;
						}
					})
			},
			changeUser(item) {
				this.$H.post('/api/APP/WXUser/ChangeBindUser', {UserId: item.UserId}, {},{show: true})
					.then(res => {
						if(res.Code === 200) {
							
						}
					})
			},
			delUser(item) {
				this.$H.post('/api/APP/WXUser/RemoveUserRelation', {UserId: item.UserId}, {},{show: true})
					.then(res => {
						if(res.Code === 200) {
							uni.showToast({
								title: res.Message,
								icon: 'none'
							});
							// 刷新列表
							this.getUserBindList()
						}
					})
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
	.user-list {
		padding: 30rpx;
	}
	.user-item {
		padding: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 159rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 0rpx 40rpx 0rpx rgba(0,0,0,0.06);
		border-radius: 24rpx;
		margin-bottom: 40rpx;
		border: 2rpx solid transparent;
		
		&_photo {
			width: 128rpx;
			height: 128rpx;
			border-radius: 50%;
			margin-right: 24rpx;
		}
		
		&_select {
			width: 25rpx;
			height: 25rpx;
		}
	}
	.user-item-active {
		border: 2rpx solid #069CF8;
	}
	.sign {
		width: 64rpx;
		height: 25rpx;
		background: #C1C1C1;
		border-radius: 13rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16rpx;
		color: #FFFFFF;
	}
	.sign-active {
		background: #069CF8;
	}
	
	.popup-main {
		background-color: #fff;
		border-top-left-radius: 24rpx;
		border-top-right-radius: 24rpx;
		padding: 30rpx 50rpx;
		height: 60vh;
		
		&-title {
			display: flex;
			align-items: center;
			text:first-child {
				font-weight: bold;
				font-size: 30rpx;
				margin-right: 10rpx;
			}
			
			text:last-child {
				font-size: 26rpx;
				color: #999;
			}
		}
		
		&-search {
			background-color: #f6f6f6;
			line-height: 120rpx;
			border: 1px solid #1A85EB;
			border-radius: 20rpx;
			margin: 30rpx 0;
			padding: 20rpx;
		}
		
		&-info {
			font-size: 27rpx; 
			color: #999;
			margin-bottom: 10rpx;
			
			text:last-child {
				color: #1A85EB;
			}
		}
		
		&-submit {
			
			view {
				font-size: 32rpx;
				font-weight: bold;
				color: #fff;
				background-color: #1A85EB;
				width: 100%;
				line-height: 88rpx;
				text-align: center;
				border-radius: 44rpx;
			}
		}
	}
</style>