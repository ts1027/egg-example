const { Controller } = require('egg');
// fdsafds 
class HomeController extends Controller {
  // 注释
  async index() {
    const { ctx } = this;
    const { id } = ctx.query
    ctx.body = id;
  }
  async user() {
    const { ctx } = this;
    const { id } = ctx.params
    ctx.body = id;
  }
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body
    ctx.body = {title};
  }
}

module.exports = HomeController;
