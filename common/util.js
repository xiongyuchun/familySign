import $C from './config.js';

// 监听网络
function onNetWork(){
	let func = (res)=>{
		if (res.networkType === 'none') {
			uni.showToast({
				title: '当前处于断网状态,请先连接',
				icon: 'none'
			});
		}
	}
	uni.getNetworkType({
		success:func
	});
	uni.onNetworkStatusChange(func);
}

function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}

function pathToBase64(path) {
	const promise = new Promise((resolve, reject) => {
		uni.getFileSystemManager().readFile({
			filePath: path, //临时地址
			encoding: "base64", //编码格式
			success: (res) => {
				const data = "data:image/jpg" +";base64," +res.data //base64地址
				resolve(data)
			},
			fail: (res) => reject(res.errMsg),
		})
	})
	return promise
}

// 跳转到指定页面 非tabbar
function gotoPage(path) {
	uni.navigateTo({
		url: path
	})
}

// 跳转到指定页面 非tabbar 并关闭所有页面
function gotoPageAndClosePage(path) {
	uni.reLaunch({
		url: path
	})
}

// 跳转到指定页面tabbar
function gotoPageTab(path) {
	uni.switchTab({
		url: path
	})
}

// 返回上指定页
function backPage(num) {
	uni.navigateBack(num)
}

// 校验-提示
function checkTip(text) {
	uni.showToast({
		icon: 'none',
		title: text
	})
}

var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	},
	isEmpty: function(val) { // 判断传入值是否为空
		if(val === '' || val === undefined || val === null) return true;
		return false;
	},
	isTel: function(tel) { // 判断是否是手机号
		// 使用正则表达式匹配手机号格式
		const phoneRegex = /^1[3456789]\d{9}$/;
	
		// 使用test方法检查是否匹配
		return phoneRegex.test(tel);
	},
	isIDcard: function(id) { // 判断是否为身份证号
		// 使用正则表达式匹配身份证号码格式
		const idCardRegex = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/;
		
		// 使用test方法检查是否匹配
		return idCardRegex.test(id);
	},
	validatePassword: function(password) { // 密码复杂度校验  8-16位长度，只能数字和字母组合
		// 正则表达式，检查密码是否只包含数字和字母，并且长度在8到16位之间
		const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,16}$/;
	
		// 测试密码是否符合规则
		return regex.test(password);
	},
};

export default {
	formatTime,
	formatLocation,
	onNetWork,
	dateUtils,
	pathToBase64,
	gotoPage,
	gotoPageTab,
	backPage,
	checkTip,
	gotoPageAndClosePage
}
