const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        const { ctx } = this
        await ctx.render('login.ejs', {
            data: 'worldddd',
        });
    }

    async test() {
        const { ctx } = this
        ctx.body = { test: 1 }
    }
}

module.exports = LoginController