<template>
	<view class="">
		<my-navbar title="在线续约"></my-navbar>
		<sign-tip :title="signObj.title" :desc="signObj.desc" :imgPath="signObj.imgPath"></sign-tip>
	</view>
</template>

<script>
	import signTip from '@/components/sign-tip/index.vue';
	export default {
		components: {
			signTip
		},
		data() {
			return {
				signObj: {
					title: '您已签约',
					desc: ['签约协议于2023年12月23日到期', '请2023年10月23日之后开始续约'],
					imgPath: '/static/my/signed.png',
				}
			}
		},
	}
</script>

<style>
</style>