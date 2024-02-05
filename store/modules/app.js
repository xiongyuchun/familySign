import $store from '@/store/index.js';

function getToken() {
	let token = '';
	try {
		if ($store && $store.getters.token) {
			token = $store.getters.token;
			console.log('$store：', $store.getters.token)
		} else {
			const value = uni.getStorageSync('token');
			if (value.Token) {
				token = value.Token;
			}
			console.log('value：', value.token)
		}
	} catch (e) {
		// error
		console.log(e)
	}
	console.log('getToken：', token)
	return token;
}

const state = {
	token: getToken(),
	userType: 'user', // user: 用户  doctor：医生
}

const mutations = {
	SET_TOKEN: (state, token) => {
		state.token = token
	},
	CLEAR_TOKEN: (state) => {
		uni.removeStorage({
			key: 'token'
		})
		state.token = '';
	},
	SET_USER_TYPE: (state, userType) => {
		state.userType = userType
	}
}

const actions = {
	/**
	 * 设置token
	 */
	setToken({
		commit
	}, token) {
		commit('SET_TOKEN', token)
	},
	clearToken({
		commit
	}) {
		commit('CLEAR_TOKEN')
	},
	/**
	 * 设置用户类型
	 */
	setUserType({ commit }, userType) {
		commit('SET_USER_TYPE', userType)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}