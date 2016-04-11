import _ from 'lodash'
import logger from './logger';
import { expect } from 'chai';

let message;

if (_.isFunction(console.log)) {

  var log = console.log;

  console.log = function(msg) {
    message = msg;
    log.apply(this, Array.prototype.slice.call(arguments));
  }
}

describe('logger', () => {

  beforeEach(() => {
    message = null;
  });

  it('logs a message without variable criteria', () => {
    logger.log({
      title: 'Cookie',
      message: 'Jar'
    });
    expect(message).to.equal('\u001b[92mCookie\u001b[39m\tJar');
  });

  it('does not log if all env variables dont match', () => {
    process.env.NODE_ENV = 'test';
    process.env.COOKIE = 'jar';
    logger.log({
      title: 'Cookie',
      message: 'Jar',
      env: {
        NODE_ENV: 'development', 
        COOKIE: 'jar'
      }
    });
    expect(message).to.be.null;
  });

  it('logs if all env variables match', () => {
    process.env.NODE_ENV = 'test';
    process.env.COOKIE = 'jar';
    logger.log({
      title: 'Red',
      message: 'Bull',
      env: {
        NODE_ENV: 'test', 
        COOKIE: 'jar'
      }
    });
    expect(message).to.equal('\u001b[92mRed\u001b[39m\tBull');
  });

  it('renders with a green label', () => {
    logger.log({
      title: 'Cookie',
      message: 'Jar',
      color: logger.green
    });
    expect(message).to.equal('\u001b[92mCookie\u001b[39m\tJar');
  });

  it('renders with a red label', () => {
    logger.log({
      title: 'Cookie',
      message: 'Jar',
      color: logger.red
    });
    expect(message).to.equal('\u001b[91mCookie\u001b[39m\tJar');
  });

  it('renders with a yellow label', () => {
    logger.log({
      title: 'Cookie',
      message: 'Jar',
      color: logger.yellow
    });
    expect(message).to.equal('\u001b[93mCookie\u001b[39m\tJar');
  });

  it('renders with a blue label', () => {
    logger.log({
      title: 'Cookie',
      message: 'Jar',
      color: logger.blue
    });
    expect(message).to.equal('\u001b[94mCookie\u001b[39m\tJar');
  });
});
