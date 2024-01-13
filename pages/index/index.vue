<template>
	<view>
		<template v-if="loginStatus">
			<user-Index v-if="userType === 'user'"></user-Index>
			<doctor-index v-else></doctor-index>
		</template>
		<template v-else>
			<login></login>
			<!-- <loginDoctor></loginDoctor> -->
		</template>
	</view>
</template>

<script>
	import userIndex from '@/pages/user/index/index.vue';
	import doctorIndex from '@/pages/doctor/index/index.vue'
	import login from '@/pages/login/index.vue';
	import loginDoctor from '@/pages/login/login-doctor.vue';
	export default {
		components: {
			userIndex,
			doctorIndex,
			login,
			loginDoctor
		},
		data() {
			return {

			}
		},
		computed: {
			loginStatus() {
				return this.$store.getters.token ? true : false;
			},
			userType() {
				return this.$store.getters.userType
			}
		},
	}
</script>

<style scoped lang="scss">
</style>