"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _header = _interopRequireDefault(require("../components/header"));

var _body = _interopRequireDefault(require("../components/body"));

var _home = _interopRequireDefault(require("../components/home"));

var _context = _interopRequireDefault(require("./context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  font-family: Lato, 'Chinese Quote', -apple-system, BlinkMacSystemFont,\n    'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',\n    'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',\n    'Segoe UI Emoji', 'Segoe UI Symbol';\n  font-size: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\nbody{\n  margin:0;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var _default = (0, _styledComponents.default)(function (_ref) {
  var className = _ref.className;

  var _useContext = (0, _react.useContext)(_context.default),
      homes = _useContext.homes,
      headers = _useContext.headers;

  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement(GlobalStyle, null), _react.default.createElement(_header.default, {
    dataSource: headers
  }), _react.default.createElement(_router.Router, null, _react.default.createElement(_home.default, {
    dataSource: homes,
    path: "/"
  }), headers.map(function (doc) {
    return _react.default.createElement(_body.default, {
      doc: doc,
      path: doc.slug + "/*",
      key: doc.slug
    });
  })));
})(_templateObject2());

exports.default = _default;