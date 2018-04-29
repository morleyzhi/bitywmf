webpackHotUpdate(7,{

/***/ "./components/Audio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
var _jsxFileName = "C:\\Users\\morley\\Projects\\bitywmf\\components\\Audio.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Player = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].button.withConfig({
  displayName: "Audio__Player",
  componentId: "s111pdck-0"
})(["margin:0;padding:0;outline:none;background-color:transparent;width:30px;height:30px;background-size:30px 30px;"]);

var Audio = function (_Component) {
  _inherits(Audio, _Component);

  function Audio() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Audio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Audio.__proto__ || Object.getPrototypeOf(Audio)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isPlaying: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Audio, [{
    key: "render",
    value: function render() {
      var lang = this.props.lang;
      var isPlaying = this.state.isPlaying;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        isPlaying && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "static/assets/playing.svg", __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }),
        !isPlaying && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "static/assets/play.svg", onClick: function onClick() {}, __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "audio",
          { controls: "", __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
            src: "static/assets/audio/" + lang + ".ogg",
            type: "audio/ogg; codecs=vorbis",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          })
        )
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Audio;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Audio;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Player, "Player", "C:/Users/morley/Projects/bitywmf/components/Audio.js");
  reactHotLoader.register(Audio, "Audio", "C:/Users/morley/Projects/bitywmf/components/Audio.js");
  reactHotLoader.register(_default, "default", "C:/Users/morley/Projects/bitywmf/components/Audio.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.bdf445e4a6a07c864c28.hot-update.js.map