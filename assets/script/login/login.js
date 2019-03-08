// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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
        loading: {
            default: null,
            type: cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    onTouchLogin() {
        console.log('---------------onTouchLogin');
        var loading = cc.instantiate(this.loading);
        loading.active = true;
        this.node.addChild(loading);
        setTimeout(function () {
            loading.active = false;
        }, 5000);
    }
    // update (dt) {},
});
