"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = _interopRequireDefault(require("../shared/context"));

var _router = require("@reach/router");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _search = _interopRequireDefault(require("./search"));

var _navigator = _interopRequireDefault(require("./navigator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border-bottom: 1px solid rgb(238, 238, 238);\n  background: #fff;\n  box-shadow: 0 0 10px #eeeeeec9;\n  height:60px;\n  .header-content {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0 30px;\n    height:60px;\n    @media (max-width: 860px) {\n      margin: 0 20px;\n    }\n    @media (max-width: 690px) {\n      margin: 0 10px;\n    }\n    .logo-wrapper{\n      font-size: 20px;\n      font-weight: 300;\n      text-transform: uppercase;\n      text-decoration: none;\n    }\n    .logo {\n      height: 60px;\n      display: flex;\n      align-items: center;\n      position: relative;\n      justify-content: left;\n      width: 270px;\n      @media (max-width: 860px) {\n        width: 180px;\n      }\n    }\n    \n    img {\n      height: 60px;\n      display: inline-block;\n    }\n    &:after {\n      content: '';\n      display: block;\n      height: 22px;\n      border-left: 1px solid #eee;\n      position: absolute;\n      top: 50%;\n      right: 0;\n      transform: translateY(-50%);\n      @media (max-width: 690px) {\n        display: none;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var _default = (0, _styledComponents["default"])(function (_ref) {
  var dataSource = _ref.dataSource,
      className = _ref.className;

  var _useContext = (0, _react.useContext)(_context["default"]),
      logo = _useContext.logo,
      search = _useContext.search;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "site-header " + className
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-content"
  }, /*#__PURE__*/_react["default"].createElement(_router.Link, {
    to: "/",
    className: "logo-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "logo"
  }, _react["default"].isValidElement(logo) ? logo : logo ? /*#__PURE__*/_react["default"].createElement("img", {
    src: logo
  }) : 'This is Logo')), /*#__PURE__*/_react["default"].createElement(_search["default"], search), /*#__PURE__*/_react["default"].createElement(_navigator["default"], {
    dataSource: dataSource
  })));
})(_templateObject());

exports["default"] = _default;