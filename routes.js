const router = require('express').Router();
const User = require('./models/User');
const { generateToken, protect } = require('./auth');
const bcrypt = require('bcrypt');

// create new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        })

        await newUser.save()

        if(newUser) {
            res.status(201).json({
                _id: newUser.id,
                username: newUser.username,
                token: generateToken(newUser.username)
            })
        } else {
            res.status(400)
            console.log('invalid user data')
        }

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
            res.json({
                _id: user.id,
                username: user.username,
                token: generateToken(user.username)
            })
        } else {
            res.status(400)
            console.log('invalid credentials')
        }
    } catch (err) {
        console.log(err)
    }
});

// render homepage
router.get('/', async (req, res) => {
    res.render('index');
});

// render register/login page
router.get('/user-login', async (req, res) => {
    res.render('user-login');
});

// render protected page
router.get('/locked', protect, async (req, res) => {
    res.render('locked');
});

module.exports = router;