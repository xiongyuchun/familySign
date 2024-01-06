<template>
	<div class="index">
		<p class="index-button" @click="openConversation">打开 TUIKit 会话</p>
		<p class="index-button" @click="openContact">打开 TUIKit 联系人</p>
	</div>
</template>
<script>
	export default {
		methods: {
			// 打开 TUIKit 会话列表
			openConversation() {
				uni.navigateTo({
					url: "/TUIKit/components/TUIConversation/index",
				});
			},
			// 打开 TUIKit 联系人
			openContact() {
				uni.navigateTo({
					url: "/TUIKit/components/TUIContact/index",
				});
			},
		},
	};
</script>
<style lang="scss" scoped>
	.index {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		&-button {
			width: 180px;
			padding: 10px 40px;
			color: #fff;
			background-color: #006eff;
			font-size: 16px;
			margin-top: 65px;
			border-radius: 30px;
			text-align: center;
		}
	}
</style>