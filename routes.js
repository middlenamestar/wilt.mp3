const router = require('express').Router();
const User = require('./models/User');
const generateToken = require('./auth');

// create new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        })
        await newUser.save()
        const token = generateToken(newUser._id)

        console.log(`new user: ${newUser} and token: ${token}`);
        res.send('NEW USER REGISTERED');
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;

// add a "if user already exists" error to make sure duplicate users are not registered.