function getToken() {
	let token = '';
	try {
		const value = uni.getStorageSync('token');
		if (value) {
			token = value;
		}
	} catch (e) {
		// error
	}
	return token;
}

const state = {
    token: getToken()
  }
  
  const mutations = {
    SET_TOKEN: (state, token) => {
      state.token = state.token
    },
  }
  
  const actions = {
    /**
     * 设置token
     */
    setToken({ commit }, token) {
		commit('SET_TOKEN', token)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  