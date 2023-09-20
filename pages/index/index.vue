<template>
	<view>
		<!-- <user-Index></user-Index> -->
		<doctor-index></doctor-index>
	</view>
</template>

<script>
	import userIndex from '@/pages/user/index/index.vue';
	import doctorIndex from '@/pages/doctor/index/index.vue'
	export default {
		components: {
			userIndex,
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