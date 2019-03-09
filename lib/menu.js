"use strict";

exports.__esModule = true;
exports.MenuContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactStikky = _interopRequireDefault(require("react-stikky"));

var _slugify = _interopRequireDefault(require("slugify"));

var _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  width: 100%;\n  .menu-list {\n    width: 180px;\n    min-width: 180px;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    &.root {\n      border-left: 1px solid #eee;\n      position: relative;\n    }\n    li {\n      line-height: 25px;\n      font-size: 14px;\n      padding-left: 10px;\n      border-left: 3px solid transparent;\n      margin-left: -2px;\n      a {\n        color: #666;\n        text-decoration: none;\n        display: block;\n        display: block;\n        &.active:before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          left: -2px;\n          height: 25px;\n          border-left: 3px solid #2d90ca;\n        }\n      }\n    }\n  }\n  .content {\n    flex-shrink: 3;\n    width: calc(100% - 240px);\n  }\n  @media (max-width: 860px) {\n    .sticky-wrapper {\n      display: none;\n    }\n    .content {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var toArr = function toArr(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
};

var isElementInViewport = function isElementInViewport(rect, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 0 : _ref$offset,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0 : _ref$threshold;

  var top = rect.top,
      right = rect.right,
      bottom = rect.bottom,
      left = rect.left,
      width = rect.width,
      height = rect.height;
  var intersection = {
    t: bottom,
    r: (width > window.innerWidth ? window.innerWidth : width) - left,
    b: (height > window.innerHeight ? window.innerHeight : height) - top,
    l: right
  };
  var elementThreshold = {
    x: threshold * width,
    y: threshold * height
  };
  return intersection.t >= (offset.top || offset + elementThreshold.y) && intersection.r >= (offset.right || offset + elementThreshold.x) && intersection.b >= (offset.bottom || offset + elementThreshold.y) && intersection.l >= (offset.left || offset + elementThreshold.x);
};

var MenuContent = (0, _styledComponents.default)((_temp2 =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(MenuContent, _Component);

  function MenuContent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ref", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      dataSource: [],
      levels: [],
      pathname: _this.getPathName()
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hashChangeHandler", function () {
      _this.setState({
        pathname: _this.getPathName()
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "traverseDataSource", function (callback) {
      var dataSource = _this.state.dataSource;

      var traverse = function traverse(list) {
        toArr(list).forEach(function (node, i) {
          callback(node, i);

          if (node.children) {
            traverse(node.children);
          }
        });
      };

      traverse(dataSource);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollHandler", function () {
      var levels = _this.state.levels;
      requestAnimationFrame(function () {
        _this.traverseDataSource(function (_ref2) {
          var el = _ref2.el,
              slug = _ref2.slug,
              level = _ref2.level;

          if (levels.indexOf(level) > -1 && isElementInViewport(el.getBoundingClientRect())) {
            _this.setState({
              pathname: slug
            });
          }
        });
      });
    });

    return _this;
  }

  var _proto = MenuContent.prototype;

  _proto.renderMenuList = function renderMenuList(dataSource, root) {
    var _this2 = this;

    var levels = this.state.levels;
    return _react.default.createElement("ul", {
      className: "menu-list " + (root ? "root" : "")
    }, toArr(dataSource).map(function (_ref3, key) {
      var slug = _ref3.slug,
          text = _ref3.text,
          children = _ref3.children,
          level = _ref3.level;
      return _react.default.createElement("li", {
        key: key
      }, _react.default.createElement("a", {
        href: "#" + slug,
        className: "" + (_this2.state.pathname === slug ? "active" : "")
      }, _react.default.createElement("span", null, text)), levels.indexOf(level) > -1 && _this2.renderMenuList(children));
    }));
  };

  _proto.renderMenu = function renderMenu() {
    var dataSource = this.state.dataSource;
    return _react.default.createElement(_reactStikky.default, {
      edge: "top",
      stickiedStyle: {
        width: 200,
        height: "calc(100% - 80px)",
        overflowY: "auto"
      },
      triggerDistance: 50,
      zIndex: 10
    }, this.renderMenuList(dataSource, true));
  };

  _proto.changeAnchorBehavior = function changeAnchorBehavior(element) {
    element.querySelectorAll(".react-demo-a").forEach(function (el) {
      if (!el.target) el.target = "_blank";
    });
  };

  _proto.loadDataSource = function loadDataSource(element) {
    var list = Array.prototype.map.call(element.querySelectorAll("h1,h2,h3,h4,h5"), function (el) {
      var level = parseInt(el.tagName.charAt(1));
      var slug = el.id;
      return {
        level: level,
        slug: slug,
        text: el.textContent,
        el: el
      };
    });
    var parentStack = [];
    var levels = [];

    var checkParent = function checkParent(node) {
      if (parentStack[parentStack.length - 1]) {
        if (parentStack[parentStack.length - 1].level >= node.level) {
          parentStack.pop();
          return true;
        } else {
          return false;
        }
      }

      return false;
    };

    var newList = list.reduce(function (buf, node, index) {
      var parent = parentStack[parentStack.length - 1];

      if (levels.indexOf(node.level) == -1) {
        levels.push(node.level);
      }

      if (parent) {
        if (parent.level < node.level) {
          parent.children = parent.children || [];
          parent.children.push(node);
          parentStack.push(node);
          return buf;
        } else if (parent.level === node.level) {
          parentStack.pop();
          var pre = parentStack[parentStack.length - 1];
          parentStack.push(node);

          if (pre) {
            pre.children = pre.children || [];
            pre.children.push(node);
            return buf;
          }

          return buf.concat(node);
        } else {
          while (checkParent(node)) {}

          var prev = parentStack[parentStack.length - 1];
          parentStack.push(node);

          if (prev) {
            prev.children = prev.children || [];
            prev.children.push(node);
            return buf;
          }

          return buf.concat(node);
        }
      } else {
        parentStack.push(node);
      }

      return buf.concat(node);
    }, []);
    this.setState({
      dataSource: newList,
      levels: levels.sort(function (a, b) {
        return a - b;
      }).slice(0, 2)
    });
  };

  _proto.getPathName = function getPathName() {
    return decodeURIComponent(window.location.hash.slice(1));
  };

  _proto.componentDidMount = function componentDidMount() {
    if (this.ref && this.ref.current) {
      this.loadDataSource(this.ref.current);
      this.changeAnchorBehavior(this.ref.current);
    }

    window.addEventListener("scroll", this.scrollHandler);
    window.addEventListener("hashchange", this.hashChangeHandler);
    this.scrollHandler();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
    window.removeEventListener("hashchange", this.hashChangeHandler);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children;
    return _react.default.createElement("div", {
      ref: this.ref,
      className: className
    }, _react.default.createElement("div", {
      className: "content"
    }, children), this.renderMenu());
  };

  return MenuContent;
}(_react.Component), _temp2))(_templateObject());
exports.MenuContent = MenuContent;