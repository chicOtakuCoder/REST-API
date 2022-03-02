const UserController = require('../controllers/user.controller');

module.exports = router => {
    router.get('/users', UserController.getAll)
    router.post('/users', UserController.create)
    router.patch('/users/:id', UserController.update)
    router.delete('/posts/:id', UserController.delete)

    return router;
}