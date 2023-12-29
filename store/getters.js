const getters = {
    userAccount: (state) => state.user.userAccount,
    userName: (state) => state.user.userName,
    realName: (state) => state.user.realName,
    sidebar: (state) => state.app.sidebar,
    size: (state) => state.app.size,
    device: (state) => state.app.device,
    visitedViews: (state) => state.tagsView.visitedViews,
    menuList: (state) => state.authcenter.menuTree,
    authCodeList: (state) => state.auth.authCodeList,
  }
  export default getters
  