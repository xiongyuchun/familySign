<template>
	<view class="my-navbar bg-linear-gradient">
		<view :style="{ height: statusBarHeight }" class="w-100"></view>
		<view class="my-navbar-main bg-linear-gradient">
			<slot name="left">
				<view class="my-navbar-main_left" @click="$U.backPage(1)">
					<uni-icons v-if="mode === 'navbar'" :color="leftIconColor" type="back" size="20" />
				</view>
			</slot>
			<slot name="content">
				<view class="my-navbar-main_content flex align-center justify-center text-white font">
					{{title}}
				</view>
			</slot>
			<slot name="right" my-navbar-main_right></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'NavBar',
		props: {
			mode: {
				type: String,
				default: 'navbar' // tabbar | navbar
			},
			leftIconColor: {
				type: String,
				default: '#fff'
			},
			title: {
				type: String,
				default: ''
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

<style scoped lang="scss">
	.my-navbar {
		position: sticky;
		top: 0;
			
		&-main {
			height: 44px;
			display: flex;
			position: relative;
			
			&_left {
				display: flex;
				align-items: center;
				position: absolute;
				left: 30rpx;
				top: 14px;
			}
			
			&_content {
				flex: 1;
			}
			
			&_right {
				display: flex;
				align-items: center;
			}
			
		}
		
	}
	.bg-linear-gradient {
		background: linear-gradient(to right, #05a6f6, #1482fd);
	}
</style>