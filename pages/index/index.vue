<template>
	<view>
		<template v-if="loginStatus">
			<user-Index v-if="userType"></user-Index>
			<doctor-index v-else></doctor-index>
		</template>
		<template v-else>
			<login></login>
		</template>
	</view>
</template>

<script>
	import userIndex from '@/pages/user/index/index.vue';
	import doctorIndex from '@/pages/doctor/index/index.vue'
	import login from '@/pages/login/index.vue';
	export default {
		components: {
			userIndex,
			doctorIndex,
			login
		},
		data() {
			return {

			}
		},
		computed: {
			loginStatus() {
				return this.$store.state.loginStatus
			},
			userType() {
				const {name} = this.$store.state.user
				if(name === 'user') return true
				return false
			}
		},
	}
</script>

<style scoped lang="scss">
</style>