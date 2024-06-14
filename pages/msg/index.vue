<template>
	<div class="index">
		<conversations></conversations>
	</div>
</template>
<script>
	import conversations from '@/pages/im/conversations.vue';
	export default {
		components: {
			conversations,
		},
		computed: {
			userType() {
				return this.$store.getters.userType
			},
		},
		data() {
			return {
				userID: 'xyc'
			}
		},
		mounted() {
		},
		methods: {
			gotoSign() {
				this.$U.gotoPage('/pages/sub-packages-user/my/doctor-introduction/index');
			},
			chat() {
				this.$U.gotoPage(`/pages/im/privateChat?to=08c0a6ec-a42b-47b2-bb1e-15e0f5f9a19a`)
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