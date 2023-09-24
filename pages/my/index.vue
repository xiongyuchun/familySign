<template>
	<view>
		<template>
			<my-index v-if="userType"></my-index>
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
				const {name} = this.$store.state.user
				if(name === 'user') return true
				return false
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