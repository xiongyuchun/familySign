import $C from '@/common/config.js';
import $store from '@/store/index.js';
export default {
	common:{
		method: 'GET',
		header:{
			"content-type":"application/json",
			"Token": $store.getters.token || ''
		},
		data:{},
		loading: {
			show: false,
			text: '加载中'
		}
	},
	request(options = {}){
		options.url = $C.webUrl + options.url
		options.method = options.method || this.common.method
		options.header = options.header || this.common.header
		
		// 验证权限token
		// if(options.token){
		// 	options.header.token = $store.state.token
		// 	if(!options.noCheck && !options.header.token && !options.notoast){
		// 		return uni.showToast({
		// 			title: '非法token,请重新登录',
		// 			icon: 'none'
		// 		});
		// 	}
		// }
		
		return new Promise((res,rej)=>{
			if(this.common.loading.show) {
				uni.showLoading({
					title: this.common.loading.text
				});
			}
			uni.request({
				...options,
				success: (result) => {
					// 返回原始数据
					// 请求服务端失败
					if (result.data.Code !== 200) {
						uni.showToast({
							title:result.data.Message || '请求失败',
							icon: 'none'
						});
						return rej(result.data)
					}
					// 成功
					res(result.data)
					uni.hideLoading();
				},
				fail:(error)=>{
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					});
					uni.hideLoading();
					return rej()
				}
			});
		})
	},
	get(url,data = {},options = {}, loading = {}){
		options.url = url
		options.data = data
		options.method = 'GET'
		if(loading.show) {
			this.common.loading.show = loading.show
		}
		if(options.text) {
			this.common.loading.text = loading.text
		}
		return this.request(options)
	},
	post(url,data = {},options = {}, loading = {}){
		options.url = url
		options.data = data
		options.method = 'POST'
		if(loading.show) {
			this.common.loading.show = loading.show
		}
		if(options.text) {
			this.common.loading.text = loading.text
		}
		return this.request(options)
	},
	upload(url,options = {}){
		options.url = $C.webUrl + url
		options.header = options.header || this.common.header
		options.header.Token = $store.getters.token || ''
		// // 验证权限token
		// if(options.token){
		// 	options.header.token = $store.state.token
		// 	if(!options.header.token){
		// 		return uni.showToast({
		// 			title: '非法token,请重新登录',
		// 			icon: 'none'
		// 		});
		// 	}
		// }
		
		return new Promise((res,rej)=>{
			uni.uploadFile({
				...options,
				success: (uploadFileRes) => {
					if(uploadFileRes.statusCode !== 200){
						return uni.showToast({
							title: '上传图片失败',
							icon: 'none'
						});
					}
					let data = JSON.parse(uploadFileRes.data)
					res(data)
				},
				fail:(err)=>{
					rej(err)
				}
			});
		})
		
	}
}