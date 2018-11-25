'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SortMethod2 = require('./SortMethod');

var _SortMethod3 = _interopRequireDefault(_SortMethod2);

var _reactSortableHoc = require('react-sortable-hoc');

var _TabList = require('./TabList');

var _TabList2 = _interopRequireDefault(_TabList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DragTabContainer = (0, _reactSortableHoc.SortableContainer)(function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _TabList2.default,
    props,
    children
  );
});

var DragTabList = function (_SortMethod) {
  _inherits(DragTabList, _SortMethod);

  function DragTabList() {
    _classCallCheck(this, DragTabList);

    return _possibleConstructorReturn(this, (DragTabList.__proto__ || Object.getPrototypeOf(DragTabList)).apply(this, arguments));
  }

  _createClass(DragTabList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        DragTabContainer,
        _extends({ onSortEnd: this.onSortEnd,
          axis: 'x',
          lockAxis: 'x'
          // if no pressDelay, close button cannot be triggered,
          // because it would always treat click as dnd action
          , pressDelay: 100
        }, props),
        children
      );
    }
  }]);

  return DragTabList;
}(_SortMethod3.default);

exports.default = DragTabList;


DragTabList.displayName = 'DragTabList';
module.exports = exports['default'];