(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-dropdown-search-menu"] = factory();
	else
		root["vue-dropdown-search-menu"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1ee4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownSearchMenu_vue_vue_type_style_index_0_id_9b130778_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4b77");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownSearchMenu_vue_vue_type_style_index_0_id_9b130778_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownSearchMenu_vue_vue_type_style_index_0_id_9b130778_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4b77":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"376a18b4-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DropdownSearchMenu.vue?vue&type=template&id=9b130778&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vdm-menu-container"
  }, [_vm._t("default"), _vm.menu ? _c('div', {
    staticClass: "vdm-dropdown-menu-container"
  }, [_c('div', {
    staticClass: "vdm-menu"
  }, [_c('div', {
    staticClass: "vdm-menu-header"
  }, [_c('div', {
    staticClass: "vdm-menu-search"
  }, [_c('div', {
    staticClass: "vdm-menu-search-icon"
  }, [_c('svg', {
    attrs: {
      "width": "20",
      "height": "20",
      "viewBox": "0 0 20 20",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M19.3187 18.0275L13.232 11.9407C14.1766 10.7197 14.6875 9.22668 14.6875 7.65637C14.6875 5.77668 13.9539 4.01418 12.6273 2.68528C11.3008 1.35637 9.53359 0.625122 7.65625 0.625122C5.77891 0.625122 4.01172 1.35872 2.68516 2.68528C1.35625 4.01184 0.625 5.77668 0.625 7.65637C0.625 9.53372 1.35859 11.3009 2.68516 12.6275C4.01172 13.9564 5.77656 14.6876 7.65625 14.6876C9.22656 14.6876 10.7172 14.1767 11.9383 13.2345L18.025 19.3189C18.0428 19.3367 18.064 19.3509 18.0874 19.3606C18.1107 19.3702 18.1357 19.3752 18.1609 19.3752C18.1862 19.3752 18.2112 19.3702 18.2345 19.3606C18.2578 19.3509 18.279 19.3367 18.2969 19.3189L19.3187 18.2993C19.3366 18.2815 19.3508 18.2603 19.3604 18.237C19.3701 18.2137 19.3751 18.1887 19.3751 18.1634C19.3751 18.1382 19.3701 18.1132 19.3604 18.0898C19.3508 18.0665 19.3366 18.0453 19.3187 18.0275ZM11.3688 11.3689C10.375 12.3603 9.05781 12.9064 7.65625 12.9064C6.25469 12.9064 4.9375 12.3603 3.94375 11.3689C2.95234 10.3751 2.40625 9.05793 2.40625 7.65637C2.40625 6.25481 2.95234 4.93528 3.94375 3.94387C4.9375 2.95247 6.25469 2.40637 7.65625 2.40637C9.05781 2.40637 10.3773 2.95012 11.3688 3.94387C12.3602 4.93762 12.9062 6.25481 12.9062 7.65637C12.9062 9.05793 12.3602 10.3775 11.3688 11.3689Z",
      "fill": "#434343"
    }
  })])]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "vdm-menu-search-input",
    attrs: {
      "type": "text",
      "placeholder": "Search",
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.search
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })])]), _c('div', {
    staticClass: "vdm-menu-body"
  }, [_vm._l(_vm.getFilterList(this.search), function (item, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      staticClass: "vdm-menu-list-item",
      class: {
        'vdm-menu-list-selected': item[_vm.returnValue] == _vm.$attrs.selected
      },
      on: {
        "click": function ($event) {
          return _vm.selectItem(item);
        }
      }
    }, [item.img != undefined ? _c('div', {
      staticClass: "vdm-menu-item-icon"
    }, [_c('img', {
      attrs: {
        "src": item.img,
        "alt": ""
      }
    })]) : _vm._e(), _c('div', [_vm._v(" " + _vm._s(item[_vm.displayItem]) + " ")])])]);
  }), _vm.getFilterList(this.search).length == 0 ? _c('div', {
    staticClass: "vdm-menu-list-item"
  }, [_vm._v(" No item found ")]) : _vm._e()], 2)])]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/DropdownSearchMenu.vue?vue&type=template&id=9b130778&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DropdownSearchMenu.vue?vue&type=script&lang=js&
/* harmony default export */ var DropdownSearchMenuvue_type_script_lang_js_ = ({
  props: {
    menu: Boolean,
    list: Array,
    displayItem: String,
    returnValue: String
  },
  model: {
    prop: 'selected',
    event: 'change'
  },
  mounted() {
    this.menuItem = this.list;
  },
  watch: {
    menu: function (n) {
      if (n) {
        this.key = false;
        document.removeEventListener('click', this.closeMenu);
        document.addEventListener('click', this.closeMenu);
      } else {
        document.removeEventListener('click', this.closeMenu);
      }
    }
  },
  data() {
    return {
      menuItem: [],
      search: '',
      selected_item: null
    };
  },
  methods: {
    closeMenu(e) {
      if (!this.$el.contains(e.target)) {
        this.$emit('close');
      }
    },
    selectItem(item) {
      this.$emit('change', item[this.returnValue]);
      this.$emit('close');
    },
    getFilterList(search) {
      if (search == '') {
        return this.menuItem;
      } else {
        return this.menuItem.filter(item => {
          if (item[this.displayItem].toUpperCase().includes(search.toUpperCase())) {
            return true;
          }
          return false;
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/DropdownSearchMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DropdownSearchMenuvue_type_script_lang_js_ = (DropdownSearchMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/DropdownSearchMenu.vue?vue&type=style&index=0&id=9b130778&prod&lang=scss&
var DropdownSearchMenuvue_type_style_index_0_id_9b130778_prod_lang_scss_ = __webpack_require__("1ee4");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/DropdownSearchMenu.vue






/* normalize component */

var component = normalizeComponent(
  components_DropdownSearchMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DropdownSearchMenu = (component.exports);
// CONCATENATED MODULE: ./src/install.js

const DropdownSearchMenuCom = {
  install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("dropdown-search-menu", DropdownSearchMenu);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(DropdownSearchMenuCom);
}
/* harmony default export */ var install = (DropdownSearchMenuCom);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (install);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-dropdown-search-menu.umd.js.map