const { Controller } = require('egg');
// fdsafds
class HomeController extends Controller {
  // 注释
  async index() {
    const { ctx } = this;
    await ctx.render('index.html', {
      title: '我是不磕碜',
    });
  }
  async user() {
    const { ctx } = this;
    const result = await ctx.service.home.user();
    ctx.body = result;
  }
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    ctx.body = { title };
  }
}

module.exports = HomeController;
