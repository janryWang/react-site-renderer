"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

var isActive = function isActive(_ref) {
  var isCurrent = _ref.isCurrent;
  return isCurrent ? {
    className: 'active'
  } : null;
};

var _default = (0, _styledComponents.default)(function (_ref2) {
  var dataSource = _ref2.dataSource,
      className = _ref2.className;
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("ul", {
    className: "nav-list"
  }, dataSource.map(function (_ref3) {
    var title = _ref3.title,
        slug = _ref3.slug,
        home = _ref3.home;
    return _react.default.createElement("li", {
      className: "nav-item",
      key: slug
    }, _react.default.createElement(_router.Link, {
      getProps: isActive,
      to: home ? '/' : "/" + slug
    }, title));
  })));
})(_templateObject());

exports.default = _default;