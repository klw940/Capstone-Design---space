"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function deleteHelper(sequence, deleteIndex) {
  return sequence.filter(function (_, i) {
    return i !== deleteIndex;
  });
}

exports.default = deleteHelper;
module.exports = exports["default"];