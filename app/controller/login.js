const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        this.ctx.body = 'login';
    }
}

module.exports = LoginController