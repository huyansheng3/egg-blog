module.exports = app => {
    const { router, controller } = app;

    router.post('/api/v1/users/new', controller.user.create);
};