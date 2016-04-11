import colorLogger from 'cli-color';

export default class logger {

  static get red() {
    return colorLogger.redBright; 
  }

  static get blue() {
    return colorLogger.blueBright; 
  }

  static get green() {
    return colorLogger.greenBright;
  }

  static get yellow() {
    return colorLogger.yellowBright; 
  }

  static log({env = {}, color = colorLogger.greenBright, message, title}) {

    let shouldLog = Object.keys(env).reduce((previous, key) => {
      return previous === false ? previous : process.env[key] === env[key];
    }, true);

    shouldLog ? console.log(color(title) + '\t' + message) : null;
  }
}

