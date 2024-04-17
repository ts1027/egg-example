/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 模板
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  },
  mysql: {
    enable: true,
    package: 'egg-mysql'
  }
};
