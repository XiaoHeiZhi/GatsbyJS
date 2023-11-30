exports.id = 637;
exports.ids = [637];
exports.modules = {

/***/ 6819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ow: () => (/* reexport */ LocalesList),
  UE: () => (/* reexport */ LocalizedLink),
  Ec: () => (/* reexport */ MdxLink)
});

// UNUSED EXPORTS: LocaleContext, LocaleProvider, LocalizedRouter, useLocalization

// EXTERNAL MODULE: ./node_modules/gatsby-theme-i18n/src/context.js
var context = __webpack_require__(4525);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4925);
// EXTERNAL MODULE: external "/Users/druid/Desktop/GatsbyJs/example-react-i18next/node_modules/react/index.js"
var index_js_ = __webpack_require__(9726);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 6 modules
var gatsby_browser_entry = __webpack_require__(4718);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-i18n/src/helpers.js
var helpers = __webpack_require__(4545);
// EXTERNAL MODULE: ./node_modules/gatsby-theme-i18n/src/hooks/use-localization.js
var use_localization = __webpack_require__(9868);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-i18n/src/components/localized-link.js
const _excluded=["to","language"];const LocalizedLink=_ref=>{let{to,language}=_ref,props=(0,objectWithoutProperties/* default */.Z)(_ref,_excluded);const{defaultLang,prefixDefault,locale}=(0,use_localization/* useLocalization */.q)();const linkLocale=language||locale;return/*#__PURE__*/index_js_.createElement(gatsby_browser_entry.Link,Object.assign({},props,{to:(0,helpers.localizedPath)({defaultLang,prefixDefault,locale:linkLocale,path:to})}));};
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-i18n/src/components/mdx-link.js
const mdx_link_excluded=["href","children"];const isHash=str=>/^#/.test(str);const isInternal=to=>/^\/(?!\/)/.test(to);const isFile=to=>/\..+$/.test(to);// Only use <LocalizedLink /> for internal links that aren't hashes or files
function MdxLink(_ref){let{href,children}=_ref,props=(0,objectWithoutProperties/* default */.Z)(_ref,mdx_link_excluded);if(isHash(href)||!isInternal(href)||isFile(href)){return/*#__PURE__*/index_js_.createElement("a",Object.assign({},props,{href:href}),children);}else{return/*#__PURE__*/index_js_.createElement(LocalizedLink,Object.assign({},props,{to:href}),children);}}
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/es/index.js + 2 modules
var es = __webpack_require__(3631);
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-i18n/src/components/localized-router.js
const localized_router_excluded=(/* unused pure expression or super */ null && (["basePath","children"]));const LocalizedRouter=_ref=>{let{basePath,children}=_ref,props=_objectWithoutProperties(_ref,localized_router_excluded);const{localizedPath,locale,defaultLang,prefixDefault}=useLocalization();const path=localizedPath({defaultLang,prefixDefault,locale,path:basePath});return/*#__PURE__*/React.createElement(Router,Object.assign({basepath:path},props),children);};
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-i18n/src/components/locales-list.js
const LocalesList=()=>{const{config}=(0,use_localization/* useLocalization */.q)();return/*#__PURE__*/index_js_.createElement("ul",null,config.map(locale=>/*#__PURE__*/index_js_.createElement("li",{key:locale.code},locale.localName," (",locale.name,")")));};
;// CONCATENATED MODULE: ./node_modules/gatsby-theme-i18n/index.js


/***/ }),

/***/ 2102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Welcome to gatsby-plugin-mdx!
 *
 * Start reading in gatsby-node.js
 */const MDXRenderer=__webpack_require__(2632);module.exports={MDXRenderer:MDXRenderer};

/***/ }),

/***/ 2632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _defineProperty=__webpack_require__(8416);var _objectWithoutProperties=__webpack_require__(215);const _excluded=["scope","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}const React=__webpack_require__(9726);const{mdx}=__webpack_require__(3905);const{useMDXScope}=__webpack_require__(6948);module.exports=function MDXRenderer(_ref){let{scope,children}=_ref,props=_objectWithoutProperties(_ref,_excluded);const mdxScope=useMDXScope(scope);// Memoize the compiled component
const End=React.useMemo(()=>{if(!children){return null;}const fullScope=_objectSpread({// React is here just in case the user doesn't pass them in
// in a manual usage of the renderer
React,mdx},mdxScope);const keys=Object.keys(fullScope);const values=keys.map(key=>fullScope[key]);const fn=new Function(`_fn`,...keys,`${children}`);return fn({},...values);},[children,scope]);return React.createElement(End,_objectSpread({},props));};

/***/ }),

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9726);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1572);
/* harmony import */ var gatsby_theme_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6819);
const components={a:gatsby_theme_i18n__WEBPACK_IMPORTED_MODULE_3__/* .MdxLink */ .Ec};const Layout=({children})=>{const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$G)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_theme_i18n__WEBPACK_IMPORTED_MODULE_3__/* .LocalizedLink */ .UE,{to:"/"},t("home"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.MDXProvider,{components:components},children)));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 9357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9726);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4718);
const Seo=({description,title,children})=>{const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{title:title,titleTemplate:`%s | ${site.siteMetadata.title}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:card",content:"summary"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:creator",content:site.siteMetadata.author}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{name:"twitter:description",content:metaDescription}),children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ 8905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9726);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1572);
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2102);
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8678);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9357);
const BlogTemplate=({data,pageContext})=>{const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)("blog");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{title:data.mdx.frontmatter.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,t("data")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,data.mdx?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_2__.MDXRenderer,null,data.mdx.body):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"This page hasn't been translated yet")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,t("context")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",null,JSON.stringify(pageContext,null,2)));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogTemplate);const query="1753807277";

/***/ }),

/***/ 215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(7071);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7071:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4925:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ _objectWithoutProperties)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-template-js.js.map