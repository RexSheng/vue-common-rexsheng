var cookie = {
    /**
     * 写cookies
     * time:单位：秒
     */
    set: function(name, value, time) {
        time = time || 7 * 24 * 60 * 60;
        var exp = new Date();
        exp.setTime(exp.getTime() + time * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    get: function(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return undefined;
    },
    del: function(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.get(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}
export default cookie;