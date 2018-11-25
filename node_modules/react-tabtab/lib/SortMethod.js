'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortMethod = function (_React$PureComponent) {
  _inherits(SortMethod, _React$PureComponent);

  function SortMethod(props) {
    _classCallCheck(this, SortMethod);

    var _this = _possibleConstructorReturn(this, (SortMethod.__proto__ || Object.getPrototypeOf(SortMethod)).call(this, props));

    _this.onSortEnd = _this.onSortEnd.bind(_this);
    return _this;
  }

  _createClass(SortMethod, [{
    key: 'onSortEnd',
    value: function onSortEnd(_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      var _props = this.props,
          activeIndex = _props.activeIndex,
          handleTabChange = _props.handleTabChange,
          handleTabSequence = _props.handleTabSequence;

      if (oldIndex === newIndex) {
        if (activeIndex !== oldIndex) {
          handleTabChange(oldIndex);
        }
      } else {
        handleTabSequence({ oldIndex: oldIndex, newIndex: newIndex });
      }
    }
  }]);

  return SortMethod;
}(React.PureComponent);

exports.default = SortMethod;
module.exports = exports['default'];