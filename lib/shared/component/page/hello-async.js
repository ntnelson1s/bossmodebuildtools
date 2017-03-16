'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _helloAsyncButton = require('../../container/hello-async-button');

var _helloAsyncButton2 = _interopRequireDefault(_helloAsyncButton);

var _messageAsync = require('../../container/message-async');

var _messageAsync2 = _interopRequireDefault(_messageAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'Async Hello Page';

var HelloAsyncPage = function HelloAsyncPage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, {
      title: title,
      meta: [{ name: 'description', content: 'A page to say hello asynchronously' }, { property: 'og:title', content: title }]
    }),
    _react2.default.createElement(
      'h1',
      null,
      title
    ),
    _react2.default.createElement(_messageAsync2.default, null),
    _react2.default.createElement(_helloAsyncButton2.default, null)
  );
};

exports.default = HelloAsyncPage;