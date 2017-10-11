const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app) => {
    app.get('/status', (req, res) => {
        res.send({
            message: 'Jesus is Lord'
        });
    });

    app.post('/register', AuthenticationController.register);
}