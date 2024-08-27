import $store from '@/store/index.js';

function getToken() {
	let token = '';
	try {
		if ($store && $store.getters.token) {
			token = $store.getters.token;
		} else {
			const value = uni.getStorageSync('token');
			if (value.Token) {
				token = value.Token;
			}
		}
	} catch (e) {
		// error
		console.log(e)
	}
	return token;
}

function getUserType() {
	let userType = '';
	try {
		if ($store && $store.getters.userType) {
			userType = $store.getters.userType;
		} else {
			const value = uni.getStorageSync('userType');
			if (value) {
				userType = value;
			}
		}
	} catch (e) {
		// error
		console.log(e)
	}
	return userType;
}

const state = {
	token: getToken(),
	userType: getUserType(), // user: 用户  doctor：医生
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
		uni.setStorage({
			key: 'userType',
			data: userType
		})
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