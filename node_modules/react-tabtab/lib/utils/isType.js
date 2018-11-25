'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTabList = isTabList;
exports.isTab = isTab;
exports.isNumber = isNumber;
function isTabList(element) {
  return element.type && (element.type.displayName === 'TabList' || element.type.displayName === 'DragTabList');
}

function isTab(element) {
  return element.type && (element.type.displayName === 'Tab' || element.type.displayName === 'DragTab');
}

function isNumber(number) {
  return !isNaN(parseInt(number, 10));
}