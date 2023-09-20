<template>
	<view>
		<!-- <my-index></my-index> -->
		<doctor-index></doctor-index>
	</view>
</template>

<script>
	import myIndex from '@/pages/user/my/index.vue';
	import doctorIndex from '@/pages/doctor/my/index.vue';
	export default {
		components: {
			myIndex,
			doctorIndex
		},
		data() {
			return {

			}
		},
	}
</script>

<style scoped lang="scss">
</style>