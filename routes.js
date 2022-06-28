const router = require('express').Router();
const User = require('./models/User');

// create new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        })
        await newUser.save()
        req.session.save(() => {
            req.session.username = newUser.username;
            req.session.loggedIn = true;
            console.log(req.session);
        })
        console.log(`new user info: ${newUser}`);
        res.send('NEW USER REGISTERED');
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;