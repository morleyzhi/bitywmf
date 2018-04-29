webpackHotUpdate(5,{

/***/ "./components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_langs__ = __webpack_require__("./langs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Nav__ = __webpack_require__("./components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_Audio__ = __webpack_require__("./components/Audio.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "C:\\Users\\morley\\Projects\\bitywmf\\components\\App.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();










var El = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div.withConfig({
  displayName: "App__El",
  componentId: "pvz4a3-0"
})(["min-height:100vh;padding-top:25px;padding-bottom:65px;transition:background 500ms ease;", ";"], function (_ref) {
  var theme = _ref.theme;
  return "\n    background: linear-gradient(" + theme.background[0] + ", " + theme.background[1] + ");\n  ";
});

var Text = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].h1.withConfig({
  displayName: "App__Text",
  componentId: "pvz4a3-1"
})(["font:135px/125px \"Delius Swash Caps\",Georgia,serif;margin:0;padding:0;line-height:125px;letter-spacing:-3px;cursor:default;color:#fff;width:", ";padding-left:", ";height:500px;margin:0 auto;text-shadow:0 2px 0 ", ";"], function (props) {
  return props.lang === "german" ? "900px" : "700px";
}, function (props) {
  return props.lang === "german" ? "100px" : 0;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadow;
});

var App = function App(_ref3) {
  var lang = _ref3.lang;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* ThemeProvider */],
    {
      theme: _extends({}, __WEBPACK_IMPORTED_MODULE_3_langs__["a" /* default */][lang].colors, {
        lang: lang
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      El,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "title",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          __WEBPACK_IMPORTED_MODULE_3_langs__["a" /* default */][lang].text
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Text,
        { lang: lang, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        },
        __WEBPACK_IMPORTED_MODULE_3_langs__["a" /* default */][lang].text
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components_Audio__["a" /* default */], { lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_Nav__["a" /* default */], { lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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

/***/ }),

/***/ "./components/Audio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\morley\\Projects\\bitywmf\\components\\Audio.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var Audio = function Audio(_ref) {
  var lang = _ref.lang;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "audio",
    { controls: "", __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", { src: "static/assets/" + lang + ".mp3", type: "audio/mpeg", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    })
  );
};

var _default = Audio;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Audio, "Audio", "C:/Users/morley/Projects/bitywmf/components/Audio.js");
  reactHotLoader.register(_default, "default", "C:/Users/morley/Projects/bitywmf/components/Audio.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.38ab9c1a2294a56c32b5.hot-update.js.map