# cf-log

![](https://raw.githubusercontent.com/CreativeFlume/cf-log/master/assets/output.png)

### A Conditional Logger with Colored Labels for Node.js

A simple conditional logger for node.js. Each logging
statement is configured with a title and message. You
can optionally add a map of environment variables to
check for prior to logging and label color.

### Example Usage
```
import logger from 'cf-node-logger';

logger.logMessage({
  title: 'Request',
  message: 'Some cookies',
  env: {
    NODE_ENV: 'development',
    LOG_FEATURE: 'cookieJar'
  }
});

```

This block of code will log:

> Request&nbsp;&nbsp;&nbsp;&nbsp;Some cookies 

when the environment variables `NODE_ENV` and `LOG_FEATURE` are set to
their respective values.

### Colors
1. `logger.green (default)`
2. `logger.red`
3. `logger.blue`
4. `logger.yellow`

### Imagery
![](https://raw.githubusercontent.com/CreativeFlume/cf-log/master/assets/usage.png)
![](https://raw.githubusercontent.com/CreativeFlume/cf-log/master/assets/test.png)
