import $C from '@/common/config.js';
import $store from '@/store/index.js';

function getUserInfo() {
	let userInfo = '';
	try {
		if ($store && $store.getters.userInfoDoctor) {
			userInfo = $store.getters.userInfoDoctor;
		} else {
			const userinfo = uni.getStorageSync('doctor-userinfo');
			if (userinfo) {
				userInfo = userinfo;
			}
		}
	} catch (e) {
		// error
		console.log(e)
	}
	return userInfo;
}

const state = {
	userInfo: getUserInfo()
}

const mutations = {
	SET_USER_INFO: (state, userInfo) => {
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