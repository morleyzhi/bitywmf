module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_langs__ = __webpack_require__("./langs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Nav__ = __webpack_require__("./components/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_Audio__ = __webpack_require__("./components/Audio.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "C:\\Users\\morley\\Projects\\bitywmf\\components\\App.js";









var El = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
  displayName: "App__El",
  componentId: "pvz4a3-0"
})(["min-height:100vh;padding-top:25px;padding-bottom:65px;transition:background 500ms ease;", ";"], function (_ref) {
  var theme = _ref.theme;
  return "\n    background: linear-gradient(" + theme.background[0] + ", " + theme.background[1] + ");\n  ";
});

var Text = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.h1.withConfig({
  displayName: "App__Text",
  componentId: "pvz4a3-1"
})(["position:relative;font:135px/125px \"Delius Swash Caps\",Georgia,serif;margin:0;padding:0;line-height:125px;letter-spacing:-3px;cursor:default;color:#fff;width:", ";padding-left:", ";height:500px;margin:0 auto;text-shadow:0 2px 0 ", ";"], function (props) {
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
    __WEBPACK_IMPORTED_MODULE_2_styled_components__["ThemeProvider"],
    {
      theme: _extends({}, __WEBPACK_IMPORTED_MODULE_3_langs__["a" /* default */][lang].colors, {
        lang: lang
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      El,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "title",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          __WEBPACK_IMPORTED_MODULE_3_langs__["a" /* default */][lang].text
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Text,
        { lang: lang, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        },
        __WEBPACK_IMPORTED_MODULE_3_langs__["a" /* default */][lang].text,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components_Audio__["a" /* default */], { lang: lang, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_Nav__["a" /* default */], { lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })
    )
  );
};

App.defaultProps = {
  lang: "english"
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./components/Audio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "C:\\Users\\morley\\Projects\\bitywmf\\components\\Audio.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PLAYER_SIZE = 30;

var Player = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.button.withConfig({
  displayName: "Audio__Player",
  componentId: "s111pdck-0"
})(["position:absolute;top:0;right:-", "px;margin:0;padding:0;border:0;outline:none;background-color:transparent;cursor:pointer;width:", "px;height:", "px;line-height:", "px;text-align:center;text-shadow:0 1px 0 ", ";font-size:25px;color:white;"], PLAYER_SIZE, PLAYER_SIZE, PLAYER_SIZE, PLAYER_SIZE, function (_ref) {
  var theme = _ref.theme;
  return theme.shadow;
});

var Audio = function (_Component) {
  _inherits(Audio, _Component);

  function Audio() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Audio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Audio.__proto__ || Object.getPrototypeOf(Audio)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
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
            lineNumber: 49
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Player,
          { isPlaying: isPlaying, onClick: this._handleClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          isPlaying ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fas fa-volume-up", __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { "class": "fas fa-play-circle", __source: {
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
              lineNumber: 58
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
            src: "static/assets/audio/" + lang + ".ogg",
            type: "audio/ogg; codecs=vorbis",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          })
        )
      );
    }
  }]);

  return Audio;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Audio);

/***/ }),

/***/ "./components/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_langs__ = __webpack_require__("./langs.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "C:\\Users\\morley\\Projects\\bitywmf\\components\\Nav.js";

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var El = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.nav.withConfig({
  displayName: "Nav__El",
  componentId: "jujqvz-0"
})(["display:block;width:700px;margin:0 auto;padding-top:40px;padding-bottom 25px;"]);

var Button = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.a.withConfig({
  displayName: "Nav__Button",
  componentId: "jujqvz-1"
})(["display:inline-block;float:left;margin-right:15px;padding:3px 20px;cursor:pointer;font:11px/20px Arial,Helvetica,sans-serif;color:#fff;font-weight:bold;text-transform:uppercase;text-decoration:none;border-radius:50px;", ";"], function (_ref) {
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
        lineNumber: 57
      }
    },
    Object.keys(__WEBPACK_IMPORTED_MODULE_3_langs__["a" /* default */]).map(function (l) {
      var _langs$l = __WEBPACK_IMPORTED_MODULE_3_langs__["a" /* default */][l],
          label = _langs$l.label,
          slug = _langs$l.slug,
          colors = _langs$l.colors;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { key: "link-" + lang, href: "/" + slug, passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Button,
          _extends({}, colors, { isSelected: lang === l, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
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

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./langs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var langs = {
  german: {
    text: "Miststück, Ich dachte, du war meine Freundin.",
    label: "Deutsch",
    slug: "de",
    colors: {
      background: ["#ffc281", "#ff9017"],
      button: ["#ffb96d", "#ff9017"],
      hover: ["#ffcf9c", "#ffa94d"],
      highlight: "#ffd8bb",
      shadow: "#cc5100"
    }
  },
  french: {
    text: "Salope, je pensais que tu étais mon ami.",
    label: "François",
    slug: "fr",
    colors: {
      background: ["#d1f3fd", "#72d1f9"],
      button: ["#a7e4fe", "#75d2f9"],
      hover: ["#c4f1ff", "#79d5fc"],
      highlight: "#f2fcff",
      shadow: "#379fd0"
    }
  },
  spanish: {
    text: "Puta, pensé que era mi amigo.",
    label: "Español",
    slug: "es",
    colors: {
      background: ["#a3f873", "#56da0f"],
      button: ["#a3f873", "#56da0f"],
      hover: ["#c0ff9e", "#6ae625"],
      highlight: "#ecffe1",
      shadow: "#49a318"
    }
  },
  chinese: {
    text: "婊子，我还以为你是我的朋友。",
    label: "中文",
    slug: "cn",
    colors: {
      background: ["#ffa6b9", "#ff4a70"],
      button: ["#ffa6b9", "#ff4a70"],
      hover: ["#ffc3d0", "#ff587b"],
      highlight: "#ffe5eb",
      shadow: "#de002f"
    }
  },
  japanese: {
    text: "ビッチ、私はあなたが私の友人だと思った。",
    label: "日本語",
    slug: "jp",
    colors: {
      background: ["#fdb6e1", "#ff6ac5"],
      button: ["#ffaade", "#ff6ac5"],
      hover: ["#ffc3e8", "#ff75ca"],
      highlight: "#ffeef8",
      shadow: "#d4148a"
    }
  },
  english: {
    text: "Bitch, I thought you was my friend.",
    label: "English",
    slug: "en",
    colors: {
      background: ["#ffe1b3", "#fcbf5f"],
      button: ["#ffd28a", "#ffbb4f"],
      hover: ["#ffdca6", "#fdc264"],
      highlight: "#fff0d9",
      shadow: "#e98f02"
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (langs);

/***/ }),

/***/ "./pages/en.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_App__ = __webpack_require__("./components/App.js");
var _jsxFileName = "C:\\Users\\morley\\Projects\\bitywmf\\pages\\en.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components_App__["a" /* default */], { lang: "english", __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  });
});

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/en.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=en.js.map