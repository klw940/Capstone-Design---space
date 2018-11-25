'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactSortableHoc = require('react-sortable-hoc');

exports.default = {
  simpleSwitch: _reactSortableHoc.arrayMove
}; // arrayMove method is import from 'react-sortable-hoc' to unify api interface

module.exports = exports['default'];