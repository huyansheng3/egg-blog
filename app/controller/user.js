const Controller = require('egg').Controller;


const createRule = {
    name: {
        type: 'email',
    },
    password: {
        type: 'password',
        compare: 're-password',
    },
    age: {
        convertType: 'int',
        type: 'int'
    }
};


class UserController extends Controller {

    async create() {
        const { ctx } = this

        try {
            ctx.validate(createRule);
            const userInfo = ctx.request.body

            ctx.logger.error(ctx.request.body)

            const hasExist = await this.service.user.findUserNameExist(userInfo.name)
            if (hasExist) {
                return ctx.throw({ message: 'the user has existed' })
            }

            const user = await this.service.user.newAndSave(userInfo)
            ctx.body = { success: true, data: user }
        } catch (error) {
            ctx.status = 500
            ctx.body = { success: false, error: error }
        }
    }

}

module.exports = UserController