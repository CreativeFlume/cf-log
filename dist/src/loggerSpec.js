'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var message = void 0;

if (_lodash2.default.isFunction(console.log)) {

  var log = console.log;

  console.log = function (msg) {
    message = msg;
    log.apply(this, Array.prototype.slice.call(arguments));
  };
}

describe('logger', function () {

  beforeEach(function () {
    message = null;
  });

  it('logs a message without variable criteria', function () {
    _logger2.default.log({
      title: 'Cookie',
      message: 'Jar'
    });
    (0, _chai.expect)(message).to.equal('\u001b[92mCookie\u001b[39m\tJar');
  });

  it('does not log if all env variables dont match', function () {
    process.env.NODE_ENV = 'test';
    process.env.COOKIE = 'jar';
    _logger2.default.log({
      title: 'Cookie',
      message: 'Jar',
      env: {
        NODE_ENV: 'development',
        COOKIE: 'jar'
      }
    });
    (0, _chai.expect)(message).to.be.null;
  });

  it('logs if all env variables match', function () {
    process.env.NODE_ENV = 'test';
    process.env.COOKIE = 'jar';
    _logger2.default.log({
      title: 'Red',
      message: 'Bull',
      env: {
        NODE_ENV: 'test',
        COOKIE: 'jar'
      }
    });
    (0, _chai.expect)(message).to.equal('\u001b[92mRed\u001b[39m\tBull');
  });

  it('renders with a green label', function () {
    _logger2.default.log({
      title: 'Cookie',
      message: 'Jar',
      color: _logger2.default.green
    });
    (0, _chai.expect)(message).to.equal('\u001b[92mCookie\u001b[39m\tJar');
  });

  it('renders with a red label', function () {
    _logger2.default.log({
      title: 'Cookie',
      message: 'Jar',
      color: _logger2.default.red
    });
    (0, _chai.expect)(message).to.equal('\u001b[91mCookie\u001b[39m\tJar');
  });

  it('renders with a yellow label', function () {
    _logger2.default.log({
      title: 'Cookie',
      message: 'Jar',
      color: _logger2.default.yellow
    });
    (0, _chai.expect)(message).to.equal('\u001b[93mCookie\u001b[39m\tJar');
  });

  it('renders with a blue label', function () {
    _logger2.default.log({
      title: 'Cookie',
      message: 'Jar',
      color: _logger2.default.blue
    });
    (0, _chai.expect)(message).to.equal('\u001b[94mCookie\u001b[39m\tJar');
  });
});