"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = _interopRequireDefault(require("../shared/context"));

var _router = require("@reach/router");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _search = _interopRequireDefault(require("./search"));

var _navigator = _interopRequireDefault(require("./navigator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var _default = (0, _styledComponents.default)(function (_ref) {
  var dataSource = _ref.dataSource,
      className = _ref.className;

  var _useContext = (0, _react.useContext)(_context.default),
      logo = _useContext.logo,
      search = _useContext.search;

  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("div", {
    className: "header-content"
  }, _react.default.createElement("div", {
    className: "header-left"
  }, _react.default.createElement(_router.Link, {
    to: "/"
  }, _react.default.createElement("div", {
    className: "logo"
  }, _react.default.isValidElement(logo) ? logo : _react.default.createElement("img", {
    src: logo
  }))), _react.default.createElement(_search.default, search), _react.default.createElement(_navigator.default, {
    dataSource: dataSource
  }))));
})(_templateObject());

exports.default = _default;