'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsyncPanelComponent = function (_React$PureComponent) {
  _inherits(AsyncPanelComponent, _React$PureComponent);

  function AsyncPanelComponent(props) {
    _classCallCheck(this, AsyncPanelComponent);

    var _this = _possibleConstructorReturn(this, (AsyncPanelComponent.__proto__ || Object.getPrototypeOf(AsyncPanelComponent)).call(this, props));

    _this.loadPanel = _this.loadPanel.bind(_this);
    _this.cacheData = undefined;
    _this.state = {
      isLoading: false,
      data: undefined
    };
    return _this;
  }

  _createClass(AsyncPanelComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.active) this.loadPanel();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active) this.loadPanel();
    }
  }, {
    key: 'loadPanel',
    value: function loadPanel() {
      var _this2 = this;

      var _props = this.props,
          loadContent = _props.loadContent,
          cache = _props.cache;

      if (cache && this.cacheData) {
        this.setState({
          isLoading: false,
          data: this.cacheData
        });
        return;
      }
      var callback = function callback(err, data) {
        if (err) {
          console.log('React-Tabtab async panel error:', err);
        }
        if (cache) {
          _this2.cacheData = data;
        }
        _this2.setState({
          isLoading: false,
          data: data
        });
      };
      var promise = loadContent(callback);
      if (promise) {
        promise.then(function (data) {
          return callback(null, data);
        }, function (err) {
          return callback(err);
        });
      }
      if (!this.state.isLoading) {
        this.setState({ isLoading: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          render = _props2.render,
          renderLoading = _props2.renderLoading,
          CustomPanelStyle = _props2.CustomPanelStyle,
          active = _props2.active,
          index = _props2.index;
      var _state = this.state,
          isLoading = _state.isLoading,
          data = _state.data;

      var content = void 0;
      if (isLoading) {
        content = renderLoading();
      } else {
        content = render(data);
      }
      return React.createElement(
        _Panel2.default,
        { CustomPanelStyle: CustomPanelStyle, active: active, index: index },
        content
      );
    }
  }]);

  return AsyncPanelComponent;
}(React.PureComponent);

AsyncPanelComponent.defaultProps = {
  cache: true
};
exports.default = AsyncPanelComponent;
module.exports = exports['default'];