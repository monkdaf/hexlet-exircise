'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Form = _react2['default'].createClass({
  displayName: 'Form',

  // HINT: getInitialState
  // BEGIN (write your solution here)
  getInitialState: function getInitialState() {
    return {
      newForm: true,
      value: ""
    };
  },
  // END

  handleOnSubmit: function handleOnSubmit(e) {
    e.preventDefault();
    // BEGIN (write your solution here)
    this.setState({ newForm: false });
    // END
  },

  // HINT: handleOnClick
  // BEGIN (write your solution here)
  handleOnClick: function handleOnClick(e) {

    this.setState({
      newForm: true,
      value: ''
    });
  },
  // END

  handleOnChange: function handleOnChange(e) {
    e.preventDefault();
    // BEGIN (write your solution here)
    this.setState({ value: e.target.value });
    // END
  },

  render: function render() {
    // BEGIN (write your solution here)
    var newForm = this.state.newForm;
    var value = this.state.value;
    // END

    if (newForm) {
      return _react2['default'].createElement(
        'form',
        { onSubmit: this.handleOnSubmit },
        _react2['default'].createElement('input', { className: 'text', type: 'text', value: value, onChange: this.handleOnChange }),
        _react2['default'].createElement('input', { className: 'submit', type: 'submit' })
      );
    } else {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'value' },
          value
        ),
        _react2['default'].createElement(
          'button',
          { className: 'reset', onClick: this.handleOnClick },
          'Reset'
        )
      );
    }
  }
});

_reactDom2['default'].render(_react2['default'].createElement(Form, null), document.getElementById('container'));

//# sourceMappingURL=React_обработка_событий-compiled.js.map