"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _context = _interopRequireDefault(require("../shared/context"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _types = require("../shared/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var toArr = function toArr(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
};

var isActive = function isActive(_ref) {
  var isCurrent = _ref.isCurrent;
  return isCurrent ? {
    className: 'active'
  } : null;
};

var flatMap = function flatMap(arr, callback) {
  var result = [];

  var _flatMap = function _flatMap(node) {
    if ((0, _types.isArr)(node)) {
      node.forEach(_flatMap);
    } else if (node) {
      if ((0, _types.isArr)(node.children) && node.children.length) {
        _flatMap(node.children);
      }

      result.push(callback(node));
    }
  };

  _flatMap(arr);

  return result;
};

var CanNotFindDocContent = function CanNotFindDocContent() {
  return _react.default.createElement("div", null, "Can not find document contents.");
};

var getDefaultComponent = function getDefaultComponent(doc) {
  if (doc && doc.children && doc.children.length && doc.children[0]) {
    if (doc.children[0].component) {
      return doc.children[0].component;
    } else {
      return getDefaultComponent(doc.children[0]);
    }
  }

  return doc && doc.component || CanNotFindDocContent;
};

var SideMenu = function SideMenu(_ref2) {
  var dataSource = _ref2.dataSource;
  dataSource = toArr(dataSource);
  var content = dataSource.map(function (_ref3) {
    var title = _ref3.title,
        slug = _ref3.slug,
        component = _ref3.component,
        children = _ref3.children;
    return _react.default.createElement("li", {
      key: slug
    }, component ? _react.default.createElement(_router.Link, {
      className: "menu-node",
      getProps: isActive,
      to: slug
    }, title) : _react.default.createElement("span", {
      className: "menu-node"
    }, title), _react.default.createElement(SideMenu, {
      dataSource: children
    }));
  });

  if (dataSource.length) {
    return _react.default.createElement("ul", null, content);
  } else {
    return _react.default.createElement(_react.default.Fragment, null);
  }
};

var _default = (0, _styledComponents.default)(function (_ref4) {
  var doc = _ref4.doc,
      className = _ref4.className,
      path = _ref4.path;
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("div", {
    className: "site-nav"
  }, _react.default.createElement(SideMenu, {
    dataSource: doc.children
  })), _react.default.createElement("div", {
    className: "site-body"
  }, _react.default.createElement(_router.Router, null, doc.component ? _react.default.createElement(doc.component, {
    path: '/'
  }) : _react.default.createElement(getDefaultComponent(doc), {
    path: '/'
  }), flatMap(doc.children, function (childDoc) {
    return _react.default.createElement(getDefaultComponent(childDoc), {
      path: childDoc.slug,
      key: childDoc.slug
    });
  }))));
})(_templateObject());

exports.default = _default;