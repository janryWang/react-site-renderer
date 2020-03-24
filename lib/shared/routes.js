"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _header = _interopRequireDefault(require("../components/header"));

var _body = _interopRequireDefault(require("../components/body"));

var _home = _interopRequireDefault(require("../components/home"));

var _classnames = _interopRequireDefault(require("classnames"));

var _empty = _interopRequireDefault(require("../components/empty"));

var _context = _interopRequireDefault(require("./context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  font-family: Lato, 'Chinese Quote', -apple-system, BlinkMacSystemFont,\n    'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',\n    'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',\n    'Segoe UI Emoji', 'Segoe UI Symbol';\n  font-size: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\nbody{\n  margin:0;\n}\n*, *:before, *:after {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var _default = (0, _styledComponents["default"])(function (_ref) {
  var className = _ref.className;

  var _useContext = (0, _react.useContext)(_context["default"]),
      homes = _useContext.homes,
      headers = _useContext.headers;

  return /*#__PURE__*/_react["default"].createElement(_router.Match, {
    path: "/"
  }, function (props) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])(className, {
        home: !!props.match
      })
    }, /*#__PURE__*/_react["default"].createElement(GlobalStyle, null), /*#__PURE__*/_react["default"].createElement(_header["default"], {
      dataSource: headers
    }), /*#__PURE__*/_react["default"].createElement(_router.Router, null, homes.length === 0 && headers[0] && /*#__PURE__*/_react["default"].createElement(_router.Redirect, {
      from: "/",
      noThrow: true,
      to: headers[0].slug
    }), /*#__PURE__*/_react["default"].createElement(_home["default"], {
      dataSource: homes,
      path: "/"
    }), headers.map(function (doc, index) {
      if (doc.children && doc.children.length) {
        return /*#__PURE__*/_react["default"].createElement(_body["default"], {
          doc: doc,
          path: doc.slug + "/*",
          key: index
        });
      } else if (doc.component) {
        return _react["default"].createElement(doc.component, {
          path: "" + doc.slug,
          key: index
        });
      } else {
        return /*#__PURE__*/_react["default"].createElement(_empty["default"], {
          path: "" + doc.slug,
          key: index
        });
      }
    })));
  });
})(_templateObject2());

exports["default"] = _default;