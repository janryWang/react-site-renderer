"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _context = _interopRequireDefault(require("../shared/context"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _types = require("../shared/types");

var _reactStikky = _interopRequireDefault(require("react-stikky"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  .sticky-wrapper{\n    width:300px;\n  }\n  .site-nav {\n    min-width: 300px;\n    border-right: 1px solid #eee;\n    padding-top: 30px;\n    padding-bottom:30px;\n    min-height: 300px;\n    ul {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n    }\n    li {\n      span.menu-node {\n        text-decoration: none;\n        color: #333;\n        font-size: 14px;\n        line-height: 25px;\n        min-height: 40px;\n        padding-right: 10px;\n        display: flex;\n        align-items: center;\n      }\n      .menu-node.no-page {\n        color: #777;\n      }\n      a {\n        text-decoration: none;\n        color: #333;\n        font-size: 14px;\n        line-height: 25px;\n        display: flex;\n        min-height: 40px;\n        padding-right: 10px;\n        align-items: center;\n        position: relative;\n        z-index: 1;\n        transition: all 0.25s ease-out;\n        border-right: 0px solid transparent;\n        span {\n          display: block;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          position: relative;\n          z-index: 1;\n        }\n        &:hover {\n          color: ", ";\n        }\n\n        &.active {\n          border-right: 3px solid ", ";\n          position: relative;\n          &::after {\n            content: '';\n            display: block;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            right: 0;\n            width: 200%;\n            background: ", ";\n            opacity: 0.4;\n            z-index: 0;\n          }\n          a {\n            color: ", ";\n          }\n        }\n      }\n    }\n  }\n  .site-body {\n    padding: 30px;\n    flex-grow: 3;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var bodyRef = _react.default.createRef();

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
  return doc && doc.component || CanNotFindDocContent;
};

var getStartDocPath = function getStartDocPath(doc) {
  if (doc && doc.children) {
    if (doc.children[0]) {
      if (doc.children[0].component) {
        return doc.children[0].slug;
      } else {
        return getStartDocPath(doc.children[0]);
      }
    }
  }
};

var getStickyState = function getStickyState() {
  if (!bodyRef || bodyRef && !bodyRef.current) return;
  var wrapper = bodyRef.current;
  var wrapperRect = wrapper.getBoundingClientRect();
  var offset = window.pageYOffset + window.innerHeight - wrapperRect.height - wrapper.offsetTop;

  if (offset > 0) {
    return {
      menuOffset: offset,
      notSticky: window.innerWidth <= 710
    };
  } else {
    return {
      menuOffset: 0,
      notSticky: window.innerWidth <= 710
    };
  }
};

var SideMenu = function SideMenu(_ref2) {
  var dataSource = _ref2.dataSource,
      paddingLeft = _ref2.paddingLeft,
      autoIndex = _ref2.autoIndex;
  dataSource = toArr(dataSource);
  var content = dataSource.map(function (_ref3) {
    var title = _ref3.title,
        slug = _ref3.slug,
        component = _ref3.component,
        children = _ref3.children;
    return _react.default.createElement("li", {
      key: slug,
      style: {
        paddingLeft: paddingLeft
      }
    }, component ? _react.default.createElement(_router.Link, {
      className: "menu-node",
      getProps: isActive,
      to: slug
    }, _react.default.createElement("span", null, title)) : _react.default.createElement("span", {
      className: "menu-node no-page"
    }, title), _react.default.createElement(SideMenu, {
      dataSource: children,
      paddingLeft: paddingLeft + 10
    }));
  });

  if (dataSource.length) {
    return _react.default.createElement("ul", null, content);
  } else {
    return _react.default.createElement(_react.default.Fragment, null);
  }
};

var _default = (0, _styledComponents.withTheme)((0, _styledComponents.default)(function (_ref4) {
  var doc = _ref4.doc,
      className = _ref4.className,
      path = _ref4.path,
      uri = _ref4.uri;
  return _react.default.createElement("div", {
    className: className,
    ref: bodyRef
  }, _react.default.createElement(_reactStikky.default, {
    edge: "top",
    createState: getStickyState
  }, function (_ref5) {
    var isSticky = _ref5.isSticky,
        menuOffset = _ref5.menuOffset,
        unsticky = _ref5.unsticky;
    return _react.default.createElement("div", {
      className: "site-nav",
      style: {
        height: isSticky ? window.innerHeight - 60 : window.innerHeight - 140,
        overflow: 'auto'
      }
    }, _react.default.createElement(SideMenu, {
      dataSource: doc.children,
      paddingLeft: 30
    }));
  }), _react.default.createElement("div", {
    className: "site-body"
  }, _react.default.createElement(_router.Router, null, doc.component ? _react.default.createElement(doc.component, {
    path: '/'
  }) : _react.default.createElement(_router.Redirect, {
    from: "/",
    noThrow: true,
    to: uri + "/" + getStartDocPath(doc)
  }), flatMap(doc.children, function (childDoc) {
    return _react.default.createElement(getDefaultComponent(childDoc), {
      path: childDoc.slug,
      key: childDoc.slug
    });
  }))));
})(_templateObject(), function (props) {
  return props.theme.base;
}, function (props) {
  return props.theme.base;
}, function (props) {
  return props.theme.main[1];
}, function (props) {
  return props.theme.base;
}));

exports.default = _default;