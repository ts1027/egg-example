/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1712649502882_3821';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [ '*' ], // 配置白名单
  }
  config.view = {
    mapping: {'.html': 'ejs'}  //左边写成.html后缀，会自动渲染.html文件
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '12345678',
      database: 'test'
    },
    // 是否加载到app上
    app: true,
    // 是否加载到agent上，默认关闭
    agent:false
  }
  

  

  return {
    ...config,
    ...userConfig,
  };
};

