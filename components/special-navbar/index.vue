<template>
	<view :class="{'navbar' : mode === 0, 'navbar-childer': mode === 1}">
		<view :style="{ height: statusBarHeight }" class="w-100"></view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'specialNavbar',
		props: {
			mode: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				statusBarHeight: 20
			}
		},
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px'
		},
		methods: {
			name() {
				
			}
		},
	}
</script>

<style>
</style>