<template>
	<view class="">
		{{ newsInfo.Content }}
	</view>
</template>

<script>
	export default {
		name: 'news-info',
		data() {
			return {
				id: '',
				newsInfo: ''
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getInfo();
		},
		methods: {
			getInfo() {
				if(this.id) {
					this.$H.get('/api/APP/WXUser/GetNewsInfo', {NewsId: this.id})
						.then(res => {
							if(res.Code === 200) {
								this.newsInfo = res.Data
							}
						})
				}
			}
		},
	}
</script>

<style scoped lang="scss">
</style>