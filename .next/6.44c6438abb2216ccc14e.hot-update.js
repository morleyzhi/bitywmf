webpackHotUpdate(6,{

/***/ "./components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_langs__ = __webpack_require__("./langs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Nav__ = __webpack_require__("./components/Nav.js");
var _jsxFileName = "C:\\Users\\morley\\Projects\\bitywmf\\components\\App.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








var El = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div.withConfig({
  displayName: "App__El",
  componentId: "pvz4a3-0"
})(["height:100vh;", ";"], function (_ref) {
  var theme = _ref.theme;
  return "\n    background: linear-gradient(" + theme.background[0] + ", " + theme.background[1] + ");\n  ";
});

var Text = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].h1.withConfig({
  displayName: "App__Text",
  componentId: "pvz4a3-1"
})(["display:none;font:135px/125px \"Delius Swash Caps\",Georgia,serif;margin:0;padding:0;line-height:125px;letter-spacing:-3px;cursor:default;"]);

var App = function App(_ref2) {
  var lang = _ref2.lang;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* ThemeProvider */],
    { theme: __WEBPACK_IMPORTED_MODULE_2_langs__["a" /* default */][lang].colors, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      El,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Text,
        { lang: lang, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_langs__["a" /* default */][lang].text
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "pre",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        JSON.stringify(__WEBPACK_IMPORTED_MODULE_2_langs__["a" /* default */][lang], null, 2)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components_Nav__["a" /* default */], { lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })
    )
  );
};

App.defaultProps = {
  lang: "english"
};

var _default = App;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(El, "El", "C:/Users/morley/Projects/bitywmf/components/App.js");
  reactHotLoader.register(Text, "Text", "C:/Users/morley/Projects/bitywmf/components/App.js");
  reactHotLoader.register(App, "App", "C:/Users/morley/Projects/bitywmf/components/App.js");
  reactHotLoader.register(_default, "default", "C:/Users/morley/Projects/bitywmf/components/App.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.44c6438abb2216ccc14e.hot-update.js.map