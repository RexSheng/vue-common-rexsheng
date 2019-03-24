/**
 * 1.arrayObject.pop() 方法用于删除并返回数组的最后一个元素。与shift()相反
 * pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。
 * 2.arrayObject.reverse()返回被颠倒的对象
 * 3.arrayObject.shift()把数组的第一个元素从其中删除，并返回第一个元素的值。与pop()相反
 * 如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。
 * 4.arrayObject.slice(start,end)返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
 * 5.arrayObject.splice(index,howmany,item1,.....,itemX)splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
 *  如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
 * 6.arrayObject.toString()用逗号分隔，转为字符串
 * 7.arrayObject.unshift(newelement1（新位置为0）,newelement2（可选，新位置为1）,....,newelementX)向数组的开头添加一个或更多元素，并返回新数组的长度
 * 8.array.map(function(currentValue,index,arr), thisValue)
 * currentValue	必须。当前元素的值，index	可选。当前元素的索引值，arr	可选。当前元素属于的数组对象
 * thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"
 * 9.array.every(function(currentValue,index,arr), thisValue)
 * 10.array.filter(function(currentValue,index,arr), thisValue)返回的创建一个新数组
 * 11.array.find(function(currentValue, index, arr),thisValue) >=ie12
 * 12.array.forEach(function(currentValue, index, arr), thisValue)
 * 13.array.indexOf(item,start) start默认为0
 * 14.Array.isArray(obj) 是否为数组
 * 15.array.join(separator)
 * 16.array.lastIndexOf(item,start)元素在数组中最后出现的位置
 * 17.array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 * 18.array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)从数组的末尾向前将数组中的数组项做累加
 * 19.array.some(function(currentValue,index,arr),thisValue)
 */
function JsSql(arr) {
    this.origin = arr;
    this.current = JSON.parse(JSON.stringify(arr));
    this.select = function(columns) {
        this.current = this.current.map(function(o) {
            return columns(o);
        });
        return this;
    };
    this.groupBy = function(columns) {
        var newArr = new Array();
        this.current.forEach(function(item, index) {
            var key = columns(item);
            var needStr = false;
            if (Object.prototype.toString.call(key) === '[object Object]' || Object.prototype.toString.call(key) === '[object Array]') {
                needStr = true;
            }
            var old = newArr.find(function(a) {
                if (needStr) {
                    return JSON.stringify(a.key) == JSON.stringify(key);
                } else {
                    return a.key == key;
                }
            })
            if (old) {
                old.value.push(item);
            } else {
                newArr.push({ key: key, value: [item] })
            }
        });
        this.current = newArr;
        return this;
    };
    this.where = function(clause) {
        this.current = this.current.filter(clause);
        return this;
    };
    this.skip = function(length) {
        this.current = this.current.slice(length)
        return this
    };
    this.take = function(length) {
        this.current = this.current.slice(0, this.current.length < length ? this.current.length : length);
        return this;
    };
    this.get = function() {
        return this.current;
    }
}
JsSql.prototype.globalMethod = function() {

}
var propotype = {
    last() {
        return this.slice(-1)
    },
    first() {
        var len = this.length;
        if (len === 0) return undefined;
        var first = this[0];
        return first;
    },
    insert(index, obj) {
        this.splice(index, 0, obj)
        return this;
    },
    remove(obj) {
        var index = this.indexOf(obj);
        while (index >= 0) {
            this.splice(index, 1);
            index = this.indexOf(obj);
        }
        return this;
    },
    removeAt(index) {
        return this.splice(index, 1);
    },
    distinct() {
        return Array.from(new Set(this));
    },
    sum() {
        return this.reduce(function(a, b) {
            return a + b;
        }, 0)
    },
    skip(length) {
        return this.slice(length)
    },
    take(length) {
        return this.slice(0, this.length < length ? this.length : length);
    },
    range(start, end) {
        //start<=index<end
        return this.slice(start, end);
    },
    group(key) {
        var result = {};
        this.forEach(function(item) {
            if (!result[item[key]])
                result[item[key]] = new Array();
            result[item[key]].push(item);
        });
        return Object.keys(result).map(function(key) {
            return {
                key: key,
                value: obj[key]
            }
        });
    },
}
export default propotype;
