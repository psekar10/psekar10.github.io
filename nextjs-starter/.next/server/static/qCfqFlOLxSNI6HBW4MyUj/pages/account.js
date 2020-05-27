module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 6 */
/***/ (function(module) {

module.exports = {"name":"nextjs-starter","version":"7.0.2","description":"A starter Next.js project with email and oAuth authentication","author":"Iain Collins <me@iaincollins.com>","license":"ISC","repository":"https://github.com/iaincollins/nextjs-starter.git","main":"index.js","dependencies":{"babel-core":"^6.26.3","babel-plugin-wrap-in-js":"^1.1.1","bootstrap":"^4.1.3","connect-mongo":"^2.0.3","dotenv":"^6.2.0","express-session":"^1.15.5","ionicons":"^4.5.1","isomorphic-fetch":"^2.2.1","jquery":"^3.2.1","mongodb":"^3.1.10","nedb":"^1.8.0","next":"^7.0.2","next-auth":"^1.12.1","node-sass":"^4.14.1","nodemailer":"^4.7.0","nodemailer-direct-transport":"^3.3.2","nodemailer-smtp-transport":"^2.7.4","passport-facebook":"^2.1.1","passport-google-oauth":"^1.0.0","passport-twitter":"^1.0.4","popper.js":"^1.14.6","raw-loader":"^0.5.1","react":"^16.7.0","react-bootstrap-table":"^4.3.1","react-dom":"^16.7.0","react-syntax-highlighter":"^10.1.2","react-transition-group":"^2.5.1","reactstrap":"^6.5.0","sass-loader":"^7.1.0","universal-cookie":"^3.0.7"},"devDependencies":{"cross-env":"^5.1.6"},"optionalDependencies":{"fsevents":"*"},"scripts":{"dev":"cross-env NODE_ENV=development PORT=3000 node index.js","build":"next build","start":"node index.js","postinstall":"next build"},"engines":{"node":"8.11.x"}};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* unused harmony export MainBody */
/* unused harmony export UserMenu */
/* unused harmony export AdminMenuItem */
/* unused harmony export SigninModal */
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _package__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
var _package__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(6, 1);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_10__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }












var _default = /*#__PURE__*/function (_React$Component) {
  _inherits(_default, _React$Component);

  var _super = _createSuper(_default);

  _createClass(_default, null, [{
    key: "propTypes",
    value: function propTypes() {
      return {
        session: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.object.isRequired,
        providers: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.object.isRequired,
        children: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.object.isRequired,
        fluid: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.boolean,
        navmenu: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.boolean,
        signinBtn: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.boolean
      };
    }
  }]);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this.state = {
      navOpen: false,
      modal: false,
      providers: null
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "toggleModal",
    value: function () {
      var _toggleModal = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var cookies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e) e.preventDefault(); // Save current URL so user is redirected back here after signing in

                if (this.state.modal !== true) {
                  cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8___default.a();
                  cookies.set('redirect_url', window.location.pathname, {
                    path: '/'
                  });
                }

                _context.t0 = this;
                _context.t1 = this.state.providers;

                if (_context.t1) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_7__["NextAuth"].providers();

              case 7:
                _context.t1 = _context.sent;

              case 8:
                _context.t2 = _context.t1;
                _context.t3 = !this.state.modal;
                _context.t4 = {
                  providers: _context.t2,
                  modal: _context.t3
                };

                _context.t0.setState.call(_context.t0, _context.t4);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toggleModal(_x) {
        return _toggleModal.apply(this, arguments);
      }

      return toggleModal;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        charSet: "UTF-8"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, this.props.title || 'Next.js Starter Project'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _css_index_scss__WEBPACK_IMPORTED_MODULE_10___default.a
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        src: "https://cdn.polyfill.io/v2/polyfill.min.js"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Navbar"], {
        light: true,
        className: "navbar navbar-expand-md pt-3 pb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavbarBrand"], {
        href: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "icon ion-md-home mr-1"
      }), " ", _package__WEBPACK_IMPORTED_MODULE_9__.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "nojs-navbar-check",
        id: "nojs-navbar-check",
        type: "checkbox",
        "aria-label": "Menu"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        tabIndex: "1",
        htmlFor: "nojs-navbar-check",
        className: "nojs-navbar-label mt-2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "nojs-navbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
        navbar: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        tabIndex: "1",
        className: "dropdown nojs-dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "nav-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "dropdown-toggle nav-link"
      }, "Examples")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "dropdown-menu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/examples/authentication"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/examples/authentication",
        className: "dropdown-item"
      }, "Auth")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/examples/async"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/examples/async",
        className: "dropdown-item"
      }, "Async Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/examples/layout"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/examples/layout",
        className: "dropdown-item"
      }, "Layout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/examples/routing"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/examples/routing",
        className: "dropdown-item"
      }, "Routing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        prefetch: true,
        href: "/examples/styling"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/examples/styling",
        className: "dropdown-item"
      }, "Styling"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserMenu, {
        session: this.props.session,
        toggleModal: this.toggleModal,
        signinBtn: this.props.signinBtn
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainBody, {
        navmenu: this.props.navmenu,
        fluid: this.props.fluid,
        container: this.props.container
      }, this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        fluid: this.props.fluid
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "mt-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "text-muted small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "https://github.com/iaincollins/nextjs-starter"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "text-muted font-weight-bold"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "icon ion-logo-github"
      }), " ", _package__WEBPACK_IMPORTED_MODULE_9__.name, " ", _package__WEBPACK_IMPORTED_MODULE_9__.version)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " built with "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "https://github.com/zeit/next.js"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "text-muted font-weight-bold"
      }, "Next.js ", _package__WEBPACK_IMPORTED_MODULE_9__.dependencies.next.replace('^', ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, " & "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "https://github.com/facebook/react"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "text-muted font-weight-bold"
      }, "React ", _package__WEBPACK_IMPORTED_MODULE_9__.dependencies.react.replace('^', ''))), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-2"
      }, "\xA9 ", new Date().getYear() + 1900, "."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SigninModal, {
        modal: this.state.modal,
        toggleModal: this.toggleModal,
        session: this.props.session,
        providers: this.state.providers
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


var MainBody = /*#__PURE__*/function (_React$Component2) {
  _inherits(MainBody, _React$Component2);

  var _super2 = _createSuper(MainBody);

  function MainBody() {
    _classCallCheck(this, MainBody);

    return _super2.apply(this, arguments);
  }

  _createClass(MainBody, [{
    key: "render",
    value: function render() {
      if (this.props.container === false) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.props.children);
      } else if (this.props.navmenu === false) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          }
        }, this.props.children);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xs: "12",
          md: "9",
          lg: "10"
        }, this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xs: "12",
          md: "3",
          lg: "2",
          style: {
            paddingTop: '1em'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
          className: "text-muted text-uppercase"
        }, "Examples"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/examples/authentication"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/examples/authentication",
          className: "d-block"
        }, "Auth"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/examples/async"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/examples/async",
          className: "d-block"
        }, "Async"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/examples/layout"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/examples/layout",
          className: "d-block"
        }, "Layout"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/examples/routing"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/examples/routing",
          className: "d-block"
        }, "Routing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/examples/styling"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/examples/styling",
          className: "d-block"
        }, "Styling")))))));
      }
    }
  }]);

  return MainBody;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var UserMenu = /*#__PURE__*/function (_React$Component3) {
  _inherits(UserMenu, _React$Component3);

  var _super3 = _createSuper(UserMenu);

  function UserMenu(props) {
    var _this2;

    _classCallCheck(this, UserMenu);

    _this2 = _super3.call(this, props);
    _this2.handleSignoutSubmit = _this2.handleSignoutSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(UserMenu, [{
    key: "handleSignoutSubmit",
    value: function () {
      var _handleSignoutSubmit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var cookies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault(); // Save current URL so user is redirected back here after signing out

                cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8___default.a();
                cookies.set('redirect_url', window.location.pathname, {
                  path: '/'
                });
                _context2.next = 5;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_7__["NextAuth"].signout();

              case 5:
                next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function handleSignoutSubmit(_x2) {
        return _handleSignoutSubmit.apply(this, arguments);
      }

      return handleSignoutSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.props.session && this.props.session.user) {
        // If signed in display user dropdown menu
        var session = this.props.session;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
          className: "ml-auto",
          navbar: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          tabIndex: "2",
          className: "dropdown nojs-dropdown"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "nav-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "dropdown-toggle nav-link d-none d-md-block"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-contact",
          style: {
            fontSize: '2em',
            position: 'absolute',
            top: -5,
            left: -25
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "dropdown-toggle nav-link d-block d-md-none"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-contact mr-2"
        }), session.user.name || session.user.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropdown-menu"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/account"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/account",
          className: "dropdown-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-person mr-1"
        }), " Your Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AdminMenuItem, this.props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropdown-divider d-none d-md-block"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropdown-item p-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          id: "signout",
          method: "post",
          action: "/auth/signout",
          onSubmit: this.handleSignoutSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          name: "_csrf",
          type: "hidden",
          value: this.props.session.csrfToken
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "submit",
          block: true,
          className: "pl-4 rounded-0 text-left dropdown-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-log-out mr-1"
        }), " Sign out"))))));
      }

      if (this.props.signinBtn === false) {
        // If not signed in, don't display sign in button if disabled
        return null;
      } else {
        // If not signed in, display sign in button
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
          className: "ml-auto",
          navbar: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/auth?redirect=/",
          className: "btn btn-outline-primary",
          onClick: this.props.toggleModal
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-log-in mr-1"
        }), " Sign up / Sign in")));
      }
    }
  }]);

  return UserMenu;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var AdminMenuItem = /*#__PURE__*/function (_React$Component4) {
  _inherits(AdminMenuItem, _React$Component4);

  var _super4 = _createSuper(AdminMenuItem);

  function AdminMenuItem() {
    _classCallCheck(this, AdminMenuItem);

    return _super4.apply(this, arguments);
  }

  _createClass(AdminMenuItem, [{
    key: "render",
    value: function render() {
      if (this.props.session.user && this.props.session.user.admin === true) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/admin"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/admin",
          className: "dropdown-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-settings mr-1"
        }), " Admin")));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
      }
    }
  }]);

  return AdminMenuItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var SigninModal = /*#__PURE__*/function (_React$Component5) {
  _inherits(SigninModal, _React$Component5);

  var _super5 = _createSuper(SigninModal);

  function SigninModal() {
    _classCallCheck(this, SigninModal);

    return _super5.apply(this, arguments);
  }

  _createClass(SigninModal, [{
    key: "render",
    value: function render() {
      if (this.props.providers === null) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
        isOpen: this.props.modal,
        toggle: this.props.toggleModal,
        style: {
          maxWidth: 700
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], null, "Sign up / Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], {
        style: {
          padding: '1em 2em'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_signin__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        session: this.props.session,
        providers: this.props.providers
      })));
    }
  }]);

  return SigninModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "﻿/*!\n  Ionicons, v3.0.0-alpha.3\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/@font-face{font-family:\"Ionicons\";src:url(\"/fonts/ionicons/ionicons.eot?v=3.0.0-alpha.3\");src:url(\"/fonts/ionicons/ionicons.eot?v=3.0.0-alpha.3#iefix\") format(\"embedded-opentype\"),url(\"/fonts/ionicons/ionicons.woff2?v=3.0.0-alpha.3\") format(\"woff2\"),url(\"/fonts/ionicons/ionicons.woff?v=3.0.0-alpha.3\") format(\"woff\"),url(\"/fonts/ionicons/ionicons.ttf?v=3.0.0-alpha.3\") format(\"truetype\"),url(\"/fonts/ionicons/ionicons.svg?v=3.0.0-alpha.3#Ionicons\") format(\"svg\");font-weight:normal;font-style:normal}.ion,.ionicons,.ion-ios-add:before,.ion-ios-add-circle:before,.ion-ios-add-circle-outline:before,.ion-ios-airplane:before,.ion-ios-alarm:before,.ion-ios-albums:before,.ion-ios-alert:before,.ion-ios-american-football:before,.ion-ios-analytics:before,.ion-ios-aperture:before,.ion-ios-apps:before,.ion-ios-appstore:before,.ion-ios-archive:before,.ion-ios-arrow-back:before,.ion-ios-arrow-down:before,.ion-ios-arrow-dropdown:before,.ion-ios-arrow-dropdown-circle:before,.ion-ios-arrow-dropleft:before,.ion-ios-arrow-dropleft-circle:before,.ion-ios-arrow-dropright:before,.ion-ios-arrow-dropright-circle:before,.ion-ios-arrow-dropup:before,.ion-ios-arrow-dropup-circle:before,.ion-ios-arrow-forward:before,.ion-ios-arrow-round-back:before,.ion-ios-arrow-round-down:before,.ion-ios-arrow-round-forward:before,.ion-ios-arrow-round-up:before,.ion-ios-arrow-up:before,.ion-ios-at:before,.ion-ios-attach:before,.ion-ios-backspace:before,.ion-ios-barcode:before,.ion-ios-baseball:before,.ion-ios-basket:before,.ion-ios-basketball:before,.ion-ios-battery-charging:before,.ion-ios-battery-dead:before,.ion-ios-battery-full:before,.ion-ios-beaker:before,.ion-ios-bed:before,.ion-ios-beer:before,.ion-ios-bicycle:before,.ion-ios-bluetooth:before,.ion-ios-boat:before,.ion-ios-body:before,.ion-ios-bonfire:before,.ion-ios-book:before,.ion-ios-bookmark:before,.ion-ios-bookmarks:before,.ion-ios-bowtie:before,.ion-ios-briefcase:before,.ion-ios-browsers:before,.ion-ios-brush:before,.ion-ios-bug:before,.ion-ios-build:before,.ion-ios-bulb:before,.ion-ios-bus:before,.ion-ios-business:before,.ion-ios-cafe:before,.ion-ios-calculator:before,.ion-ios-calendar:before,.ion-ios-call:before,.ion-ios-camera:before,.ion-ios-car:before,.ion-ios-card:before,.ion-ios-cart:before,.ion-ios-cash:before,.ion-ios-cellular:before,.ion-ios-chatboxes:before,.ion-ios-chatbubbles:before,.ion-ios-checkbox:before,.ion-ios-checkbox-outline:before,.ion-ios-checkmark:before,.ion-ios-checkmark-circle:before,.ion-ios-checkmark-circle-outline:before,.ion-ios-clipboard:before,.ion-ios-clock:before,.ion-ios-close:before,.ion-ios-close-circle:before,.ion-ios-close-circle-outline:before,.ion-ios-cloud:before,.ion-ios-cloud-circle:before,.ion-ios-cloud-done:before,.ion-ios-cloud-download:before,.ion-ios-cloud-outline:before,.ion-ios-cloud-upload:before,.ion-ios-cloudy:before,.ion-ios-cloudy-night:before,.ion-ios-code:before,.ion-ios-code-download:before,.ion-ios-code-working:before,.ion-ios-cog:before,.ion-ios-color-fill:before,.ion-ios-color-filter:before,.ion-ios-color-palette:before,.ion-ios-color-wand:before,.ion-ios-compass:before,.ion-ios-construct:before,.ion-ios-contact:before,.ion-ios-contacts:before,.ion-ios-contract:before,.ion-ios-contrast:before,.ion-ios-copy:before,.ion-ios-create:before,.ion-ios-crop:before,.ion-ios-cube:before,.ion-ios-cut:before,.ion-ios-desktop:before,.ion-ios-disc:before,.ion-ios-document:before,.ion-ios-done-all:before,.ion-ios-download:before,.ion-ios-easel:before,.ion-ios-egg:before,.ion-ios-exit:before,.ion-ios-expand:before,.ion-ios-eye:before,.ion-ios-eye-off:before,.ion-ios-fastforward:before,.ion-ios-female:before,.ion-ios-filing:before,.ion-ios-film:before,.ion-ios-finger-print:before,.ion-ios-fitness:before,.ion-ios-flag:before,.ion-ios-flame:before,.ion-ios-flash:before,.ion-ios-flash-off:before,.ion-ios-flashlight:before,.ion-ios-flask:before,.ion-ios-flower:before,.ion-ios-folder:before,.ion-ios-folder-open:before,.ion-ios-football:before,.ion-ios-funnel:before,.ion-ios-gift:before,.ion-ios-git-branch:before,.ion-ios-git-commit:before,.ion-ios-git-compare:before,.ion-ios-git-merge:before,.ion-ios-git-network:before,.ion-ios-git-pull-request:before,.ion-ios-glasses:before,.ion-ios-globe:before,.ion-ios-grid:before,.ion-ios-hammer:before,.ion-ios-hand:before,.ion-ios-happy:before,.ion-ios-headset:before,.ion-ios-heart:before,.ion-ios-heart-dislike:before,.ion-ios-heart-empty:before,.ion-ios-heart-half:before,.ion-ios-help:before,.ion-ios-help-buoy:before,.ion-ios-help-circle:before,.ion-ios-help-circle-outline:before,.ion-ios-home:before,.ion-ios-hourglass:before,.ion-ios-ice-cream:before,.ion-ios-image:before,.ion-ios-images:before,.ion-ios-infinite:before,.ion-ios-information:before,.ion-ios-information-circle:before,.ion-ios-information-circle-outline:before,.ion-ios-jet:before,.ion-ios-journal:before,.ion-ios-key:before,.ion-ios-keypad:before,.ion-ios-laptop:before,.ion-ios-leaf:before,.ion-ios-link:before,.ion-ios-list:before,.ion-ios-list-box:before,.ion-ios-locate:before,.ion-ios-lock:before,.ion-ios-log-in:before,.ion-ios-log-out:before,.ion-ios-magnet:before,.ion-ios-mail:before,.ion-ios-mail-open:before,.ion-ios-mail-unread:before,.ion-ios-male:before,.ion-ios-man:before,.ion-ios-map:before,.ion-ios-medal:before,.ion-ios-medical:before,.ion-ios-medkit:before,.ion-ios-megaphone:before,.ion-ios-menu:before,.ion-ios-mic:before,.ion-ios-mic-off:before,.ion-ios-microphone:before,.ion-ios-moon:before,.ion-ios-more:before,.ion-ios-move:before,.ion-ios-musical-note:before,.ion-ios-musical-notes:before,.ion-ios-navigate:before,.ion-ios-notifications:before,.ion-ios-notifications-off:before,.ion-ios-notifications-outline:before,.ion-ios-nuclear:before,.ion-ios-nutrition:before,.ion-ios-open:before,.ion-ios-options:before,.ion-ios-outlet:before,.ion-ios-paper:before,.ion-ios-paper-plane:before,.ion-ios-partly-sunny:before,.ion-ios-pause:before,.ion-ios-paw:before,.ion-ios-people:before,.ion-ios-person:before,.ion-ios-person-add:before,.ion-ios-phone-landscape:before,.ion-ios-phone-portrait:before,.ion-ios-photos:before,.ion-ios-pie:before,.ion-ios-pin:before,.ion-ios-pint:before,.ion-ios-pizza:before,.ion-ios-planet:before,.ion-ios-play:before,.ion-ios-play-circle:before,.ion-ios-podium:before,.ion-ios-power:before,.ion-ios-pricetag:before,.ion-ios-pricetags:before,.ion-ios-print:before,.ion-ios-pulse:before,.ion-ios-qr-scanner:before,.ion-ios-quote:before,.ion-ios-radio:before,.ion-ios-radio-button-off:before,.ion-ios-radio-button-on:before,.ion-ios-rainy:before,.ion-ios-recording:before,.ion-ios-redo:before,.ion-ios-refresh:before,.ion-ios-refresh-circle:before,.ion-ios-remove:before,.ion-ios-remove-circle:before,.ion-ios-remove-circle-outline:before,.ion-ios-reorder:before,.ion-ios-repeat:before,.ion-ios-resize:before,.ion-ios-restaurant:before,.ion-ios-return-left:before,.ion-ios-return-right:before,.ion-ios-reverse-camera:before,.ion-ios-rewind:before,.ion-ios-ribbon:before,.ion-ios-rocket:before,.ion-ios-rose:before,.ion-ios-sad:before,.ion-ios-save:before,.ion-ios-school:before,.ion-ios-search:before,.ion-ios-send:before,.ion-ios-settings:before,.ion-ios-share:before,.ion-ios-share-alt:before,.ion-ios-shirt:before,.ion-ios-shuffle:before,.ion-ios-skip-backward:before,.ion-ios-skip-forward:before,.ion-ios-snow:before,.ion-ios-speedometer:before,.ion-ios-square:before,.ion-ios-square-outline:before,.ion-ios-star:before,.ion-ios-star-half:before,.ion-ios-star-outline:before,.ion-ios-stats:before,.ion-ios-stopwatch:before,.ion-ios-subway:before,.ion-ios-sunny:before,.ion-ios-swap:before,.ion-ios-switch:before,.ion-ios-sync:before,.ion-ios-tablet-landscape:before,.ion-ios-tablet-portrait:before,.ion-ios-tennisball:before,.ion-ios-text:before,.ion-ios-thermometer:before,.ion-ios-thumbs-down:before,.ion-ios-thumbs-up:before,.ion-ios-thunderstorm:before,.ion-ios-time:before,.ion-ios-timer:before,.ion-ios-today:before,.ion-ios-train:before,.ion-ios-transgender:before,.ion-ios-trash:before,.ion-ios-trending-down:before,.ion-ios-trending-up:before,.ion-ios-trophy:before,.ion-ios-tv:before,.ion-ios-umbrella:before,.ion-ios-undo:before,.ion-ios-unlock:before,.ion-ios-videocam:before,.ion-ios-volume-high:before,.ion-ios-volume-low:before,.ion-ios-volume-mute:before,.ion-ios-volume-off:before,.ion-ios-walk:before,.ion-ios-wallet:before,.ion-ios-warning:before,.ion-ios-watch:before,.ion-ios-water:before,.ion-ios-wifi:before,.ion-ios-wine:before,.ion-ios-woman:before,.ion-logo-android:before,.ion-logo-angular:before,.ion-logo-apple:before,.ion-logo-bitbucket:before,.ion-logo-bitcoin:before,.ion-logo-buffer:before,.ion-logo-chrome:before,.ion-logo-closed-captioning:before,.ion-logo-codepen:before,.ion-logo-css3:before,.ion-logo-designernews:before,.ion-logo-dribbble:before,.ion-logo-dropbox:before,.ion-logo-euro:before,.ion-logo-facebook:before,.ion-logo-flickr:before,.ion-logo-foursquare:before,.ion-logo-freebsd-devil:before,.ion-logo-game-controller-a:before,.ion-logo-game-controller-b:before,.ion-logo-github:before,.ion-logo-google:before,.ion-logo-googleplus:before,.ion-logo-hackernews:before,.ion-logo-html5:before,.ion-logo-instagram:before,.ion-logo-ionic:before,.ion-logo-ionitron:before,.ion-logo-javascript:before,.ion-logo-linkedin:before,.ion-logo-markdown:before,.ion-logo-model-s:before,.ion-logo-no-smoking:before,.ion-logo-nodejs:before,.ion-logo-npm:before,.ion-logo-octocat:before,.ion-logo-pinterest:before,.ion-logo-playstation:before,.ion-logo-polymer:before,.ion-logo-python:before,.ion-logo-reddit:before,.ion-logo-rss:before,.ion-logo-sass:before,.ion-logo-skype:before,.ion-logo-slack:before,.ion-logo-snapchat:before,.ion-logo-steam:before,.ion-logo-tumblr:before,.ion-logo-tux:before,.ion-logo-twitch:before,.ion-logo-twitter:before,.ion-logo-usd:before,.ion-logo-vimeo:before,.ion-logo-vk:before,.ion-logo-whatsapp:before,.ion-logo-windows:before,.ion-logo-wordpress:before,.ion-logo-xbox:before,.ion-logo-xing:before,.ion-logo-yahoo:before,.ion-logo-yen:before,.ion-logo-youtube:before,.ion-md-add:before,.ion-md-add-circle:before,.ion-md-add-circle-outline:before,.ion-md-airplane:before,.ion-md-alarm:before,.ion-md-albums:before,.ion-md-alert:before,.ion-md-american-football:before,.ion-md-analytics:before,.ion-md-aperture:before,.ion-md-apps:before,.ion-md-appstore:before,.ion-md-archive:before,.ion-md-arrow-back:before,.ion-md-arrow-down:before,.ion-md-arrow-dropdown:before,.ion-md-arrow-dropdown-circle:before,.ion-md-arrow-dropleft:before,.ion-md-arrow-dropleft-circle:before,.ion-md-arrow-dropright:before,.ion-md-arrow-dropright-circle:before,.ion-md-arrow-dropup:before,.ion-md-arrow-dropup-circle:before,.ion-md-arrow-forward:before,.ion-md-arrow-round-back:before,.ion-md-arrow-round-down:before,.ion-md-arrow-round-forward:before,.ion-md-arrow-round-up:before,.ion-md-arrow-up:before,.ion-md-at:before,.ion-md-attach:before,.ion-md-backspace:before,.ion-md-barcode:before,.ion-md-baseball:before,.ion-md-basket:before,.ion-md-basketball:before,.ion-md-battery-charging:before,.ion-md-battery-dead:before,.ion-md-battery-full:before,.ion-md-beaker:before,.ion-md-bed:before,.ion-md-beer:before,.ion-md-bicycle:before,.ion-md-bluetooth:before,.ion-md-boat:before,.ion-md-body:before,.ion-md-bonfire:before,.ion-md-book:before,.ion-md-bookmark:before,.ion-md-bookmarks:before,.ion-md-bowtie:before,.ion-md-briefcase:before,.ion-md-browsers:before,.ion-md-brush:before,.ion-md-bug:before,.ion-md-build:before,.ion-md-bulb:before,.ion-md-bus:before,.ion-md-business:before,.ion-md-cafe:before,.ion-md-calculator:before,.ion-md-calendar:before,.ion-md-call:before,.ion-md-camera:before,.ion-md-car:before,.ion-md-card:before,.ion-md-cart:before,.ion-md-cash:before,.ion-md-cellular:before,.ion-md-chatboxes:before,.ion-md-chatbubbles:before,.ion-md-checkbox:before,.ion-md-checkbox-outline:before,.ion-md-checkmark:before,.ion-md-checkmark-circle:before,.ion-md-checkmark-circle-outline:before,.ion-md-clipboard:before,.ion-md-clock:before,.ion-md-close:before,.ion-md-close-circle:before,.ion-md-close-circle-outline:before,.ion-md-cloud:before,.ion-md-cloud-circle:before,.ion-md-cloud-done:before,.ion-md-cloud-download:before,.ion-md-cloud-outline:before,.ion-md-cloud-upload:before,.ion-md-cloudy:before,.ion-md-cloudy-night:before,.ion-md-code:before,.ion-md-code-download:before,.ion-md-code-working:before,.ion-md-cog:before,.ion-md-color-fill:before,.ion-md-color-filter:before,.ion-md-color-palette:before,.ion-md-color-wand:before,.ion-md-compass:before,.ion-md-construct:before,.ion-md-contact:before,.ion-md-contacts:before,.ion-md-contract:before,.ion-md-contrast:before,.ion-md-copy:before,.ion-md-create:before,.ion-md-crop:before,.ion-md-cube:before,.ion-md-cut:before,.ion-md-desktop:before,.ion-md-disc:before,.ion-md-document:before,.ion-md-done-all:before,.ion-md-download:before,.ion-md-easel:before,.ion-md-egg:before,.ion-md-exit:before,.ion-md-expand:before,.ion-md-eye:before,.ion-md-eye-off:before,.ion-md-fastforward:before,.ion-md-female:before,.ion-md-filing:before,.ion-md-film:before,.ion-md-finger-print:before,.ion-md-fitness:before,.ion-md-flag:before,.ion-md-flame:before,.ion-md-flash:before,.ion-md-flash-off:before,.ion-md-flashlight:before,.ion-md-flask:before,.ion-md-flower:before,.ion-md-folder:before,.ion-md-folder-open:before,.ion-md-football:before,.ion-md-funnel:before,.ion-md-gift:before,.ion-md-git-branch:before,.ion-md-git-commit:before,.ion-md-git-compare:before,.ion-md-git-merge:before,.ion-md-git-network:before,.ion-md-git-pull-request:before,.ion-md-glasses:before,.ion-md-globe:before,.ion-md-grid:before,.ion-md-hammer:before,.ion-md-hand:before,.ion-md-happy:before,.ion-md-headset:before,.ion-md-heart:before,.ion-md-heart-dislike:before,.ion-md-heart-empty:before,.ion-md-heart-half:before,.ion-md-help:before,.ion-md-help-buoy:before,.ion-md-help-circle:before,.ion-md-help-circle-outline:before,.ion-md-home:before,.ion-md-hourglass:before,.ion-md-ice-cream:before,.ion-md-image:before,.ion-md-images:before,.ion-md-infinite:before,.ion-md-information:before,.ion-md-information-circle:before,.ion-md-information-circle-outline:before,.ion-md-jet:before,.ion-md-journal:before,.ion-md-key:before,.ion-md-keypad:before,.ion-md-laptop:before,.ion-md-leaf:before,.ion-md-link:before,.ion-md-list:before,.ion-md-list-box:before,.ion-md-locate:before,.ion-md-lock:before,.ion-md-log-in:before,.ion-md-log-out:before,.ion-md-magnet:before,.ion-md-mail:before,.ion-md-mail-open:before,.ion-md-mail-unread:before,.ion-md-male:before,.ion-md-man:before,.ion-md-map:before,.ion-md-medal:before,.ion-md-medical:before,.ion-md-medkit:before,.ion-md-megaphone:before,.ion-md-menu:before,.ion-md-mic:before,.ion-md-mic-off:before,.ion-md-microphone:before,.ion-md-moon:before,.ion-md-more:before,.ion-md-move:before,.ion-md-musical-note:before,.ion-md-musical-notes:before,.ion-md-navigate:before,.ion-md-notifications:before,.ion-md-notifications-off:before,.ion-md-notifications-outline:before,.ion-md-nuclear:before,.ion-md-nutrition:before,.ion-md-open:before,.ion-md-options:before,.ion-md-outlet:before,.ion-md-paper:before,.ion-md-paper-plane:before,.ion-md-partly-sunny:before,.ion-md-pause:before,.ion-md-paw:before,.ion-md-people:before,.ion-md-person:before,.ion-md-person-add:before,.ion-md-phone-landscape:before,.ion-md-phone-portrait:before,.ion-md-photos:before,.ion-md-pie:before,.ion-md-pin:before,.ion-md-pint:before,.ion-md-pizza:before,.ion-md-planet:before,.ion-md-play:before,.ion-md-play-circle:before,.ion-md-podium:before,.ion-md-power:before,.ion-md-pricetag:before,.ion-md-pricetags:before,.ion-md-print:before,.ion-md-pulse:before,.ion-md-qr-scanner:before,.ion-md-quote:before,.ion-md-radio:before,.ion-md-radio-button-off:before,.ion-md-radio-button-on:before,.ion-md-rainy:before,.ion-md-recording:before,.ion-md-redo:before,.ion-md-refresh:before,.ion-md-refresh-circle:before,.ion-md-remove:before,.ion-md-remove-circle:before,.ion-md-remove-circle-outline:before,.ion-md-reorder:before,.ion-md-repeat:before,.ion-md-resize:before,.ion-md-restaurant:before,.ion-md-return-left:before,.ion-md-return-right:before,.ion-md-reverse-camera:before,.ion-md-rewind:before,.ion-md-ribbon:before,.ion-md-rocket:before,.ion-md-rose:before,.ion-md-sad:before,.ion-md-save:before,.ion-md-school:before,.ion-md-search:before,.ion-md-send:before,.ion-md-settings:before,.ion-md-share:before,.ion-md-share-alt:before,.ion-md-shirt:before,.ion-md-shuffle:before,.ion-md-skip-backward:before,.ion-md-skip-forward:before,.ion-md-snow:before,.ion-md-speedometer:before,.ion-md-square:before,.ion-md-square-outline:before,.ion-md-star:before,.ion-md-star-half:before,.ion-md-star-outline:before,.ion-md-stats:before,.ion-md-stopwatch:before,.ion-md-subway:before,.ion-md-sunny:before,.ion-md-swap:before,.ion-md-switch:before,.ion-md-sync:before,.ion-md-tablet-landscape:before,.ion-md-tablet-portrait:before,.ion-md-tennisball:before,.ion-md-text:before,.ion-md-thermometer:before,.ion-md-thumbs-down:before,.ion-md-thumbs-up:before,.ion-md-thunderstorm:before,.ion-md-time:before,.ion-md-timer:before,.ion-md-today:before,.ion-md-train:before,.ion-md-transgender:before,.ion-md-trash:before,.ion-md-trending-down:before,.ion-md-trending-up:before,.ion-md-trophy:before,.ion-md-tv:before,.ion-md-umbrella:before,.ion-md-undo:before,.ion-md-unlock:before,.ion-md-videocam:before,.ion-md-volume-high:before,.ion-md-volume-low:before,.ion-md-volume-mute:before,.ion-md-volume-off:before,.ion-md-walk:before,.ion-md-wallet:before,.ion-md-warning:before,.ion-md-watch:before,.ion-md-water:before,.ion-md-wifi:before,.ion-md-wine:before,.ion-md-woman:before{display:inline-block;font-family:\"Ionicons\";speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;text-rendering:auto;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ion-ios-add:before{content:\"\\f102\"}.ion-ios-add-circle:before{content:\"\\f101\"}.ion-ios-add-circle-outline:before{content:\"\\f100\"}.ion-ios-airplane:before{content:\"\\f137\"}.ion-ios-alarm:before{content:\"\\f3c8\"}.ion-ios-albums:before{content:\"\\f3ca\"}.ion-ios-alert:before{content:\"\\f104\"}.ion-ios-american-football:before{content:\"\\f106\"}.ion-ios-analytics:before{content:\"\\f3ce\"}.ion-ios-aperture:before{content:\"\\f108\"}.ion-ios-apps:before{content:\"\\f10a\"}.ion-ios-appstore:before{content:\"\\f10c\"}.ion-ios-archive:before{content:\"\\f10e\"}.ion-ios-arrow-back:before{content:\"\\f3cf\"}.ion-ios-arrow-down:before{content:\"\\f3d0\"}.ion-ios-arrow-dropdown:before{content:\"\\f110\"}.ion-ios-arrow-dropdown-circle:before{content:\"\\f125\"}.ion-ios-arrow-dropleft:before{content:\"\\f112\"}.ion-ios-arrow-dropleft-circle:before{content:\"\\f129\"}.ion-ios-arrow-dropright:before{content:\"\\f114\"}.ion-ios-arrow-dropright-circle:before{content:\"\\f12b\"}.ion-ios-arrow-dropup:before{content:\"\\f116\"}.ion-ios-arrow-dropup-circle:before{content:\"\\f12d\"}.ion-ios-arrow-forward:before{content:\"\\f3d1\"}.ion-ios-arrow-round-back:before{content:\"\\f117\"}.ion-ios-arrow-round-down:before{content:\"\\f118\"}.ion-ios-arrow-round-forward:before{content:\"\\f119\"}.ion-ios-arrow-round-up:before{content:\"\\f11a\"}.ion-ios-arrow-up:before{content:\"\\f3d8\"}.ion-ios-at:before{content:\"\\f3da\"}.ion-ios-attach:before{content:\"\\f11b\"}.ion-ios-backspace:before{content:\"\\f11d\"}.ion-ios-barcode:before{content:\"\\f3dc\"}.ion-ios-baseball:before{content:\"\\f3de\"}.ion-ios-basket:before{content:\"\\f11f\"}.ion-ios-basketball:before{content:\"\\f3e0\"}.ion-ios-battery-charging:before{content:\"\\f120\"}.ion-ios-battery-dead:before{content:\"\\f121\"}.ion-ios-battery-full:before{content:\"\\f122\"}.ion-ios-beaker:before{content:\"\\f124\"}.ion-ios-bed:before{content:\"\\f139\"}.ion-ios-beer:before{content:\"\\f126\"}.ion-ios-bicycle:before{content:\"\\f127\"}.ion-ios-bluetooth:before{content:\"\\f128\"}.ion-ios-boat:before{content:\"\\f12a\"}.ion-ios-body:before{content:\"\\f3e4\"}.ion-ios-bonfire:before{content:\"\\f12c\"}.ion-ios-book:before{content:\"\\f3e8\"}.ion-ios-bookmark:before{content:\"\\f12e\"}.ion-ios-bookmarks:before{content:\"\\f3ea\"}.ion-ios-bowtie:before{content:\"\\f130\"}.ion-ios-briefcase:before{content:\"\\f3ee\"}.ion-ios-browsers:before{content:\"\\f3f0\"}.ion-ios-brush:before{content:\"\\f132\"}.ion-ios-bug:before{content:\"\\f134\"}.ion-ios-build:before{content:\"\\f136\"}.ion-ios-bulb:before{content:\"\\f138\"}.ion-ios-bus:before{content:\"\\f13a\"}.ion-ios-business:before{content:\"\\f1a3\"}.ion-ios-cafe:before{content:\"\\f13c\"}.ion-ios-calculator:before{content:\"\\f3f2\"}.ion-ios-calendar:before{content:\"\\f3f4\"}.ion-ios-call:before{content:\"\\f13e\"}.ion-ios-camera:before{content:\"\\f3f6\"}.ion-ios-car:before{content:\"\\f140\"}.ion-ios-card:before{content:\"\\f142\"}.ion-ios-cart:before{content:\"\\f3f8\"}.ion-ios-cash:before{content:\"\\f144\"}.ion-ios-cellular:before{content:\"\\f13d\"}.ion-ios-chatboxes:before{content:\"\\f3fa\"}.ion-ios-chatbubbles:before{content:\"\\f146\"}.ion-ios-checkbox:before{content:\"\\f148\"}.ion-ios-checkbox-outline:before{content:\"\\f147\"}.ion-ios-checkmark:before{content:\"\\f3ff\"}.ion-ios-checkmark-circle:before{content:\"\\f14a\"}.ion-ios-checkmark-circle-outline:before{content:\"\\f149\"}.ion-ios-clipboard:before{content:\"\\f14c\"}.ion-ios-clock:before{content:\"\\f403\"}.ion-ios-close:before{content:\"\\f406\"}.ion-ios-close-circle:before{content:\"\\f14e\"}.ion-ios-close-circle-outline:before{content:\"\\f14d\"}.ion-ios-cloud:before{content:\"\\f40c\"}.ion-ios-cloud-circle:before{content:\"\\f152\"}.ion-ios-cloud-done:before{content:\"\\f154\"}.ion-ios-cloud-download:before{content:\"\\f408\"}.ion-ios-cloud-outline:before{content:\"\\f409\"}.ion-ios-cloud-upload:before{content:\"\\f40b\"}.ion-ios-cloudy:before{content:\"\\f410\"}.ion-ios-cloudy-night:before{content:\"\\f40e\"}.ion-ios-code:before{content:\"\\f157\"}.ion-ios-code-download:before{content:\"\\f155\"}.ion-ios-code-working:before{content:\"\\f156\"}.ion-ios-cog:before{content:\"\\f412\"}.ion-ios-color-fill:before{content:\"\\f159\"}.ion-ios-color-filter:before{content:\"\\f414\"}.ion-ios-color-palette:before{content:\"\\f15b\"}.ion-ios-color-wand:before{content:\"\\f416\"}.ion-ios-compass:before{content:\"\\f15d\"}.ion-ios-construct:before{content:\"\\f15f\"}.ion-ios-contact:before{content:\"\\f41a\"}.ion-ios-contacts:before{content:\"\\f161\"}.ion-ios-contract:before{content:\"\\f162\"}.ion-ios-contrast:before{content:\"\\f163\"}.ion-ios-copy:before{content:\"\\f41c\"}.ion-ios-create:before{content:\"\\f165\"}.ion-ios-crop:before{content:\"\\f41e\"}.ion-ios-cube:before{content:\"\\f168\"}.ion-ios-cut:before{content:\"\\f16a\"}.ion-ios-desktop:before{content:\"\\f16c\"}.ion-ios-disc:before{content:\"\\f16e\"}.ion-ios-document:before{content:\"\\f170\"}.ion-ios-done-all:before{content:\"\\f171\"}.ion-ios-download:before{content:\"\\f420\"}.ion-ios-easel:before{content:\"\\f173\"}.ion-ios-egg:before{content:\"\\f175\"}.ion-ios-exit:before{content:\"\\f177\"}.ion-ios-expand:before{content:\"\\f178\"}.ion-ios-eye:before{content:\"\\f425\"}.ion-ios-eye-off:before{content:\"\\f17a\"}.ion-ios-fastforward:before{content:\"\\f427\"}.ion-ios-female:before{content:\"\\f17b\"}.ion-ios-filing:before{content:\"\\f429\"}.ion-ios-film:before{content:\"\\f42b\"}.ion-ios-finger-print:before{content:\"\\f17c\"}.ion-ios-fitness:before{content:\"\\f1ab\"}.ion-ios-flag:before{content:\"\\f42d\"}.ion-ios-flame:before{content:\"\\f42f\"}.ion-ios-flash:before{content:\"\\f17e\"}.ion-ios-flash-off:before{content:\"\\f12f\"}.ion-ios-flashlight:before{content:\"\\f141\"}.ion-ios-flask:before{content:\"\\f431\"}.ion-ios-flower:before{content:\"\\f433\"}.ion-ios-folder:before{content:\"\\f435\"}.ion-ios-folder-open:before{content:\"\\f180\"}.ion-ios-football:before{content:\"\\f437\"}.ion-ios-funnel:before{content:\"\\f182\"}.ion-ios-gift:before{content:\"\\f191\"}.ion-ios-git-branch:before{content:\"\\f183\"}.ion-ios-git-commit:before{content:\"\\f184\"}.ion-ios-git-compare:before{content:\"\\f185\"}.ion-ios-git-merge:before{content:\"\\f186\"}.ion-ios-git-network:before{content:\"\\f187\"}.ion-ios-git-pull-request:before{content:\"\\f188\"}.ion-ios-glasses:before{content:\"\\f43f\"}.ion-ios-globe:before{content:\"\\f18a\"}.ion-ios-grid:before{content:\"\\f18c\"}.ion-ios-hammer:before{content:\"\\f18e\"}.ion-ios-hand:before{content:\"\\f190\"}.ion-ios-happy:before{content:\"\\f192\"}.ion-ios-headset:before{content:\"\\f194\"}.ion-ios-heart:before{content:\"\\f443\"}.ion-ios-heart-dislike:before{content:\"\\f13f\"}.ion-ios-heart-empty:before{content:\"\\f19b\"}.ion-ios-heart-half:before{content:\"\\f19d\"}.ion-ios-help:before{content:\"\\f446\"}.ion-ios-help-buoy:before{content:\"\\f196\"}.ion-ios-help-circle:before{content:\"\\f198\"}.ion-ios-help-circle-outline:before{content:\"\\f197\"}.ion-ios-home:before{content:\"\\f448\"}.ion-ios-hourglass:before{content:\"\\f103\"}.ion-ios-ice-cream:before{content:\"\\f19a\"}.ion-ios-image:before{content:\"\\f19c\"}.ion-ios-images:before{content:\"\\f19e\"}.ion-ios-infinite:before{content:\"\\f44a\"}.ion-ios-information:before{content:\"\\f44d\"}.ion-ios-information-circle:before{content:\"\\f1a0\"}.ion-ios-information-circle-outline:before{content:\"\\f19f\"}.ion-ios-jet:before{content:\"\\f1a5\"}.ion-ios-journal:before{content:\"\\f189\"}.ion-ios-key:before{content:\"\\f1a7\"}.ion-ios-keypad:before{content:\"\\f450\"}.ion-ios-laptop:before{content:\"\\f1a8\"}.ion-ios-leaf:before{content:\"\\f1aa\"}.ion-ios-link:before{content:\"\\f22a\"}.ion-ios-list:before{content:\"\\f454\"}.ion-ios-list-box:before{content:\"\\f143\"}.ion-ios-locate:before{content:\"\\f1ae\"}.ion-ios-lock:before{content:\"\\f1b0\"}.ion-ios-log-in:before{content:\"\\f1b1\"}.ion-ios-log-out:before{content:\"\\f1b2\"}.ion-ios-magnet:before{content:\"\\f1b4\"}.ion-ios-mail:before{content:\"\\f1b8\"}.ion-ios-mail-open:before{content:\"\\f1b6\"}.ion-ios-mail-unread:before{content:\"\\f145\"}.ion-ios-male:before{content:\"\\f1b9\"}.ion-ios-man:before{content:\"\\f1bb\"}.ion-ios-map:before{content:\"\\f1bd\"}.ion-ios-medal:before{content:\"\\f1bf\"}.ion-ios-medical:before{content:\"\\f45c\"}.ion-ios-medkit:before{content:\"\\f45e\"}.ion-ios-megaphone:before{content:\"\\f1c1\"}.ion-ios-menu:before{content:\"\\f1c3\"}.ion-ios-mic:before{content:\"\\f461\"}.ion-ios-mic-off:before{content:\"\\f45f\"}.ion-ios-microphone:before{content:\"\\f1c6\"}.ion-ios-moon:before{content:\"\\f468\"}.ion-ios-more:before{content:\"\\f1c8\"}.ion-ios-move:before{content:\"\\f1cb\"}.ion-ios-musical-note:before{content:\"\\f46b\"}.ion-ios-musical-notes:before{content:\"\\f46c\"}.ion-ios-navigate:before{content:\"\\f46e\"}.ion-ios-notifications:before{content:\"\\f1d3\"}.ion-ios-notifications-off:before{content:\"\\f1d1\"}.ion-ios-notifications-outline:before{content:\"\\f133\"}.ion-ios-nuclear:before{content:\"\\f1d5\"}.ion-ios-nutrition:before{content:\"\\f470\"}.ion-ios-open:before{content:\"\\f1d7\"}.ion-ios-options:before{content:\"\\f1d9\"}.ion-ios-outlet:before{content:\"\\f1db\"}.ion-ios-paper:before{content:\"\\f472\"}.ion-ios-paper-plane:before{content:\"\\f1dd\"}.ion-ios-partly-sunny:before{content:\"\\f1df\"}.ion-ios-pause:before{content:\"\\f478\"}.ion-ios-paw:before{content:\"\\f47a\"}.ion-ios-people:before{content:\"\\f47c\"}.ion-ios-person:before{content:\"\\f47e\"}.ion-ios-person-add:before{content:\"\\f1e1\"}.ion-ios-phone-landscape:before{content:\"\\f1e2\"}.ion-ios-phone-portrait:before{content:\"\\f1e3\"}.ion-ios-photos:before{content:\"\\f482\"}.ion-ios-pie:before{content:\"\\f484\"}.ion-ios-pin:before{content:\"\\f1e5\"}.ion-ios-pint:before{content:\"\\f486\"}.ion-ios-pizza:before{content:\"\\f1e7\"}.ion-ios-planet:before{content:\"\\f1eb\"}.ion-ios-play:before{content:\"\\f488\"}.ion-ios-play-circle:before{content:\"\\f113\"}.ion-ios-podium:before{content:\"\\f1ed\"}.ion-ios-power:before{content:\"\\f1ef\"}.ion-ios-pricetag:before{content:\"\\f48d\"}.ion-ios-pricetags:before{content:\"\\f48f\"}.ion-ios-print:before{content:\"\\f1f1\"}.ion-ios-pulse:before{content:\"\\f493\"}.ion-ios-qr-scanner:before{content:\"\\f1f3\"}.ion-ios-quote:before{content:\"\\f1f5\"}.ion-ios-radio:before{content:\"\\f1f9\"}.ion-ios-radio-button-off:before{content:\"\\f1f6\"}.ion-ios-radio-button-on:before{content:\"\\f1f7\"}.ion-ios-rainy:before{content:\"\\f495\"}.ion-ios-recording:before{content:\"\\f497\"}.ion-ios-redo:before{content:\"\\f499\"}.ion-ios-refresh:before{content:\"\\f49c\"}.ion-ios-refresh-circle:before{content:\"\\f135\"}.ion-ios-remove:before{content:\"\\f1fc\"}.ion-ios-remove-circle:before{content:\"\\f1fb\"}.ion-ios-remove-circle-outline:before{content:\"\\f1fa\"}.ion-ios-reorder:before{content:\"\\f1fd\"}.ion-ios-repeat:before{content:\"\\f1fe\"}.ion-ios-resize:before{content:\"\\f1ff\"}.ion-ios-restaurant:before{content:\"\\f201\"}.ion-ios-return-left:before{content:\"\\f202\"}.ion-ios-return-right:before{content:\"\\f203\"}.ion-ios-reverse-camera:before{content:\"\\f49f\"}.ion-ios-rewind:before{content:\"\\f4a1\"}.ion-ios-ribbon:before{content:\"\\f205\"}.ion-ios-rocket:before{content:\"\\f14b\"}.ion-ios-rose:before{content:\"\\f4a3\"}.ion-ios-sad:before{content:\"\\f207\"}.ion-ios-save:before{content:\"\\f1a6\"}.ion-ios-school:before{content:\"\\f209\"}.ion-ios-search:before{content:\"\\f4a5\"}.ion-ios-send:before{content:\"\\f20c\"}.ion-ios-settings:before{content:\"\\f4a7\"}.ion-ios-share:before{content:\"\\f211\"}.ion-ios-share-alt:before{content:\"\\f20f\"}.ion-ios-shirt:before{content:\"\\f213\"}.ion-ios-shuffle:before{content:\"\\f4a9\"}.ion-ios-skip-backward:before{content:\"\\f215\"}.ion-ios-skip-forward:before{content:\"\\f217\"}.ion-ios-snow:before{content:\"\\f218\"}.ion-ios-speedometer:before{content:\"\\f4b0\"}.ion-ios-square:before{content:\"\\f21a\"}.ion-ios-square-outline:before{content:\"\\f15c\"}.ion-ios-star:before{content:\"\\f4b3\"}.ion-ios-star-half:before{content:\"\\f4b1\"}.ion-ios-star-outline:before{content:\"\\f4b2\"}.ion-ios-stats:before{content:\"\\f21c\"}.ion-ios-stopwatch:before{content:\"\\f4b5\"}.ion-ios-subway:before{content:\"\\f21e\"}.ion-ios-sunny:before{content:\"\\f4b7\"}.ion-ios-swap:before{content:\"\\f21f\"}.ion-ios-switch:before{content:\"\\f221\"}.ion-ios-sync:before{content:\"\\f222\"}.ion-ios-tablet-landscape:before{content:\"\\f223\"}.ion-ios-tablet-portrait:before{content:\"\\f24e\"}.ion-ios-tennisball:before{content:\"\\f4bb\"}.ion-ios-text:before{content:\"\\f250\"}.ion-ios-thermometer:before{content:\"\\f252\"}.ion-ios-thumbs-down:before{content:\"\\f254\"}.ion-ios-thumbs-up:before{content:\"\\f256\"}.ion-ios-thunderstorm:before{content:\"\\f4bd\"}.ion-ios-time:before{content:\"\\f4bf\"}.ion-ios-timer:before{content:\"\\f4c1\"}.ion-ios-today:before{content:\"\\f14f\"}.ion-ios-train:before{content:\"\\f258\"}.ion-ios-transgender:before{content:\"\\f259\"}.ion-ios-trash:before{content:\"\\f4c5\"}.ion-ios-trending-down:before{content:\"\\f25a\"}.ion-ios-trending-up:before{content:\"\\f25b\"}.ion-ios-trophy:before{content:\"\\f25d\"}.ion-ios-tv:before{content:\"\\f115\"}.ion-ios-umbrella:before{content:\"\\f25f\"}.ion-ios-undo:before{content:\"\\f4c7\"}.ion-ios-unlock:before{content:\"\\f261\"}.ion-ios-videocam:before{content:\"\\f4cd\"}.ion-ios-volume-high:before{content:\"\\f11c\"}.ion-ios-volume-low:before{content:\"\\f11e\"}.ion-ios-volume-mute:before{content:\"\\f263\"}.ion-ios-volume-off:before{content:\"\\f264\"}.ion-ios-walk:before{content:\"\\f266\"}.ion-ios-wallet:before{content:\"\\f18b\"}.ion-ios-warning:before{content:\"\\f268\"}.ion-ios-watch:before{content:\"\\f269\"}.ion-ios-water:before{content:\"\\f26b\"}.ion-ios-wifi:before{content:\"\\f26d\"}.ion-ios-wine:before{content:\"\\f26f\"}.ion-ios-woman:before{content:\"\\f271\"}.ion-logo-android:before{content:\"\\f225\"}.ion-logo-angular:before{content:\"\\f227\"}.ion-logo-apple:before{content:\"\\f229\"}.ion-logo-bitbucket:before{content:\"\\f193\"}.ion-logo-bitcoin:before{content:\"\\f22b\"}.ion-logo-buffer:before{content:\"\\f22d\"}.ion-logo-chrome:before{content:\"\\f22f\"}.ion-logo-closed-captioning:before{content:\"\\f105\"}.ion-logo-codepen:before{content:\"\\f230\"}.ion-logo-css3:before{content:\"\\f231\"}.ion-logo-designernews:before{content:\"\\f232\"}.ion-logo-dribbble:before{content:\"\\f233\"}.ion-logo-dropbox:before{content:\"\\f234\"}.ion-logo-euro:before{content:\"\\f235\"}.ion-logo-facebook:before{content:\"\\f236\"}.ion-logo-flickr:before{content:\"\\f107\"}.ion-logo-foursquare:before{content:\"\\f237\"}.ion-logo-freebsd-devil:before{content:\"\\f238\"}.ion-logo-game-controller-a:before{content:\"\\f13b\"}.ion-logo-game-controller-b:before{content:\"\\f181\"}.ion-logo-github:before{content:\"\\f239\"}.ion-logo-google:before{content:\"\\f23a\"}.ion-logo-googleplus:before{content:\"\\f23b\"}.ion-logo-hackernews:before{content:\"\\f23c\"}.ion-logo-html5:before{content:\"\\f23d\"}.ion-logo-instagram:before{content:\"\\f23e\"}.ion-logo-ionic:before{content:\"\\f150\"}.ion-logo-ionitron:before{content:\"\\f151\"}.ion-logo-javascript:before{content:\"\\f23f\"}.ion-logo-linkedin:before{content:\"\\f240\"}.ion-logo-markdown:before{content:\"\\f241\"}.ion-logo-model-s:before{content:\"\\f153\"}.ion-logo-no-smoking:before{content:\"\\f109\"}.ion-logo-nodejs:before{content:\"\\f242\"}.ion-logo-npm:before{content:\"\\f195\"}.ion-logo-octocat:before{content:\"\\f243\"}.ion-logo-pinterest:before{content:\"\\f244\"}.ion-logo-playstation:before{content:\"\\f245\"}.ion-logo-polymer:before{content:\"\\f15e\"}.ion-logo-python:before{content:\"\\f246\"}.ion-logo-reddit:before{content:\"\\f247\"}.ion-logo-rss:before{content:\"\\f248\"}.ion-logo-sass:before{content:\"\\f249\"}.ion-logo-skype:before{content:\"\\f24a\"}.ion-logo-slack:before{content:\"\\f10b\"}.ion-logo-snapchat:before{content:\"\\f24b\"}.ion-logo-steam:before{content:\"\\f24c\"}.ion-logo-tumblr:before{content:\"\\f24d\"}.ion-logo-tux:before{content:\"\\f2ae\"}.ion-logo-twitch:before{content:\"\\f2af\"}.ion-logo-twitter:before{content:\"\\f2b0\"}.ion-logo-usd:before{content:\"\\f2b1\"}.ion-logo-vimeo:before{content:\"\\f2c4\"}.ion-logo-vk:before{content:\"\\f10d\"}.ion-logo-whatsapp:before{content:\"\\f2c5\"}.ion-logo-windows:before{content:\"\\f32f\"}.ion-logo-wordpress:before{content:\"\\f330\"}.ion-logo-xbox:before{content:\"\\f34c\"}.ion-logo-xing:before{content:\"\\f10f\"}.ion-logo-yahoo:before{content:\"\\f34d\"}.ion-logo-yen:before{content:\"\\f34e\"}.ion-logo-youtube:before{content:\"\\f34f\"}.ion-md-add:before{content:\"\\f273\"}.ion-md-add-circle:before{content:\"\\f272\"}.ion-md-add-circle-outline:before{content:\"\\f158\"}.ion-md-airplane:before{content:\"\\f15a\"}.ion-md-alarm:before{content:\"\\f274\"}.ion-md-albums:before{content:\"\\f275\"}.ion-md-alert:before{content:\"\\f276\"}.ion-md-american-football:before{content:\"\\f277\"}.ion-md-analytics:before{content:\"\\f278\"}.ion-md-aperture:before{content:\"\\f279\"}.ion-md-apps:before{content:\"\\f27a\"}.ion-md-appstore:before{content:\"\\f27b\"}.ion-md-archive:before{content:\"\\f27c\"}.ion-md-arrow-back:before{content:\"\\f27d\"}.ion-md-arrow-down:before{content:\"\\f27e\"}.ion-md-arrow-dropdown:before{content:\"\\f280\"}.ion-md-arrow-dropdown-circle:before{content:\"\\f27f\"}.ion-md-arrow-dropleft:before{content:\"\\f282\"}.ion-md-arrow-dropleft-circle:before{content:\"\\f281\"}.ion-md-arrow-dropright:before{content:\"\\f284\"}.ion-md-arrow-dropright-circle:before{content:\"\\f283\"}.ion-md-arrow-dropup:before{content:\"\\f286\"}.ion-md-arrow-dropup-circle:before{content:\"\\f285\"}.ion-md-arrow-forward:before{content:\"\\f287\"}.ion-md-arrow-round-back:before{content:\"\\f288\"}.ion-md-arrow-round-down:before{content:\"\\f289\"}.ion-md-arrow-round-forward:before{content:\"\\f28a\"}.ion-md-arrow-round-up:before{content:\"\\f28b\"}.ion-md-arrow-up:before{content:\"\\f28c\"}.ion-md-at:before{content:\"\\f28d\"}.ion-md-attach:before{content:\"\\f28e\"}.ion-md-backspace:before{content:\"\\f28f\"}.ion-md-barcode:before{content:\"\\f290\"}.ion-md-baseball:before{content:\"\\f291\"}.ion-md-basket:before{content:\"\\f292\"}.ion-md-basketball:before{content:\"\\f293\"}.ion-md-battery-charging:before{content:\"\\f294\"}.ion-md-battery-dead:before{content:\"\\f295\"}.ion-md-battery-full:before{content:\"\\f296\"}.ion-md-beaker:before{content:\"\\f297\"}.ion-md-bed:before{content:\"\\f160\"}.ion-md-beer:before{content:\"\\f298\"}.ion-md-bicycle:before{content:\"\\f299\"}.ion-md-bluetooth:before{content:\"\\f29a\"}.ion-md-boat:before{content:\"\\f29b\"}.ion-md-body:before{content:\"\\f29c\"}.ion-md-bonfire:before{content:\"\\f29d\"}.ion-md-book:before{content:\"\\f29e\"}.ion-md-bookmark:before{content:\"\\f29f\"}.ion-md-bookmarks:before{content:\"\\f2a0\"}.ion-md-bowtie:before{content:\"\\f2a1\"}.ion-md-briefcase:before{content:\"\\f2a2\"}.ion-md-browsers:before{content:\"\\f2a3\"}.ion-md-brush:before{content:\"\\f2a4\"}.ion-md-bug:before{content:\"\\f2a5\"}.ion-md-build:before{content:\"\\f2a6\"}.ion-md-bulb:before{content:\"\\f2a7\"}.ion-md-bus:before{content:\"\\f2a8\"}.ion-md-business:before{content:\"\\f1a4\"}.ion-md-cafe:before{content:\"\\f2a9\"}.ion-md-calculator:before{content:\"\\f2aa\"}.ion-md-calendar:before{content:\"\\f2ab\"}.ion-md-call:before{content:\"\\f2ac\"}.ion-md-camera:before{content:\"\\f2ad\"}.ion-md-car:before{content:\"\\f2b2\"}.ion-md-card:before{content:\"\\f2b3\"}.ion-md-cart:before{content:\"\\f2b4\"}.ion-md-cash:before{content:\"\\f2b5\"}.ion-md-cellular:before{content:\"\\f164\"}.ion-md-chatboxes:before{content:\"\\f2b6\"}.ion-md-chatbubbles:before{content:\"\\f2b7\"}.ion-md-checkbox:before{content:\"\\f2b9\"}.ion-md-checkbox-outline:before{content:\"\\f2b8\"}.ion-md-checkmark:before{content:\"\\f2bc\"}.ion-md-checkmark-circle:before{content:\"\\f2bb\"}.ion-md-checkmark-circle-outline:before{content:\"\\f2ba\"}.ion-md-clipboard:before{content:\"\\f2bd\"}.ion-md-clock:before{content:\"\\f2be\"}.ion-md-close:before{content:\"\\f2c0\"}.ion-md-close-circle:before{content:\"\\f2bf\"}.ion-md-close-circle-outline:before{content:\"\\f166\"}.ion-md-cloud:before{content:\"\\f2c9\"}.ion-md-cloud-circle:before{content:\"\\f2c2\"}.ion-md-cloud-done:before{content:\"\\f2c3\"}.ion-md-cloud-download:before{content:\"\\f2c6\"}.ion-md-cloud-outline:before{content:\"\\f2c7\"}.ion-md-cloud-upload:before{content:\"\\f2c8\"}.ion-md-cloudy:before{content:\"\\f2cb\"}.ion-md-cloudy-night:before{content:\"\\f2ca\"}.ion-md-code:before{content:\"\\f2ce\"}.ion-md-code-download:before{content:\"\\f2cc\"}.ion-md-code-working:before{content:\"\\f2cd\"}.ion-md-cog:before{content:\"\\f2cf\"}.ion-md-color-fill:before{content:\"\\f2d0\"}.ion-md-color-filter:before{content:\"\\f2d1\"}.ion-md-color-palette:before{content:\"\\f2d2\"}.ion-md-color-wand:before{content:\"\\f2d3\"}.ion-md-compass:before{content:\"\\f2d4\"}.ion-md-construct:before{content:\"\\f2d5\"}.ion-md-contact:before{content:\"\\f2d6\"}.ion-md-contacts:before{content:\"\\f2d7\"}.ion-md-contract:before{content:\"\\f2d8\"}.ion-md-contrast:before{content:\"\\f2d9\"}.ion-md-copy:before{content:\"\\f2da\"}.ion-md-create:before{content:\"\\f2db\"}.ion-md-crop:before{content:\"\\f2dc\"}.ion-md-cube:before{content:\"\\f2dd\"}.ion-md-cut:before{content:\"\\f2de\"}.ion-md-desktop:before{content:\"\\f2df\"}.ion-md-disc:before{content:\"\\f2e0\"}.ion-md-document:before{content:\"\\f2e1\"}.ion-md-done-all:before{content:\"\\f2e2\"}.ion-md-download:before{content:\"\\f2e3\"}.ion-md-easel:before{content:\"\\f2e4\"}.ion-md-egg:before{content:\"\\f2e5\"}.ion-md-exit:before{content:\"\\f2e6\"}.ion-md-expand:before{content:\"\\f2e7\"}.ion-md-eye:before{content:\"\\f2e9\"}.ion-md-eye-off:before{content:\"\\f2e8\"}.ion-md-fastforward:before{content:\"\\f2ea\"}.ion-md-female:before{content:\"\\f2eb\"}.ion-md-filing:before{content:\"\\f2ec\"}.ion-md-film:before{content:\"\\f2ed\"}.ion-md-finger-print:before{content:\"\\f2ee\"}.ion-md-fitness:before{content:\"\\f1ac\"}.ion-md-flag:before{content:\"\\f2ef\"}.ion-md-flame:before{content:\"\\f2f0\"}.ion-md-flash:before{content:\"\\f2f1\"}.ion-md-flash-off:before{content:\"\\f169\"}.ion-md-flashlight:before{content:\"\\f16b\"}.ion-md-flask:before{content:\"\\f2f2\"}.ion-md-flower:before{content:\"\\f2f3\"}.ion-md-folder:before{content:\"\\f2f5\"}.ion-md-folder-open:before{content:\"\\f2f4\"}.ion-md-football:before{content:\"\\f2f6\"}.ion-md-funnel:before{content:\"\\f2f7\"}.ion-md-gift:before{content:\"\\f199\"}.ion-md-git-branch:before{content:\"\\f2fa\"}.ion-md-git-commit:before{content:\"\\f2fb\"}.ion-md-git-compare:before{content:\"\\f2fc\"}.ion-md-git-merge:before{content:\"\\f2fd\"}.ion-md-git-network:before{content:\"\\f2fe\"}.ion-md-git-pull-request:before{content:\"\\f2ff\"}.ion-md-glasses:before{content:\"\\f300\"}.ion-md-globe:before{content:\"\\f301\"}.ion-md-grid:before{content:\"\\f302\"}.ion-md-hammer:before{content:\"\\f303\"}.ion-md-hand:before{content:\"\\f304\"}.ion-md-happy:before{content:\"\\f305\"}.ion-md-headset:before{content:\"\\f306\"}.ion-md-heart:before{content:\"\\f308\"}.ion-md-heart-dislike:before{content:\"\\f167\"}.ion-md-heart-empty:before{content:\"\\f1a1\"}.ion-md-heart-half:before{content:\"\\f1a2\"}.ion-md-help:before{content:\"\\f30b\"}.ion-md-help-buoy:before{content:\"\\f309\"}.ion-md-help-circle:before{content:\"\\f30a\"}.ion-md-help-circle-outline:before{content:\"\\f16d\"}.ion-md-home:before{content:\"\\f30c\"}.ion-md-hourglass:before{content:\"\\f111\"}.ion-md-ice-cream:before{content:\"\\f30d\"}.ion-md-image:before{content:\"\\f30e\"}.ion-md-images:before{content:\"\\f30f\"}.ion-md-infinite:before{content:\"\\f310\"}.ion-md-information:before{content:\"\\f312\"}.ion-md-information-circle:before{content:\"\\f311\"}.ion-md-information-circle-outline:before{content:\"\\f16f\"}.ion-md-jet:before{content:\"\\f315\"}.ion-md-journal:before{content:\"\\f18d\"}.ion-md-key:before{content:\"\\f316\"}.ion-md-keypad:before{content:\"\\f317\"}.ion-md-laptop:before{content:\"\\f318\"}.ion-md-leaf:before{content:\"\\f319\"}.ion-md-link:before{content:\"\\f22e\"}.ion-md-list:before{content:\"\\f31b\"}.ion-md-list-box:before{content:\"\\f31a\"}.ion-md-locate:before{content:\"\\f31c\"}.ion-md-lock:before{content:\"\\f31d\"}.ion-md-log-in:before{content:\"\\f31e\"}.ion-md-log-out:before{content:\"\\f31f\"}.ion-md-magnet:before{content:\"\\f320\"}.ion-md-mail:before{content:\"\\f322\"}.ion-md-mail-open:before{content:\"\\f321\"}.ion-md-mail-unread:before{content:\"\\f172\"}.ion-md-male:before{content:\"\\f323\"}.ion-md-man:before{content:\"\\f324\"}.ion-md-map:before{content:\"\\f325\"}.ion-md-medal:before{content:\"\\f326\"}.ion-md-medical:before{content:\"\\f327\"}.ion-md-medkit:before{content:\"\\f328\"}.ion-md-megaphone:before{content:\"\\f329\"}.ion-md-menu:before{content:\"\\f32a\"}.ion-md-mic:before{content:\"\\f32c\"}.ion-md-mic-off:before{content:\"\\f32b\"}.ion-md-microphone:before{content:\"\\f32d\"}.ion-md-moon:before{content:\"\\f32e\"}.ion-md-more:before{content:\"\\f1c9\"}.ion-md-move:before{content:\"\\f331\"}.ion-md-musical-note:before{content:\"\\f332\"}.ion-md-musical-notes:before{content:\"\\f333\"}.ion-md-navigate:before{content:\"\\f334\"}.ion-md-notifications:before{content:\"\\f338\"}.ion-md-notifications-off:before{content:\"\\f336\"}.ion-md-notifications-outline:before{content:\"\\f337\"}.ion-md-nuclear:before{content:\"\\f339\"}.ion-md-nutrition:before{content:\"\\f33a\"}.ion-md-open:before{content:\"\\f33b\"}.ion-md-options:before{content:\"\\f33c\"}.ion-md-outlet:before{content:\"\\f33d\"}.ion-md-paper:before{content:\"\\f33f\"}.ion-md-paper-plane:before{content:\"\\f33e\"}.ion-md-partly-sunny:before{content:\"\\f340\"}.ion-md-pause:before{content:\"\\f341\"}.ion-md-paw:before{content:\"\\f342\"}.ion-md-people:before{content:\"\\f343\"}.ion-md-person:before{content:\"\\f345\"}.ion-md-person-add:before{content:\"\\f344\"}.ion-md-phone-landscape:before{content:\"\\f346\"}.ion-md-phone-portrait:before{content:\"\\f347\"}.ion-md-photos:before{content:\"\\f348\"}.ion-md-pie:before{content:\"\\f349\"}.ion-md-pin:before{content:\"\\f34a\"}.ion-md-pint:before{content:\"\\f34b\"}.ion-md-pizza:before{content:\"\\f354\"}.ion-md-planet:before{content:\"\\f356\"}.ion-md-play:before{content:\"\\f357\"}.ion-md-play-circle:before{content:\"\\f174\"}.ion-md-podium:before{content:\"\\f358\"}.ion-md-power:before{content:\"\\f359\"}.ion-md-pricetag:before{content:\"\\f35a\"}.ion-md-pricetags:before{content:\"\\f35b\"}.ion-md-print:before{content:\"\\f35c\"}.ion-md-pulse:before{content:\"\\f35d\"}.ion-md-qr-scanner:before{content:\"\\f35e\"}.ion-md-quote:before{content:\"\\f35f\"}.ion-md-radio:before{content:\"\\f362\"}.ion-md-radio-button-off:before{content:\"\\f360\"}.ion-md-radio-button-on:before{content:\"\\f361\"}.ion-md-rainy:before{content:\"\\f363\"}.ion-md-recording:before{content:\"\\f364\"}.ion-md-redo:before{content:\"\\f365\"}.ion-md-refresh:before{content:\"\\f366\"}.ion-md-refresh-circle:before{content:\"\\f228\"}.ion-md-remove:before{content:\"\\f368\"}.ion-md-remove-circle:before{content:\"\\f367\"}.ion-md-remove-circle-outline:before{content:\"\\f176\"}.ion-md-reorder:before{content:\"\\f369\"}.ion-md-repeat:before{content:\"\\f36a\"}.ion-md-resize:before{content:\"\\f36b\"}.ion-md-restaurant:before{content:\"\\f36c\"}.ion-md-return-left:before{content:\"\\f36d\"}.ion-md-return-right:before{content:\"\\f36e\"}.ion-md-reverse-camera:before{content:\"\\f36f\"}.ion-md-rewind:before{content:\"\\f370\"}.ion-md-ribbon:before{content:\"\\f371\"}.ion-md-rocket:before{content:\"\\f179\"}.ion-md-rose:before{content:\"\\f372\"}.ion-md-sad:before{content:\"\\f373\"}.ion-md-save:before{content:\"\\f1a9\"}.ion-md-school:before{content:\"\\f374\"}.ion-md-search:before{content:\"\\f375\"}.ion-md-send:before{content:\"\\f376\"}.ion-md-settings:before{content:\"\\f377\"}.ion-md-share:before{content:\"\\f379\"}.ion-md-share-alt:before{content:\"\\f378\"}.ion-md-shirt:before{content:\"\\f37a\"}.ion-md-shuffle:before{content:\"\\f37b\"}.ion-md-skip-backward:before{content:\"\\f37c\"}.ion-md-skip-forward:before{content:\"\\f37d\"}.ion-md-snow:before{content:\"\\f37e\"}.ion-md-speedometer:before{content:\"\\f37f\"}.ion-md-square:before{content:\"\\f381\"}.ion-md-square-outline:before{content:\"\\f380\"}.ion-md-star:before{content:\"\\f384\"}.ion-md-star-half:before{content:\"\\f382\"}.ion-md-star-outline:before{content:\"\\f383\"}.ion-md-stats:before{content:\"\\f385\"}.ion-md-stopwatch:before{content:\"\\f386\"}.ion-md-subway:before{content:\"\\f387\"}.ion-md-sunny:before{content:\"\\f388\"}.ion-md-swap:before{content:\"\\f389\"}.ion-md-switch:before{content:\"\\f38a\"}.ion-md-sync:before{content:\"\\f38b\"}.ion-md-tablet-landscape:before{content:\"\\f38c\"}.ion-md-tablet-portrait:before{content:\"\\f38d\"}.ion-md-tennisball:before{content:\"\\f38e\"}.ion-md-text:before{content:\"\\f38f\"}.ion-md-thermometer:before{content:\"\\f390\"}.ion-md-thumbs-down:before{content:\"\\f391\"}.ion-md-thumbs-up:before{content:\"\\f392\"}.ion-md-thunderstorm:before{content:\"\\f393\"}.ion-md-time:before{content:\"\\f394\"}.ion-md-timer:before{content:\"\\f395\"}.ion-md-today:before{content:\"\\f17d\"}.ion-md-train:before{content:\"\\f396\"}.ion-md-transgender:before{content:\"\\f397\"}.ion-md-trash:before{content:\"\\f398\"}.ion-md-trending-down:before{content:\"\\f399\"}.ion-md-trending-up:before{content:\"\\f39a\"}.ion-md-trophy:before{content:\"\\f39b\"}.ion-md-tv:before{content:\"\\f17f\"}.ion-md-umbrella:before{content:\"\\f39c\"}.ion-md-undo:before{content:\"\\f39d\"}.ion-md-unlock:before{content:\"\\f39e\"}.ion-md-videocam:before{content:\"\\f39f\"}.ion-md-volume-high:before{content:\"\\f123\"}.ion-md-volume-low:before{content:\"\\f131\"}.ion-md-volume-mute:before{content:\"\\f3a1\"}.ion-md-volume-off:before{content:\"\\f3a2\"}.ion-md-walk:before{content:\"\\f3a4\"}.ion-md-wallet:before{content:\"\\f18f\"}.ion-md-warning:before{content:\"\\f3a5\"}.ion-md-watch:before{content:\"\\f3a6\"}.ion-md-water:before{content:\"\\f3a7\"}.ion-md-wifi:before{content:\"\\f3a8\"}.ion-md-wine:before{content:\"\\f3a9\"}.ion-md-woman:before{content:\"\\f3aa\"}/*!\n * Bootstrap v4.5.0 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue: #007bff;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--red: #dc3545;--orange: #fd7e14;--yellow: #ffc107;--green: #28a745;--teal: #20c997;--cyan: #17a2b8;--white: #fff;--gray: #6c757d;--gray-dark: #343a40;--primary: #007bff;--secondary: #6c757d;--success: #28a745;--info: #17a2b8;--warning: #ffc107;--danger: #dc3545;--light: #f8f9fa;--dark: #343a40;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}*,*::before,*::after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0 !important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[title],abbr[data-original-title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]){color:inherit;text-decoration:none}a:not([href]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=\"button\"]{cursor:pointer}select{word-wrap:normal}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button:not(:disabled),[type=\"button\"]:not(:disabled),[type=\"reset\"]:not(:disabled),[type=\"submit\"]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{padding:0;border-style:none}input[type=\"radio\"],input[type=\"checkbox\"]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{outline-offset:-2px;-webkit-appearance:none}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none !important}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:2.5rem}h2,.h2{font-size:2rem}h3,.h3{font-size:1.75rem}h4,.h4{font-size:1.5rem}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,0.1)}small,.small{font-size:80%;font-weight:400}mark,.mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container{max-width:540px}}@media (min-width: 768px){.container{max-width:720px}}@media (min-width: 992px){.container{max-width:960px}}@media (min-width: 1200px){.container{max-width:1140px}}.container-fluid,.container-sm,.container-md,.container-lg,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 576px){.container,.container-sm{max-width:540px}}@media (min-width: 768px){.container,.container-sm,.container-md{max-width:720px}}@media (min-width: 992px){.container,.container-sm,.container-md,.container-lg{max-width:960px}}@media (min-width: 1200px){.container,.container-sm,.container-md,.container-lg,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=\"col-\"]{padding-right:0;padding-left:0}.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col,.col-auto,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm,.col-sm-auto,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md,.col-md-auto,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg,.col-lg-auto,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.33333%;max-width:8.33333%}.col-2{flex:0 0 16.66667%;max-width:16.66667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.33333%;max-width:33.33333%}.col-5{flex:0 0 41.66667%;max-width:41.66667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.33333%;max-width:58.33333%}.col-8{flex:0 0 66.66667%;max-width:66.66667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.33333%;max-width:83.33333%}.col-11{flex:0 0 91.66667%;max-width:91.66667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}@media (min-width: 576px){.col-sm{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.33333%;max-width:8.33333%}.col-sm-2{flex:0 0 16.66667%;max-width:16.66667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.33333%;max-width:33.33333%}.col-sm-5{flex:0 0 41.66667%;max-width:41.66667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.33333%;max-width:58.33333%}.col-sm-8{flex:0 0 66.66667%;max-width:66.66667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.33333%;max-width:83.33333%}.col-sm-11{flex:0 0 91.66667%;max-width:91.66667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}}@media (min-width: 768px){.col-md{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.33333%;max-width:8.33333%}.col-md-2{flex:0 0 16.66667%;max-width:16.66667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.33333%;max-width:33.33333%}.col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.33333%;max-width:58.33333%}.col-md-8{flex:0 0 66.66667%;max-width:66.66667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.33333%;max-width:83.33333%}.col-md-11{flex:0 0 91.66667%;max-width:91.66667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}}@media (min-width: 992px){.col-lg{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.33333%;max-width:8.33333%}.col-lg-2{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.33333%;max-width:33.33333%}.col-lg-5{flex:0 0 41.66667%;max-width:41.66667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.33333%;max-width:58.33333%}.col-lg-8{flex:0 0 66.66667%;max-width:66.66667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.33333%;max-width:83.33333%}.col-lg-11{flex:0 0 91.66667%;max-width:91.66667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}}@media (min-width: 1200px){.col-xl{flex-basis:0;flex-grow:1;min-width:0;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.33333%;max-width:33.33333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.66667%;max-width:16.66667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.33333%;max-width:8.33333%}.col-xl-2{flex:0 0 16.66667%;max-width:16.66667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.33333%;max-width:33.33333%}.col-xl-5{flex:0 0 41.66667%;max-width:41.66667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.33333%;max-width:58.33333%}.col-xl-8{flex:0 0 66.66667%;max-width:66.66667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.33333%;max-width:83.33333%}.col-xl-11{flex:0 0 91.66667%;max-width:91.66667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table th,.table td{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm th,.table-sm td{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered th,.table-bordered td{border:1px solid #dee2e6}.table-bordered thead th,.table-bordered thead td{border-bottom-width:2px}.table-borderless th,.table-borderless td,.table-borderless thead th,.table-borderless tbody+tbody{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,0.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,0.075)}.table-primary,.table-primary>th,.table-primary>td{background-color:#b8daff}.table-primary th,.table-primary td,.table-primary thead th,.table-primary tbody+tbody{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>th,.table-secondary>td{background-color:#d6d8db}.table-secondary th,.table-secondary td,.table-secondary thead th,.table-secondary tbody+tbody{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>th,.table-success>td{background-color:#c3e6cb}.table-success th,.table-success td,.table-success thead th,.table-success tbody+tbody{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>th,.table-info>td{background-color:#bee5eb}.table-info th,.table-info td,.table-info thead th,.table-info tbody+tbody{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>th,.table-warning>td{background-color:#ffeeba}.table-warning th,.table-warning td,.table-warning thead th,.table-warning tbody+tbody{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>th,.table-danger>td{background-color:#f5c6cb}.table-danger th,.table-danger td,.table-danger thead th,.table-danger tbody+tbody{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>th,.table-light>td{background-color:#fdfdfe}.table-light th,.table-light td,.table-light thead th,.table-light tbody+tbody{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>th,.table-dark>td{background-color:#c6c8ca}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>th,.table-active>td{background-color:rgba(0,0,0,0.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,0.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,0.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark th,.table-dark td,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,0.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,0.075)}@media (max-width: 575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width: 767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width: 991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width: 1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=\"date\"].form-control,input[type=\"time\"].form-control,input[type=\"datetime-local\"].form-control,input[type=\"month\"].form-control{appearance:none}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[size],select.form-control[multiple]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=\"col-\"]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input[disabled] ~ .form-check-label,.form-check-input:disabled ~ .form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,0.9);border-radius:.25rem}.was-validated :valid ~ .valid-feedback,.was-validated :valid ~ .valid-tooltip,.is-valid ~ .valid-feedback,.is-valid ~ .valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .custom-select:valid,.custom-select.is-valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .custom-select:valid:focus,.custom-select.is-valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.was-validated .form-check-input:valid ~ .form-check-label,.form-check-input.is-valid ~ .form-check-label{color:#28a745}.was-validated .form-check-input:valid ~ .valid-feedback,.was-validated .form-check-input:valid ~ .valid-tooltip,.form-check-input.is-valid ~ .valid-feedback,.form-check-input.is-valid ~ .valid-tooltip{display:block}.was-validated .custom-control-input:valid ~ .custom-control-label,.custom-control-input.is-valid ~ .custom-control-label{color:#28a745}.was-validated .custom-control-input:valid ~ .custom-control-label::before,.custom-control-input.is-valid ~ .custom-control-label::before{border-color:#28a745}.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before,.custom-control-input.is-valid:checked ~ .custom-control-label::before{border-color:#34ce57;background-color:#34ce57}.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before,.custom-control-input.is-valid:focus ~ .custom-control-label::before{box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before,.custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before{border-color:#28a745}.was-validated .custom-file-input:valid ~ .custom-file-label,.custom-file-input.is-valid ~ .custom-file-label{border-color:#28a745}.was-validated .custom-file-input:valid:focus ~ .custom-file-label,.custom-file-input.is-valid:focus ~ .custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,0.9);border-radius:.25rem}.was-validated :invalid ~ .invalid-feedback,.was-validated :invalid ~ .invalid-tooltip,.is-invalid ~ .invalid-feedback,.is-invalid ~ .invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .custom-select:invalid,.custom-select.is-invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .custom-select:invalid:focus,.custom-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.was-validated .form-check-input:invalid ~ .form-check-label,.form-check-input.is-invalid ~ .form-check-label{color:#dc3545}.was-validated .form-check-input:invalid ~ .invalid-feedback,.was-validated .form-check-input:invalid ~ .invalid-tooltip,.form-check-input.is-invalid ~ .invalid-feedback,.form-check-input.is-invalid ~ .invalid-tooltip{display:block}.was-validated .custom-control-input:invalid ~ .custom-control-label,.custom-control-input.is-invalid ~ .custom-control-label{color:#dc3545}.was-validated .custom-control-input:invalid ~ .custom-control-label::before,.custom-control-input.is-invalid ~ .custom-control-label::before{border-color:#dc3545}.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before,.custom-control-input.is-invalid:checked ~ .custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before,.custom-control-input.is-invalid:focus ~ .custom-control-label::before{box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before,.custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before{border-color:#dc3545}.was-validated .custom-file-input:invalid ~ .custom-file-label,.custom-file-input.is-invalid ~ .custom-file-label{border-color:#dc3545}.was-validated .custom-file-input:invalid:focus ~ .custom-file-label,.custom-file-input.is-invalid:focus ~ .custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width: 576px){.form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group,.form-inline .custom-select{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn:focus,.btn.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:#0069d9;border-color:#0062cc;box-shadow:0 0 0 .2rem rgba(38,143,255,0.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,0.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary:focus,.btn-secondary.focus{color:#fff;background-color:#5a6268;border-color:#545b62;box-shadow:0 0 0 .2rem rgba(130,138,145,0.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled):active:focus,.btn-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,0.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success:focus,.btn-success.focus{color:#fff;background-color:#218838;border-color:#1e7e34;box-shadow:0 0 0 .2rem rgba(72,180,97,0.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled):active,.btn-success:not(:disabled):not(.disabled).active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled):active:focus,.btn-success:not(:disabled):not(.disabled).active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,0.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info:focus,.btn-info.focus{color:#fff;background-color:#138496;border-color:#117a8b;box-shadow:0 0 0 .2rem rgba(58,176,195,0.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled):active,.btn-info:not(:disabled):not(.disabled).active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled):active:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,0.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning:focus,.btn-warning.focus{color:#212529;background-color:#e0a800;border-color:#d39e00;box-shadow:0 0 0 .2rem rgba(222,170,12,0.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled):active,.btn-warning:not(:disabled):not(.disabled).active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled):active:focus,.btn-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,0.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger:focus,.btn-danger.focus{color:#fff;background-color:#c82333;border-color:#bd2130;box-shadow:0 0 0 .2rem rgba(225,83,97,0.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled):active,.btn-danger:not(:disabled):not(.disabled).active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled):active:focus,.btn-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,0.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light:focus,.btn-light.focus{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;box-shadow:0 0 0 .2rem rgba(216,217,219,0.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled):active,.btn-light:not(:disabled):not(.disabled).active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled):active:focus,.btn-light:not(:disabled):not(.disabled).active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,0.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark:focus,.btn-dark.focus{color:#fff;background-color:#23272b;border-color:#1d2124;box-shadow:0 0 0 .2rem rgba(82,88,93,0.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled):active,.btn-dark:not(:disabled):not(.disabled).active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled):active:focus,.btn-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,0.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:focus,.btn-outline-primary.focus{box-shadow:0 0 0 .2rem rgba(0,123,255,0.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,0.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:focus,.btn-outline-secondary.focus{box-shadow:0 0 0 .2rem rgba(108,117,125,0.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,0.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:focus,.btn-outline-success.focus{box-shadow:0 0 0 .2rem rgba(40,167,69,0.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled):active,.btn-outline-success:not(:disabled):not(.disabled).active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled):active:focus,.btn-outline-success:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,0.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:focus,.btn-outline-info.focus{box-shadow:0 0 0 .2rem rgba(23,162,184,0.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled):active,.btn-outline-info:not(:disabled):not(.disabled).active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled):active:focus,.btn-outline-info:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,0.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:focus,.btn-outline-warning.focus{box-shadow:0 0 0 .2rem rgba(255,193,7,0.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled):active,.btn-outline-warning:not(:disabled):not(.disabled).active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,0.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:focus,.btn-outline-danger.focus{box-shadow:0 0 0 .2rem rgba(220,53,69,0.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled):active,.btn-outline-danger:not(:disabled):not(.disabled).active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,0.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:focus,.btn-outline-light.focus{box-shadow:0 0 0 .2rem rgba(248,249,250,0.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled):active,.btn-outline-light:not(:disabled):not(.disabled).active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled):active:focus,.btn-outline-light:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,0.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:focus,.btn-outline-dark.focus{box-shadow:0 0 0 .2rem rgba(52,58,64,0.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled):active,.btn-outline-dark:not(:disabled):not(.disabled).active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,0.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link:focus,.btn-link.focus{text-decoration:underline}.btn-link:disabled,.btn-link.disabled{color:#6c757d;pointer-events:none}.btn-lg,.btn-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-sm,.btn-group-sm>.btn{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.fade{transition:opacity 0.15s linear}@media (prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height 0.35s ease}@media (prefers-reduced-motion: reduce){.collapsing{transition:none}}.dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=\"top\"],.dropdown-menu[x-placement^=\"right\"],.dropdown-menu[x-placement^=\"bottom\"],.dropdown-menu[x-placement^=\"left\"]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover{z-index:1}.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=\"radio\"],.btn-group-toggle>.btn input[type=\"checkbox\"],.btn-group-toggle>.btn-group>.btn input[type=\"radio\"],.btn-group-toggle>.btn-group>.btn input[type=\"checkbox\"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-control-plaintext,.input-group>.custom-select,.input-group>.custom-file{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.form-control+.form-control,.input-group>.form-control+.custom-select,.input-group>.form-control+.custom-file,.input-group>.form-control-plaintext+.form-control,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.custom-file,.input-group>.custom-select+.form-control,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.custom-file,.input-group>.custom-file+.form-control,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.custom-file{margin-left:-1px}.input-group>.form-control:focus,.input-group>.custom-select:focus,.input-group>.custom-file .custom-file-input:focus ~ .custom-file-label{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.form-control:not(:last-child),.input-group>.custom-select:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.form-control:not(:first-child),.input-group>.custom-select:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-prepend,.input-group-append{display:flex}.input-group-prepend .btn,.input-group-append .btn{position:relative;z-index:2}.input-group-prepend .btn:focus,.input-group-append .btn:focus{z-index:3}.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.input-group-text,.input-group-append .input-group-text+.btn{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=\"radio\"],.input-group-text input[type=\"checkbox\"]{margin-top:0}.input-group-lg>.form-control:not(textarea),.input-group-lg>.custom-select{height:calc(1.5em + 1rem + 2px)}.input-group-lg>.form-control,.input-group-lg>.custom-select,.input-group-lg>.input-group-prepend>.input-group-text,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-append>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.form-control:not(textarea),.input-group-sm>.custom-select{height:calc(1.5em + .5rem + 2px)}.input-group-sm>.form-control,.input-group-sm>.custom-select,.input-group-sm>.input-group-prepend>.input-group-text,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-append>.btn{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text,.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked ~ .custom-control-label::before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus ~ .custom-control-label::before{box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.custom-control-input:focus:not(:checked) ~ .custom-control-label::before{border-color:#80bdff}.custom-control-input:not(:disabled):active ~ .custom-control-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input[disabled] ~ .custom-control-label,.custom-control-input:disabled ~ .custom-control-label{color:#6c757d}.custom-control-input[disabled] ~ .custom-control-label::before,.custom-control-input:disabled ~ .custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50% / 50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked ~ .custom-control-label::after{background-color:#fff;transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px;border:1px solid #ced4da;border-radius:.25rem;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + .75rem + 2px);margin:0;opacity:0}.custom-file-input:focus ~ .custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.custom-file-input[disabled] ~ .custom-file-label,.custom-file-input:disabled ~ .custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en) ~ .custom-file-label::after{content:\"Browse\"}.custom-file-input ~ .custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;appearance:none}.custom-range:focus{outline:none}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,0.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,0.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,0.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-webkit-slider-thumb{transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-moz-range-thumb{transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-ms-thumb{transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:hover,.nav-link:focus{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.navbar .container,.navbar .container-fluid,.navbar .container-sm,.navbar .container-md,.navbar .container-lg,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:hover,.navbar-toggler:focus{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width: 575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width: 767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-md,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width: 991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width: 1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width: 1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-sm,.navbar-expand>.container-md,.navbar-expand>.container-lg,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,0.9)}.navbar-light .navbar-brand:hover,.navbar-light .navbar-brand:focus{color:rgba(0,0,0,0.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,0.5)}.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link:focus{color:rgba(0,0,0,0.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,0.3)}.navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .nav-link.active{color:rgba(0,0,0,0.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,0.5);border-color:rgba(0,0,0,0.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280,0,0,0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,0.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,0.9)}.navbar-light .navbar-text a:hover,.navbar-light .navbar-text a:focus{color:rgba(0,0,0,0.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-brand:focus{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,0.5)}.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus{color:rgba(255,255,255,0.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,0.25)}.navbar-dark .navbar-nav .show>.nav-link,.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .nav-link.active{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,0.5);border-color:rgba(255,255,255,0.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255,255,255,0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,0.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:hover,.navbar-dark .navbar-text a:focus{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,0.03);border-top:1px solid rgba(0,0,0,0.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img,.card-img-top,.card-img-bottom{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width: 576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width: 576px){.card-columns{column-count:3;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item{display:flex}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.badge{transition:none}}a.badge:hover,a.badge:focus{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:hover,a.badge-primary:focus{color:#fff;background-color:#0062cc}a.badge-primary:focus,a.badge-primary.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,0.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:hover,a.badge-secondary:focus{color:#fff;background-color:#545b62}a.badge-secondary:focus,a.badge-secondary.focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,0.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:hover,a.badge-success:focus{color:#fff;background-color:#1e7e34}a.badge-success:focus,a.badge-success.focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,0.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:hover,a.badge-info:focus{color:#fff;background-color:#117a8b}a.badge-info:focus,a.badge-info.focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,0.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:hover,a.badge-warning:focus{color:#212529;background-color:#d39e00}a.badge-warning:focus,a.badge-warning.focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,0.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:hover,a.badge-danger:focus{color:#fff;background-color:#bd2130}a.badge-danger:focus,a.badge-danger.focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,0.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:hover,a.badge-light:focus{color:#212529;background-color:#dae0e5}a.badge-light:focus,a.badge-light.focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,0.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:hover,a.badge-dark:focus{color:#fff;background-color:#1d2124}a.badge-dark:focus,a.badge-dark.focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,0.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width: 576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;line-height:0;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width 0.6s ease}@media (prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,0.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):hover,.close:not(:disabled):not(.disabled):focus{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:.875rem;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border:1px solid rgba(0,0,0,0.1);box-shadow:0 0.25rem 0.75rem rgba(0,0,0,0.1);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,0.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform 0.3s ease-out;transform:translate(0, -50px)}@media (prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-header,.modal-dialog-scrollable .modal-footer{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem);height:min-content}.modal-sm{max-width:300px}}@media (min-width: 992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width: 1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-top,.bs-tooltip-auto[x-placement^=\"top\"]{padding:.4rem 0}.bs-tooltip-top .arrow,.bs-tooltip-auto[x-placement^=\"top\"] .arrow{bottom:0}.bs-tooltip-top .arrow::before,.bs-tooltip-auto[x-placement^=\"top\"] .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-right,.bs-tooltip-auto[x-placement^=\"right\"]{padding:0 .4rem}.bs-tooltip-right .arrow,.bs-tooltip-auto[x-placement^=\"right\"] .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-right .arrow::before,.bs-tooltip-auto[x-placement^=\"right\"] .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-bottom,.bs-tooltip-auto[x-placement^=\"bottom\"]{padding:.4rem 0}.bs-tooltip-bottom .arrow,.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow{top:0}.bs-tooltip-bottom .arrow::before,.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-left,.bs-tooltip-auto[x-placement^=\"left\"]{padding:0 .4rem}.bs-tooltip-left .arrow,.bs-tooltip-auto[x-placement^=\"left\"] .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-left .arrow::before,.bs-tooltip-auto[x-placement^=\"left\"] .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::before,.popover .arrow::after{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-top,.bs-popover-auto[x-placement^=\"top\"]{margin-bottom:.5rem}.bs-popover-top>.arrow,.bs-popover-auto[x-placement^=\"top\"]>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-top>.arrow::before,.bs-popover-auto[x-placement^=\"top\"]>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,0.25)}.bs-popover-top>.arrow::after,.bs-popover-auto[x-placement^=\"top\"]>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-right,.bs-popover-auto[x-placement^=\"right\"]{margin-left:.5rem}.bs-popover-right>.arrow,.bs-popover-auto[x-placement^=\"right\"]>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-right>.arrow::before,.bs-popover-auto[x-placement^=\"right\"]>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,0.25)}.bs-popover-right>.arrow::after,.bs-popover-auto[x-placement^=\"right\"]>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-bottom,.bs-popover-auto[x-placement^=\"bottom\"]{margin-top:.5rem}.bs-popover-bottom>.arrow,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow{top:calc(-.5rem - 1px)}.bs-popover-bottom>.arrow::before,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,0.25)}.bs-popover-bottom>.arrow::after,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-bottom .popover-header::before,.bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-left,.bs-popover-auto[x-placement^=\"left\"]{margin-right:.5rem}.bs-popover-left>.arrow,.bs-popover-auto[x-placement^=\"left\"]>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-left>.arrow::before,.bs-popover-auto[x-placement^=\"left\"]>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,0.25)}.bs-popover-left>.arrow::after,.bs-popover-auto[x-placement^=\"left\"]>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-left),.active.carousel-item-right{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-right),.active.carousel-item-left{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity 0.15s ease}@media (prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50% / 100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity 0.6s ease}@media (prefers-reduced-motion: reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.bg-primary{background-color:#007bff !important}a.bg-primary:hover,a.bg-primary:focus,button.bg-primary:hover,button.bg-primary:focus{background-color:#0062cc !important}.bg-secondary{background-color:#6c757d !important}a.bg-secondary:hover,a.bg-secondary:focus,button.bg-secondary:hover,button.bg-secondary:focus{background-color:#545b62 !important}.bg-success{background-color:#28a745 !important}a.bg-success:hover,a.bg-success:focus,button.bg-success:hover,button.bg-success:focus{background-color:#1e7e34 !important}.bg-info{background-color:#17a2b8 !important}a.bg-info:hover,a.bg-info:focus,button.bg-info:hover,button.bg-info:focus{background-color:#117a8b !important}.bg-warning{background-color:#ffc107 !important}a.bg-warning:hover,a.bg-warning:focus,button.bg-warning:hover,button.bg-warning:focus{background-color:#d39e00 !important}.bg-danger{background-color:#dc3545 !important}a.bg-danger:hover,a.bg-danger:focus,button.bg-danger:hover,button.bg-danger:focus{background-color:#bd2130 !important}.bg-light{background-color:#f8f9fa !important}a.bg-light:hover,a.bg-light:focus,button.bg-light:hover,button.bg-light:focus{background-color:#dae0e5 !important}.bg-dark{background-color:#343a40 !important}a.bg-dark:hover,a.bg-dark:focus,button.bg-dark:hover,button.bg-dark:focus{background-color:#1d2124 !important}.bg-white{background-color:#fff !important}.bg-transparent{background-color:transparent !important}.border{border:1px solid #dee2e6 !important}.border-top{border-top:1px solid #dee2e6 !important}.border-right{border-right:1px solid #dee2e6 !important}.border-bottom{border-bottom:1px solid #dee2e6 !important}.border-left{border-left:1px solid #dee2e6 !important}.border-0{border:0 !important}.border-top-0{border-top:0 !important}.border-right-0{border-right:0 !important}.border-bottom-0{border-bottom:0 !important}.border-left-0{border-left:0 !important}.border-primary{border-color:#007bff !important}.border-secondary{border-color:#6c757d !important}.border-success{border-color:#28a745 !important}.border-info{border-color:#17a2b8 !important}.border-warning{border-color:#ffc107 !important}.border-danger{border-color:#dc3545 !important}.border-light{border-color:#f8f9fa !important}.border-dark{border-color:#343a40 !important}.border-white{border-color:#fff !important}.rounded-sm{border-radius:.2rem !important}.rounded{border-radius:.25rem !important}.rounded-top{border-top-left-radius:.25rem !important;border-top-right-radius:.25rem !important}.rounded-right{border-top-right-radius:.25rem !important;border-bottom-right-radius:.25rem !important}.rounded-bottom{border-bottom-right-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-left{border-top-left-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-lg{border-radius:.3rem !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:50rem !important}.rounded-0{border-radius:0 !important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}@media (min-width: 576px){.d-sm-none{display:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}}@media (min-width: 768px){.d-md-none{display:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}}@media (min-width: 992px){.d-lg-none{display:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}}@media (min-width: 1200px){.d-xl-none{display:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}}@media print{.d-print-none{display:none !important}.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.85714%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-fill{flex:1 1 auto !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}@media (min-width: 576px){.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}}@media (min-width: 768px){.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}}@media (min-width: 992px){.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}}@media (min-width: 1200px){.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}}.float-left{float:left !important}.float-right{float:right !important}.float-none{float:none !important}@media (min-width: 576px){.float-sm-left{float:left !important}.float-sm-right{float:right !important}.float-sm-none{float:none !important}}@media (min-width: 768px){.float-md-left{float:left !important}.float-md-right{float:right !important}.float-md-none{float:none !important}}@media (min-width: 992px){.float-lg-left{float:left !important}.float-lg-right{float:right !important}.float-lg-none{float:none !important}}@media (min-width: 1200px){.float-xl-left{float:left !important}.float-xl-right{float:right !important}.float-xl-none{float:none !important}}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports (position: sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important}.shadow{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important}.shadow-none{box-shadow:none !important}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mw-100{max-width:100% !important}.mh-100{max-height:100% !important}.min-vw-100{min-width:100vw !important}.min-vh-100{min-height:100vh !important}.vw-100{width:100vw !important}.vh-100{height:100vh !important}.m-0{margin:0 !important}.mt-0,.my-0{margin-top:0 !important}.mr-0,.mx-0{margin-right:0 !important}.mb-0,.my-0{margin-bottom:0 !important}.ml-0,.mx-0{margin-left:0 !important}.m-1{margin:.25rem !important}.mt-1,.my-1{margin-top:.25rem !important}.mr-1,.mx-1{margin-right:.25rem !important}.mb-1,.my-1{margin-bottom:.25rem !important}.ml-1,.mx-1{margin-left:.25rem !important}.m-2{margin:.5rem !important}.mt-2,.my-2{margin-top:.5rem !important}.mr-2,.mx-2{margin-right:.5rem !important}.mb-2,.my-2{margin-bottom:.5rem !important}.ml-2,.mx-2{margin-left:.5rem !important}.m-3{margin:1rem !important}.mt-3,.my-3{margin-top:1rem !important}.mr-3,.mx-3{margin-right:1rem !important}.mb-3,.my-3{margin-bottom:1rem !important}.ml-3,.mx-3{margin-left:1rem !important}.m-4{margin:1.5rem !important}.mt-4,.my-4{margin-top:1.5rem !important}.mr-4,.mx-4{margin-right:1.5rem !important}.mb-4,.my-4{margin-bottom:1.5rem !important}.ml-4,.mx-4{margin-left:1.5rem !important}.m-5{margin:3rem !important}.mt-5,.my-5{margin-top:3rem !important}.mr-5,.mx-5{margin-right:3rem !important}.mb-5,.my-5{margin-bottom:3rem !important}.ml-5,.mx-5{margin-left:3rem !important}.p-0{padding:0 !important}.pt-0,.py-0{padding-top:0 !important}.pr-0,.px-0{padding-right:0 !important}.pb-0,.py-0{padding-bottom:0 !important}.pl-0,.px-0{padding-left:0 !important}.p-1{padding:.25rem !important}.pt-1,.py-1{padding-top:.25rem !important}.pr-1,.px-1{padding-right:.25rem !important}.pb-1,.py-1{padding-bottom:.25rem !important}.pl-1,.px-1{padding-left:.25rem !important}.p-2{padding:.5rem !important}.pt-2,.py-2{padding-top:.5rem !important}.pr-2,.px-2{padding-right:.5rem !important}.pb-2,.py-2{padding-bottom:.5rem !important}.pl-2,.px-2{padding-left:.5rem !important}.p-3{padding:1rem !important}.pt-3,.py-3{padding-top:1rem !important}.pr-3,.px-3{padding-right:1rem !important}.pb-3,.py-3{padding-bottom:1rem !important}.pl-3,.px-3{padding-left:1rem !important}.p-4{padding:1.5rem !important}.pt-4,.py-4{padding-top:1.5rem !important}.pr-4,.px-4{padding-right:1.5rem !important}.pb-4,.py-4{padding-bottom:1.5rem !important}.pl-4,.px-4{padding-left:1.5rem !important}.p-5{padding:3rem !important}.pt-5,.py-5{padding-top:3rem !important}.pr-5,.px-5{padding-right:3rem !important}.pb-5,.py-5{padding-bottom:3rem !important}.pl-5,.px-5{padding-left:3rem !important}.m-n1{margin:-.25rem !important}.mt-n1,.my-n1{margin-top:-.25rem !important}.mr-n1,.mx-n1{margin-right:-.25rem !important}.mb-n1,.my-n1{margin-bottom:-.25rem !important}.ml-n1,.mx-n1{margin-left:-.25rem !important}.m-n2{margin:-.5rem !important}.mt-n2,.my-n2{margin-top:-.5rem !important}.mr-n2,.mx-n2{margin-right:-.5rem !important}.mb-n2,.my-n2{margin-bottom:-.5rem !important}.ml-n2,.mx-n2{margin-left:-.5rem !important}.m-n3{margin:-1rem !important}.mt-n3,.my-n3{margin-top:-1rem !important}.mr-n3,.mx-n3{margin-right:-1rem !important}.mb-n3,.my-n3{margin-bottom:-1rem !important}.ml-n3,.mx-n3{margin-left:-1rem !important}.m-n4{margin:-1.5rem !important}.mt-n4,.my-n4{margin-top:-1.5rem !important}.mr-n4,.mx-n4{margin-right:-1.5rem !important}.mb-n4,.my-n4{margin-bottom:-1.5rem !important}.ml-n4,.mx-n4{margin-left:-1.5rem !important}.m-n5{margin:-3rem !important}.mt-n5,.my-n5{margin-top:-3rem !important}.mr-n5,.mx-n5{margin-right:-3rem !important}.mb-n5,.my-n5{margin-bottom:-3rem !important}.ml-n5,.mx-n5{margin-left:-3rem !important}.m-auto{margin:auto !important}.mt-auto,.my-auto{margin-top:auto !important}.mr-auto,.mx-auto{margin-right:auto !important}.mb-auto,.my-auto{margin-bottom:auto !important}.ml-auto,.mx-auto{margin-left:auto !important}@media (min-width: 576px){.m-sm-0{margin:0 !important}.mt-sm-0,.my-sm-0{margin-top:0 !important}.mr-sm-0,.mx-sm-0{margin-right:0 !important}.mb-sm-0,.my-sm-0{margin-bottom:0 !important}.ml-sm-0,.mx-sm-0{margin-left:0 !important}.m-sm-1{margin:.25rem !important}.mt-sm-1,.my-sm-1{margin-top:.25rem !important}.mr-sm-1,.mx-sm-1{margin-right:.25rem !important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem !important}.ml-sm-1,.mx-sm-1{margin-left:.25rem !important}.m-sm-2{margin:.5rem !important}.mt-sm-2,.my-sm-2{margin-top:.5rem !important}.mr-sm-2,.mx-sm-2{margin-right:.5rem !important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem !important}.ml-sm-2,.mx-sm-2{margin-left:.5rem !important}.m-sm-3{margin:1rem !important}.mt-sm-3,.my-sm-3{margin-top:1rem !important}.mr-sm-3,.mx-sm-3{margin-right:1rem !important}.mb-sm-3,.my-sm-3{margin-bottom:1rem !important}.ml-sm-3,.mx-sm-3{margin-left:1rem !important}.m-sm-4{margin:1.5rem !important}.mt-sm-4,.my-sm-4{margin-top:1.5rem !important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem !important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem !important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem !important}.m-sm-5{margin:3rem !important}.mt-sm-5,.my-sm-5{margin-top:3rem !important}.mr-sm-5,.mx-sm-5{margin-right:3rem !important}.mb-sm-5,.my-sm-5{margin-bottom:3rem !important}.ml-sm-5,.mx-sm-5{margin-left:3rem !important}.p-sm-0{padding:0 !important}.pt-sm-0,.py-sm-0{padding-top:0 !important}.pr-sm-0,.px-sm-0{padding-right:0 !important}.pb-sm-0,.py-sm-0{padding-bottom:0 !important}.pl-sm-0,.px-sm-0{padding-left:0 !important}.p-sm-1{padding:.25rem !important}.pt-sm-1,.py-sm-1{padding-top:.25rem !important}.pr-sm-1,.px-sm-1{padding-right:.25rem !important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem !important}.pl-sm-1,.px-sm-1{padding-left:.25rem !important}.p-sm-2{padding:.5rem !important}.pt-sm-2,.py-sm-2{padding-top:.5rem !important}.pr-sm-2,.px-sm-2{padding-right:.5rem !important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem !important}.pl-sm-2,.px-sm-2{padding-left:.5rem !important}.p-sm-3{padding:1rem !important}.pt-sm-3,.py-sm-3{padding-top:1rem !important}.pr-sm-3,.px-sm-3{padding-right:1rem !important}.pb-sm-3,.py-sm-3{padding-bottom:1rem !important}.pl-sm-3,.px-sm-3{padding-left:1rem !important}.p-sm-4{padding:1.5rem !important}.pt-sm-4,.py-sm-4{padding-top:1.5rem !important}.pr-sm-4,.px-sm-4{padding-right:1.5rem !important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem !important}.pl-sm-4,.px-sm-4{padding-left:1.5rem !important}.p-sm-5{padding:3rem !important}.pt-sm-5,.py-sm-5{padding-top:3rem !important}.pr-sm-5,.px-sm-5{padding-right:3rem !important}.pb-sm-5,.py-sm-5{padding-bottom:3rem !important}.pl-sm-5,.px-sm-5{padding-left:3rem !important}.m-sm-n1{margin:-.25rem !important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem !important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem !important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem !important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem !important}.m-sm-n2{margin:-.5rem !important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem !important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem !important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem !important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem !important}.m-sm-n3{margin:-1rem !important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem !important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem !important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem !important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem !important}.m-sm-n4{margin:-1.5rem !important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem !important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem !important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem !important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem !important}.m-sm-n5{margin:-3rem !important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem !important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem !important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem !important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem !important}.m-sm-auto{margin:auto !important}.mt-sm-auto,.my-sm-auto{margin-top:auto !important}.mr-sm-auto,.mx-sm-auto{margin-right:auto !important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto !important}.ml-sm-auto,.mx-sm-auto{margin-left:auto !important}}@media (min-width: 768px){.m-md-0{margin:0 !important}.mt-md-0,.my-md-0{margin-top:0 !important}.mr-md-0,.mx-md-0{margin-right:0 !important}.mb-md-0,.my-md-0{margin-bottom:0 !important}.ml-md-0,.mx-md-0{margin-left:0 !important}.m-md-1{margin:.25rem !important}.mt-md-1,.my-md-1{margin-top:.25rem !important}.mr-md-1,.mx-md-1{margin-right:.25rem !important}.mb-md-1,.my-md-1{margin-bottom:.25rem !important}.ml-md-1,.mx-md-1{margin-left:.25rem !important}.m-md-2{margin:.5rem !important}.mt-md-2,.my-md-2{margin-top:.5rem !important}.mr-md-2,.mx-md-2{margin-right:.5rem !important}.mb-md-2,.my-md-2{margin-bottom:.5rem !important}.ml-md-2,.mx-md-2{margin-left:.5rem !important}.m-md-3{margin:1rem !important}.mt-md-3,.my-md-3{margin-top:1rem !important}.mr-md-3,.mx-md-3{margin-right:1rem !important}.mb-md-3,.my-md-3{margin-bottom:1rem !important}.ml-md-3,.mx-md-3{margin-left:1rem !important}.m-md-4{margin:1.5rem !important}.mt-md-4,.my-md-4{margin-top:1.5rem !important}.mr-md-4,.mx-md-4{margin-right:1.5rem !important}.mb-md-4,.my-md-4{margin-bottom:1.5rem !important}.ml-md-4,.mx-md-4{margin-left:1.5rem !important}.m-md-5{margin:3rem !important}.mt-md-5,.my-md-5{margin-top:3rem !important}.mr-md-5,.mx-md-5{margin-right:3rem !important}.mb-md-5,.my-md-5{margin-bottom:3rem !important}.ml-md-5,.mx-md-5{margin-left:3rem !important}.p-md-0{padding:0 !important}.pt-md-0,.py-md-0{padding-top:0 !important}.pr-md-0,.px-md-0{padding-right:0 !important}.pb-md-0,.py-md-0{padding-bottom:0 !important}.pl-md-0,.px-md-0{padding-left:0 !important}.p-md-1{padding:.25rem !important}.pt-md-1,.py-md-1{padding-top:.25rem !important}.pr-md-1,.px-md-1{padding-right:.25rem !important}.pb-md-1,.py-md-1{padding-bottom:.25rem !important}.pl-md-1,.px-md-1{padding-left:.25rem !important}.p-md-2{padding:.5rem !important}.pt-md-2,.py-md-2{padding-top:.5rem !important}.pr-md-2,.px-md-2{padding-right:.5rem !important}.pb-md-2,.py-md-2{padding-bottom:.5rem !important}.pl-md-2,.px-md-2{padding-left:.5rem !important}.p-md-3{padding:1rem !important}.pt-md-3,.py-md-3{padding-top:1rem !important}.pr-md-3,.px-md-3{padding-right:1rem !important}.pb-md-3,.py-md-3{padding-bottom:1rem !important}.pl-md-3,.px-md-3{padding-left:1rem !important}.p-md-4{padding:1.5rem !important}.pt-md-4,.py-md-4{padding-top:1.5rem !important}.pr-md-4,.px-md-4{padding-right:1.5rem !important}.pb-md-4,.py-md-4{padding-bottom:1.5rem !important}.pl-md-4,.px-md-4{padding-left:1.5rem !important}.p-md-5{padding:3rem !important}.pt-md-5,.py-md-5{padding-top:3rem !important}.pr-md-5,.px-md-5{padding-right:3rem !important}.pb-md-5,.py-md-5{padding-bottom:3rem !important}.pl-md-5,.px-md-5{padding-left:3rem !important}.m-md-n1{margin:-.25rem !important}.mt-md-n1,.my-md-n1{margin-top:-.25rem !important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem !important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem !important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem !important}.m-md-n2{margin:-.5rem !important}.mt-md-n2,.my-md-n2{margin-top:-.5rem !important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem !important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem !important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem !important}.m-md-n3{margin:-1rem !important}.mt-md-n3,.my-md-n3{margin-top:-1rem !important}.mr-md-n3,.mx-md-n3{margin-right:-1rem !important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem !important}.ml-md-n3,.mx-md-n3{margin-left:-1rem !important}.m-md-n4{margin:-1.5rem !important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem !important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem !important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem !important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem !important}.m-md-n5{margin:-3rem !important}.mt-md-n5,.my-md-n5{margin-top:-3rem !important}.mr-md-n5,.mx-md-n5{margin-right:-3rem !important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem !important}.ml-md-n5,.mx-md-n5{margin-left:-3rem !important}.m-md-auto{margin:auto !important}.mt-md-auto,.my-md-auto{margin-top:auto !important}.mr-md-auto,.mx-md-auto{margin-right:auto !important}.mb-md-auto,.my-md-auto{margin-bottom:auto !important}.ml-md-auto,.mx-md-auto{margin-left:auto !important}}@media (min-width: 992px){.m-lg-0{margin:0 !important}.mt-lg-0,.my-lg-0{margin-top:0 !important}.mr-lg-0,.mx-lg-0{margin-right:0 !important}.mb-lg-0,.my-lg-0{margin-bottom:0 !important}.ml-lg-0,.mx-lg-0{margin-left:0 !important}.m-lg-1{margin:.25rem !important}.mt-lg-1,.my-lg-1{margin-top:.25rem !important}.mr-lg-1,.mx-lg-1{margin-right:.25rem !important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem !important}.ml-lg-1,.mx-lg-1{margin-left:.25rem !important}.m-lg-2{margin:.5rem !important}.mt-lg-2,.my-lg-2{margin-top:.5rem !important}.mr-lg-2,.mx-lg-2{margin-right:.5rem !important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem !important}.ml-lg-2,.mx-lg-2{margin-left:.5rem !important}.m-lg-3{margin:1rem !important}.mt-lg-3,.my-lg-3{margin-top:1rem !important}.mr-lg-3,.mx-lg-3{margin-right:1rem !important}.mb-lg-3,.my-lg-3{margin-bottom:1rem !important}.ml-lg-3,.mx-lg-3{margin-left:1rem !important}.m-lg-4{margin:1.5rem !important}.mt-lg-4,.my-lg-4{margin-top:1.5rem !important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem !important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem !important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem !important}.m-lg-5{margin:3rem !important}.mt-lg-5,.my-lg-5{margin-top:3rem !important}.mr-lg-5,.mx-lg-5{margin-right:3rem !important}.mb-lg-5,.my-lg-5{margin-bottom:3rem !important}.ml-lg-5,.mx-lg-5{margin-left:3rem !important}.p-lg-0{padding:0 !important}.pt-lg-0,.py-lg-0{padding-top:0 !important}.pr-lg-0,.px-lg-0{padding-right:0 !important}.pb-lg-0,.py-lg-0{padding-bottom:0 !important}.pl-lg-0,.px-lg-0{padding-left:0 !important}.p-lg-1{padding:.25rem !important}.pt-lg-1,.py-lg-1{padding-top:.25rem !important}.pr-lg-1,.px-lg-1{padding-right:.25rem !important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem !important}.pl-lg-1,.px-lg-1{padding-left:.25rem !important}.p-lg-2{padding:.5rem !important}.pt-lg-2,.py-lg-2{padding-top:.5rem !important}.pr-lg-2,.px-lg-2{padding-right:.5rem !important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem !important}.pl-lg-2,.px-lg-2{padding-left:.5rem !important}.p-lg-3{padding:1rem !important}.pt-lg-3,.py-lg-3{padding-top:1rem !important}.pr-lg-3,.px-lg-3{padding-right:1rem !important}.pb-lg-3,.py-lg-3{padding-bottom:1rem !important}.pl-lg-3,.px-lg-3{padding-left:1rem !important}.p-lg-4{padding:1.5rem !important}.pt-lg-4,.py-lg-4{padding-top:1.5rem !important}.pr-lg-4,.px-lg-4{padding-right:1.5rem !important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem !important}.pl-lg-4,.px-lg-4{padding-left:1.5rem !important}.p-lg-5{padding:3rem !important}.pt-lg-5,.py-lg-5{padding-top:3rem !important}.pr-lg-5,.px-lg-5{padding-right:3rem !important}.pb-lg-5,.py-lg-5{padding-bottom:3rem !important}.pl-lg-5,.px-lg-5{padding-left:3rem !important}.m-lg-n1{margin:-.25rem !important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem !important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem !important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem !important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem !important}.m-lg-n2{margin:-.5rem !important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem !important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem !important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem !important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem !important}.m-lg-n3{margin:-1rem !important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem !important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem !important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem !important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem !important}.m-lg-n4{margin:-1.5rem !important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem !important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem !important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem !important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem !important}.m-lg-n5{margin:-3rem !important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem !important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem !important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem !important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem !important}.m-lg-auto{margin:auto !important}.mt-lg-auto,.my-lg-auto{margin-top:auto !important}.mr-lg-auto,.mx-lg-auto{margin-right:auto !important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto !important}.ml-lg-auto,.mx-lg-auto{margin-left:auto !important}}@media (min-width: 1200px){.m-xl-0{margin:0 !important}.mt-xl-0,.my-xl-0{margin-top:0 !important}.mr-xl-0,.mx-xl-0{margin-right:0 !important}.mb-xl-0,.my-xl-0{margin-bottom:0 !important}.ml-xl-0,.mx-xl-0{margin-left:0 !important}.m-xl-1{margin:.25rem !important}.mt-xl-1,.my-xl-1{margin-top:.25rem !important}.mr-xl-1,.mx-xl-1{margin-right:.25rem !important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem !important}.ml-xl-1,.mx-xl-1{margin-left:.25rem !important}.m-xl-2{margin:.5rem !important}.mt-xl-2,.my-xl-2{margin-top:.5rem !important}.mr-xl-2,.mx-xl-2{margin-right:.5rem !important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem !important}.ml-xl-2,.mx-xl-2{margin-left:.5rem !important}.m-xl-3{margin:1rem !important}.mt-xl-3,.my-xl-3{margin-top:1rem !important}.mr-xl-3,.mx-xl-3{margin-right:1rem !important}.mb-xl-3,.my-xl-3{margin-bottom:1rem !important}.ml-xl-3,.mx-xl-3{margin-left:1rem !important}.m-xl-4{margin:1.5rem !important}.mt-xl-4,.my-xl-4{margin-top:1.5rem !important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem !important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem !important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem !important}.m-xl-5{margin:3rem !important}.mt-xl-5,.my-xl-5{margin-top:3rem !important}.mr-xl-5,.mx-xl-5{margin-right:3rem !important}.mb-xl-5,.my-xl-5{margin-bottom:3rem !important}.ml-xl-5,.mx-xl-5{margin-left:3rem !important}.p-xl-0{padding:0 !important}.pt-xl-0,.py-xl-0{padding-top:0 !important}.pr-xl-0,.px-xl-0{padding-right:0 !important}.pb-xl-0,.py-xl-0{padding-bottom:0 !important}.pl-xl-0,.px-xl-0{padding-left:0 !important}.p-xl-1{padding:.25rem !important}.pt-xl-1,.py-xl-1{padding-top:.25rem !important}.pr-xl-1,.px-xl-1{padding-right:.25rem !important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem !important}.pl-xl-1,.px-xl-1{padding-left:.25rem !important}.p-xl-2{padding:.5rem !important}.pt-xl-2,.py-xl-2{padding-top:.5rem !important}.pr-xl-2,.px-xl-2{padding-right:.5rem !important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem !important}.pl-xl-2,.px-xl-2{padding-left:.5rem !important}.p-xl-3{padding:1rem !important}.pt-xl-3,.py-xl-3{padding-top:1rem !important}.pr-xl-3,.px-xl-3{padding-right:1rem !important}.pb-xl-3,.py-xl-3{padding-bottom:1rem !important}.pl-xl-3,.px-xl-3{padding-left:1rem !important}.p-xl-4{padding:1.5rem !important}.pt-xl-4,.py-xl-4{padding-top:1.5rem !important}.pr-xl-4,.px-xl-4{padding-right:1.5rem !important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem !important}.pl-xl-4,.px-xl-4{padding-left:1.5rem !important}.p-xl-5{padding:3rem !important}.pt-xl-5,.py-xl-5{padding-top:3rem !important}.pr-xl-5,.px-xl-5{padding-right:3rem !important}.pb-xl-5,.py-xl-5{padding-bottom:3rem !important}.pl-xl-5,.px-xl-5{padding-left:3rem !important}.m-xl-n1{margin:-.25rem !important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem !important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem !important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem !important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem !important}.m-xl-n2{margin:-.5rem !important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem !important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem !important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem !important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem !important}.m-xl-n3{margin:-1rem !important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem !important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem !important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem !important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem !important}.m-xl-n4{margin:-1.5rem !important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem !important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem !important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem !important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem !important}.m-xl-n5{margin:-3rem !important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem !important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem !important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem !important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem !important}.m-xl-auto{margin:auto !important}.mt-xl-auto,.my-xl-auto{margin-top:auto !important}.mr-xl-auto,.mx-xl-auto{margin-right:auto !important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto !important}.ml-xl-auto,.mx-xl-auto{margin-left:auto !important}}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace !important}.text-justify{text-align:justify !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left !important}.text-right{text-align:right !important}.text-center{text-align:center !important}@media (min-width: 576px){.text-sm-left{text-align:left !important}.text-sm-right{text-align:right !important}.text-sm-center{text-align:center !important}}@media (min-width: 768px){.text-md-left{text-align:left !important}.text-md-right{text-align:right !important}.text-md-center{text-align:center !important}}@media (min-width: 992px){.text-lg-left{text-align:left !important}.text-lg-right{text-align:right !important}.text-lg-center{text-align:center !important}}@media (min-width: 1200px){.text-xl-left{text-align:left !important}.text-xl-right{text-align:right !important}.text-xl-center{text-align:center !important}}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.font-weight-light{font-weight:300 !important}.font-weight-lighter{font-weight:lighter !important}.font-weight-normal{font-weight:400 !important}.font-weight-bold{font-weight:700 !important}.font-weight-bolder{font-weight:bolder !important}.font-italic{font-style:italic !important}.text-white{color:#fff !important}.text-primary{color:#007bff !important}a.text-primary:hover,a.text-primary:focus{color:#0056b3 !important}.text-secondary{color:#6c757d !important}a.text-secondary:hover,a.text-secondary:focus{color:#494f54 !important}.text-success{color:#28a745 !important}a.text-success:hover,a.text-success:focus{color:#19692c !important}.text-info{color:#17a2b8 !important}a.text-info:hover,a.text-info:focus{color:#0f6674 !important}.text-warning{color:#ffc107 !important}a.text-warning:hover,a.text-warning:focus{color:#ba8b00 !important}.text-danger{color:#dc3545 !important}a.text-danger:hover,a.text-danger:focus{color:#a71d2a !important}.text-light{color:#f8f9fa !important}a.text-light:hover,a.text-light:focus{color:#cbd3da !important}.text-dark{color:#343a40 !important}a.text-dark:hover,a.text-dark:focus{color:#121416 !important}.text-body{color:#212529 !important}.text-muted{color:#6c757d !important}.text-black-50{color:rgba(0,0,0,0.5) !important}.text-white-50{color:rgba(255,255,255,0.5) !important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none !important}.text-break{word-wrap:break-word !important}.text-reset{color:inherit !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media print{*,*::before,*::after{text-shadow:none !important;box-shadow:none !important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap !important}pre,blockquote{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px !important}.container{min-width:992px !important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #dee2e6 !important}.table-dark{color:inherit}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}.react-bs-table .react-bs-container-header .sort-column,.s-alert-close,td.react-bs-table-expand-cell,th.react-bs-table-expand-cell>div{cursor:pointer}.react-bs-table-container .react-bs-table-search-form{margin-bottom:0}.react-bs-table-bordered{border:1px solid #ddd;border-radius:5px}.react-bs-table table{margin-bottom:0;table-layout:fixed}.react-bs-table table td,.react-bs-table table th{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.react-bs-table-pagination{margin-top:10px}.react-bs-table-tool-bar{margin-bottom:5px}.react-bs-container-footer,.react-bs-container-header{overflow:hidden;width:100%}.react-bs-container-body{overflow:auto;width:100%}.react-bootstrap-table-page-btns-ul{float:right;margin-top:0}.react-bs-table .table-bordered{border:0;outline:0 !important}.react-bs-table .table-bordered>thead>tr>td,.react-bs-table .table-bordered>thead>tr>th{border-bottom-width:2px}.react-bs-table .table-bordered>tbody>tr>td{outline:0 !important}.react-bs-table .table-bordered>tbody>tr>td.default-focus-cell{outline:#6495ed solid 3px !important;outline-offset:-1px}.react-bs-table .table-bordered>tfoot>tr>td,.react-bs-table .table-bordered>tfoot>tr>th{border-top-width:2px;border-bottom-width:0}.react-bs-table .table-bordered>tbody>tr>td:first-child,.react-bs-table .table-bordered>tbody>tr>th:first-child,.react-bs-table .table-bordered>tfoot>tr>td:first-child,.react-bs-table .table-bordered>tfoot>tr>th:first-child,.react-bs-table .table-bordered>thead>tr>td:first-child,.react-bs-table .table-bordered>thead>tr>th:first-child{border-left-width:0}.react-bs-table .table-bordered>tbody>tr>td:last-child,.react-bs-table .table-bordered>tbody>tr>th:last-child,.react-bs-table .table-bordered>tfoot>tr>td:last-child,.react-bs-table .table-bordered>tfoot>tr>th:last-child,.react-bs-table .table-bordered>thead>tr>td:last-child,.react-bs-table .table-bordered>thead>tr>th:last-child{border-right-width:0}.react-bs-table .table-bordered>thead>tr:first-child>td,.react-bs-table .table-bordered>thead>tr:first-child>th{border-top-width:0}.react-bs-table .table-bordered>tfoot>tr:last-child>td,.react-bs-table .table-bordered>tfoot>tr:last-child>th{border-bottom-width:0}.react-bs-table .react-bs-container-footer>table>thead>tr>th,.react-bs-table .react-bs-container-header>table>thead>tr>th{vertical-align:middle}.react-bs-table .react-bs-container-footer>table>thead>tr>th .filter,.react-bs-table .react-bs-container-header>table>thead>tr>th .filter{font-weight:400}.react-bs-table .react-bs-container-header>table>thead>tr>th .filter::-webkit-input-placeholder,.react-bs-table .react-bs-container-header>table>thead>tr>th .number-filter-input::-webkit-input-placeholder,.react-bs-table .react-bs-container-header>table>thead>tr>th .select-filter option[value=''],.react-bs-table .react-bs-container-header>table>thead>tr>th .select-filter.placeholder-selected{color:#d3d3d3;font-style:italic}.react-bs-table .react-bs-container-footer>table>thead>tr>th .filter::-webkit-input-placeholder,.react-bs-table .react-bs-container-footer>table>thead>tr>th .number-filter-input::-webkit-input-placeholder,.react-bs-table .react-bs-container-footer>table>thead>tr>th .select-filter option[value=''],.react-bs-table .react-bs-container-footer>table>thead>tr>th .select-filter.placeholder-selected{color:#d3d3d3;font-style:italic}.react-bs-table .react-bs-container-footer>table>thead>tr>th .select-filter.placeholder-selected option:not([value='']),.react-bs-table .react-bs-container-header>table>thead>tr>th .select-filter.placeholder-selected option:not([value='']){color:initial;font-style:initial}.react-bs-table .react-bs-container-footer>table>thead>tr>th .date-filter,.react-bs-table .react-bs-container-footer>table>thead>tr>th .number-filter,.react-bs-table .react-bs-container-header>table>thead>tr>th .date-filter,.react-bs-table .react-bs-container-header>table>thead>tr>th .number-filter{display:flex}.react-bs-table .react-bs-container-footer>table>thead>tr>th .date-filter-input,.react-bs-table .react-bs-container-footer>table>thead>tr>th .number-filter-input,.react-bs-table .react-bs-container-header>table>thead>tr>th .date-filter-input,.react-bs-table .react-bs-container-header>table>thead>tr>th .number-filter-input{margin-left:5px;float:left;width:calc(100% - 67px - 5px)}.react-bs-table .react-bs-container-footer>table>thead>tr>th .date-filter-comparator,.react-bs-table .react-bs-container-footer>table>thead>tr>th .number-filter-comparator,.react-bs-table .react-bs-container-header>table>thead>tr>th .date-filter-comparator,.react-bs-table .react-bs-container-header>table>thead>tr>th .number-filter-comparator{width:67px;float:left}.react-bs-container .textarea-save-btn{position:absolute;z-index:100;right:0;top:-21px}.react-bs-table-no-data{text-align:center}.ReactModal__Overlay{-webkit-perspective:600;perspective:600;opacity:0;overflow-x:hidden;overflow-y:auto;background-color:rgba(0,0,0,0.5);z-index:101}.ReactModal__Overlay--after-open{opacity:1;transition:opacity 150ms ease-out}.ReactModal__Content{-webkit-transform:scale(0.5) rotateX(-30deg);transform:scale(0.5) rotateX(-30deg)}.ReactModal__Content--after-open{-webkit-transform:scale(1) rotateX(0);transform:scale(1) rotateX(0);transition:all 150ms ease-in}.ReactModal__Overlay--before-close{opacity:0}.ReactModal__Content--before-close{-webkit-transform:scale(0.5) rotateX(30deg);transform:scale(0.5) rotateX(30deg);transition:all 150ms ease-in}.ReactModal__Content.modal-dialog{border:none;background-color:transparent}.animated{animation-fill-mode:both}.animated.bounceIn,.animated.bounceOut{animation-duration:.75s}.animated.shake{animation-duration:.3s}@keyframes shake{from,to{transform:translate3d(0, 0, 0)}10%,50%,90%{transform:translate3d(-10px, 0, 0)}30%,70%{transform:translate3d(10px, 0, 0)}}.shake{animation-name:shake}@keyframes bounceIn{20%,40%,60%,80%,from,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}20%{transform:scale3d(1.1, 1.1, 1.1)}40%{transform:scale3d(0.9, 0.9, 0.9)}60%{opacity:1;transform:scale3d(1.03, 1.03, 1.03)}80%{transform:scale3d(0.97, 0.97, 0.97)}to{opacity:1;transform:scale3d(1, 1, 1)}}.bounceIn{animation-name:bounceIn}@keyframes bounceOut{20%{transform:scale3d(0.9, 0.9, 0.9)}50%,55%{opacity:1;transform:scale3d(1.1, 1.1, 1.1)}to{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}}.bounceOut{animation-name:bounceOut}.s-alert-box,.s-alert-box *{box-sizing:border-box}.s-alert-box{position:fixed;background:rgba(42,45,50,0.85);padding:22px;line-height:1.4;z-index:1000;pointer-events:none;color:rgba(250,251,255,0.95);font-size:100%;font-family:'Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif;max-width:300px;-webkit-transition:top .4s,bottom .4s;transition:top .4s,bottom .4s}.s-alert-box.s-alert-show,.s-alert-box.s-alert-visible{pointer-events:auto}.s-alert-box a{color:inherit;opacity:.7;font-weight:700}.s-alert-box a:focus,.s-alert-box a:hover{opacity:1}.s-alert-box p{margin:0}.s-alert-close{width:20px;height:20px;position:absolute;right:4px;top:4px;overflow:hidden;text-indent:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.s-alert-close:focus,.s-alert-close:hover{outline:0}.s-alert-close::after,.s-alert-close::before{content:'';position:absolute;width:3px;height:60%;top:50%;left:50%;background:#fff}.s-alert-close:hover::after,.s-alert-close:hover::before{background:#fff}.s-alert-close::before{-webkit-transform:translate(-50%, -50%) rotate(45deg);transform:translate(-50%, -50%) rotate(45deg)}.s-alert-close::after{-webkit-transform:translate(-50%, -50%) rotate(-45deg);transform:translate(-50%, -50%) rotate(-45deg)}.s-alert-bottom-left{top:auto;right:auto;bottom:30px;left:30px}.s-alert-top-left{top:30px;right:auto;bottom:auto;left:30px}.s-alert-top-right{top:30px;right:30px;bottom:auto;left:auto}.s-alert-bottom-right{top:auto;right:30px;bottom:30px;left:auto}.s-alert-bottom,.s-alert-top{width:100%;max-width:100%;left:0;right:0}.s-alert-bottom{bottom:0;top:auto}.s-alert-top{top:0;bottom:auto}.s-alert-info{background:#00A2D3;color:#fff}.s-alert-success{background:#27AE60;color:#fff}.s-alert-warning{background:#F1C40F;color:#fff}.s-alert-error{background:#E74C3C;color:#fff}[class*=\" s-alert-effect-\"].s-alert-hide,[class^=s-alert-effect-].s-alert-hide{-webkit-animation-direction:reverse;animation-direction:reverse}.s-alert-box-height{visibility:hidden;position:fixed}.s-alert-effect-scale a,.s-alert-effect-scale a:focus,.s-alert-effect-scale a:hover{color:#fff}.s-alert-effect-scale .s-alert-close::after,.s-alert-effect-scale .s-alert-close::before,.s-alert-effect-scale .s-alert-close:hover::after,.s-alert-effect-scale .s-alert-close:hover::before{background:#fff}.s-alert-effect-scale.s-alert-hide,.s-alert-effect-scale.s-alert-show{-webkit-animation-name:animScale;animation-name:animScale;-webkit-animation-duration:.25s;animation-duration:.25s}@-webkit-keyframes animScale{0%{opacity:0;-webkit-transform:translate3d(0, 40px, 0) scale3d(0.1, 0.6, 1)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1)}}@keyframes animScale{0%{opacity:0;-webkit-transform:translate3d(0, 40px, 0) scale3d(0.1, 0.6, 1);transform:translate3d(0, 40px, 0) scale3d(0.1, 0.6, 1)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1);transform:translate3d(0, 0, 0) scale3d(1, 1, 1)}}.nojs-dropdown{position:relative;display:inline-block;outline:none}.nojs-dropdown .dropdown-toggle{cursor:pointer}.nojs-dropdown .dropdown-menu{position:absolute !important;z-index:1000 !important;display:block;visibility:hidden !important;transition:visibility 0.5s !important}.nojs-dropdown:focus .dropdown-menu{visibility:visible !important;transition:opacity 0.1s !important}@media (max-width: 767px){.nojs-dropdown .dropdown-menu{top:0px;visibility:visible !important}}.nojs-dropdown.pull-right .dropdown-menu,.ml-auto .nojs-dropdown .dropdown-menu,.nojs-dropdown.nojs-dropdown-right .dropdown-menu{left:auto !important;right:0px !important}.nojs-dropdown.nojs-dropdown-left .dropdown-menu{left:0px !important;right:auto !important}.nojs-navbar{display:flex;flex-basis:auto;flex-grow:1}.nojs-navbar-label{display:none}.nojs-navbar-check{display:none}.nojs-navbar-check:checked ~ .nojs-navbar-label{border-bottom:3px solid transparent;transition:border-bottom 0.8s ease-in-out}.nojs-navbar-check:checked ~ .nojs-navbar-label:before{transform:rotate(-405deg) translateY(0px) translateX(-1px);transition:transform 0.5s ease-in-out}.nojs-navbar-check:checked ~ .nojs-navbar-label:after{transform:rotate(405deg) translateY(-5px) translateX(-6px);transition:transform 0.5s ease-in-out}.nojs-navbar-check:checked ~ .nojs-navbar{max-height:1000px}@media (max-width: 767px){.nojs-navbar{display:block;width:100%;max-height:0px;overflow:hidden;transition:max-height 0.5s ease-in-out !important}.nojs-navbar-label{display:inline-block;outline:0;cursor:pointer;border-bottom:3px solid currentColor;width:28px;transition:border-bottom 1s ease-in-out}.nojs-navbar-label::-moz-focus-inner{border:0;padding:0}.nojs-navbar-label:before{content:\"\";display:block;border-bottom:3px solid currentColor;width:100%;margin-bottom:5px;transition:transform 0.5s ease-in-out}.nojs-navbar-label:after{content:\"\";display:block;border-bottom:3px solid currentColor;width:100%;margin-bottom:5px;transition:transform 0.5s ease-in-out}}.lead{font-size:1.4em}pre{background-color:#333;border-color:#333;color:#eee;padding:10px 20px;border-radius:5px}.navbar,.navbar .btn,.navbar .dropdown-item,.navbar button{font-size:18px}.navbar{border-bottom:1px solid #ddd}@media (max-width: 768px){.display-2{font-size:3em}.display-3{font-size:2.5em}.display-4{font-size:2em}}.icon-spin{display:inline-block;animation:spin 1s infinite linear}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}.navbar .dropdown{display:block}@media (max-width: 768px){.navbar .dropdown-menu{position:relative !important;display:block !important;transform:none !important;padding:0 0 10px 0;border:none}}.react-bs-table-sizePerPage-dropdown .dropdown-item a{display:block;color:#000;text-decoration:none}.react-bs-table-sizePerPage-dropdown button{background:#fff;color:#000}\n";

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* unused harmony export SignInButtons */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var _default = /*#__PURE__*/function (_React$Component) {
  _inherits(_default, _React$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this.state = {
      email: '',
      session: _this.props.session,
      providers: _this.props.providers,
      submitting: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleEmailChange = _this.handleEmailChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "handleEmailChange",
    value: function handleEmailChange(event) {
      this.setState({
        email: event.target.value.trim()
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      if (!this.state.email) return;
      this.setState({
        submitting: true
      }); // Save current URL so user is redirected back here after signing in

      var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_3___default.a();
      cookies.set('redirect_url', window.location.pathname, {
        path: '/'
      });
      next_auth_client__WEBPACK_IMPORTED_MODULE_4__["NextAuth"].signin(this.state.email).then(function () {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/auth/check-email?email=".concat(_this2.state.email));
      }).catch(function (err) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/auth/error?action=signin&type=email&email=".concat(_this2.state.email));
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.session.user) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-center",
          style: {
            marginTop: 10,
            marginBottom: 30
          }
        }, "If you don't have an account, one will be created when you sign in."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 12,
          md: 6
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SignInButtons, {
          providers: this.props.providers
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 12,
          md: 6
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          id: "signin",
          method: "post",
          action: "/auth/email/signin",
          onSubmit: this.handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          name: "_csrf",
          type: "hidden",
          value: this.state.session.csrfToken
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          htmlFor: "email"
        }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          name: "email",
          disabled: this.state.submitting,
          type: "text",
          placeholder: "j.smith@example.com",
          id: "email",
          className: "form-control",
          value: this.state.email,
          onChange: this.handleEmailChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          id: "submitButton",
          disabled: this.state.submitting,
          outline: true,
          color: "dark",
          type: "submit"
        }, this.state.submitting === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "icon icon-spin ion-md-refresh mr-2"
        }), "Sign in with email"))))));
      }
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


var SignInButtons = /*#__PURE__*/function (_React$Component2) {
  _inherits(SignInButtons, _React$Component2);

  var _super2 = _createSuper(SignInButtons);

  function SignInButtons() {
    _classCallCheck(this, SignInButtons);

    return _super2.apply(this, arguments);
  }

  _createClass(SignInButtons, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object.keys(this.props.providers).map(function (provider, i) {
        if (!_this3.props.providers[provider].signin) return null;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          key: i
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "btn btn-block btn-outline-secondary",
          href: _this3.props.providers[provider].signin
        }, "Sign in with ", provider));
      }));
    }
  }]);

  return SignInButtons;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var _default = /*#__PURE__*/function (_React$Component) {
  _inherits(_default, _React$Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "adminAccessOnly",
    value: function adminAccessOnly() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _extends({}, this.props, {
        navmenu: false
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "text-center pt-5 pb-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "display-4 mb-5"
      }, "Access Denied"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "lead"
      }, "You must be signed in as an administrator to access this page.")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_3__["NextAuth"].init({
                  req: req
                });

              case 3:
                _context.t0 = _context.sent;
                return _context.abrupt("return", {
                  session: _context.t0,
                  lang: 'en'
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkAccounts", function() { return LinkAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkAccount", function() { return LinkAccount; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_9__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var _default = /*#__PURE__*/function (_Page) {
  _inherits(_default, _Page);

  var _super = _createSuper(_default);

  _createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, props;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return _get(_getPrototypeOf(_default), "getInitialProps", this).call(this, {
                  req: req
                });

              case 3:
                props = _context.sent;
                _context.next = 6;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_6__["NextAuth"].linked({
                  req: req
                });

              case 6:
                props.linkedAccounts = _context.sent;
                return _context.abrupt("return", props);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this.state = {
      session: props.session,
      isSignedIn: props.session.user ? true : false,
      name: '',
      email: '',
      emailVerified: false,
      alertText: null,
      alertStyle: null
    };

    if (props.session.user) {
      _this.state.name = props.session.user.name;
      _this.state.email = props.session.user.email;
    }

    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var session, cookies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_6__["NextAuth"].init({
                  force: true
                });

              case 2:
                session = _context2.sent;
                this.setState({
                  session: session,
                  isSignedIn: session.user ? true : false
                }); // If the user bounces off to link/unlink their account we want them to
                // land back here after signing in with the other service / unlinking.

                cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_9___default.a();
                cookies.set('redirect_url', window.location.pathname, {
                  path: '/'
                });
                this.getProfile();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "getProfile",
    value: function getProfile() {
      var _this2 = this;

      isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()('/account/user', {
        credentials: 'include'
      }).then(function (r) {
        return r.json();
      }).then(function (user) {
        if (!user.name || !user.email) return;

        _this2.setState({
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified
        });
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "onSubmit",
    value: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(e) {
        var _this3 = this;

        var formData, encodedForm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // Submits the URL encoded form without causing a page reload
                e.preventDefault();
                this.setState({
                  alertText: null,
                  alertStyle: null
                });
                _context4.next = 4;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_6__["NextAuth"].csrfToken();

              case 4:
                _context4.t0 = _context4.sent;
                _context4.t1 = this.state.name || '';
                _context4.t2 = this.state.email || '';
                formData = {
                  _csrf: _context4.t0,
                  name: _context4.t1,
                  email: _context4.t2
                };
                // URL encode form
                // Note: This uses a x-www-form-urlencoded rather than sending JSON so that
                // the form also in browsers without JavaScript
                encodedForm = Object.keys(formData).map(function (key) {
                  return encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]);
                }).join('&');
                isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()('/account/user', {
                  credentials: 'include',
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: encodedForm
                }).then( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(res) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!(res.status === 200)) {
                              _context3.next = 11;
                              break;
                            }

                            _this3.getProfile();

                            _this3.setState({
                              alertText: 'Changes to your profile have been saved',
                              alertStyle: 'alert-success'
                            }); // Force update session so that changes to name or email are reflected
                            // immediately in the navbar (as we pass our session to it).


                            _context3.t0 = _this3;
                            _context3.next = 6;
                            return next_auth_client__WEBPACK_IMPORTED_MODULE_6__["NextAuth"].init({
                              force: true
                            });

                          case 6:
                            _context3.t1 = _context3.sent;
                            _context3.t2 = {
                              session: _context3.t1
                            };

                            _context3.t0.setState.call(_context3.t0, _context3.t2);

                            _context3.next = 17;
                            break;

                          case 11:
                            _context3.t3 = _this3;
                            _context3.next = 14;
                            return next_auth_client__WEBPACK_IMPORTED_MODULE_6__["NextAuth"].init({
                              force: true
                            });

                          case 14:
                            _context3.t4 = _context3.sent;
                            _context3.t5 = {
                              session: _context3.t4,
                              alertText: 'Failed to save changes to your profile',
                              alertStyle: 'alert-danger'
                            };

                            _context3.t3.setState.call(_context3.t3, _context3.t5);

                          case 17:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onSubmit(_x2) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.state.isSignedIn === true) {
        var alert = this.state.alertText === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "alert ".concat(this.state.alertStyle),
          role: "alert"
        }, this.state.alertText);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _extends({}, this.props, {
          navmenu: false
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
          className: "mb-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xs: "12"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          className: "display-2"
        }, "Your Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "lead text-muted"
        }, "Edit your profile and link accounts"))), alert, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
          className: "mt-4"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xs: "12",
          md: "8",
          lg: "9"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          method: "post",
          action: "/account/user",
          onSubmit: this.onSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "_csrf",
          type: "hidden",
          value: this.state.session.csrfToken,
          onChange: function onChange() {}
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
          row: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
          sm: 2
        }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          sm: 10,
          md: 8
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "name",
          value: this.state.name,
          onChange: this.handleChange
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
          row: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
          sm: 2
        }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          sm: 10,
          md: 8
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "email",
          value: this.state.email.match(/.*@localhost\.localdomain$/) ? '' : this.state.email,
          onChange: this.handleChange
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
          row: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          sm: 12,
          md: 10
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "text-right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          color: "primary",
          type: "submit"
        }, "Save Changes")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xs: "12",
          md: "4",
          lg: "3"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkAccounts, {
          session: this.props.session,
          linkedAccounts: this.props.linkedAccounts
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Delete your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you delete your account it will be erased immediately. You can sign up again at any time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          id: "signout",
          method: "post",
          action: "/account/delete"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          name: "_csrf",
          type: "hidden",
          value: this.state.session.csrfToken
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "submit",
          color: "outline-danger"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-trash mr-1"
        }), " Delete Account")))));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _extends({}, this.props, {
          navmenu: false
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xs: "12",
          className: "text-center pt-5 pb-5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "lead m-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/auth"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Sign in to manage your profile"))))));
      }
    }
  }]);

  return _default;
}(_components_page__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);


var LinkAccounts = /*#__PURE__*/function (_React$Component) {
  _inherits(LinkAccounts, _React$Component);

  var _super2 = _createSuper(LinkAccounts);

  function LinkAccounts() {
    _classCallCheck(this, LinkAccounts);

    return _super2.apply(this, arguments);
  }

  _createClass(LinkAccounts, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object.keys(this.props.linkedAccounts).map(function (provider, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkAccount, {
          key: i,
          provider: provider,
          session: _this4.props.session,
          linked: _this4.props.linkedAccounts[provider]
        });
      }));
    }
  }]);

  return LinkAccounts;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var LinkAccount = /*#__PURE__*/function (_React$Component2) {
  _inherits(LinkAccount, _React$Component2);

  var _super3 = _createSuper(LinkAccount);

  function LinkAccount() {
    _classCallCheck(this, LinkAccount);

    return _super3.apply(this, arguments);
  }

  _createClass(LinkAccount, [{
    key: "render",
    value: function render() {
      if (this.props.linked === true) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          method: "post",
          action: "/auth/oauth/".concat(this.props.provider.toLowerCase(), "/unlink")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          name: "_csrf",
          type: "hidden",
          value: this.props.session.csrfToken
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "btn btn-block btn-outline-danger",
          type: "submit"
        }, "Unlink from ", this.props.provider)));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "btn btn-block btn-outline-primary",
          href: "/auth/oauth/".concat(this.props.provider.toLowerCase())
        }, "Link with ", this.props.provider));
      }
    }
  }]);

  return LinkAccount;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ })
/******/ ]);