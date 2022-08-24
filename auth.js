const jwt = require('jsonwebtoken');
const User = require('./models/User');

// generates jwt token
const generateToken = (username) => {
    return jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
};

// protect route
const protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1];

            // verify token
            const decoded = jwt.verify(token, proess.env.JWT_SECRET);

            // get user from token
            req.user = await User.findById(decoded.id).select('-password');
            // console.log(decoded);
            // console.log(decoded.id);

            next();
        } catch (error) {
            // not the right token
            console.log(error);
            res.status(401);
            console.log('not authorized')
        }
    };

    if(!token) {
        // non existant token
        console.log('not authorized, no token');
        res.send('not authorized, no token');
    };
};

module.exports = { generateToken, protect };