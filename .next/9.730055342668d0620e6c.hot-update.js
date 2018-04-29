webpackHotUpdate(9,{

/***/ "./components/Audio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_static_assets_playing_svg__ = __webpack_require__("./static/assets/playing.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_static_assets_playing_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_static_assets_playing_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_static_assets_play_svg__ = __webpack_require__("./static/assets/play.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_static_assets_play_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_static_assets_play_svg__);
var _jsxFileName = "C:\\Users\\morley\\Projects\\bitywmf\\components\\Audio.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var PLAYER_SIZE = 30;

var Player = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].button.withConfig({
  displayName: "Audio__Player",
  componentId: "s111pdck-0"
})(["position:absolute;top:0;right:-", "px;margin:0;padding:0;border:0;outline:none;background-color:transparent;cursor:pointer;width:", "px;height:", "px;background-size:", "px ", "px;color:white;background-image:url(", ");"], PLAYER_SIZE, PLAYER_SIZE, PLAYER_SIZE, PLAYER_SIZE, PLAYER_SIZE, function (props) {
  return props.isPlaying ? "/static/assets/playing.svg" : "/static/assets/play.svg";
});

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
    }, _this._handleClick = function () {
      if (_this.state.isPlaying) {
        _this.el.pause();
      } else {
        _this.el.play();
      }
    }, _this._onEnd = function () {
      _this.setState({ isPlaying: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Audio, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var lang = this.props.lang;
      var isPlaying = this.state.isPlaying;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Player,
          { isPlaying: isPlaying, onClick: this._handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          isPlaying ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_static_assets_playing_svg__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_static_assets_play_svg__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "audio",
          {
            controls: "",
            ref: function ref(el) {
              _this2.el = el;
            },
            onPlay: function onPlay() {
              return _this2.setState({ isPlaying: true });
            },
            onPause: function onPause() {
              return _this2.setState({ isPlaying: false });
            },
            onEnded: function onEnded() {
              return _this2.setState({ isPlaying: false });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
            src: "static/assets/audio/" + lang + ".ogg",
            type: "audio/ogg; codecs=vorbis",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
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

  reactHotLoader.register(PLAYER_SIZE, "PLAYER_SIZE", "C:/Users/morley/Projects/bitywmf/components/Audio.js");
  reactHotLoader.register(Player, "Player", "C:/Users/morley/Projects/bitywmf/components/Audio.js");
  reactHotLoader.register(Audio, "Audio", "C:/Users/morley/Projects/bitywmf/components/Audio.js");
  reactHotLoader.register(_default, "default", "C:/Users/morley/Projects/bitywmf/components/Audio.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./static/assets/play.svg":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <?xml version=\"1.0\" ?><svg height=\"1792\" viewBox=\"0 0 1792 1792\" width=\"1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M896 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zm384 823q32-18 32-55t-32-55l-544-320q-31-19-64-1-32 19-32 56v640q0 37 32 56 16 8 32 8 17 0 32-9z\"/></svg>");

/***/ }),

/***/ "./static/assets/playing.svg":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <?xml version=\"1.0\" ?><svg contentScriptType=\"text/ecmascript\" contentStyleType=\"text/css\" enable-background=\"new 0 0 2048 2048\" height=\"2048px\" id=\"Layer_1\" preserveAspectRatio=\"xMidYMid meet\" version=\"1.1\" viewBox=\"0.0 0 1664.0 2048\" width=\"1664.0px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" zoomAndPan=\"magnify\"><path d=\"M768,480v1088c0,17.333-6.333,32.333-19,45s-27.667,19-45,19s-32.333-6.333-45-19l-333-333H64c-17.333,0-32.333-6.333-45-19  s-19-27.667-19-45V832c0-17.333,6.333-32.333,19-45s27.667-19,45-19h262l333-333c12.667-12.667,27.667-19,45-19s32.333,6.333,45,19  S768,462.667,768,480z M1152,1024c0,50.667-14.167,97.833-42.5,141.5c-28.333,43.667-65.833,74.833-112.5,93.5  c-6.667,3.333-15,5-25,5c-17.333,0-32.333-6.167-45-18.5s-19-27.5-19-45.5c0-14,4-25.833,12-35.5s17.667-18,29-25  s22.667-14.667,34-23s21-20.167,29-35.5s12-34.333,12-57c0-22.667-4-41.667-12-57s-17.667-27.167-29-35.5s-22.667-16-34-23  s-21-15.333-29-25S908,862,908,848c0-18,6.333-33.167,19-45.5s27.667-18.5,45-18.5c10,0,18.333,1.667,25,5  c46.667,18,84.167,49,112.5,93S1152,973.333,1152,1024z M1408,1024c0,102-28.333,196.167-85,282.5s-131.667,149.167-225,188.5  c-8.667,3.333-17,5-25,5c-18,0-33.333-6.333-46-19c-12.667-12.667-19-27.667-19-45c0-26,13-45.667,39-59  c37.333-19.333,62.667-34,76-44c49.333-36,87.833-81.167,115.5-135.5c27.667-54.333,41.5-112.167,41.5-173.5  s-13.833-119.167-41.5-173.5S1172.333,751,1123,715c-13.333-10-38.667-24.667-76-44c-26-13.333-39-33-39-59  c0-17.333,6.333-32.333,19-45c12.667-12.667,27.667-19,45-19c8.667,0,17.333,1.667,26,5c93.333,39.333,168.333,102.167,225,188.5  S1408,922,1408,1024z M1664,1024c0,153.333-42.333,294.167-127,422.5s-197.333,222.833-338,283.5c-8.667,3.333-17.333,5-26,5  c-17.333,0-32.333-6.333-45-19s-19-27.667-19-45c0-24,13-43.667,39-59c4.667-2.667,12.167-6.167,22.5-10.5s17.833-7.833,22.5-10.5  c30.667-16.667,58-33.667,82-51c82-60.667,146-136.333,192-227s69-187,69-289s-23-198.333-69-289s-110-166.333-192-227  c-24-17.333-51.333-34.333-82-51c-4.667-2.667-12.167-6.167-22.5-10.5s-17.833-7.833-22.5-10.5c-26-15.333-39-35-39-59  c0-17.333,6.333-32.333,19-45s27.667-19,45-19c8.667,0,17.333,1.667,26,5c140.667,60.667,253.333,155.167,338,283.5  S1664,870.667,1664,1024z\"/></svg>");

/***/ })

})
//# sourceMappingURL=9.730055342668d0620e6c.hot-update.js.map