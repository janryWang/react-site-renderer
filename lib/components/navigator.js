"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _fi = require("react-icons/fi");

var _useClickAway = _interopRequireDefault(require("react-use/lib/useClickAway"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  user-select: none;\n  .top-menu-btn {\n    display: none;\n    cursor: pointer;\n    color: ", ";\n    @media (max-width: 860px) {\n      display: block;\n    }\n  }\n\n  .site-navigator {\n    display: block;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    white-space: nowrap;\n    flex-shrink: 3;\n    min-width: 0;\n    overflow: auto;\n    li {\n      display: inline-block;\n      position: relative;\n      a {\n        color: #666;\n        text-decoration: none;\n        padding: 0 15px;\n        height: 60px;\n        line-height: 60px;\n        display: block;\n        border-bottom: 3px solid transparent;\n        transition: all 0.35s ease-out;\n        &:hover {\n          color: ", ";\n        }\n        &.active {\n          background: ", ";\n          border-bottom: 3px solid ", ";\n          color: ", ";\n        }\n      }\n    }\n  }\n\n  .site-navigator {\n    @media (max-width: 860px) {\n      display: none;\n      padding: 10px;\n      &::after {\n        display: block;\n        content: '';\n        transform: rotate(45deg);\n        position: absolute;\n        display: block;\n        border-color: transparent;\n        border-style: solid;\n        background: #fff;\n        width: 8.48528137px;\n        height: 8.48528137px;\n        box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);\n        right: 16px;\n        top: -6px;\n      }\n      &.visible {\n        display: flex;\n        flex-direction: column;\n        position: absolute;\n        right: 0;\n        top: 100%;\n        margin-top: 10px;\n        background: #fff;\n        box-shadow: 0 3px 10px #5f5f5f33;\n        border-radius: 3px;\n        align-items: flex-start;\n        z-index: 999;\n        a {\n          border-bottom: none !important;\n          min-width: 200px;\n          line-height: 40px;\n          height: auto;\n          border-left: 3px solid transparent;\n        }\n        a.active {\n          border-left: 3px solid ", ";\n        }\n      }\n    }\n  }\n"]);

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

var _default = (0, _styledComponents.withTheme)((0, _styledComponents["default"])(function (_ref2) {
  var dataSource = _ref2.dataSource,
      className = _ref2.className,
      theme = _ref2.theme;
  var ref = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      visible = _useState[0],
      setVisible = _useState[1];

  (0, _useClickAway["default"])(ref, function () {
    if (visible === false) return;
    setVisible(!visible);
  });
  return _react["default"].createElement("div", {
    className: className,
    ref: ref
  }, _react["default"].createElement("ul", {
    className: (0, _classnames["default"])("site-navigator", {
      visible: visible
    })
  }, dataSource.map(function (_ref3) {
    var title = _ref3.title,
        slug = _ref3.slug,
        home = _ref3.home,
        link = _ref3.link,
        type = _ref3.type;
    return _react["default"].createElement("li", {
      className: "nav-item",
      key: slug
    }, link && type !== 'html' && _react["default"].createElement("a", {
      href: link,
      target: "_blank"
    }, title, _react["default"].createElement(_fi.FiExternalLink, {
      style: {
        marginLeft: 4,
        fontSize: 10
      }
    })), !link && _react["default"].createElement(_router.Link, {
      getProps: isActive(home),
      onClick: function onClick() {
        setVisible(false);
      },
      to: home ? '/' : "/" + slug
    }, title));
  })), _react["default"].createElement(!visible ? _fi.FiMenu : _fi.FiX, {
    className: 'top-menu-btn',
    style: {
      fontSize: 26
    },
    strokeWidth: 1,
    onClick: function onClick() {
      return setVisible(!visible);
    }
  }));
})(_templateObject(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.main[4];
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.base;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.main[0];
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.main[3];
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.base;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.main[3];
}));

exports["default"] = _default;