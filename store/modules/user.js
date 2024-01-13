import $C from '@/common/config.js';

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
	SET_USER_INFO: (state, userInfo) => {
		state.userInfo = userInfo;
		state.userInfo.HeadImgUrl = $C.webUrl + '/' + userInfo.HeadImgUrl;
	}
}

const actions = {
	/**
	 * 设置用户信息
	 */
	setUserInfo({
		commit
	}, userInfo) {
		commit('SET_USER_INFO', userInfo)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}