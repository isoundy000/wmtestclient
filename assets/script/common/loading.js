cc.Class({
    extends: cc.Component,

    properties: {
        loading: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.game.addPersistRootNode(this.node);
        this.node.active = false;

        var self = this;
        golbalFun.setLoading = function (showloading) {
            if (showloading) {
                if (self.node.active) {
                    return;
                }
                self.node.active = true;
                self.loading.runAction(cc.repeatForever(
                    cc.rotateBy(1, 360)
                ));
            } else {
                if (self.node.active == false) {
                    return;
                }
                self.node.active = false;
                self.loading.stopAllActions();
            }

        }
    },

    start() {

    },
    // update (dt) {},
});