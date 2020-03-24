"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return function (Target) {
    return function (props) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: (0, _theme["default"])(props.color)
      }, /*#__PURE__*/_react["default"].createElement(Target, props));
    };
  };
};

exports["default"] = _default;