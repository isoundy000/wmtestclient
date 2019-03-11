var netWork = module.exports;
window.gl_netWork = netWork;
window.gl_sendqueue = [];
netWork.send = function (route, msg, cb, loading) {
    loading = undefined == loading ? true : loading;
    window.gl_sendqueue.push({
        msg,
        route,
        cb,
        loading
    });
    netWork.pushMsg();
}
netWork.pushMsg = function () {
    if (!window.gl_sendqueue.length) {
        return;
    }
    if (1 == window.gl_sendqueue.length) {
        var msg = window.gl_sendqueue.shift();
        if (msg.loading) {
            golbalFun.setLoading(true);
        }
        console.log('-----', msg)
        pomelo.request(msg.route, msg.msg, function (data) {
            if (msg.loading) {
                golbalFun.setLoading(false);
            }
            if (msg.cb) {
                if (msg.route == 'connector.entryHandler.login') {
                    msg.cb(data);
                } else {
                    if (data.code == 200) {
                        msg.cb(data);
                    } else if (data.code == -500) {
                        golbalFun.showMessage(data.msg);
                    } else {
                        var errormsg = data.msg || "未知错误！";
                        golbalFun.showMessage(errormsg);
                    }
                }

            }
            netWork.pushMsg();
        });
    }
}

netWork.restartGame = function (needclean) {
    cc.director.getActionManager().removeAllActions();
    if (needclean) {
        cc.director.purgeCachedData();
    }
    setTimeout(function () {
        cc.sys.restartVM();
    }, 2000);
}