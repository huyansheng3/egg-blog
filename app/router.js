module.exports = app => {
    const { router, controller } = app;

    console.log(controller.login)

    router.get('/', controller.login.index);
    router.get('/login', controller.login.index);
};