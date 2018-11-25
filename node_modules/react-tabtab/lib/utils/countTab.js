'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = countTab;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _isType = require('./isType');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function loopTabList(tabList, cb) {
  React.Children.forEach(tabList, function (tab) {
    if ((0, _isType.isTab)(tab)) {
      cb();
    }
  });
}

function deepLoop(children, cb) {
  React.Children.forEach(children, function (child) {
    if ((0, _isType.isTabList)(child)) {
      if (child.props && child.props.children) {
        return loopTabList(child.props.children, cb);
      } else {
        throw new Error('You need to provide `Tab` children');
      }
    } else if (child.props && child.props.children) {
      deepLoop(child.props.children, cb);
    }
  });
}

function countTab(children) {
  var count = 0;
  deepLoop(children, function () {
    return count++;
  });
  return count;
}
module.exports = exports['default'];