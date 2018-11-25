'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionButtonStyle = exports.TabListStyle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: white;\n  text-align: left;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  width: auto;\n  padding: ', ';\n'], ['\n  background-color: white;\n  text-align: left;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  width: auto;\n  padding: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  overflow: hidden;\n'], ['\n  overflow: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding-left: 0;\n  position: relative;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n  transition: transform .3s cubic-bezier(.42, 0, .58, 1);\n'], ['\n  padding-left: 0;\n  position: relative;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n  transition: transform .3s cubic-bezier(.42, 0, .58, 1);\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  height: 100%;\n  width ', 'px;\n  text-align: center;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 4px 4px 0 0;\n  background: #f9f9f9;\n  > svg {\n    padding-top: 11px;\n  }\n'], ['\n  height: 100%;\n  width ', 'px;\n  text-align: center;\n  border: 1px solid #d9d9d9;\n  border-bottom: 0;\n  border-radius: 4px 4px 0 0;\n  background: #f9f9f9;\n  > svg {\n    padding-top: 11px;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  ', ';\n  &:hover {\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  ', ';\n  &:hover {\n    cursor: pointer;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  left: 0;\n  &:hover {\n    cursor: pointer;\n  }\n'], ['\n  display: inline-block;\n  filter: none;\n  position: absolute;\n  left: 0;\n  &:hover {\n    cursor: pointer;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _IconSvg = require('./IconSvg');

var _isType = require('./utils/isType');

var _TabModal = require('./TabModal');

var _TabModal2 = _interopRequireDefault(_TabModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var buttonWidth = 35;
var getPadding = function getPadding(_ref) {
  var showModalButton = _ref.showModalButton,
      showArrowButton = _ref.showArrowButton;

  var paddingLeft = 0;
  var paddingRight = 0;
  if (showModalButton) {
    paddingLeft += buttonWidth;
  }
  if (showArrowButton) {
    paddingLeft += buttonWidth;
    paddingRight += buttonWidth;
    if (showModalButton) {
      paddingLeft += 2;
    }
  }
  if (paddingLeft > 0) {
    paddingLeft += 3;
  }
  if (paddingRight > 0) {
    paddingRight += 3;
  }
  return '0 ' + paddingRight + 'px 0 ' + paddingLeft + 'px';
};

var TabListStyle = _styledComponents2.default.div(_templateObject, function (props) {
  return getPadding(props);
});

var ListInner = _styledComponents2.default.div(_templateObject2);

var ListScroll = _styledComponents2.default.ul(_templateObject3);

var ActionButtonStyle = _styledComponents2.default.div(_templateObject4, buttonWidth);

var makeScrollButton = function makeScrollButton(ActionButton) {
  return (0, _styledComponents2.default)(ActionButton)(_templateObject5, function (props) {
    return props.left ? props.showModalButton ? 'left: ' + (buttonWidth + 2) + 'px' : 'left: 0' : 'right: 0';
  });
};

var makeFoldButton = function makeFoldButton(ActionButton) {
  return (0, _styledComponents2.default)(ActionButton)(_templateObject6);
};

var TabListComponent = function (_React$Component) {
  _inherits(TabListComponent, _React$Component);

  function TabListComponent(props) {
    _classCallCheck(this, TabListComponent);

    var _this = _possibleConstructorReturn(this, (TabListComponent.__proto__ || Object.getPrototypeOf(TabListComponent)).call(this, props));

    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.renderTabs = _this.renderTabs.bind(_this);
    _this.renderArrowButton = _this.renderArrowButton.bind(_this);
    _this.isShowModalButton = _this.isShowModalButton.bind(_this);
    _this.isShowArrowButton = _this.isShowArrowButton.bind(_this);
    _this.scrollPosition = 0;
    _this.tabRefs = [];
    _this.state = {
      modalIsOpen: false,
      showArrowButton: false,
      showModalButton: false
    };
    return _this;
  }

  _createClass(TabListComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isShowArrowButton();
      this.isShowModalButton();
      if (this.props.activeIndex > 0) this.scrollToIndex(this.props.activeIndex, 'left');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.children.length !== this.props.children.length) {
        this.isShowArrowButton();
        this.isShowModalButton();
      }

      if (prevProps.activeIndex !== this.props.activeIndex) {
        //if we scroll to the last tab, alignment is set to the right side of the tab
        var rectSide = this.props.activeIndex === this.props.children.length - 1 ? 'right' : 'left';
        this.scrollToIndex(this.props.activeIndex, rectSide);
      }
      // if prev state show arrow button, and current state doesn't show
      // need to reset the scroll position, or some tabs will be hided by container.
      if (prevState.showArrowButton && !this.state.showArrowButton) {
        this.scrollToZero();
      }

      if (prevProps.showModalButton !== this.props.showModalButton) {
        this.isShowModalButton();
      }

      if (prevProps.showArrowButton !== this.props.showArrowButton) {
        this.isShowArrowButton();
      }
    }
  }, {
    key: 'getTabNode',
    value: function getTabNode(tab) {
      if (tab.__INTERNAL_NODE) {
        // normal tab
        return tab.__INTERNAL_NODE;
      } else if (tab.__DRAG_TAB_INTERNAL_NODE) {
        // drag tab
        return tab.__DRAG_TAB_INTERNAL_NODE.node;
      }
    }
  }, {
    key: 'unifyScrollMax',
    value: function unifyScrollMax(width) {
      return parseFloat(width / 3 * 2);
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(direction) {
      var leftMove = 0;
      var containerOffset = this.listContainer.getBoundingClientRect();
      var containerWidth = this.listContainer.offsetWidth;
      var tabFirstOffset = this.getTabNode(this.tabRefs[0]).getBoundingClientRect();
      var tabLastOffset = this.getTabNode(this.tabRefs[this.tabRefs.length - 1]).getBoundingClientRect();

      if (direction === 'right') {
        leftMove = tabLastOffset.right - containerOffset.right;
        if (leftMove > containerWidth) {
          leftMove = this.unifyScrollMax(containerWidth);
        }
      } else if (direction === 'left') {
        leftMove = tabFirstOffset.left - containerOffset.left;
        if (-leftMove > containerWidth) {
          leftMove = -this.unifyScrollMax(containerWidth);
        }
      }
      this.scrollPosition += leftMove;
      if (this.scrollPosition < 0) {
        this.scrollPosition = 0;
      }

      this.listScroll.style.transform = 'translate3d(-' + this.scrollPosition + 'px, 0, 0)';
    }

    // $FlowFixMe

  }, {
    key: 'scrollToIndex',
    value: function scrollToIndex(index, rectSide) {
      var tabOffset = this.getTabNode(this.tabRefs[index]).getBoundingClientRect();
      var containerOffset = this.listContainer.getBoundingClientRect();
      // Cancel scrolling if the tab is visible
      if (tabOffset.right < containerOffset.right && tabOffset.left > containerOffset.left) return;
      var leftMove = tabOffset[rectSide] - containerOffset[rectSide];
      this.scrollPosition += leftMove;
      if (this.scrollPosition < 0) {
        this.scrollPosition = 0;
      }
      this.listScroll.style.transform = 'translate3d(-' + this.scrollPosition + 'px, 0, 0)';
    }
  }, {
    key: 'scrollToZero',
    value: function scrollToZero() {
      this.listScroll.style.transform = 'translate3d(0, 0, 0)';
    }
  }, {
    key: 'toggleModal',
    value: function toggleModal(open) {
      var _this2 = this;

      this.setState({ modalIsOpen: open }, function () {
        if (!open) {
          // $FlowFixMe
          _this2.scrollToIndex(_this2.props.activeIndex, 'right');
        }
      });
    }
  }, {
    key: 'isShowModalButton',
    value: function isShowModalButton() {
      var showModalButton = this.props.showModalButton;

      if ((0, _isType.isNumber)(showModalButton)) {
        // $FlowFixMe, weired. currently set showModalButton as number | bool, but don't know why flow only can recognize it as bool
        showModalButton = this.props.children.length >= showModalButton;
      }
      this.setState({ showModalButton: showModalButton });
    }
  }, {
    key: 'isShowArrowButton',
    value: function isShowArrowButton() {
      var showArrowButton = this.props.showArrowButton;

      if (showArrowButton === 'auto') {
        var tabWidth = 0;
        var containerWidth = this.listContainer.offsetWidth;
        showArrowButton = false;
        for (var index = 0; index < this.tabRefs.length; index++) {
          var tab = this.getTabNode(this.tabRefs[index]);
          tabWidth += tab.offsetWidth;
          if (tabWidth >= containerWidth) {
            showArrowButton = true;
            break;
          }
        }
      }
      // $FlowFixMe: flow will show 'auto' is not bool, but with this logic, showArrowButton will never be 'auto'
      this.setState({ showArrowButton: showArrowButton });
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _this3 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var isModal = arguments[1];
      var _props = this.props,
          children = _props.children,
          activeIndex = _props.activeIndex,
          handleTabChange = _props.handleTabChange,
          handleEdit = _props.handleEdit,
          customStyle = _props.customStyle;

      var props = {
        handleTabChange: handleTabChange,
        handleEdit: handleEdit,
        //$FlowFixMe
        CustomTabStyle: customStyle.Tab
      };
      if (!isModal) {
        this.tabRefs = [];
      }
      return React.Children.map(children, function (child, index) {
        return React.cloneElement(child, _extends({
          key: index,
          active: index === activeIndex,
          index: index,
          tabIndex: index,
          ref: function ref(node) {
            if (!isModal && node) {
              _this3.tabRefs.push(node);
            }
          }
        }, props, options));
      });
    }
  }, {
    key: 'renderArrowButton',
    value: function renderArrowButton(ScrollButton) {
      var _this4 = this;

      var showArrowButton = this.state.showArrowButton;

      if (showArrowButton) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            ScrollButton,
            { left: true,
              onClick: function onClick() {
                _this4.handleScroll('left');
              },
              ref: function ref(node) {
                return _this4.leftArrowNode = node;
              },
              showModalButton: this.state.showModalButton },
            React.createElement(_IconSvg.LeftIcon, null)
          ),
          React.createElement(
            ScrollButton,
            { onClick: function onClick() {
                _this4.handleScroll('right');
              },
              ref: function ref(node) {
                return _this4.rightArrowNode = node;
              } },
            React.createElement(_IconSvg.RightIcon, null)
          )
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props2 = this.props,
          customStyle = _props2.customStyle,
          activeIndex = _props2.activeIndex,
          handleTabChange = _props2.handleTabChange,
          handleTabSequence = _props2.handleTabSequence,
          ExtraButton = _props2.ExtraButton;
      var modalIsOpen = this.state.modalIsOpen;

      var TabList = customStyle.TabList || TabListStyle;
      var ActionButton = customStyle.ActionButton || ActionButtonStyle;
      var ScrollButton = makeScrollButton(ActionButton);
      var FoldButton = makeFoldButton(ActionButton);
      (0, _invariant2.default)(this.props.children, 'React-tabtab Error: You MUST pass at least one tab');
      return React.createElement(
        'div',
        null,
        ExtraButton ? ExtraButton : null,
        React.createElement(
          TabList,
          { hasExtraButton: !!ExtraButton,
            showModalButton: this.state.showModalButton,
            showArrowButton: this.state.showArrowButton },
          this.state.showModalButton ? React.createElement(
            FoldButton,
            { ref: function ref(node) {
                return _this5.foldNode = node;
              },
              onClick: this.toggleModal.bind(this, true),
              showArrowButton: this.state.showArrowButton },
            React.createElement(_IconSvg.BulletIcon, null)
          ) : null,
          this.renderArrowButton(ScrollButton),
          React.createElement(
            ListInner,
            { ref: function ref(node) {
                return _this5.listContainer = node;
              } },
            React.createElement(
              ListScroll,
              { ref: function ref(node) {
                  return _this5.listScroll = node;
                }, role: 'tablist' },
              this.renderTabs()
            )
          )
        ),
        modalIsOpen ? React.createElement(
          _TabModal2.default,
          { closeModal: this.toggleModal.bind(this, false),
            handleTabSequence: handleTabSequence,
            handleTabChange: handleTabChange,
            activeIndex: activeIndex },
          this.renderTabs({ vertical: true }, true)
        ) : null
      );
    }
  }]);

  return TabListComponent;
}(React.Component);

exports.default = TabListComponent;


TabListComponent.displayName = 'TabList';

exports.TabListStyle = TabListStyle;
exports.ActionButtonStyle = ActionButtonStyle;