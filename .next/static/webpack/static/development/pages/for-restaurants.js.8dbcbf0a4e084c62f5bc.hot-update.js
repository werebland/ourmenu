webpackHotUpdate("static/development/pages/for-restaurants.js",{

/***/ "./pages/for-restaurants.js":
/*!**********************************!*\
  !*** ./pages/for-restaurants.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/Users/Chris/ourmenu/pages/for-restaurants.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["createGlobalStyle"])(_templateObject());
var ForRestaurantsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "for-restaurants__ForRestaurantsWrapper",
  componentId: "sc-1upsi6o-0"
})([""]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "for-restaurants__Header",
  componentId: "sc-1upsi6o-1"
})(["width:100%;height:128px;display:flex;align-items:center;justify-content:center;"]);
var HeaderLogo = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].svg.withConfig({
  displayName: "for-restaurants__HeaderLogo",
  componentId: "sc-1upsi6o-2"
})(["height:104px;width:276px;& .st0{fill:#fff;}"]);
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "for-restaurants__Grid",
  componentId: "sc-1upsi6o-3"
})(["width:100vw;height:100%;padding:16px 160px;box-sizing:border-box;display:grid;grid-template-columns:65% 35%;"]);
var GridTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "for-restaurants__GridTitle",
  componentId: "sc-1upsi6o-4"
})(["font-size:3rem;font-weight:700;color:rgba(0,0,0,1);line-height:3rem;margin:0;margin-bottom:16px;"]);
var GridItem = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "for-restaurants__GridItem",
  componentId: "sc-1upsi6o-5"
})(["width:100%;display:flex;flex-flow:column nowrap;padding:0 16px;box-sizing:border-box;&:last-of-type{justify-content:space-between;border-left:1px solid rgba(0,0,0,1);}"]);
var Features = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].ul.withConfig({
  displayName: "for-restaurants__Features",
  componentId: "sc-1upsi6o-6"
})(["list-style:none;margin:0;padding:0;display:flex;flex-flow:column nowrap;"]);
var Feature = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].li.withConfig({
  displayName: "for-restaurants__Feature",
  componentId: "sc-1upsi6o-7"
})([""]);
var FeatureIcon = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].svg.withConfig({
  displayName: "for-restaurants__FeatureIcon",
  componentId: "sc-1upsi6o-8"
})([""]);
var FeatureContent = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "for-restaurants__FeatureContent",
  componentId: "sc-1upsi6o-9"
})([""]);
var FeatureTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h3.withConfig({
  displayName: "for-restaurants__FeatureTitle",
  componentId: "sc-1upsi6o-10"
})(["font-size:2rem;font-weight:700;color:rgba(0,0,0,1);"]);
var ContactForm = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "for-restaurants__ContactForm",
  componentId: "sc-1upsi6o-11"
})([""]);
var ContactCaption = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "for-restaurants__ContactCaption",
  componentId: "sc-1upsi6o-12"
})(["padding:0;margin:0;margin-bottom:16px;font-size:1.25rem;font-weight:500;color:rgba(0,0,0,1);"]);
var ContactInput = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
  displayName: "for-restaurants__ContactInput",
  componentId: "sc-1upsi6o-13"
})(["display:inline-flex;align-items:center;justify-content:center;width:100%;padding:16px;box-sizing:border-box;background:rgba(0,0,0,0);border-radius:8px;border:1px solid rgba(0,0,0,1);appearance:none;font-size:2rem;font-weight:500;color:rgba(0,0,0,1);margin-bottom:16px;&:placeholder{font-weight:500;color:rgba(0,0,0,.69);}&:hover,&:focus{box-shadow:2px;}"]);
var ContactLink = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].a.withConfig({
  displayName: "for-restaurants__ContactLink",
  componentId: "sc-1upsi6o-14"
})(["display:inline-flex;align-items:center;justify-content:center;width:100%;padding:16px;box-sizing:border-box;appearance:none;background:rgba(0,0,0,1);border-radius:8px;border:1px solid rgba(0,0,0,1);font-size:2rem;font-weight:700;color:#fff;text-decoration:none;"]);

var ForRestaurants =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ForRestaurants, _Component);

  function ForRestaurants() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ForRestaurants);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ForRestaurants).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ForRestaurants, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ForRestaurantsWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "OpenMenu for Restaurants | Restaurant menus everywhere")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HeaderLogo, {
        version: "1.1",
        x: "0px",
        y: "0px",
        width: "848px",
        height: "320px",
        viewBox: "0 0 848 320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
        width: "320",
        height: "320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        class: "st0",
        d: "M57.2,188c13.9,0,25,9,25,21.9c0,12.7-10.5,21.8-25,21.8c-15.1,0-25.2-9.1-25.2-21.8 C32,197,43.1,188,57.2,188z M57.1,219.5c5.6,0,9.7-4,9.7-9.7c0-5.7-4.3-9.7-9.7-9.7c-5.5,0-9.8,4-9.8,9.7 C47.3,215.5,51.3,219.5,57.1,219.5z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        class: "st0",
        d: "M101.9,208.8c0,8.1,2.2,11.3,8.2,11.3c6,0,8.2-3.1,8.2-11.3v-19.6h14.4v23.1c0,13.8-7,19.4-22.7,19.4 s-22.7-5.6-22.7-19.4v-23.1h14.4V208.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        class: "st0",
        d: "M141.2,189.2h14.4v6h0.2c0,0,4.6-7.2,12.8-7.2c5.4,0,9.1,2.6,9.1,2.6l-6,12.1c0,0-2.7-2.3-7.5-2.3 c-7.5,0-8.6,7.3-8.6,8.4v21.7h-14.4V189.2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        class: "st0",
        d: "M35,245.5h14.4v4.3h0.2c3.3-3.2,7.4-5.6,12-5.6c5.5,0,11.7,2,14.6,7.6c4.4-5.2,9.3-7.6,13.9-7.6 c7.7,0,16.3,3.8,16.3,15.3v27.2H92v-23.3c0-4.1-2.2-7.7-7.3-7.7c-4.6,0-6.5,3.3-6.7,6.4v24.6H63.5v-23.3c0-4.1-2.2-7.7-7.3-7.7 c-4.8,0-6.7,3.6-6.7,6.9v24.1H35V245.5z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        class: "st0",
        d: "M126.7,268.1c0,6.4,5.4,8.5,9.1,8.5c4.7,0,6.7-0.9,10.2-4.6l10.4,5.1C151.7,285,144,288,134.7,288 c-12.6,0-23-9.8-23-21.8c0-12.1,10.4-21.9,23-21.9c12.7,0,22.4,7.4,22.4,21.9c0,0.6,0,1.4-0.1,1.9H126.7z M143.1,260.2 c-0.7-4.3-3.7-6.7-7.9-6.7c-5,0-7.8,2.9-8,6.7H143.1z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        class: "st0",
        d: "M163.1,245.5h14.4v4.3h0.2c3.3-3.2,7.4-5.6,12-5.6c7.7,0,18.4,3.8,18.4,15.3v27.2h-14.4v-23.3 c0-4.1-2.9-8-7.5-8c-4.3,0-8.6,3.9-8.6,8v23.3h-14.4V245.5z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        class: "st0",
        d: "M230.1,265.2c0,8.1,2.2,11.3,8.2,11.3c6,0,8.2-3.1,8.2-11.3v-19.6H261v23.1c0,13.8-7,19.4-22.7,19.4 s-22.7-5.6-22.7-19.4v-23.1h14.4V265.2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        class: "st0",
        d: "M288,278.8c0,5.1-4.2,9.2-9.4,9.2c-5.1,0-9.3-4.1-9.3-9.2c0-5.1,4.2-9.3,9.3-9.3 C283.8,269.6,288,273.7,288,278.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M357.9,181.2c0.1-12,5.8-20.2,16.1-20.2c7.2,0,11.7,3.7,11.7,3.7l-5,10c0,0-1.9-1.1-4.2-1.1c-3.6,0-4.4,2.4-4.4,8.1v8.3 h9.4v10.8h-9.4v30.2h-14.1v-30.2H352v-10.8h5.9V181.2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M406.6,188.7c13.6,0,24.5,8.9,24.5,21.7c0,12.6-10.3,21.6-24.5,21.6c-14.8,0-24.7-9-24.7-21.6 C381.9,197.7,392.8,188.7,406.6,188.7z M406.5,220c5.5,0,9.5-4,9.5-9.6c0-5.7-4.2-9.7-9.5-9.7c-5.4,0-9.6,4-9.6,9.7 C396.9,216,400.8,220,406.5,220z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M436.9,189.9H451v5.9h0.2c0,0,4.5-7.1,12.5-7.1c5.3,0,9,2.6,9,2.6l-5.9,12c0,0-2.6-2.2-7.4-2.2c-7.4,0-8.4,7.3-8.4,8.3 v21.6h-14.1V189.9z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M355.5,245.8h14.1v5.9h0.2c0,0,4.5-7.1,12.5-7.1c5.3,0,9,2.6,9,2.6l-5.9,12c0,0-2.6-2.2-7.4-2.2c-7.4,0-8.4,7.3-8.4,8.3 v21.6h-14.1V245.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M405.9,268.3c0,6.3,5.3,8.5,8.9,8.5c4.6,0,6.6-0.9,10-4.6l10.2,5.1c-4.6,7.7-12.1,10.7-21.3,10.7 c-12.4,0-22.5-9.7-22.5-21.6c0-12,10.2-21.7,22.5-21.7c12.5,0,22,7.3,22,21.7c0,0.6,0,1.4-0.1,1.9H405.9z M421.9,260.4 c-0.6-4.3-3.6-6.6-7.8-6.6c-4.9,0-7.6,2.9-7.8,6.6H421.9z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M473,247.8l-4.6,9.3c0,0-4.8-2.6-9.1-2.6c-3.1,0-4.4,0.6-4.4,2.5c0,2.2,2.9,2.8,6.4,3.9c5.4,1.7,12.5,4.7,12.5,13.1 c0,12.1-11,14-19.4,14c-9.9,0-15.8-5.5-15.8-5.5l5.8-9.7c0,0,5.6,4.7,10.2,4.7c2,0,4.4-0.2,4.4-3c0-3-4.5-3.2-9.1-5.6 c-4.2-2.2-8.3-5-8.3-11.2c0-8.4,7.1-13.2,17.9-13.2C467.2,244.6,473,247.8,473,247.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M481.8,230.6h14.1v15.3h8.6v10.8h-8.6v13c0,3.8,1,5.7,3.2,5.7c1.8,0,3.5-1.3,3.5-1.3l3.5,11.4c0,0-4.6,2.6-10.4,2.6 c-11.3,0-14-8.4-14-15.7v-15.7h-5.9v-10.8h5.9V230.6z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M527.6,244.6c5.5,0,10.1,1.8,13.4,5.1v-3.9h14.1v41h-14v-4.6H541c-3,3.4-7.8,5.8-13.4,5.8c-12,0-20.4-9.7-20.4-21.6 C507.2,254.4,515.6,244.6,527.6,244.6z M531.8,275.9c5.5,0,9.5-4,9.5-9.6c0-5.7-4.2-9.7-9.5-9.7c-5.4,0-9.6,4-9.6,9.7 C522.2,271.9,526.1,275.9,531.8,275.9z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M577.5,265.3c0,8.1,2.2,11.2,8.1,11.2c5.9,0,8.1-3.1,8.1-11.2v-19.5h14.1v22.9c0,13.7-6.9,19.2-22.2,19.2 c-15.3,0-22.2-5.5-22.2-19.2v-22.9h14.1V265.3z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M615.9,245.8h14.1v5.9h0.2c0,0,4.5-7.1,12.5-7.1c5.3,0,9,2.6,9,2.6l-5.9,12c0,0-2.6-2.2-7.4-2.2c-7.4,0-8.4,7.3-8.4,8.3 v21.6h-14.1V245.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M671.9,244.6c5.5,0,10.1,1.8,13.4,5.1v-3.9h14.1v41h-14v-4.6h-0.2c-3,3.4-7.8,5.8-13.4,5.8c-12,0-20.4-9.7-20.4-21.6 C651.5,254.4,659.9,244.6,671.9,244.6z M676.1,275.9c5.5,0,9.5-4,9.5-9.6c0-5.7-4.2-9.7-9.5-9.7c-5.4,0-9.6,4-9.6,9.7 C666.5,271.9,670.3,275.9,676.1,275.9z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M708.4,245.8h14.1v4.3h0.2c3.2-3.2,7.3-5.5,11.7-5.5c7.5,0,18,3.8,18,15.2v27h-14.1v-23.2c0-4.1-2.8-8-7.4-8 c-4.2,0-8.4,3.9-8.4,8v23.2h-14.1V245.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M762.5,230.6h14.1v15.3h8.6v10.8h-8.6v13c0,3.8,1,5.7,3.2,5.7c1.8,0,3.5-1.3,3.5-1.3l3.5,11.4c0,0-4.6,2.6-10.4,2.6 c-11.3,0-14-8.4-14-15.7v-15.7h-5.9v-10.8h5.9V230.6z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M822.6,247.8l-4.6,9.3c0,0-4.8-2.6-9.1-2.6c-3.1,0-4.4,0.6-4.4,2.5c0,2.2,2.9,2.8,6.4,3.9c5.4,1.7,12.5,4.7,12.5,13.1 c0,12.1-11,14-19.4,14c-9.9,0-15.8-5.5-15.8-5.5l5.8-9.7c0,0,5.6,4.7,10.2,4.7c2,0,4.4-0.2,4.4-3c0-3-4.5-3.2-9.1-5.6 c-4.2-2.2-8.3-5-8.3-11.2c0-8.4,7.1-13.2,17.9-13.2C816.8,244.6,822.6,247.8,822.6,247.8z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M848,278.9c0,5-4.1,9.1-9.2,9.1c-5,0-9.1-4.1-9.1-9.1c0-5.1,4.1-9.2,9.1-9.2C843.9,269.7,848,273.8,848,278.9z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      })))), "\0"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "With OurMenu for restaurants, you get:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Features, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Feature, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureIcon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        width: "96px",
        height: "96px",
        viewBox: "0 0 96 96",
        version: "1.1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("defs", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        id: "path-1",
        points: "0.000304761905 0.000304761905 95.6952381 0.000304761905 95.6952381 95.3892571 0.000304761905 95.3892571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "For-Restaurants",
        transform: "translate(-209.000000, -419.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Group-3",
        transform: "translate(209.000000, 419.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("mask", {
        id: "mask-2",
        fill: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("use", {
        href: "#path-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Clip-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M30.8574476,86.0193524 C27.0479238,86.3241143 24.9145905,90.286019 27.9622095,93.6384 C31.3145905,96.686019 35.4288762,94.5526857 35.5812571,90.7431619 C35.7336381,88.4574476 38.0193524,87.086019 40.1526857,89.2193524 L45.1812571,94.2464 C46.7050667,95.7702095 49.1431619,95.7702095 50.6669714,94.2464 L55.6955429,89.2193524 C57.8288762,87.086019 59.9622095,88.3050667 60.1145905,90.590781 C60.4178286,94.4003048 64.3812571,96.5321143 67.7336381,93.3336381 C70.7812571,89.9812571 68.6479238,86.0193524 64.9892571,85.7145905 C62.7035429,85.5622095 61.486019,83.4288762 63.4654476,81.294019 L68.4955429,76.2669714 C70.0193524,74.7431619 70.0193524,72.1511619 68.4955429,70.6273524 L64.9892571,67.1241143 C64.5336381,68.3416381 63.9241143,69.4098286 63.0098286,70.3241143 C59.9622095,73.3717333 55.0844952,73.3717333 51.5812571,70.1717333 L51.4288762,70.0193524 L51.2749714,69.8654476 C48.0764952,66.3622095 47.9241143,61.486019 51.1241143,58.4384 C52.0368762,57.5241143 53.1050667,56.9145905 54.3225905,56.4574476 L50.6669714,52.8003048 C49.1431619,51.2764952 46.7050667,51.2764952 45.1812571,52.8003048 L40.0003048,57.9812571 C37.8669714,60.1145905 35.7336381,58.7431619 35.5812571,56.4574476 C35.2764952,52.6479238 31.3145905,50.5145905 27.9622095,53.5622095 C24.9145905,56.9145905 27.0479238,60.8764952 30.7050667,61.1812571 C32.990781,61.3336381 34.3622095,63.6193524 32.2288762,65.6003048 L27.2003048,70.6273524 C25.6764952,72.1511619 25.6764952,74.590781 27.2003048,76.1145905 L32.2288762,81.1431619 C34.5145905,83.5797333 33.1431619,85.8654476 30.8574476,86.0193524 Z M70.9336381,32.3812571 C73.9812571,35.4288762 73.9812571,40.3050667 70.7812571,43.8098286 L70.6288762,43.9622095 L70.4764952,44.1145905 C66.9717333,47.3145905 62.0955429,47.4669714 59.0479238,44.2669714 C58.1321143,43.3526857 57.5241143,42.286019 57.0669714,41.0669714 L53.4098286,44.7241143 C51.886019,46.2479238 51.886019,48.686019 53.4098286,50.2098286 L58.590781,55.390781 C60.7241143,57.5241143 59.3526857,59.6574476 57.0669714,59.8098286 C53.2574476,60.1145905 51.1241143,64.0764952 54.1717333,67.4288762 C57.5241143,70.4764952 61.486019,68.3416381 61.790781,64.686019 C61.9416381,62.4003048 64.2273524,61.0288762 66.2098286,63.1622095 L71.2384,68.190781 C72.7622095,69.7145905 75.2003048,69.7145905 76.7241143,68.190781 L81.7511619,63.1622095 C83.886019,61.0288762 86.1717333,62.4003048 86.3225905,64.686019 C86.6288762,68.4955429 90.590781,70.6273524 93.9416381,67.5797333 C96.9892571,64.2288762 94.8574476,60.1145905 91.0479238,59.9622095 C88.7622095,59.8098286 87.390781,57.5241143 89.5241143,55.390781 L94.5526857,50.3622095 C96.0764952,48.8384 96.0764952,46.4003048 94.5526857,44.8764952 L89.5241143,39.8479238 C87.390781,37.7145905 88.6083048,35.5812571 90.894019,35.4288762 C94.7035429,35.1241143 96.8384,31.1622095 93.6384,27.8098286 C90.286019,24.7622095 86.3225905,26.8955429 86.0193524,30.5526857 C85.8669714,32.8384 83.7336381,34.0574476 81.6003048,32.0764952 L76.5717333,27.0479238 C75.0479238,25.5241143 72.4574476,25.5241143 70.9336381,27.0479238 L67.4288762,30.5526857 C68.9526857,30.8574476 70.0193524,31.4669714 70.9336381,32.3812571 Z M27.5050667,18.8193524 C25.9812571,20.3431619 25.9812571,22.9336381 27.5050667,24.4574476 L31.0098286,27.9622095 C31.4669714,26.7431619 32.0764952,25.6764952 32.990781,24.7622095 C36.0384,21.7145905 40.9145905,21.7145905 44.4193524,24.9145905 L44.5717333,25.0669714 L44.7241143,25.2193524 C47.9241143,28.7241143 48.0764952,33.6003048 44.8764952,36.6479238 C43.9622095,37.5622095 42.8955429,38.1717333 41.6764952,38.6288762 L45.3336381,42.286019 C46.8574476,43.8098286 49.2955429,43.8098286 50.8193524,42.286019 L56.0003048,37.1050667 C58.1321143,34.9717333 60.2669714,36.3431619 60.4178286,38.6288762 C60.7241143,42.4384 64.686019,44.5717333 68.0368762,41.5241143 C71.0844952,38.1717333 68.9526857,34.2098286 65.2955429,33.9050667 C63.0098286,33.7526857 61.6384,31.4669714 63.7717333,29.486019 L68.798781,24.4574476 C70.3225905,22.9336381 70.3225905,20.4955429 68.798781,18.9717333 L63.7717333,13.9431619 C61.6384,11.8098286 63.0098286,9.52411429 65.2955429,9.37173333 C69.1050667,9.06697143 71.2384,5.10506667 68.190781,1.75268571 C64.8384,-1.29493333 60.7241143,0.8384 60.5717333,4.64792381 C60.4178286,6.9336381 58.1321143,8.30506667 56.0003048,6.17173333 L50.9717333,1.1431619 C49.4479238,-0.380647619 47.0098286,-0.380647619 45.486019,1.1431619 L40.4574476,6.17173333 C38.3241143,8.30506667 36.190781,7.08601905 36.0384,4.80030476 C35.7336381,0.990780952 31.7717333,-1.14255238 28.4193524,2.05744762 C25.3717333,5.40982857 27.5050667,9.37173333 31.1622095,9.67649524 C33.4479238,9.82887619 34.6669714,11.9622095 32.686019,14.0955429 L27.5050667,18.8193524 Z M6.47649524,39.8479238 C8.60982857,37.7145905 7.2384,35.4288762 4.95268571,35.2764952 C1.1431619,34.9717333 -0.990171429,31.0098286 2.05744762,27.6574476 C5.40982857,24.6098286 9.52411429,26.7431619 9.67649524,30.5526857 C9.82887619,32.8384 12.1145905,34.2098286 14.2479238,32.0764952 L19.2764952,27.0479238 C20.8003048,25.5241143 23.2384,25.5241143 24.7622095,27.0479238 L29.790781,32.0764952 C31.9241143,34.2098286 34.2098286,32.8384 34.2098286,30.5526857 C34.5145905,26.7431619 38.4764952,24.6098286 41.8288762,27.8098286 C44.8764952,31.1622095 42.7431619,35.2764952 38.9336381,35.4288762 C36.6479238,35.5812571 35.2764952,37.8669714 37.4098286,39.8479238 L42.590781,45.0288762 C44.1145905,46.5526857 44.1145905,48.990781 42.590781,50.5145905 L38.9336381,54.1717333 C38.4764952,52.9526857 37.8669714,51.886019 36.9526857,50.9717333 C33.7526857,47.7717333 29.0288762,47.9241143 25.5241143,51.1241143 L25.3717333,51.2764952 L25.2193524,51.4288762 C22.0193524,54.9336381 21.8669714,59.8098286 25.0669714,62.8574476 C25.9812571,63.7717333 27.0479238,64.3812571 28.2669714,64.8384 L24.7622095,68.3416381 C23.2384,69.8654476 20.6479238,69.8654476 19.1241143,68.3416381 L14.0955429,63.3145905 C11.9622095,61.1812571 9.82887619,62.4003048 9.67649524,64.8384 C9.37173333,68.6479238 5.40982857,70.7812571 2.05744762,67.5797333 C-0.990171429,64.2288762 1.1431619,60.1145905 4.80030476,59.9622095 C7.08601905,59.8098286 8.30506667,57.6764952 6.17173333,55.5431619 L1.1431619,50.5145905 C-0.380647619,48.990781 -0.380647619,46.5526857 1.1431619,45.0288762 L6.47649524,39.8479238 Z",
        id: "Fill-1",
        fill: "#000000",
        mask: "url(#mask-2)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(FeatureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Seamless integration."))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GridTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Get early access."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ContactForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ContactCaption, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "With OurMenu about to exit its beta, we are looking for forward-thinking restaurants to launch with. You'll get all of the features (especially as we add new ones), some of the bugs, and none of the cost. If you're interested, get in touch."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ContactInput, {
        type: "text",
        name: "businessName",
        placeholder: "Restaurant name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ContactLink, {
        href: "mailto: chris@ourmenu.co",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Send Chris an email")))));
    }
  }]);

  return ForRestaurants;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ForRestaurants);

/***/ })

})
//# sourceMappingURL=for-restaurants.js.8dbcbf0a4e084c62f5bc.hot-update.js.map