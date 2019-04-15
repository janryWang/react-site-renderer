"use strict";

exports.__esModule = true;
exports.slugify = void 0;

var _hashids = _interopRequireDefault(require("hashids"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var slugify = function slugify(string, path) {
  var hashids = new _hashids["default"](string);
  return hashids.encode.apply(hashids, path);
};

exports.slugify = slugify;