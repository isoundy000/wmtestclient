var GameToast = {};
window.GameToast = GameToast;

// loading和提示信息需要各自实现
GameToast.showLoading = function (isVisible, route) {
    cc.error('showLoading还未初始化');
}

GameToast.hideLoading = function (route) {
    cc.error('showLoading还未初始化');
}

GameToast.getLoadingShow = function (route) {
    cc.error('showLoading还未初始化'); 
}

GameToast.showMessage = function (msg, code) {
    cc.error('showMessage还未初始化:', msg, code);
}

// showPop已在popLayer中实现
GameToast.showPop = function (prefab, closeCbk) {
    cc.error('showPop还未初始化');
}

//  +-----------+
//  |   node    |
//  +-----------+
// 动态修改节点是否显示
GameToast.setActive = function (node, isActive) {
    node.active = isActive;
}
// 节点的状态
GameToast.getActive = function (node) {
    return node.active;
}

//  +-----------+
//  |   label   |
//  +-----------+
// 动态替换label
GameToast.setLabel = function (node, text) {
    node.getComponent('cc.Label').string = text;
}

// 获得label
GameToast.getLabel = function (node) {
    return node.getComponent("cc.Label").string;
}

//  +-----------+
//  |  button   |
//  +-----------+
// 设置button状态(disable or enable)
GameToast.setInteractable = function (node, isInteractable) {
    node.getComponent(cc.Button).interactable = isInteractable;
}

//  +-----------+
//  |  checkbox |
//  +-----------+
//动态修改checkbox是否选中
GameToast.setChecked = function (node, isChecked) {
    node.getComponent(cc.Toggle).isChecked = isChecked;
}

//获得checkbox此时的状态
GameToast.getIsChecked = function (node) {
    return node.getComponent(cc.Toggle).isChecked;
}

//  +-----------+
//  |  editBox  |
//  +-----------+
//取出输入框的值
GameToast.getInput = function (node) {
    return node.getComponent(cc.EditBox).string;
}

//给输入框赋值
GameToast.setInput = function (node, str) {
    node.getComponent(cc.EditBox).string = str;
}

GameToast.addWidget = function (node) {
    node.getComponent(cc.Widget).target = cc.find("Canvas");
}

// 添加监听
GameToast.addListener = function (listenerName, callback) {
    pomelo.off(listenerName); //先删除之前的所有该事件的监听
    pomelo.on(listenerName, callback);
}