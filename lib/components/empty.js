"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  min-height: 460px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .empty-content {\n    text-align: center;\n    line-height:40px;\n    color:#777;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var _default = (0, _styledComponents.default)(function (_ref) {
  var className = _ref.className;
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("div", {
    className: "empty-content"
  }, _react.default.createElement("img", {
    height: 80,
    src: "//img.alicdn.com/tfs/TB1cVncKAzoK1RjSZFlXXai4VXa-184-152.svg"
  }), _react.default.createElement("div", null, "Page Not Found")));
})(_templateObject());

exports.default = _default;