'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: white;\n  text-align: left;\n  padding: 20px 15px;\n  ', '\n'], ['\n  background-color: white;\n  text-align: left;\n  padding: 20px 15px;\n  ', '\n']);

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

var PanelStyle = _styledComponents2.default.div(_templateObject, function (props) {
  return !props.active ? 'display: none;' : null;
});

var PanelComponent = function (_React$PureComponent) {
  _inherits(PanelComponent, _React$PureComponent);

  function PanelComponent() {
    _classCallCheck(this, PanelComponent);

    return _possibleConstructorReturn(this, (PanelComponent.__proto__ || Object.getPrototypeOf(PanelComponent)).apply(this, arguments));
  }

  _createClass(PanelComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          index = _props.index;

      var Panel = this.props.CustomPanelStyle || PanelStyle;
      return React.createElement(
        Panel,
        { role: 'tabpanel',
          id: 'react-tabtab-panel-' + index,
          'aria-labelledby': 'react-tabtab-' + index,
          'aria-hidden': false,
          active: active },
        active ? this.props.children : null
      );
    }
  }]);

  return PanelComponent;
}(React.PureComponent);

exports.default = PanelComponent;
exports.PanelStyle = PanelStyle;