const state = {
    sidebar: {
      opened: true,
    }
  }
  
  const mutations = {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebar.opened = !state.sidebar.opened
    },
  }
  
  const actions = {
    /**
     * 收起/展开菜单
     */
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  