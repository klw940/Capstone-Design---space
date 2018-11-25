'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  float: right;\n  border: 1px solid #eee;\n  border-radius: 2px;\n  padding: 3px;\n  margin-top: 10px;\n  margin-left: 2px;\n  display: inline-block;\n  color: #777;\n  vertical-align: middle;\n  /* ', ' */\n  &:hover {\n    color: black;\n    cursor: pointer;\n  }\n  &:disabled,\n  &[disabled]{\n    border: 1px solid grey;\n    background-color: #e7e7e7;\n    cursor: not-allowed;\n  }\n'], ['\n  float: right;\n  border: 1px solid #eee;\n  border-radius: 2px;\n  padding: 3px;\n  margin-top: 10px;\n  margin-left: 2px;\n  display: inline-block;\n  color: #777;\n  vertical-align: middle;\n  /* ', ' */\n  &:hover {\n    color: black;\n    cursor: pointer;\n  }\n  &:disabled,\n  &[disabled]{\n    border: 1px solid grey;\n    background-color: #e7e7e7;\n    cursor: not-allowed;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.button(_templateObject, function (props) {
  return props.disabled ? '\n    pointer-events: none;\n    color: #AAA;\n    background: #F5F5F5;\n  ' : null;
});

var ExtraButton = function (_React$PureComponent) {
  _inherits(ExtraButton, _React$PureComponent);

  function ExtraButton() {
    _classCallCheck(this, ExtraButton);

    return _possibleConstructorReturn(this, (ExtraButton.__proto__ || Object.getPrototypeOf(ExtraButton)).apply(this, arguments));
  }

  _createClass(ExtraButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          onClick = _props.onClick;

      return React.createElement(
        Wrapper,
        { onClick: onClick, disabled: disabled },
        this.props.children
      );
    }
  }]);

  return ExtraButton;
}(React.PureComponent);

ExtraButton.defaultProps = {
  disabled: false
};
exports.default = ExtraButton;
module.exports = exports['default'];