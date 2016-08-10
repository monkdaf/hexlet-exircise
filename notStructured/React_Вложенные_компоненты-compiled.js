// Item.js

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// BEGIN (write your solution here)
var Item = _react2['default'].createClass({
  displayName: 'Item',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      this.props.value
    );
  }
});
// END

module.exports = Item;
//-----------------------------------------------
// Box.js

//# sourceMappingURL=React_Вложенные_компоненты-compiled.js.map