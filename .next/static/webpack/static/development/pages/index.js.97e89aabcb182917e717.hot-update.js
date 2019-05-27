webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _components_MenuFinder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MenuFinder */ "./components/MenuFinder.jsx");







var _jsxFileName = "/Users/Chris/ourmenu/pages/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var cities = [{
  label: 'Halifax',
  value: 'Halifax'
}];
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["createGlobalStyle"])(_templateObject());
var IndexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__IndexWrapper",
  componentId: "sc-1wbo52z-0"
})(["width:100%;height:100vh;max-height:100vh;margin:0;padding:0;background-image:url(https://images.unsplash.com/photo-1491739481003-2991327b66e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80);background-size:cover;background-position:center;box-sizing:border-box;display:flex;flex-flow:column nowrap;position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__Nav",
  componentId: "sc-1wbo52z-1"
})(["width:100%;max-width:100vw;min-width:100vw;height:96px;padding:0 32px;box-sizing:border-box;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;position:fixed;top:0;left:0;right:0;z-index:8;"]);
var NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].svg.withConfig({
  displayName: "pages__NavLogo",
  componentId: "sc-1wbo52z-2"
})(["width:64px;height:25px;fill:#fff;"]);
var NavButton = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].a.withConfig({
  displayName: "pages__NavButton",
  componentId: "sc-1wbo52z-3"
})(["border:0;border-radius:8px;appearance:none;background:#fff;font-size:1rem;font-weight:700;color:#000;padding:12px 16px;cursor:pointer;"]);
var menuPose = {
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: function y(_ref) {
      var offsetHeight = _ref.offsetHeight;
      return offsetHeight;
    },
    opacity: 0
  }
};
var Menu = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(react_pose__WEBPACK_IMPORTED_MODULE_11__["default"].div(menuPose)).withConfig({
  displayName: "pages__Menu",
  componentId: "sc-1wbo52z-4"
})(["width:100vw;height:100vh;position:absolute;z-index:88;top:0;right:0;left:0;bottom:0;display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;background:#fff;"]);
var MenuNav = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__MenuNav",
  componentId: "sc-1wbo52z-5"
})(["width:420px;display:flex;justify-content:flex-start;"]);
var MenuFrame = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].iframe.withConfig({
  displayName: "pages__MenuFrame",
  componentId: "sc-1wbo52z-6"
})(["border:1px solid rgba(0,0,0,1);border-radius:8px;width:420px;height:600px;"]);
var customSelectStyles = {
  control: function control(provided) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, provided, {
      borderRadius: 8,
      borderColor: '#fff',
      fontSize: '2.25rem',
      height: 56,
      width: 240,
      fontWeight: 700,
      color: '#000'
    });
  }
};

var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      menu: "",
      restaurants: [{
        name: 'Julep Kitchen + Bar',
        username: 'julepkitchenbar'
      }, {
        name: 'XOH',
        username: 'xoh'
      }],
      raised: false,
      city: '',
      offsetHeight: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocationInfo);
      }

      function displayLocationInfo(position) {
        var lng = position.coords.longitude;
        var lat = position.coords.latitude;
        console.log("longitude: ".concat(lng, " | latitude: ").concat(lat));
      }
    }
  }, {
    key: "handleGeolocation",
    value: function handleGeolocation(position) {
      console.log('Geolocation');
      console.log(position);
    }
  }, {
    key: "handleCitySelect",
    value: function handleCitySelect(value, offsetHeight) {
      console.log(value);

      if (value) {
        this.setState({
          city: value.value,
          offsetHeight: offsetHeight
        });
      } else {
        this.setState({
          city: ""
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(IndexWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "OurMenu | Restaurant menus for anywhere")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          color: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavLogo, {
        version: "1.1",
        x: "0px",
        y: "0px",
        width: "256px",
        height: "100px",
        viewBox: "0 0 256 100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        class: "st0",
        d: "M25.2,0c13.9,0,25,9,25,21.9c0,12.7-10.5,21.8-25,21.8C10.1,43.7,0,34.6,0,21.9C0,9,11.1,0,25.2,0z M25.1,31.5 c5.6,0,9.7-4,9.7-9.7c0-5.7-4.3-9.7-9.7-9.7c-5.5,0-9.8,4-9.8,9.7C15.3,27.5,19.3,31.5,25.1,31.5z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        class: "st0",
        d: "M69.9,20.8c0,8.1,2.2,11.3,8.2,11.3c6,0,8.2-3.1,8.2-11.3V1.2h14.4v23.1c0,13.8-7,19.4-22.7,19.4 s-22.7-5.6-22.7-19.4V1.2h14.4V20.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        class: "st0",
        d: "M109.2,1.2h14.4v6h0.2c0,0,4.6-7.2,12.8-7.2c5.4,0,9.1,2.6,9.1,2.6l-6,12.1c0,0-2.7-2.3-7.5-2.3 c-7.5,0-8.6,7.3-8.6,8.4v21.7h-14.4V1.2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        class: "st0",
        d: "M3,57.5h14.4v4.3h0.2c3.3-3.2,7.4-5.6,12-5.6c5.5,0,11.7,2,14.6,7.6c4.4-5.2,9.3-7.6,13.9-7.6 c7.7,0,16.3,3.8,16.3,15.3v27.2H60V75.5c0-4.1-2.2-7.7-7.3-7.7c-4.6,0-6.5,3.3-6.7,6.4v24.6H31.5V75.5c0-4.1-2.2-7.7-7.3-7.7 c-4.8,0-6.7,3.6-6.7,6.9v24.1H3V57.5z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        class: "st0",
        d: "M94.7,80.1c0,6.4,5.4,8.5,9.1,8.5c4.7,0,6.7-0.9,10.2-4.6l10.4,5.1C119.7,97,112,100,102.7,100 c-12.6,0-23-9.8-23-21.8c0-12.1,10.4-21.9,23-21.9c12.7,0,22.4,7.4,22.4,21.9c0,0.6,0,1.4-0.1,1.9H94.7z M111.1,72.2 c-0.7-4.3-3.7-6.7-7.9-6.7c-5,0-7.8,2.9-8,6.7H111.1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        class: "st0",
        d: "M131.1,57.5h14.4v4.3h0.2c3.3-3.2,7.4-5.6,12-5.6c7.7,0,18.4,3.8,18.4,15.3v27.2h-14.4V75.5c0-4.1-2.9-8-7.5-8 c-4.3,0-8.6,3.9-8.6,8v23.3h-14.4V57.5z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        class: "st0",
        d: "M198.1,77.2c0,8.1,2.2,11.3,8.2,11.3c6,0,8.2-3.1,8.2-11.3V57.5H229v23.1c0,13.8-7,19.4-22.7,19.4 s-22.7-5.6-22.7-19.4V57.5h14.4V77.2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        class: "st0",
        d: "M256,90.8c0,5.1-4.2,9.2-9.4,9.2c-5.1,0-9.3-4.1-9.3-9.2c0-5.1,4.2-9.3,9.3-9.3C251.8,81.6,256,85.7,256,90.8z ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }))), "\0"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/for-restaurants",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "For restaurants"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MenuFinder__WEBPACK_IMPORTED_MODULE_12__["default"], {
        cities: cities,
        city: this.state.city,
        handleCitySelect: function handleCitySelect(option, offsetHeight) {
          return _this2.handleCitySelect(option, offsetHeight);
        },
        restaurants: this.state.restaurants,
        handleRestaurantSelect: function handleRestaurantSelect(restaurant) {
          return _this2.setState({
            restaurant: restaurant
          });
        },
        offsetHeight: this.state.offsetHeight,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_11__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, this.state.restaurant && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Menu, {
        key: 0,
        offsetHeight: this.state.offsetHeight,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuNav, {
        onClick: function onClick() {
          return _this2.setState({
            restaurant: ""
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Back to ", this.state.city, " menus"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(MenuFrame, {
        src: "https://app.somm.ca/".concat(this.state.restaurant),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.97e89aabcb182917e717.hot-update.js.map