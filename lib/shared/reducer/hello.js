'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var Immutable = _interopRequireWildcard(_immutable);

var _hello = require('../action/hello');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = Immutable.fromJS({
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call'
});

var helloReducer = function helloReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _hello.SAY_HELLO:
      return state.set('message', action.payload);
    case _hello.SAY_HELLO_ASYNC_REQUEST:
      return state.set('messageAsync', 'Loading...');
    case _hello.SAY_HELLO_ASYNC_SUCCESS:
      return state.set('messageAsync', action.payload);
    case _hello.SAY_HELLO_ASYNC_FAILURE:
      return state.set('messageAsync', 'No message received, please check your connection');
    default:
      return state;
  }
};

exports.default = helloReducer;