var prototype = {
    isString: function(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    },
    isArray: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    },
    isNumber: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
    },
    isDate: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Date]';
    },
    isBoolean: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Boolean]';
    },
    isObject: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    },
    isFunction: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    },
    isFile: function(obj) {
        return Object.prototype.toString.call(obj) === '[object File]';
    },
    isNull: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Null]';
    },
    isUndefined: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Undefined]';
    },
    isRegExp: function(obj) {
        return Object.prototype.toString.call(obj) === '[object RegExp]';
    },
    getType: function(obj) {
        const toString = Object.prototype.toString;
        const map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        };
        return map[toString.call(obj)];
    }
}
export default prototype;