"use strict";

exports.__esModule = true;
exports.parseDocs = void 0;

var _types = require("./types");

var _slugify = require("./slugify");

var traverse = function traverse(docs, callback) {
  var _traverse = function _traverse(docs, path) {
    if (path === void 0) {
      path = [];
    }

    if ((0, _types.isArr)(docs)) {
      docs.forEach(function (doc, key) {
        return _traverse(doc, path.concat(key));
      });
    } else if (docs) {
      docs.slug = (0, _slugify.slugify)(docs.title, [9, 9].concat(path));

      if ((0, _types.isFn)(callback)) {
        callback(docs, path);
      }

      if ((0, _types.isArr)(docs.children)) {
        _traverse(docs.children, path);
      }
    }
  };

  return _traverse(docs);
};

var parseDocs = function parseDocs(docs) {
  var homes = [],
      headers = [];
  traverse(docs, function (doc, path) {
    if (doc.home) {
      homes.push(doc);
    }

    if (path.length == 1) {
      headers.push(doc);
    }
  });
  return {
    homes: homes,
    headers: headers
  };
};

exports.parseDocs = parseDocs;