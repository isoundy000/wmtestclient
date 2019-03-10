require('golbalFun');
cc.Class({
	extends: cc.Component,

	properties: {},

	// LIFE-CYCLE CALLBACKS:

	// onLoad () {},

	start() {
		cc.director.loadScene("login");
	},

	// update (dt) {},
});