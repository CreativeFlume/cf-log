'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cliColor = require('cli-color');

var _cliColor2 = _interopRequireDefault(_cliColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = function () {
  function logger() {
    _classCallCheck(this, logger);
  }

  _createClass(logger, null, [{
    key: 'log',
    value: function log(_ref) {
      var _ref$env = _ref.env;
      var env = _ref$env === undefined ? {} : _ref$env;
      var _ref$color = _ref.color;
      var color = _ref$color === undefined ? _cliColor2.default.greenBright : _ref$color;
      var message = _ref.message;
      var title = _ref.title;


      var shouldLog = Object.keys(env).reduce(function (previous, key) {
        return previous === false ? previous : process.env[key] === env[key];
      }, true);

      shouldLog ? console.log(color(title) + '\t' + message) : null;
    }
  }, {
    key: 'red',
    get: function get() {
      return _cliColor2.default.redBright;
    }
  }, {
    key: 'blue',
    get: function get() {
      return _cliColor2.default.blueBright;
    }
  }, {
    key: 'green',
    get: function get() {
      return _cliColor2.default.greenBright;
    }
  }, {
    key: 'yellow',
    get: function get() {
      return _cliColor2.default.yellowBright;
    }
  }]);

  return logger;
}();

exports.default = logger;