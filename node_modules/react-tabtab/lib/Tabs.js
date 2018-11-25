'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.handleTabChange = _this.handleTabChange.bind(_this);
    _this.handleTabSequence = _this.handleTabSequence.bind(_this);
    _this.handleEdit = _this.handleEdit.bind(_this);
    _this.state = {
      activeIndex: _this.getActiveIndex(props)
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'getActiveIndex',
    value: function getActiveIndex(props) {
      var defaultIndex = props.defaultIndex,
          activeIndex = props.activeIndex;

      if (activeIndex) return activeIndex;
      if (defaultIndex) return defaultIndex;
      return 0;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activeIndex !== this.props.activeIndex) {
        this.setState({ activeIndex: nextProps.activeIndex });
      }
    }
  }, {
    key: 'handleTabChange',
    value: function handleTabChange(index) {
      var _props = this.props,
          activeIndex = _props.activeIndex,
          onTabChange = _props.onTabChange;

      if (activeIndex !== 0 && !activeIndex) {
        this.setState({ activeIndex: index });
      }
      if (onTabChange) {
        onTabChange(index);
      }
    }
  }, {
    key: 'handleTabSequence',
    value: function handleTabSequence(_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      var onTabSequenceChange = this.props.onTabSequenceChange;

      if (onTabSequenceChange) {
        onTabSequenceChange({ oldIndex: oldIndex, newIndex: newIndex });
      }
    }
  }, {
    key: 'handleEdit',
    value: function handleEdit(_ref2) {
      var type = _ref2.type,
          index = _ref2.index;
      var onTabEdit = this.props.onTabEdit;

      if (onTabEdit) {
        onTabEdit({ type: type, index: index });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          extraProps = _objectWithoutProperties(_props2, ['children']);

      var activeIndex = this.state.activeIndex;

      var props = _extends({
        handleTabChange: this.handleTabChange,
        handleTabSequence: this.handleTabSequence,
        handleEdit: this.handleEdit,
        activeIndex: activeIndex
      }, extraProps);

      return React.createElement(
        'div',
        null,
        React.Children.map(children, function (child) {
          return React.cloneElement(child, props);
        })
      );
    }
  }]);

  return Tabs;
}(React.Component);

Tabs.defaultProps = {
  showModalButton: 4,
  showArrowButton: 'auto',
  onTabChange: function onTabChange() {},
  onTabSequenceChange: function onTabSequenceChange() {},
  customStyle: {
    TabList: null,
    Tab: null,
    Panel: null,
    ActionButton: null
  }
};
exports.default = Tabs;
module.exports = exports['default'];