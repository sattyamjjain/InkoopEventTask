const express = require('express');
const router = express.Router();
const authService = require('./auth.sevice');

// routes
router.post('/login', authenticate);
router.post('/register', register);

module.exports = router;

function authenticate(req, res, next) {
    authService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    authService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
