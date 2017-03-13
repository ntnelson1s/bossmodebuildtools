'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _initStore = require('./init-store');

var _initStore2 = _interopRequireDefault(_initStore);

var _app = require('./../shared/app');

var _app2 = _interopRequireDefault(_app);

var _config = require('../shared/config');

var _util = require('../shared/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderApp = function renderApp(location, plainPartialState) {
  var routerContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var store = (0, _initStore2.default)(plainPartialState);
  var appHtml = _server2.default.renderToString(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: location, context: routerContext },
      _react2.default.createElement(_app2.default, null)
    )
  ));

  return '<!doctype html>\n    <html>\n      <head>\n        <title>FIX ME</title>\n        <link rel="stylesheet" href="' + _config.STATIC_PATH + '/css/style.css">\n      </head>\n      <body>\n        <div class="' + _config.APP_CONTAINER_CLASS + '">' + appHtml + '</div>\n        <script>\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(store.getState()) + '\n        </script>\n        <script src="' + (_util.isProd ? _config.STATIC_PATH : 'http://localhost:' + _config.WDS_PORT + '/dist') + '/js/bundle.js"></script>\n      </body>\n    </html>';
};

exports.default = renderApp;