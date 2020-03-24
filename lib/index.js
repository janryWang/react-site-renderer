"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _connect = _interopRequireDefault(require("./shared/connect"));

var _docs = require("./shared/docs");

var _context = _interopRequireDefault(require("./shared/context"));

var _routes = _interopRequireDefault(require("./shared/routes"));

var _router = require("@reach/router");

var _hashSource = _interopRequireDefault(require("hash-source"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var source = (0, _hashSource["default"])();
var history = (0, _router.createHistory)(source);
window.addEventListener("message", function (e) {
  if (e.data.type == "click") {
    history.navigate(e.data.url);
  }
}, false);
var ReactSiteRenderer = (0, _connect["default"])()(function (_ref) {
  var docs = _ref.docs,
      others = _objectWithoutPropertiesLoose(_ref, ["docs"]);

  var _parseDocs = (0, _docs.parseDocs)(docs),
      homes = _parseDocs.homes,
      headers = _parseDocs.headers;

  return /*#__PURE__*/_react["default"].createElement(_router.LocationProvider, {
    history: history
  }, /*#__PURE__*/_react["default"].createElement(_context["default"].Provider, {
    value: _extends({
      docs: docs
    }, others, {
      homes: homes,
      headers: headers
    })
  }, /*#__PURE__*/_react["default"].createElement(_routes["default"], null)));
});
ReactSiteRenderer.defaultProps = {
  docs: [],
  color: "blue"
};
var _default = ReactSiteRenderer;
exports["default"] = _default;