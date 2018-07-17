//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'bubble_chart', title: 'Inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "v-app",
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            fixed: "",
            "mini-variant": _vm.miniVariant,
            clipped: _vm.clipped,
            app: ""
          },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v;
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            _vm._l(_vm.items, function(item, i) {
              return _c(
                "v-list-tile",
                { key: i, attrs: { value: "true" } },
                [
                  _c(
                    "v-list-tile-action",
                    [
                      _c("v-icon", {
                        domProps: { innerHTML: _vm._s(item.icon) }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [
                      _c("v-list-tile-title", {
                        domProps: { textContent: _vm._s(item.title) }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-toolbar",
        { attrs: { fixed: "", app: "", "clipped-left": _vm.clipped } },
        [
          _c("v-toolbar-side-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation();
                _vm.drawer = !_vm.drawer;
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation();
                  _vm.miniVariant = !_vm.miniVariant;
                }
              }
            },
            [
              _c("v-icon", {
                domProps: {
                  innerHTML: _vm._s(
                    _vm.miniVariant ? "chevron_right" : "chevron_left"
                  )
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation();
                  _vm.clipped = !_vm.clipped;
                }
              }
            },
            [_c("v-icon", [_vm._v("web")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation();
                  _vm.fixed = !_vm.fixed;
                }
              }
            },
            [_c("v-icon", [_vm._v("remove")])],
            1
          ),
          _vm._v(" "),
          _c("v-toolbar-title", {
            domProps: { textContent: _vm._s(_vm.title) }
          }),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation();
                  _vm.rightDrawer = !_vm.rightDrawer;
                }
              }
            },
            [_c("v-icon", [_vm._v("menu")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "v-slide-y-transition",
                { attrs: { mode: "out-in" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { column: "", "align-center": "" } },
                    [
                      _c("img", {
                        staticClass: "mb-5",
                        attrs: { src: "/public/v.png", alt: "Vuetify.js" }
                      }),
                      _vm._v(" "),
                      _c("blockquote", [
                        _vm._v(
                          "\n            “First, solve the problem. Then, write the code.”\n            "
                        ),
                        _c("footer", [
                          _c("small", [_c("em", [_vm._v("—John Johnson")])])
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        {
          attrs: { temporary: "", right: _vm.right, fixed: "" },
          model: {
            value: _vm.rightDrawer,
            callback: function($$v) {
              _vm.rightDrawer = $$v;
            },
            expression: "rightDrawer"
          }
        },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-tile",
                {
                  nativeOn: {
                    click: function($event) {
                      _vm.right = !_vm.right;
                    }
                  }
                },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("compare_arrows")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-tile-title", [_vm._v("Switch drawer (click me)")])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-footer", { attrs: { fixed: _vm.fixed, app: "" } }, [
        _c("span", [_vm._v("© 2017")])
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    {
      component.__file = "/mnt/d/work/gitclones/vue-example-htmlimport/es-modules/vuetify/src/App.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var App = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

export default App;
