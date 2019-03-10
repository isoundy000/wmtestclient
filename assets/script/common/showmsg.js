cc.Class({
    extends: cc.Component,

    properties: {
        msglabel: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.game.addPersistRootNode(this.node);
        this.node.active = false;
        let self = this;
        golbalFun.showMessage = function (msg) {
            self.node.active = true;
            self.msglabel.string = msg;
            self.node.stopAllActions();
            self.node.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(2), cc.fadeOut(1.0), cc.callFunc(function () {
                self.node.active = false;
            })));
        }
    },

    start() {

    },

    // update (dt) {},
});