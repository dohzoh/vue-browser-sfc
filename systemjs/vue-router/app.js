/* global requirejs, require */
/**
 * app.js
 *
 * Distributed under terms of the MIT license.
 */

requirejs.config({
  paths: {
    // the Vue lib
    'Vue': 'https://unpkg.com/vue/dist/vue',
    // Vue RequireJS loader
    'vue': 'https://unpkg.com/require-vuejs/dist/require-vuejs',
    'vue-router': "https://unpkg.com/vue-router/dist/vue-router",
  },
  shim: {
      "Vue": {"exports": "Vue"}
  }
});

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
