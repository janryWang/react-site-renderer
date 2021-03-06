"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _router = require("@reach/router");

var _context = _interopRequireDefault(require("../shared/context"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _types = require("../shared/types");

var _fi = require("react-icons/fi");

var _empty = _interopRequireDefault(require("./empty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactStikky = _interopRequireDefault(require("react-stikky"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  position: fixed;\n  top: 80px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  .site-nav {\n    width: 260px;\n    height: 100%;\n    transition: all 0.15s ease-in-out;\n    flex-shrink: 0;\n    @media (max-width: 860px) {\n      width: 210px;\n    }\n    @media (max-width: 690px) {\n      display: none;\n    }\n  }\n  &.menu-visible .site-nav {\n    @media (max-width: 690px) {\n      display: block;\n      position: fixed;\n      width: 100%;\n      height: 100% !important;\n      overflow: auto;\n      z-index: 100000;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      background: rgba(255, 255, 255, 0.98);\n      .site-nav {\n        width: 100% !important;\n        height: auto !important;\n      }\n    }\n  }\n  .body-menu-btn {\n    position: fixed;\n    bottom: 40px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n    display: none;\n    cursor: pointer;\n    justify-content: center;\n    z-index: 100001;\n    align-items: center;\n    border-radius: 100px;\n    background: #fff;\n    box-shadow: 0 0 14px #8c8c8c61;\n    color: ", ";\n    @media (max-width: 690px) {\n      display: flex;\n    }\n  }\n  .site-nav {\n    width: 260px;\n    border-right: 1px solid #eee;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    @media (max-width: 860px) {\n      width: 210px;\n    }\n    @media (max-width: 690px) {\n      display: none;\n    }\n    ul {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n    }\n    li {\n      span.menu-node {\n        text-decoration: none;\n        color: #333;\n        font-size: 14px;\n        line-height: 25px;\n        min-height: 40px;\n        padding-right: 10px;\n        display: flex;\n        align-items: center;\n      }\n      .menu-node.no-page {\n        color: #777;\n      }\n      a {\n        text-decoration: none;\n        color: #333;\n        font-size: 14px;\n        line-height: 25px;\n        display: flex;\n        min-height: 40px;\n        padding-right: 10px;\n        align-items: center;\n        position: relative;\n        z-index: 1;\n        transition: all 0.25s ease-out;\n        border-right: 0px solid transparent;\n        span {\n          display: block;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          position: relative;\n          z-index: 1;\n        }\n        &:hover {\n          color: ", ";\n        }\n\n        &.active {\n          border-right: 3px solid ", ";\n          position: relative;\n          color: ", ";\n          &::after {\n            content: '';\n            display: block;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            right: 0;\n            width: 200%;\n            background: ", ";\n            opacity: 0.4;\n            z-index: 0;\n          }\n        }\n      }\n    }\n  }\n  .site-body {\n    max-width: calc(100% - 260px);\n    padding: 0 30px;\n    flex-grow: 3;\n    overflow: auto;\n    @media (max-width: 860px) {\n      max-width: calc(100% - 210px);\n    }\n    @media (max-width: 690px) {\n      max-width: 100%;\n    }\n  }\n  .iframe-container{\n    height: calc(100% - 80px);\n    position: fixed;\n    right: 0;\n    left: 260px;\n    bottom: 0;\n    top: 80px;\n    width: calc(100% - 260px);\n    overflow: auto;\n    overflow-scrolling: touch;\n    -webkit-overflow-scrolling: touch;\n    @media (max-width: 860px) {\n      width: calc(100% - 210px);\n      left: 210px;\n    }\n    @media (max-width: 690px) {\n      width: 100%;\n      left: 0;\n    }\n  }\n  .doc-scripts-iframe {\n    border: none;\n    width:100%;\n    height:100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var bodyRef = _react["default"].createRef();

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

var getDefaultComponent = function getDefaultComponent(doc) {
  doc.__renderer = doc.__renderer || function (props) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Suspense, {
      fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
    }, _react["default"].createElement(doc && doc.component ? doc.component : _empty["default"]));
  };

  return doc.__renderer;
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
      notSticky: window.innerWidth <= 690
    };
  } else {
    return {
      menuOffset: 0,
      notSticky: window.innerWidth <= 690
    };
  }
};

var SideMenu = function SideMenu(_ref2) {
  var dataSource = _ref2.dataSource,
      paddingLeft = _ref2.paddingLeft,
      autoIndex = _ref2.autoIndex,
      onClick = _ref2.onClick;
  dataSource = toArr(dataSource);
  var content = dataSource.map(function (_ref3) {
    var title = _ref3.title,
        slug = _ref3.slug,
        component = _ref3.component,
        link = _ref3.link,
        children = _ref3.children;
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: slug,
      style: {
        paddingLeft: paddingLeft
      }
    }, component ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_router.Link, {
      className: "menu-node",
      onClick: onClick,
      getProps: isActive,
      to: slug
    }, /*#__PURE__*/_react["default"].createElement("span", null, title))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, link && /*#__PURE__*/_react["default"].createElement("a", {
      className: "menu-node",
      href: link,
      target: "_blank"
    }, title, /*#__PURE__*/_react["default"].createElement(_fi.FiExternalLink, {
      style: {
        marginLeft: 4,
        fontSize: 10
      }
    })), !link && /*#__PURE__*/_react["default"].createElement("span", {
      className: "menu-node no-page"
    }, title)), /*#__PURE__*/_react["default"].createElement(SideMenu, {
      dataSource: children,
      onClick: onClick,
      paddingLeft: paddingLeft
    }));
  });

  if (dataSource.length) {
    return /*#__PURE__*/_react["default"].createElement("ul", null, content);
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
};

var _default = (0, _styledComponents.withTheme)((0, _styledComponents["default"])(function (_ref4) {
  var doc = _ref4.doc,
      className = _ref4.className,
      path = _ref4.path,
      uri = _ref4.uri;

  var _useContext = (0, _react.useContext)(_context["default"]),
      docs = _useContext.docs;

  var _useState = (0, _react.useState)(false),
      menuVisible = _useState[0],
      seMenuVisible = _useState[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(className, {
      'menu-visible': menuVisible
    }),
    ref: bodyRef
  }, doc.children && doc.children.length && /*#__PURE__*/_react["default"].createElement("div", {
    className: "site-nav",
    style: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(SideMenu, {
    dataSource: doc.children,
    onClick: function onClick() {
      seMenuVisible(!menuVisible);
    },
    paddingLeft: 30
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "site-body"
  }, /*#__PURE__*/_react["default"].createElement(_router.Router, {
    className: "iframe-container"
  }, doc.component ? _react["default"].createElement(doc.component, {
    path: '/'
  }) : /*#__PURE__*/_react["default"].createElement(_router.Redirect, {
    from: "/",
    noThrow: true,
    to: uri + "/" + getStartDocPath(doc)
  }), flatMap(doc.children, function (childDoc) {
    return _react["default"].createElement(getDefaultComponent(childDoc), {
      path: childDoc.slug,
      key: childDoc.slug
    });
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "body-menu-btn",
    onClick: function onClick(e) {
      seMenuVisible(!menuVisible);
    }
  }, _react["default"].createElement(!menuVisible ? _fi.FiMenu : _fi.FiX, {
    style: {
      fontSize: 26
    },
    strokeWidth: 1
  })));
})(_templateObject(), function (props) {
  return props.theme.main[3];
}, function (props) {
  return props.theme.base;
}, function (props) {
  return props.theme.base;
}, function (props) {
  return props.theme.base;
}, function (props) {
  return props.theme.main[1];
}));

exports["default"] = _default;