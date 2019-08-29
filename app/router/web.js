module.exports = app => {
    const { router, controller } = app;

    router.redirect('/', '/login');
    router.get('/login', controller.login.index);
    router.get('/register', controller.login.register);
};