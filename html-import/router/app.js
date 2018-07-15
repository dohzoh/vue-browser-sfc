/* global requirejs, require */
/**
 * app.js
 *
 * Distributed under terms of the MIT license.
 */


require(["Vue", "vue-router"], function(Vue, VueRouter){
    Vue.use(VueRouter);
    var asyncComp = function(componentName) {
        return function(resolve) {
            require([componentName], resolve);
        };
    };

    var router = new VueRouter({routes: [
        { path: "/home" , component: asyncComp("vue!/home")},
        { path: "/inner", component: asyncComp("vue!/inner_template")},
        { path: "/vue"  , component: asyncComp("vue!/component")},
        { path: "/async", component: asyncComp("vue!/async")},
    ]});

    new Vue({
        data: {
            started: new Date()
        },
        router: router,
        el: "#app"
    });
});
