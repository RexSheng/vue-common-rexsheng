import Vue from 'vue'

Vue.directive('auth', {
    inserted: function(el, binding, vnode) {
        var currentPageRoute = vnode.context.$route;
        if (!Vue.auth(binding.value)) {
            el.parentElement.removeChild(el);
        }
    },
    // inserted: function(el, binding) {
    //     if (!Vue.authorize(binding.value)) {
    //         var parent = el.parentElement;
    //         parent.removeChild(el);
    //     }
    // }
})