
const state = {
	signPath: ''
}

const mutations = {
	SET_SIGN_PATH: (state, path) => {
		state.signPath = path
	}
}

const actions = {
	/**
	 * 设置当前签约path
	 */
	setSignPath({
		commit
	}, path) {
		commit('SET_SIGN_PATH', path)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}