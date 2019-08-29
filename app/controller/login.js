const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        const { ctx } = this
        await ctx.render('login.ejs');
    }

    async register() {
        await this.ctx.render('register.ejs');
    }

    async test() {
        const { ctx } = this
        ctx.body = { test: 1 }
    }
}

module.exports = LoginController