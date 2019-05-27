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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _components_MenuFinder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MenuFinder */ "./components/MenuFinder.jsx");







var _jsxFileName = "/Users/Chris/ourmenu/pages/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Montserrat', sans-serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var cities = [{
  label: 'Halifax',
  value: 'Halifax'
}];
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["createGlobalStyle"])(_templateObject());
var IndexWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__IndexWrapper",
  componentId: "sc-1wbo52z-0"
})(["width:100%;height:100vh;max-height:100vh;margin:0;padding:0;background-image:url(https://images.unsplash.com/photo-1555813456-94a3dd418cd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1252&q=80);background-size:cover;background-position:center;box-sizing:border-box;display:flex;flex-flow:column nowrap;"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Nav",
  componentId: "sc-1wbo52z-1"
})(["width:100%;max-width:100vw;min-width:100vw;height:72px;padding:16px;box-sizing:border-box;display:flex;flex-flow:row nowrap;justify-content:space-between;"]);
var NavButton = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.withConfig({
  displayName: "pages__NavButton",
  componentId: "sc-1wbo52z-2"
})(["border:0;border-radius:8px;appearance:none;background:#fff;font-size:1rem;font-weight:600;color:#000;padding:8px 16px;"]);
var heroPose = {
  lowered: {
    y: function y(_ref) {
      var height = _ref.height;
      return "calc(50vh - 72px - ".concat(height, "px) ");
    }
  },
  raised: {
    y: '0vh'
  }
};
var Hero = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(react_pose__WEBPACK_IMPORTED_MODULE_9__["default"].div(heroPose)).withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1wbo52z-3"
})(["display:flex;flex-flow:column nowrap;align-items:center;"]);
var HeroText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "pages__HeroText",
  componentId: "sc-1wbo52z-4"
})(["font-size:2.5rem;font-weight:600;color:#fff;margin:0;"]);
var ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__ContentArea",
  componentId: "sc-1wbo52z-5"
})(["width:100%;padding:16px;box-sizing:border-box;display:flex;flex:1;"]);
var customSelectStyles = {
  control: function control(provided) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, provided, {
      borderRadius: 8,
      borderColor: '#fff',
      fontSize: '2.5rem',
      height: 80,
      width: 240,
      fontWeight: 600,
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
      heroHeight: 49,
      city: ''
    };
    _this.heroRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
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

      console.log(this.heroRef.current.offsetHeight);
      this.setState({
        heroHeight: this.heroRef.current.offsetHeight
      });
    }
  }, {
    key: "handleGeolocation",
    value: function handleGeolocation(position) {
      console.log('Geolocation');
      console.log(position);
    }
  }, {
    key: "handleCitySelect",
    value: function handleCitySelect(value) {
      console.log(value);
      this.setState({
        city: value.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(IndexWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Our menu"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NavButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "For restaurants")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Hero, {
        pose: this.state.city !== "" ? 'raised' : 'lowered',
        ref: this.heroRef,
        height: this.state.heroHeight,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Menus for restaurants in"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: cities.find(function (option) {
          return option.value === _this2.state.city;
        }),
        onChange: function onChange(value) {
          return _this2.handleCitySelect(value);
        },
        options: cities,
        styles: customSelectStyles,
        simpleValue: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ContentArea, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MenuFinder__WEBPACK_IMPORTED_MODULE_11__["default"], {
        menu: this.state.menu,
        restaurants: this.state.restaurants,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.21c7d4509589dde6c3c3.hot-update.js.map