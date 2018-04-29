webpackHotUpdate(7,{

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_langs__ = __webpack_require__("./langs.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "C:\\Users\\morley\\Projects\\bitywmf\\components\\Nav.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var El = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].nav.withConfig({
  displayName: "Nav__El",
  componentId: "jujqvz-0"
})(["display:block;"]);

var Button = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].a.withConfig({
  displayName: "Nav__Button",
  componentId: "jujqvz-1"
})(["display:inline-block;float:left;margin-right:15px;padding:3px 20px;font:11px/20px Arial,Helvetica,sans-serif;color:#fff;font-weight:bold;text-transform:uppercase;text-decoration:none;border-radius:50px;", ";"], function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["theme"]);

  return "\n    " + (props.isSelected ? "\n    background: linear-gradient(" + props.button[0] + ", " + props.button[1] + ");\n    text-shadow: 0 1px 0 " + props.shadow + ";\n    border-top: 1px solid " + props.highlight + ";\n    box-shadow: 0 1px 0 " + props.shadow + ";\n    " : "\n    background: linear-gradient(" + theme.button[0] + ", " + theme.button[1] + ");\n    text-shadow: 0 1px 0 " + theme.shadow + ";\n    border-top: 1px solid " + theme.highlight + ";\n    box-shadow: 0 1px 0 " + theme.shadow + ";\n    ") + "\n\n    &:hover {\n      background: linear-gradient(" + props.hover[0] + ", " + props.hover[1] + ");\n      text-shadow: 0 1px 0 " + props.shadow + ";\n      border-top: 1px solid " + props.highlight + ";\n      box-shadow: 0 1px 0 " + props.shadow + ";\n      }\n  ";
});

var Nav = function Nav(_ref2) {
  var lang = _ref2.lang;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    El,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    },
    Object.keys(__WEBPACK_IMPORTED_MODULE_3_langs__["a" /* default */]).map(function (l) {
      var _langs$l = __WEBPACK_IMPORTED_MODULE_3_langs__["a" /* default */][l],
          label = _langs$l.label,
          slug = _langs$l.slug,
          colors = _langs$l.colors;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { key: "link-" + lang, href: "/" + slug, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Button,
          _extends({}, colors, { isSelected: lang === l, __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }),
          label
        )
      );
    })
  );
};

Nav.defaultProps = {
  lang: "english"
};

var _default = Nav;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(El, "El", "C:/Users/morley/Projects/bitywmf/components/Nav.js");
  reactHotLoader.register(Button, "Button", "C:/Users/morley/Projects/bitywmf/components/Nav.js");
  reactHotLoader.register(Nav, "Nav", "C:/Users/morley/Projects/bitywmf/components/Nav.js");
  reactHotLoader.register(_default, "default", "C:/Users/morley/Projects/bitywmf/components/Nav.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.5be0c03a29c6fe40e59b.hot-update.js.map