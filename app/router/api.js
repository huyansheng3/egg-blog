module.exports = app => {
    const { router, controller } = app;

    router.get('/api/test', controller.login.test)

};