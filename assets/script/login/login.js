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
				host: "127.0.0.1",
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
								self.loginAccount(account, password, "110");
							})
						});
					}
				})
			});
		})

	},
	loginAccount(account, password, device) {
		var self = this;
		gl_netWork.send("connector.entryHandler.login", {
			mobile: account,
			password,
			device
		}, function (data) {
			console.log('-----', data)
			if (!data.code || data.code != 200) {
				if (data.code == -500) {
					golbalFun.showMessage(data.msg);
				} else {
					var errormsg = data.msg || "未知错误！";
					golbalFun.showMessage(errormsg);
				}
				pomelo.disconnectclt(function () {});
			}
		}, true);
	},

});