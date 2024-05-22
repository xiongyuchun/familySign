<template>
	<div class="index">
		<p v-if="userType === 'user'" class="index-button" @click="gotoSign">去签约</p>
		<!-- <p class="index-button" @click="openConversation">打开消息列表</p> -->
		<!-- <p class="index-button" @click="openContact">打开 TUIKit 联系人</p> -->
	</div>
</template>
<script>
	export default {
		computed: {
			userType() {
				return this.$store.getters.userType
			},
		},
		data() {
			return {
			}
		},
		mounted() {
		},
		methods: {
			gotoSign() {
				this.$U.gotoPage('/pages/sub-packages-user/my/doctor-introduction/index');
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