"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BulletIcon = exports.RightIcon = exports.LeftIcon = exports.CloseIcon = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The svg path is from react-icons: https://github.com/gorangajic/react-icons/
var Svg = function Svg(_ref) {
  var d = _ref.d;
  return _react2.default.createElement(
    "svg",
    { viewBox: "0 0 40 40", fill: "currentColor", height: "1em", width: "1em", style: { verticalAlign: 'middle' } },
    _react2.default.createElement(
      "g",
      null,
      _react2.default.createElement("path", { d: d })
    )
  );
};

var CloseIcon = function CloseIcon() {
  return _react2.default.createElement(Svg, { d: "m31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z" });
};

var LeftIcon = function LeftIcon() {
  return _react2.default.createElement(Svg, { d: "m25.7 12.3l-7.7 7.7 7.7 7.7-2.3 2.3-10-10 10-10z" });
};

var RightIcon = function RightIcon() {
  return _react2.default.createElement(Svg, { d: "m16.6 10l10 10-10 10-2.3-2.3 7.7-7.7-7.7-7.7z" });
};

var BulletIcon = function BulletIcon() {
  return _react2.default.createElement(Svg, { d: "m31.7 28.3h-23.4c-1.8 0-3.3 1.5-3.3 3.4s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.4-3.3-3.4z m0-11.6h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3z m0-11.7h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4h23.4c1.8 0 3.3-1.5 3.3-3.4s-1.5-3.3-3.3-3.3z" });
};

exports.CloseIcon = CloseIcon;
exports.LeftIcon = LeftIcon;
exports.RightIcon = RightIcon;
exports.BulletIcon = BulletIcon;