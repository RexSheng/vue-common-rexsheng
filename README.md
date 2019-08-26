# vue-common-rexsheng

> A Vue.js plugin for proving common operation

## Build Setup

``` bash
# install plugin
npm install vue-common-rexsheng --save-dev

# config in entry file like 'src/main.js'
import common from 'vue-common-rexsheng';
# 配置localstorage根key，不配置默认:"vue"
Vue.use(common,{storageKey:"testRoot"})
```


## 提供扩展方法如下
|方法            |      说明                |  备注 |
|------          |---------------          |:-----:|
|last()          |返回数组最后一个值，参数无      | 例如`["a","b","c"].last()="c"`|
|first()             |返回数组第一个值，参数无    | 例如`["a","b","c"].first()="a"` |
|insert(index, obj)  |在数组index索引处（0开始）插入新值，返回当前数组  | |
|remove(obj)         |移除数组中所有的obj，返回当前数组    |  |
|removeAt(index)         |移除数组中索引处的值，返回移除的对象  | |
|distinct()              |返回去重后的数组  | |
|sum()         |数组值相加，返回求和结果  | |
|skip(length)         |跳过数组前length条，返回新数组  | |
|take(length)         |取数组前length条，返回新数组  | |
|range(start, end)    |取数组索引 >= start且索引 < end的新数组  | |
|group(key)         |对象数组，按照key分组，返回新数组格式[{"key":"key1","value":[]},{"key":"key2","value":[]}]  | `[{"name":"tom","age":12},{"name":"jack","age":16},{"name":"ali","age":12}].group("age")=[{"key":12,"value":[{"name":"tom","age":12},{"name":"ali","age":12}]},{"key":16,"value":[{"name":"jack","age":16}]}]`|
|formatString(args)         |字符串格式化  |`"a{id}".formatString({id:"小米"})="a小米"` `"a{0}b{1}c{0}".formatString("发","财")="a发b财c发"` `"a{0}b{1}c{0}".formatString(["发","财"])="a发b财c发"` |
|contains(str)    |字符串是否包含参数str  | |
|leftPadding(char, length)    |左侧填充字符串  | `char`用来填充的字符，`length`要求的字符串总长度|
|toMD5(bit)    |字符串转md5值  | bit位数默认`32`，可选`32` `64`,例如`"123456".toMD5(32)="e10adc3949ba59abbe56e057f20f883e"`|
|btoa()    |字符串base64加密  | |
|atob()    |字符串base64解密  | |
|Vue.randomString(len, allowed)    |创建指定长度的随机字符串  |`len`返回的字符串长度,`allowed` 选定字符范围，默认为"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" |
|this.$randomString(len, allowed)    |同上  ||
|Vue.copy(data)    |数据复制一份  | |
|this.$copy(data)    |同上  ||
|Vue.cookie.set(name, value, time)    |cookie设置，time单位为秒  | Vue全局可用|
|this.$cookie.set(name, value, time)    |同上  |页面实例使用 |
|Vue.cookie.get(name)    |cookie获取,获取不到返回`undefined`  | Vue全局可用|
|this.$cookie.get(name)    |同上  |页面实例使用 |
|Vue.cookie.del(name)    |cookie删除 | Vue全局可用|
|this.$cookie.del(name)    |同上  |页面实例使用 |
|Vue.storage.set(key, value)    |localstorage设置  | Vue全局可用 `this.$storage.set("a",{name:"abc"})` `this.$storage.set("a.c",["生","xu"])` `this.$storage.set("ff.gg",{age:12})` `Vue.storage.set("abc.efg",45)`|
|this.$storage.set(key, value)    |同上  |页面实例使用 |
|Vue.storage.get(key)    |localstorage获取  | Vue全局可用`this.$storage.get("a")` `this.$storage.get("abc.efg")`|
|this.$storage.get(key)    |同上  |页面实例使用 |
|Vue.storage.clear(key)    |localstorage删除，不写key时，删除全部  | Vue全局可用`this.$storage.clear("abc.efg")` `this.$storage.clear()`|
|this.$storage.clear(key)    |同上  |页面实例使用 |
|Vue.session.set(key, value)    |临时会话sessionstorage设置  | 使用参考Vue.storage|
|this.$session.set(key, value)    |同上  |使用参考Vue.storage |
|Vue.session.get(key)    |临时会话sessionstorage设置获取  | 使用参考Vue.storage|
|this.$session.get(key)    |同上  |使用参考Vue.storage |
|Vue.session.clear(key)    |临时会话sessionstorage设置删除，不写key时，删除全部  | 使用参考Vue.storage|
|this.$session.clear(key)    |同上  |使用参考Vue.storage |
|this.$setInterval(fn,timeMilliseconds)    |页面循环调用  |页面销毁同时自动销毁 |
|this.$setTimeout(fn,timeMilliseconds)    |页面定时器  |页面销毁同时自动销毁定时器 |
|this.$fullScreen()    |全屏  | |
|this.$exitFullScreen()    |退出全屏  | |
|this.$bind(elm, event, fn)    |绑定事件  | |
|this.$unbind(elm, event, fn)    |解除绑定事件  | |
|this.$file.readAsText(file, encoding)    |读取文件text模式，返回Promise  | encoding文件编码`GBK`或其他。`this.$file可用作全局Vue.file`|
|this.$file.readAsDataURL(file)    |读取文件图片URL模式，返回Promise  | |
|this.$file.readAsBinaryString(file)    |读取文件二进制字节模式，返回Promise  | |
|this.$file.readAsArrayBuffer(file)    |按字节读取文件内容，结果用ArrayBuffer对象表示，返回Promise  | |
|this.$file.loadCsv(strData, strDelimiter)    |读取csv | `strData`数据，`strDelimiter`分隔符默认逗号`,` |
|this.$file.loadXml(xmlString)    |读取xml |  `xmlString`文本内容|

For detailed explanation on how things work, consult the [docs for vue-common-rexsheng](https://github.com/RexSheng/vue-common-rexsheng).