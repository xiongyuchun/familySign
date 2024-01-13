const getters = {
    userInfo: (state) => state.user.userInfo,
	userInfoDoctor: (state) => state.userDoctor.userInfo,
	userType: (state) => state.app.userType,
	signPath: (state) => state.sign.signPath,
    token: (state) => state.app.token,
  }
  export default getters
  