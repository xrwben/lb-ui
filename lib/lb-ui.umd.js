(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lb-ui"] = factory();
	else
		root["lb-ui"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "aed5");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0838":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43034e5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5274");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43034e5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43034e5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1845":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4083":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_058eb778_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("81f3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_058eb778_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_058eb778_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5274":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "79e4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "81f3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "997f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1845");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "aed5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.11@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f3dfd6c0-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./packages/loading/src/index.vue?vue&type=template&id=5d71f84a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading"},[_c('div',{staticClass:"load-container"},[_c('div',{staticClass:"container container1"},[_c('div',{staticClass:"circle circle1"}),_c('div',{staticClass:"circle circle2"}),_c('div',{staticClass:"circle circle3"}),_c('div',{staticClass:"circle circle4"})]),_c('div',{staticClass:"container container2"},[_c('div',{staticClass:"circle circle1"}),_c('div',{staticClass:"circle circle2"}),_c('div',{staticClass:"circle circle3"}),_c('div',{staticClass:"circle circle4"})])])])}]


// CONCATENATED MODULE: ./packages/loading/src/index.vue?vue&type=template&id=5d71f84a&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./packages/loading/src/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'loading',
  data () {
    return {

    };
  }
});

// CONCATENATED MODULE: ./packages/loading/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var loading_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/loading/src/index.vue?vue&type=style&index=0&lang=scss&
var srcvue_type_style_index_0_lang_scss_ = __webpack_require__("997f");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
  if (moduleIdentifier) { // server build
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
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/loading/src/index.vue






/* normalize component */

var component = normalizeComponent(
  loading_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading_src = (component.exports);
// CONCATENATED MODULE: ./packages/loading/index.js


loading_src.install = function (Vue) {
  Vue.component(loading_src.name, loading_src);
};

/* harmony default export */ var loading = (loading_src);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f3dfd6c0-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./packages/scrollbar/src/index.vue?vue&type=template&id=43034e5a&scoped=true&
var srcvue_type_template_id_43034e5a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"scroll-wrapper",staticClass:"scroll-wrapper"},[_c('div',{ref:"scroll-content",staticClass:"scroll-content"},[_vm._t("default")],2),_c('div',{ref:"scroll-bar",staticClass:"scroll-bar"},[_c('div',{ref:"scroll-thumb",staticClass:"scroll-thumb"})])])}
var srcvue_type_template_id_43034e5a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/scrollbar/src/index.vue?vue&type=template&id=43034e5a&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./packages/scrollbar/src/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var scrollbar_srcvue_type_script_lang_js_ = ({
  name: 'ScrollBar',
  props: {
    thumbColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.5)'
    }
  },
  data () {
    return {
      scrollNode: {
        scrollWrapper: null,
        scrollContent: null,
        scrollBar: null,
        scrollThumb: null
      },
      candrag: false,
      thumbTop: 0,
      contentTop: 0,
      observer: null
    };
  },
  mounted () {
    this.init();
    this.$nextTick(() => {
      this.resizeScrollBar();
    });
  },
  beforeDestroy () {
    this.observer && this.observer.disconnect();
  },
  methods: {
    getRefNodes () {
      this.scrollNode.scrollWrapper = this.$refs['scroll-wrapper'];
      this.scrollNode.scrollContent = this.$refs['scroll-content'];
      this.scrollNode.scrollBar = this.$refs['scroll-bar'];
      this.scrollNode.scrollThumb = this.$refs['scroll-thumb'];
    },
    init () {
      this.$nextTick(() => {
        this.getRefNodes();
        // this.resizeScrollBar()

        this.dragScroll(this.scrollNode.scrollThumb);

        this.scrollNode.scrollWrapper.addEventListener('mousewheel', this.mousewheelScroll, false);
        this.scrollNode.scrollWrapper.addEventListener('DOMMouseScroll', this.mousewheelScroll, false);

        const observer = new MutationObserver((mutations) => {
          // eslint-disable-next-line array-callback-return
          mutations.map(() => {
            this.resizeScrollBar();
          });
        });
        observer.observe(this.scrollNode.scrollContent, {
          childList: true,
          subtree: true
        });
      });
    },
    // 拖动滚动条
    dragScroll (element) {
      element.onmousedown = (e) => {
        // 防止选中 什么也不做
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
        this.candrag = true;
        // console.log(e.clientY, e.pageY)
        const _gapTop = e.pageY - element.offsetTop;
        console.log(_gapTop);
        document.onmousemove = (ev) => {
          if (!this.candrag) {
            return;
          }
          // console.log(e.pageY)
          this.thumbTop = ev.pageY - _gapTop;
          if (this.thumbTop <= 0) {
            this.thumbTop = 0;
          }
          if (this.thumbTop >= this.scrollNode.scrollBar.offsetHeight - element.offsetHeight) {
            this.thumbTop = this.scrollNode.scrollBar.offsetHeight - element.offsetHeight;
          }
          console.log(this.thumbTop);
          element.style.marginTop = `${this.thumbTop}px`;
          // 计算内容滚动
          const scale = this.thumbTop / (this.scrollNode.scrollBar.offsetHeight - element.offsetHeight);
          this.contentTop = -scale * (this.scrollNode.scrollContent.offsetHeight - this.scrollNode.scrollWrapper.clientHeight);
          this.scrollNode.scrollContent.style.top = `${this.contentTop}px`;
        };
        document.onmouseup = () => {
          this.candrag = false;
          console.log('鼠标松开了...', this.scrollNode.scrollContent.offsetHeight, this.contentTop);
          document.onmousemove = null;
        };
      };
    },
    // 滑动滚轮
    mousewheelScroll (e) {
      e = e || window.event;
      e.preventDefault();// 阻止窗口默认的滚动事件

      if (this.scrollNode.scrollWrapper.clientHeight >= this.scrollNode.scrollContent.offsetHeight) {
        return;
      }

      let delta = 0; // 判断上or下滚动

      if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
      } else if (e.detail) {
        delta = -e.detail / 3;
      }
      console.log('>>>', delta, this.contentTop, this.scrollNode.scrollWrapper.clientHeight, this.scrollNode.scrollContent.offsetTop);
      this.contentTop = this.contentTop + (delta * 30);
      console.log('this.contentTop>>>>', this.contentTop);
      if (this.contentTop >= 0) {
        this.contentTop = 0;
      } else if (this.contentTop <= this.scrollNode.scrollWrapper.clientHeight - this.scrollNode.scrollContent.offsetHeight) {
        this.contentTop = this.scrollNode.scrollWrapper.clientHeight - this.scrollNode.scrollContent.offsetHeight;
      }
      this.scrollNode.scrollContent.style.top = `${this.contentTop}px`;

      // 计算滚动条距离
      const scale = this.contentTop / (this.scrollNode.scrollWrapper.clientHeight - this.scrollNode.scrollContent.offsetHeight);
      this.thumbTop = scale * (this.scrollNode.scrollBar.offsetHeight - this.scrollNode.scrollThumb.offsetHeight);
      console.log('thumbTop>>>>', this.thumbTop);
      this.scrollNode.scrollThumb.style.marginTop = `${this.thumbTop}px`;
    },
    resizeScrollBar () {
      this.$nextTick(() => {
        // console.log('>>>init', this.scrollNode.scrollThumb.offsetHeight, this.scrollNode.scrollWrapper.offsetHeight, this.scrollNode.scrollContent.offsetHeight)

        this.scrollNode.scrollThumb.style.height = (this.scrollNode.scrollWrapper.offsetHeight / this.scrollNode.scrollContent.offsetHeight * this.scrollNode.scrollBar.offsetHeight) + 'px';
        if (this.scrollNode.scrollThumb.offsetHeight <= 40) {
          this.scrollNode.scrollThumb.style.height = '40px';
        }
        if (this.scrollNode.scrollWrapper.offsetHeight >= this.scrollNode.scrollContent.offsetHeight) {
          this.scrollNode.scrollBar.style.display = 'none';
        } else {
          this.scrollNode.scrollBar.style.display = 'block';
        }
      });
    }
  }
});

// CONCATENATED MODULE: ./packages/scrollbar/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_scrollbar_srcvue_type_script_lang_js_ = (scrollbar_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/scrollbar/src/index.vue?vue&type=style&index=0&id=43034e5a&scoped=true&lang=css&
var srcvue_type_style_index_0_id_43034e5a_scoped_true_lang_css_ = __webpack_require__("0838");

// CONCATENATED MODULE: ./packages/scrollbar/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  packages_scrollbar_srcvue_type_script_lang_js_,
  srcvue_type_template_id_43034e5a_scoped_true_render,
  srcvue_type_template_id_43034e5a_scoped_true_staticRenderFns,
  false,
  null,
  "43034e5a",
  null
  
)

/* harmony default export */ var scrollbar_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/scrollbar/index.js


scrollbar_src.install = function (Vue) {
  Vue.component(scrollbar_src.name, scrollbar_src);
};

/* harmony default export */ var scrollbar = (scrollbar_src);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f3dfd6c0-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./packages/loopscroll/src/index.vue?vue&type=template&id=058eb778&scoped=true&
var srcvue_type_template_id_058eb778_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"loop-scroll-wrapper",staticClass:"loop-scroll-wrapper"},[_c('div',{ref:"loop-scroll-container",class:['loop-scroll-container', {'horizontal': _vm.isHorizontal}]},[_vm._t("default")],2)])}
var srcvue_type_template_id_058eb778_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/loopscroll/src/index.vue?vue&type=template&id=058eb778&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./packages/loopscroll/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var loopscroll_srcvue_type_script_lang_js_ = ({
  name: 'LoopScroll',
  props: {
    loopData: {
      type: Array,
      default: () => []
    },
    speed: { // 滚动速度
      type: Number,
      default: 1
    },
    mode: { // top left
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      animationIns: null
    };
  },
  computed: {
    isHorizontal () {
      return this.mode === 'left';
    }
  },
  watch: {
    loopData () {
      this.init();
    }
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.animationIns);
  },
  methods: {
    init () {
      console.log('debugger>>>', this.loopData, this.mode);
      this.$nextTick(() => {
        const scrollContainerBox = this.$refs['loop-scroll-container'].getBoundingClientRect();
        const scrollWrapperBox = this.$refs['loop-scroll-wrapper'].getBoundingClientRect();
        console.log('height>>>>', this.$refs['loop-scroll-wrapper'].getBoundingClientRect().height, this.$refs['loop-scroll-container'].getBoundingClientRect().height);
        console.log('width>>>>', this.$refs['loop-scroll-wrapper'].getBoundingClientRect().width, this.$refs['loop-scroll-container'].getBoundingClientRect().width);
        console.log('>>>>scrollContainerBox', this.$refs['loop-scroll-container'].offsetWidth);
        if (this.mode === 'top' && scrollContainerBox.height <= scrollWrapperBox.height) {
          return;
        }
        if (this.mode === 'left' && scrollContainerBox.width <= scrollWrapperBox.width) {
          return;
        }
        this.loopScroll();
      });
    },
    loopScroll () {
      const requestAnimationFrame = (
        window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function (callback) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
      const cancelAnimationFrame = (
        window.cancelAnimationFrame
        || function (id) {
          return window.clearTimeout(id);
        }
      );
      cancelAnimationFrame(this.animationIns);

      const scrollContainer = this.$refs['loop-scroll-container'];
      scrollContainer.innerHTML += scrollContainer.innerHTML;

      const scrollContainerHeight = this.$refs['loop-scroll-container'].getBoundingClientRect().height;
      const scrollContainerWidth = this.$refs['loop-scroll-container'].getBoundingClientRect().width;
      let sTop = scrollContainer.scrollTop;
      let sLeft = scrollContainer.scrollLeft;
      console.log('scrollContainer.innerHTML>>>>>', scrollContainerWidth);

      const _moveFun = () => {
        cancelAnimationFrame(this.animationIns);
        if (this.mode === 'top') {
          sTop += this.speed;
          scrollContainer.style.transform = `translate3d(0, -${sTop}px, 0)`;
          if (sTop >= scrollContainerHeight / 2) {
            sTop = 0;
          }
        } else if (this.mode === 'left') {
          sLeft += this.speed;
          scrollContainer.style.transform = `translate3d(-${sLeft}px, 0, 0)`;
          if (sLeft >= scrollContainerWidth / 2) {
            sLeft = 0;
          }
        }
        this.animationIns = requestAnimationFrame(_moveFun);
      };
      this.animationIns = requestAnimationFrame(_moveFun);
      console.log('this.animationIns>>>>', this.animationIns);
    }
  }
});

// CONCATENATED MODULE: ./packages/loopscroll/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_loopscroll_srcvue_type_script_lang_js_ = (loopscroll_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/loopscroll/src/index.vue?vue&type=style&index=0&id=058eb778&scoped=true&lang=css&
var srcvue_type_style_index_0_id_058eb778_scoped_true_lang_css_ = __webpack_require__("4083");

// CONCATENATED MODULE: ./packages/loopscroll/src/index.vue






/* normalize component */

var loopscroll_src_component = normalizeComponent(
  packages_loopscroll_srcvue_type_script_lang_js_,
  srcvue_type_template_id_058eb778_scoped_true_render,
  srcvue_type_template_id_058eb778_scoped_true_staticRenderFns,
  false,
  null,
  "058eb778",
  null
  
)

/* harmony default export */ var loopscroll_src = (loopscroll_src_component.exports);
// CONCATENATED MODULE: ./packages/loopscroll/index.js


loopscroll_src.install = function (Vue) {
  Vue.component(loopscroll_src.name, loopscroll_src);
};

/* harmony default export */ var loopscroll = (loopscroll_src);
// CONCATENATED MODULE: ./src/index.js




const components = [
  loading,
  scrollbar,
  loopscroll
];

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src_0 = ({
  install,
  Loading: loading,
  ScrollBar: scrollbar,
  LoopScroll: loopscroll
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.11@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
});
//# sourceMappingURL=lb-ui.umd.js.map