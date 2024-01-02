const state = {
    token: 'bccd8c190ea149a294f41f39f4fbf74d'
  }
  
  const mutations = {
    SET_TOKEN: (state, token) => {
      state.token = state.token
    },
  }
  
  const actions = {
    /**
     * 收起/展开菜单
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
  