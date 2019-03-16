"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  white-space: nowrap;\n  flex-shrink: 3;\n  min-width: 0;\n  overflow: auto;\n  li {\n    display: inline-block;\n    position: relative;\n    a {\n      color: #666;\n      text-decoration: none;\n      padding: 0 15px;\n      height: 57px;\n      line-height: 60px;\n      display: block;\n      border-bottom: 3px solid transparent;\n      transition: all 0.35s ease-out;\n      &:hover {\n        color: ", ";\n      }\n      &.active {\n        background: ", ";\n        border-bottom: 3px solid ", ";\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var isActive = function isActive(home) {
  return function (_ref) {
    var isPartiallyCurrent = _ref.isPartiallyCurrent,
        isCurrent = _ref.isCurrent;
    if (home) return isCurrent ? {
      className: 'active'
    } : null;
    return isPartiallyCurrent ? {
      className: 'active'
    } : null;
  };
};

var _default = (0, _styledComponents.withTheme)((0, _styledComponents.default)(function (_ref2) {
  var dataSource = _ref2.dataSource,
      className = _ref2.className,
      theme = _ref2.theme;
  return _react.default.createElement("ul", {
    className: "site-navigator " + className
  }, dataSource.map(function (_ref3) {
    var title = _ref3.title,
        slug = _ref3.slug,
        home = _ref3.home;
    return _react.default.createElement("li", {
      className: "nav-item",
      key: slug
    }, _react.default.createElement(_router.Link, {
      getProps: isActive(home),
      to: home ? '/' : "/" + slug
    }, title));
  }));
})(_templateObject(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.base;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.main[0];
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.main[3];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.base;
}));

exports.default = _default;