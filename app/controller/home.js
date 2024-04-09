const { Controller } = require('egg');

class HomeController extends Controller {
  // 注释
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
