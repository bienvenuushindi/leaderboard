"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: #000;\\n  color: #fff;\\n  font-family: 'Cormorant SC', serif;\\n}\\n\\nheader {\\n  padding: 2rem 2rem;\\n  background-color: #000;\\n  color: #fff;\\n}\\n\\n.row {\\n  width: 100%;\\n}\\n\\n.form-control {\\n  width: 100%;\\n  padding: 0.5rem 1rem;\\n  margin-bottom: 2rem;\\n}\\n\\ninput:focus {\\n  border-color: #044cd0;\\n  outline: none;\\n}\\n\\n.btn {\\n  padding: 0.4rem 0.8rem;\\n  color: #fff;\\n  outline: none;\\n  border-color: #1fae51;\\n  border-radius: 0.5rem;\\n}\\n\\n.btn-primary {\\n  background-color: #044cd0;\\n  border-color: #044cd0;\\n}\\n\\n.btn-success {\\n  background-color: rgb(31, 174, 81);\\n}\\n\\n.error {\\n  background-color: #8b0000;\\n}\\n\\n.success {\\n  background-color: rgba(31, 174, 81, 0.71);\\n}\\n\\n#feedback {\\n  padding: 0.5rem 1rem;\\n  border-radius: 0.2rem;\\n  color: #ececec;\\n  font-weight: bold;\\n}\\n\\n.d-none {\\n  display: none;\\n}\\n\\n.text-center {\\n  text-align: center;\\n}\\n\\n.text-end {\\n  text-align: end;\\n}\\n\\n.heading {\\n  margin: 2rem auto;\\n}\\n\\n.f-size-h3 {\\n  font-size: 2rem;\\n}\\n\\n.f-size-h2 {\\n  font-size: 3rem;\\n}\\n\\ntable {\\n  border-radius: 5px;\\n  border: 1px solid #6e6e6e;\\n}\\n\\ntr > td {\\n  padding: 0.5rem 0.5rem;\\n  font-weight: bold;\\n  margin-top: 1.8rem;\\n  margin-bottom: 1.8rem;\\n  font-size: 1.1rem;\\n}\\n\\ntr > td:nth-child(even) {\\n  background-color: rgba(31, 174, 81, 0.6);\\n  color: #fff;\\n  font-weight: bolder;\\n  text-align: end;\\n}\\n\\ntr > td:nth-child(odd) {\\n  font-weight: bold;\\n}\\n\\ntr:nth-child(even) {\\n  background-color: rgba(255, 255, 255, 0.5);\\n  color: #000;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .d-flex-lg {\\n    display: flex;\\n  }\\n\\n  .justify-content-between-lg {\\n    justify-content: space-between;\\n  }\\n\\n  .gap-4-lg {\\n    gap: 4rem;\\n  }\\n\\n  .container {\\n    width: 80%;\\n    margin: auto;\\n  }\\n\\n  .left-block,\\n  .right-block {\\n    flex-grow: 1;\\n    margin-left: 5px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leaderboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leaderboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/modules/api/add-score.js":
/*!**************************************!*\
  !*** ./src/modules/api/add-score.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shared_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared-value.js */ \"./src/modules/shared-value.js\");\n\n\nconst addScore = async (user, score) => {\n  const response = await fetch(`${_shared_value_js__WEBPACK_IMPORTED_MODULE_0__.requestURL + _shared_value_js__WEBPACK_IMPORTED_MODULE_0__.gameID}/scores/`, {\n    method: 'POST',\n    body: JSON.stringify({\n      user,\n      score,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return (response.ok) ? response.json() : Promise.reject(response);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);\n\n//# sourceURL=webpack://leaderboard/./src/modules/api/add-score.js?");

/***/ }),

/***/ "./src/modules/api/list-scores.js":
/*!****************************************!*\
  !*** ./src/modules/api/list-scores.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shared_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared-value.js */ \"./src/modules/shared-value.js\");\n\n\nconst listScore = async () => {\n  const response = await fetch(`${_shared_value_js__WEBPACK_IMPORTED_MODULE_0__.requestURL + _shared_value_js__WEBPACK_IMPORTED_MODULE_0__.gameID}/scores/`);\n  return (response.ok) ? response.json() : Promise.reject(response);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listScore);\n\n//# sourceURL=webpack://leaderboard/./src/modules/api/list-scores.js?");

/***/ }),

/***/ "./src/modules/capitalize-string.js":
/*!******************************************!*\
  !*** ./src/modules/capitalize-string.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst capitalizeString = (str) => {\n  if (!(typeof str === 'string')) throw new Error('Invalid Input');\n  const lower = str.toLowerCase();\n  return str[0].toUpperCase() + lower.slice(1);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (capitalizeString);\n\n\n//# sourceURL=webpack://leaderboard/./src/modules/capitalize-string.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"feedbackMessageBlock\": () => (/* binding */ feedbackMessageBlock),\n/* harmony export */   \"formElmt\": () => (/* binding */ formElmt),\n/* harmony export */   \"refreshButton\": () => (/* binding */ refreshButton)\n/* harmony export */ });\nconst tableBody = document.getElementById('table-body');\nconst formElmt = document.getElementById('score-form');\nconst refreshButton = document.getElementById('refresh-btn');\nconst feedbackMessageBlock = document.getElementById('feedback');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableBody);\n\n//# sourceURL=webpack://leaderboard/./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/shared-value.js":
/*!*************************************!*\
  !*** ./src/modules/shared-value.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameID\": () => (/* binding */ gameID),\n/* harmony export */   \"requestURL\": () => (/* binding */ requestURL)\n/* harmony export */ });\nconst requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\nconst gameID = 'bGP6O5B2GgbsQ7kNrXgk';\n\n//# sourceURL=webpack://leaderboard/./src/modules/shared-value.js?");

/***/ }),

/***/ "./src/modules/views.js":
/*!******************************!*\
  !*** ./src/modules/views.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"showOnError\": () => (/* binding */ showOnError),\n/* harmony export */   \"showOnSuccess\": () => (/* binding */ showOnSuccess)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/modules/elements.js\");\n/* harmony import */ var _capitalize_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capitalize-string.js */ \"./src/modules/capitalize-string.js\");\n\n\n\nconst showOnSuccess = () => {\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.feedbackMessageBlock.parentElement.classList.remove('d-none');\n  setTimeout(() => {\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.feedbackMessageBlock.parentElement.classList.add('d-none');\n  }, 5000);\n};\n\nconst showOnError = () => {\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.feedbackMessageBlock.parentElement.classList.remove('d-none');\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.feedbackMessageBlock.classList.remove('success');\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.feedbackMessageBlock.classList.add('error');\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.feedbackMessageBlock.innerHTML = 'Ooooops!!! Something went wrong';\n  setTimeout(() => {\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.feedbackMessageBlock.parentElement.classList.add('d-none');\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.feedbackMessageBlock.classList.add('success');\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.feedbackMessageBlock.classList.remove('error');\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.feedbackMessageBlock.innerHTML = 'Leaderboard score created correctly. PLease Click Refresh to see the latest entry';\n  }, 6000);\n};\n\nconst updateTableView = (data) => {\n  data.sort((a, b) => b.score - a.score);\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].innerHTML = data.map((item) => `<tr>\n                         <td>${(0,_capitalize_string_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item.user)}</td>\n                         <td>${item.score}</td>\n                     </tr>`).join('');\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTableView);\n\n//# sourceURL=webpack://leaderboard/./src/modules/views.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elements.js */ \"./src/modules/elements.js\");\n/* harmony import */ var _modules_api_add_score_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/api/add-score.js */ \"./src/modules/api/add-score.js\");\n/* harmony import */ var _modules_api_list_scores_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/api/list-scores.js */ \"./src/modules/api/list-scores.js\");\n/* harmony import */ var _modules_views_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/views.js */ \"./src/modules/views.js\");\n\n\n\n\n\n\n(0,_modules_api_list_scores_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().then((data) => (0,_modules_views_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data.result));\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.formElmt.addEventListener('submit', (ev) => {\n  ev.preventDefault();\n  const name = _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.formElmt.name.value;\n  const score = _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.formElmt.score.value;\n  (0,_modules_api_add_score_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(name, score).then(() => {\n    (0,_modules_views_js__WEBPACK_IMPORTED_MODULE_4__.showOnSuccess)();\n    _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.formElmt.name.value = '';\n    _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.formElmt.score.value = '';\n  }).catch(() => {\n    (0,_modules_views_js__WEBPACK_IMPORTED_MODULE_4__.showOnError)();\n  });\n});\n\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.refreshButton.addEventListener('click', () => {\n  (0,_modules_api_list_scores_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().then((data) => (0,_modules_views_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data.result));\n});\n\n\n//# sourceURL=webpack://leaderboard/./src/script.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);