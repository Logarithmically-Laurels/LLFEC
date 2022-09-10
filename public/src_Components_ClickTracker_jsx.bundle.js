"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunky"] = self["webpackChunky"] || []).push([["src_Components_ClickTracker_jsx"],{

/***/ "./src/Components/ClickTracker.jsx":
/*!*****************************************!*\
  !*** ./src/Components/ClickTracker.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar ClickTracker = function ClickTracker(_ref) {\n  var widget = _ref.widget,\n      render = _ref.render;\n\n  var onClickHandler = function onClickHandler(e) {\n    var data = {\n      element: e.target.innerHTML.toString(),\n      widget: widget,\n      time: new Date()\n    };\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post('/interactions', data).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    document.getElementById(widget).addEventListener('click', onClickHandler);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, render(onClickHandler));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClickTracker);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9DbGlja1RyYWNrZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL0NvbXBvbmVudHMvQ2xpY2tUcmFja2VyLmpzeD9jYzE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQ2xpY2tUcmFja2VyID0gKHsgd2lkZ2V0LCByZW5kZXIgfSkgPT4ge1xuXG4gIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIGVsZW1lbnQ6IGUudGFyZ2V0LmlubmVySFRNTC50b1N0cmluZygpLFxuICAgICAgd2lkZ2V0OiB3aWRnZXQsXG4gICAgICB0aW1lOiBuZXcgRGF0ZSgpXG4gICAgfTtcblxuICAgIGF4aW9zLnBvc3QoJy9pbnRlcmFjdGlvbnMnLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aWRnZXQpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja0hhbmRsZXIpO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cmVuZGVyKG9uQ2xpY2tIYW5kbGVyKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGlja1RyYWNrZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/ClickTracker.jsx\n");

/***/ })

}]);