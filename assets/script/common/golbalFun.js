var golbalFun = module.exports;
window.golbalFun = golbalFun;

/**
 * true/false
 */
golbalFun.setLoading = function (showloading) {
	console.log('已在 showmsg.js 初始化')
}

golbalFun.showMessage = function (msg) {
	console.log('已在 showmsg.js 初始化')
}

// showPop已在popLayer中实现
golbalFun.showPop = function (prefab, closeCbk) {
	cc.error('showPop还未初始化');
}

//  +-----------+
//  |   node    |
//  +-----------+
// 动态修改节点是否显示
golbalFun.setActive = function (node, isActive) {
	node.active = isActive;
}
// 节点的状态
golbalFun.getActive = function (node) {
	return node.active;
}

//  +-----------+
//  |   label   |
//  +-----------+
// 动态替换label
golbalFun.setLabel = function (node, text) {
	node.getComponent('cc.Label').string = text;
}

// 获得label
golbalFun.getLabel = function (node) {
	return node.getComponent("cc.Label").string;
}

//  +-----------+
//  |  button   |
//  +-----------+
// 设置button状态(disable or enable)
golbalFun.setInteractable = function (node, isInteractable) {
	node.getComponent(cc.Button).interactable = isInteractable;
}

//  +-----------+
//  |  checkbox |
//  +-----------+
//动态修改checkbox是否选中
golbalFun.setChecked = function (node, isChecked) {
	node.getComponent(cc.Toggle).isChecked = isChecked;
}

//获得checkbox此时的状态
golbalFun.getIsChecked = function (node) {
	return node.getComponent(cc.Toggle).isChecked;
}

//  +-----------+
//  |  editBox  |
//  +-----------+
//取出输入框的值
golbalFun.getInput = function (node) {
	return node.getComponent(cc.EditBox).string;
}

//给输入框赋值
golbalFun.setInput = function (node, str) {
	node.getComponent(cc.EditBox).string = str;
}

golbalFun.addWidget = function (node) {
	node.getComponent(cc.Widget).target = cc.find("Canvas");
}

// 添加监听
golbalFun.addListener = function (listenerName, callback) {
	pomelo.off(listenerName); //先删除之前的所有该事件的监听
	pomelo.on(listenerName, callback);
}