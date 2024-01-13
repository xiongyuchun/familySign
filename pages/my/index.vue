<template>
	<view>
		<template>
			<my-index v-if="userType === 'user'"></my-index>
			<doctor-index v-else></doctor-index>
		</template>
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
		computed: {
			userType() {
				return this.$store.getters.userType
			},
		},
		data() {
			return {

			}
		},
	}
</script>

<style scoped lang="scss">
</style>