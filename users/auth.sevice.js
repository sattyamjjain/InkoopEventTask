const config = require('config.json');
const jwt = require('jsonwebtoken');
const db = require('_helpers/db');
const User = db.User;

module.exports = {
    authenticate,
    create,
    getById
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });
    if (user) {
        const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}

async function create(userParam) {
    // validate
    if (await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);

    // save user
    await user.save();
}

async function getById(id) {
    return await User.findById(id);
}