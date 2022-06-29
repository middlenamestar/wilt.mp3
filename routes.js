const router = require('express').Router();
const User = require('./models/User');
const generateToken = require('./auth');
const bcrypt = require('bcrypt');

// create new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        })
        // save to db
        await newUser.save()

        const token = generateToken(newUser._id)

        console.log(`new user: ${newUser} and token: ${token}`);
        res.send('NEW USER REGISTERED');
    } catch (err) {
        console.log(err)
    }
});

// add a "if user already exists" error to make sure duplicate users are not registered.

// login
router.post('/users/login', async (req, res) => {
    try {
        const {username, password} = req.body

        // search db
        const user = await User.findOne({username})

        if(user && (await bcrypt.compare(password, user.password))) {
            // success. logged in.
            const token = generateToken(user._id)
            console.log(`successfully logged in, here is jwt token: ${token}`)
            res.send('u r now logged in ☆')
        } else {
            // please check your credentials!
            console.log('invalid credentials')
            res.send('nah')
        }
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;