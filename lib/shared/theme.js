"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _palx = _interopRequireDefault(require("palx"));

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _cubicBezier = _interopRequireDefault(require("cubic-bezier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createColors = function createColors(h, s, b) {
  var duration = 200;
  var epsilon = 1000 / 60 / duration / 4;
  var curve = (0, _cubicBezier["default"])(0.75, 0.16, 0.37, 0.98, epsilon);
  var results = [],
      length = 10;

  for (var i = length - 1; i >= 0; i--) {
    results.push(_chromaJs["default"].hsl(h, s, curve(i / length)).hex());
  }

  return results;
};

var _default = function _default(color) {
  var themes = (0, _palx["default"])(color);

  var _chroma$hsl = (0, _chromaJs["default"])(color).hsl(),
      h = _chroma$hsl[0],
      s = _chroma$hsl[1],
      l = _chroma$hsl[2];

  themes.main = createColors(h, s, l);
  return themes;
};

exports["default"] = _default;