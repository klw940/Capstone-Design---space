'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelList = function (_React$PureComponent) {
  _inherits(PanelList, _React$PureComponent);

  function PanelList() {
    _classCallCheck(this, PanelList);

    return _possibleConstructorReturn(this, (PanelList.__proto__ || Object.getPrototypeOf(PanelList)).apply(this, arguments));
  }

  _createClass(PanelList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          activeIndex = _props.activeIndex,
          customStyle = _props.customStyle;

      if (!children || activeIndex === undefined) {
        return null;
      }

      var props = {};
      if (customStyle && customStyle.Panel) {
        props = _extends({}, props, { CustomPanelStyle: customStyle.Panel });
      }

      // to prevent the type of one children is object type
      var result = React.Children.toArray(children).map(function (child, index) {
        return React.cloneElement(child, _extends({
          key: index,
          active: index === activeIndex,
          index: index
        }, props));
      });
      return React.createElement(
        'div',
        null,
        result
      );
    }
  }]);

  return PanelList;
}(React.PureComponent);

exports.default = PanelList;
module.exports = exports['default'];