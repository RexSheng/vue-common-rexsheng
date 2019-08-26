import util from './util'
import array from './array'
import string from './string'
import cookie from './cookie'
import dom from './dom'
import file from './file'
import localstorage from './localstorage'
import sessionstorage from './sessionstorage'
const commonPlugin={
    install:function(Vue,options={}){
        Vue.prototype.$randomString=Vue.randomString=util.getRandomString;
        Vue.prototype.$copy=Vue.copy=util.copy;
        Object.assign(Array.prototype, array);
        Object.assign(String.prototype, string);

        Vue.directive('auth', {
            inserted: function(el, binding, vnode) {
                // var currentPageRoute = vnode.context.$route;
                if (!Vue.auth(binding.value)) {
                    el.parentElement.removeChild(el);
                }
            }
        })
        Vue.prototype.$setInterval = function(cb, timeMilliseconds) {
            var _this = this;
            let intervalHandler = setInterval(function() {
                if (_this && !_this._isDestroyed) {
                    cb.call(_this);
                } else {
                    clearInterval(intervalHandler);
                    return;
                }
            }, timeMilliseconds);
            return intervalHandler;
        }
        Vue.prototype.$setTimeout = function(cb, timeMilliseconds) {
            var _this = this;
            let intervalHandler = setTimeout(function() {
                if (_this && !_this._isDestroyed) {
                    cb.call(_this);
                } else {
                    clearTimeout(intervalHandler);
                    return;
                }
            }, timeMilliseconds);
            return intervalHandler;
        }
        Vue.prototype.$fullScreen=function(){
            var el = document.documentElement,
                rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen,
                wscript;
            if(typeof rfs != "undefined" && rfs) {
                rfs.call(el);
                return;
            }
            if(typeof window.ActiveXObject!="undefined") {
                wscript = new ActiveXObject("WScript.Shell");
                if(wscript) {
                    wscript.SendKeys("{F11}");
                }
            }
        }
        Vue.prototype.$exitFullScreen=function() {
            var el = document,
                cfs = el.cancelFullscreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen || el.msExitFullscreen,
                wscript;
         
            if (typeof cfs != "undefined" && cfs) {
              cfs.call(el);
              return;
            }
         
            if (typeof window.ActiveXObject != "undefined") {
                wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
          }
        }
        Vue.prototype.$cookie = Vue.cookie = cookie;
        Vue.prototype.$bind = dom.bind;
        Vue.prototype.$unbind = dom.unbind;
        Vue.prototype.$file = Vue.file = file;
        var rootStorageKey=options.storageKey || "vue";
        localstorage.STORAGE_KEY=rootStorageKey;
        Vue.prototype.$storage = Vue.storage = localstorage;
        Vue.prototype.$session = Vue.session = sessionstorage;
    }
}
export default commonPlugin;