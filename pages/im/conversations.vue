<template>
	<scroll-view class="conversations" scroll-y="true">
		<view v-if="conversations.length > 0">
			<view class="scroll-item" v-for="(conversation, key) in conversations" :key="key">
				<view class="item-head">
					<image :src="conversation.data.avatar" class="head-icon"></image>
					<view class="item-head_unread" v-if="conversation.unread">{{ conversation.unread }}</view>
				</view>
				<view class="scroll-item_info" @click="chat(conversation)">
					<view class="item-info-top">
						<text class="item-info-top_name">{{ conversation.data.name }}</text>
						<view class="item-info-top_time">{{ formatDate(conversation.lastMessage.timestamp) }}</view>
					</view>
					<view class="item-info-bottom">
						<view class="item-info-bottom-item">
							<view class="item-info-top_content" v-if="!conversation.lastMessage.recalled">
								<text class="unread-text">
									{{ conversation.lastMessage.read === false && conversation.lastMessage.senderId === currentUser.id ? '[未读]' : '' }}
								</text>

								<text v-if="conversation.lastMessage.senderId === currentUser.id">我: </text>
								<text
									v-else>{{ conversation.type === 'group' ? conversation.lastMessage.senderData.name : conversation.data.name }}:
								</text>
								<text
									v-if="conversation.lastMessage.type === 'text'">{{ conversation.lastMessage.payload.text }}</text>
								<text v-else-if="conversation.lastMessage.type === 'video'">[视频消息]</text>
								<text v-else-if="conversation.lastMessage.type === 'audio'">[语音消息]</text>
								<text v-else-if="conversation.lastMessage.type === 'image'">[图片消息]</text>
								<text v-else-if="conversation.lastMessage.type === 'file'">[文件消息]</text>
								<text v-else-if="conversation.lastMessage.type === 'order'">[自定义消息:订单]</text>
								<text v-else>[[未识别内容]]</text>
							</view>
							<view class="item-info-top_content" v-else>
								<text>
									{{conversation.lastMessage.recaller.id === currentUser.id ? '你' : conversation.lastMessage.recaller.data.name}}撤回了一条消息
								</text>
							</view>
							<view class="item-info-bottom_action" @click.stop="showAction(conversation)"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="no-conversation" v-else>当前没有会话</view>
		<view class="action-container" v-if="actionPopup.visible">
			<view class="layer" @click="actionPopup.visible = false"></view>
			<view class="action-box">
				<view class="action-item" @click="topConversation">
					{{ actionPopup.conversation.top ? '取消置顶' : '置顶聊天' }}
				</view>
				<view class="action-item" @click="deleteConversation">删除聊天</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {
		formatDate
	} from '@/lib/utils.js';
	// import restApi from '../lib/restapi';

	const GoEasy = uni.$GoEasy;
	const GRTC = uni.$GRTC;
	export default {
		name: 'conversation',
		data() {
			return {
				conversations: [],

				actionPopup: {
					conversation: null,
					visible: false
				},
				currentUser: null
			}
		},
		onShow() {
			this.init()
		},
		mounted() {
			this.init()
		},
		beforeDestroy() {
			GoEasy.im.off(GoEasy.IM_EVENT.CONVERSATIONS_UPDATED, this.renderConversations);
		},
		methods: {
			init() {
				uni.$currentUser = uni.getStorageSync('currentUser');
				this.currentUser = uni.$currentUser;
				console.log('currentUser:', this.currentUser);
				if (!this.currentUser) {
					uni.navigateTo({
						url: './login'
					});
					return;
				}
				console.log('GoEasy.getConnectionStatus():', GoEasy.getConnectionStatus())
				if (GoEasy.getConnectionStatus() === 'disconnected') {
					this.connectGoEasy(); //连接goeasy
					// this.subscribeGroup(); //建立连接后，就应该订阅群聊消息，避免漏掉
				}
				this.loadConversations(); //加载会话列表
				this.initGoEasyListeners();
			},
			formatDate,
			connectGoEasy() {
				uni.showLoading();
				GoEasy.connect({
					id: this.currentUser.id,
					data: {
						name: this.currentUser.name,
						avatar: this.currentUser.avatar
					},
					onSuccess: () => {
						console.log('GoEasy connect successfully.')
					},
					onFailed: (error) => {
						console.log('Failed to connect GoEasy, code:' + error.code + ',error:' + error
						.content);
					},
					onProgress: (attempts) => {
						console.log('GoEasy is connecting', attempts);
					}
				});
			},
			initGoEasyListeners() {
				GoEasy.im.on(GoEasy.IM_EVENT.CONVERSATIONS_UPDATED, this.renderConversations); //监听会话列表变化
				GoEasy.im.on(GoEasy.IM_EVENT.CONVERSATIONS_UPDATED, this.setUnreadAmount); // 设置角标
				// #ifdef APP-PLUS
				GRTC.on(GRTC.EVENT.RING, this.onRing); //监听来电事件
				// #endif
			},
			onRing() {
				const currentCall = GRTC.currentCall();
				if (currentCall.groupId) {
					uni.navigateTo({
						url: `./rtc/group/ring`,
					})
				} else {
					uni.navigateTo({
						url: `./rtc/private/ring`,
					})
				}
			},

			// 加载最新的会话列表
			loadConversations() {
				GoEasy.im.latestConversations({
					onSuccess: (result) => {
						uni.hideLoading();
						let content = result.content;
						this.renderConversations(content);
						this.setUnreadAmount(content);
					},
					onFailed: (error) => {
						uni.hideLoading();
						console.log('获取最新会话列表失败, error:', error);
					}
				});
			},
			renderConversations(content) {
				console.log('content:', content)
				this.conversations = content.conversations;
			},
			setUnreadAmount(content) {
				const unreadTotal = content.unreadTotal;
				console.log('unreadTotal：',unreadTotal)
				if (unreadTotal > 0) {
					uni.setTabBarBadge({
						index: 1,
						text: unreadTotal.toString()
					});
				} else {
					uni.removeTabBarBadge({
						index: 1
					});
				}
				// #ifdef APP-PLUS
				GoEasy.setBadge({
					badge: unreadTotal,
					onSuccess: function() {
						console.log("setBadge successfully.")
					},
					onFailed: function(error) {
						console.log("Failed to setBadge,error:" + error);
					}
				});
				// #endif
			},
			subscribeGroup() {
				let groups = restApi.findGroups(this.currentUser);
				let groupIds = groups.map(item => item.id);
				GoEasy.im.subscribeGroup({
					groupIds: groupIds,
					onSuccess: function() {
						console.log('订阅群消息成功');
					},
					onFailed: function(error) {
						console.log('订阅群消息失败:', error);
					}
				});
			},
			topConversation() { //会话置顶
				this.actionPopup.visible = false;
				let conversation = this.actionPopup.conversation;
				let description = conversation.top ? '取消置顶' : '置顶';
				GoEasy.im.topConversation({
					conversation: conversation,
					top: !conversation.top,
					onSuccess: function() {
						uni.showToast({
							title: description + '成功',
							icon: 'none'
						});
					},
					onFailed: function(error) {
						console.log(description, '失败：', error);
					}
				});
			},
			deleteConversation() {
				uni.showModal({
					content: '确认删除这条会话吗？',
					success: (res) => {
						if (res.confirm) {
							let conversation = this.actionPopup.conversation;
							this.actionPopup.visible = false;
							GoEasy.im.removeConversation({
								conversation: conversation,
								onSuccess: function() {
									console.log('删除会话成功');
								},
								onFailed: function(error) {
									console.log(error);
								},
							});
						} else {
							this.actionPopup.visible = false;
						}
					},
				})
			},
			chat(conversation) {
				this.$U.gotoPage(`/pages/im/privateChat?to=${conversation.userId}`)
			},
			showAction(conversation) {
				this.actionPopup.conversation = conversation;
				this.actionPopup.visible = true;
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	.conversations {
		width: 750rpx;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.conversations .scroll-item {
		height: 152rpx;
		display: flex;
		align-items: center;
		padding-left: 32rpx;
	}

	.conversations .scroll-item .head-icon {
		width: 100rpx;
		height: 100rpx;
		margin-right: 28rpx;
	}

	.conversations .scroll-item_info {
		height: 151rpx;
		width: 590rpx;
		padding-right: 32rpx;
		border-bottom: 1px solid #EFEFEF;
	}

	.conversations .scroll-item_info .item-info-top {
		padding-top: 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.conversations .item-info-top_name {
		font-size: 34rpx;
		color: #262628;
	}

	.conversations .item-info-top_time {
		font-size: 34rpx;
		color: rgba(179, 179, 179, 0.8);
	}

	.conversations .item-info-bottom {
		height: 40rpx;
		line-height: 40rpx;
		overflow: hidden;
	}

	.conversations .item-info-bottom-item {
		display: flex;
		justify-content: space-between;
	}

	.item-info-bottom .item-info-top_content {
		font-size: 34rpx;
		color: #b3b3b3;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	.item-info-bottom .item-info-bottom_action {
		width: 50rpx;
		height: 50rpx;
		font-size: 34rpx;
		background: url("/static/images/action.png") no-repeat center;
		background-size: 28rpx 30rpx;
	}

	.no-conversation {
		width: 100%;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 34rpx;
		color: #9D9D9D;
	}

	.item-head {
		position: relative;
	}

	.item-head .item-head_unread {
		padding: 6rpx;
		background-color: #EE593C;
		color: #FFFFFF;
		font-size: 34rpx;
		line-height: 28rpx;
		border-radius: 24rpx;
		min-width: 24rpx;
		min-height: 24rpx;
		text-align: center;
		position: absolute;
		top: 0;
		right: 15rpx;
	}

	.action-container {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.action-container .layer {
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(51, 51, 51, 0.5);
		width: 100%;
		height: 100%;
		z-index: 99;
	}

	.action-box {
		width: 400rpx;
		height: 240rpx;
		background: #ffffff;
		position: relative;
		z-index: 100;
		border-radius: 20rpx;
		overflow: hidden;
	}

	.action-item {
		text-align: center;
		line-height: 120rpx;
		font-size: 34rpx;
		color: #262628;
		border-bottom: 1px solid #EFEFEF;
	}

	.unread-text {
		color: #d02129;
	}
</style>