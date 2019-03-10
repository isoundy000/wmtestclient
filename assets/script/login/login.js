require('pomelo-creator-client');
require('netWork');
cc.Class({
	extends: cc.Component,

	properties: {
		login: {
			default: null,
			type: cc.Button
		},
		zhanghao: {
			default: null,
			type: cc.EditBox
		},
		secret: {
			default: null,
			type: cc.EditBox
		},

	},

	// LIFE-CYCLE CALLBACKS:

	onLoad() {
		gl_sendqueue = [];
	},

	start() {

	},
	onTouchLogin() {
		console.log('---------------onTouchLogin', this.zhanghao.string, this.secret.string);
		if (!this.zhanghao.string || !this.secret.string) {
			return golbalFun.showMessage("账号或密码不能为空");
		}
		this.connectToserver(this.zhanghao.string, this.secret.string);
	},
	// update (dt) {},
	connectToserver(account, password) {
		let self = this;
		golbalFun.setLoading(true);
		pomelo.disconnect(function () {
			pomelo.init({
				host: "47.111.75.80",
				port: 3014,
			}, function () {
				var route = 'gate.gateHandler.queryEntry';
				pomelo.request(route, {}, function (data) {
					console.log('data', data);
					if (data.code == 200) {
						pomelo.disconnect(function () {
							pomelo.init({
								host: data.host,
								port: data.port,
								reconnect: true
							}, function () {
								golbalFun.setLoading(false);
								self.loginAccount(account, password);
							})
						});
					}
				})
			});
		})

	},
	loginAccount() {
		var self = this;
		gl_netWork.send("connector.entryHandler.login", {
			userName: "pre110",
			password: '112233',
			mode: 2,
			deviceID: '112233'
		}, function (data) {
			console.log('-----', data)
		}, true);
	},

});