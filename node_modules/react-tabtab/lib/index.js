'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabList = require('./TabList');

var _TabList2 = _interopRequireDefault(_TabList);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _DragTabList = require('./DragTabList');

var _DragTabList2 = _interopRequireDefault(_DragTabList);

var _DragTab = require('./DragTab');

var _DragTab2 = _interopRequireDefault(_DragTab);

var _PanelList = require('./PanelList');

var _PanelList2 = _interopRequireDefault(_PanelList);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _AsyncPanel = require('./AsyncPanel');

var _AsyncPanel2 = _interopRequireDefault(_AsyncPanel);

var _ExtraButton = require('./ExtraButton');

var _ExtraButton2 = _interopRequireDefault(_ExtraButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styled = { TabListStyle: _TabList.TabListStyle, ActionButtonStyle: _TabList.ActionButtonStyle, TabStyle: _Tab.TabStyle, PanelStyle: _Panel.PanelStyle };

var defaultOutput = {
  Tabs: _Tabs2.default,
  TabList: _TabList2.default,
  Tab: _Tab2.default,
  DragTabList: _DragTabList2.default,
  DragTab: _DragTab2.default,
  PanelList: _PanelList2.default,
  Panel: _Panel2.default,
  AsyncPanel: _AsyncPanel2.default,
  ExtraButton: _ExtraButton2.default,
  styled: styled
};

exports.default = defaultOutput;
module.exports = exports['default'];