// import { resetRouter } from '@/router'
// import { pluginContext } from '@/plugin-context';
// import router from '@/router';
// import { IdmAuthContext } from '@/plugins/idm-auth'
const state = {
	userInfo: {
		// Address: null
		// Age: null
		// Area: null
		// City: ""
		// CreateTime: ""
		// HeadImgUrl: ""
		// IDCard: ""
		// IDCardBackUrl: ""
		// IDCardFrontUrl: ""
		// MaritalStatus: 0
		// Name: ""
		// PhoneNumber: ""
		// Province: null
		// Sex: 1
		// Status: 1
		// UserId: ""
	}
}

const mutations = {
	/**
	 * 设置用户信息传入一个对象，会将传入的对象的属性覆盖到state中，userName, realName, userAccount 属性必传
	 * info: { userName: '', realName: '', userAccount: '', ... }
	 * 
	 */
	SET_USERINFO: (state, info) => {
		Object.keys(info).forEach(item => {
			state[item] = info[item];
		})
	},
}

const actions = {
	// 获取用户信息
	async getInfo({
		commit
	}, redirect_uri) {
		try {
			const user = await pluginContext.auth.loadUserProfile();
			commit('SET_USERINFO', user)
			// 如果用户需要修改密码，则跳转到修改密码页面
			if (IdmAuthContext.IDM_AUTH.token.state.is_change_pwd) {
				router.replace({
					path: '/reset-password',
					query: {
						redirect_uri: redirect_uri || encodeURIComponent(location.href)
					}
				});
				return false;
			}
		} catch (error) {
			console.log(error);
		}
		return true;
	},

	// 用户登出
	logout({
		commit,
		state,
		dispatch
	}) {
		return new Promise((resolve, reject) => {
			pluginContext.auth.logout();
			resetRouter()
			dispatch('tagsView/delAllViews')

			resolve()
		})
	},

	// 设置用户名
	setRealName({
		commit
	}, name) {
		commit('SET_USERINFO', {
			realName: name
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}