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

const state = {
	token: getToken()
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
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}