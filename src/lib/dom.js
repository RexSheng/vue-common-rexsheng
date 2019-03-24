let __event = {
    bind: function (elm, event, fn) {
        event = event === 'mousewheel' ? document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll" : event;
        if (elm.addEventListener) {
            elm.addEventListener(event, fn, false);
        }
        else if (elm.attachEvent) {
            elm.attachEvent("on" + event, fn);
        }
        else {
            elm['on' + evType] = fn;//DOM事件
        }
    },
    unbind: function (elem, event, fn) {
        event = event === 'mousewheel' ? document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll" : event;
        var handlers = [];
        if (Array.isArray(fn) && fn.length > 0) {
            handlers = fn;
        } else {
            handlers.push(fn);
        }

        if (elem.removeEventListener) {
            handlers.forEach(function (handler) {
                elem.removeEventListener(event, handler, false);
            });
        } else if (elem.detachEvent) {
            handlers.forEach(function (handler) {
                elem.detachEvent('on' + event, handler);
            });
        }
        else {
            elem["on" + event] = null;
        }
    }
}
export default __event;