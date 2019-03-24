import typeUtil from './utils/typeUtil'
let pro = {
    /**
     * 根据大小写字母和数字生成随机字符串
     *
     * @param {number} len 生成的长度
     * @param {String} [allowed] 随机生成的内容的可选择内容
     */
    getRandomString :function (len, allowed) {
        var text = '';
        allowed = typeof allowed === 'string' ? allowed : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < len; i++) {
            text += allowed.charAt(Math.floor(Math.random() * allowed.length));
        }
        return text;
    },
    copy:function(data) {
        const t = typeUtil.getType(data);
        let o;
    
        if (t === 'array') {
            o = [];
        } else if (t === 'object') {
            o = {};
        } else {
            return data;
        }
    
        if (t === 'array') {
            for (let i = 0; i < data.length; i++) {
                o.push(copy(data[i]));
            }
        } else if (t === 'object') {
            for (let i in data) {
                o[i] = copy(data[i]);
            }
        }
        return o;
    }
}
export default pro;