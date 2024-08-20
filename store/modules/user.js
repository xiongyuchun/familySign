import $C from '@/common/config.js';
import $store from '@/store/index.js';

function getUserInfo() {
	let userInfo = {};
	try {
		if ($store && $store.getters.userInfo) {
			userInfo = $store.getters.userInfo;
		} else {
			const _userInfo = uni.getStorageSync('userInfo');
			if (JSON.stringify(_userInfo) !== '{}') {
				userInfo = _userInfo;
			}
		}
	} catch (e) {
		// error
		console.log(e)
	}
	return userInfo;
}

const state = {
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
	userInfo: getUserInfo()
}

const mutations = {
	SET_USER_INFO: (state, userInfo) => {
		uni.setStorage({
			key: 'userInfo',
			data: userInfo
		})
		state.userInfo = userInfo;
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