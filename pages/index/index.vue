<template>
	<view>
		<view class="navbar"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
	}
</script>

<style scoped lang="scss">
	.navbar {
		width: 100vw;
		height: 300rpx;
		position: relative;
		z-index: -1;
		overflow: hidden;
		
		&::after {
			content: '';
			width: 140%;
			height: 300rpx;
			position: absolute;
			left: -20%;
			top: 0;
			z-index: -1;
			border-radius: 0 0 50% 50%;
			background: linear-gradient(to right, #05a6f6, #1482fd);
		}
	}
</style>