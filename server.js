const express = require('express');
const path = require('path');
const session = require('express-session');

const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/wilt',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
        console.log('connected')
    }
);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(session({
    secret: 'meow 5555',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

// serve static files
app.use(express.static('public'));

// don't think i have to do /public, but gonna leave it for now
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// have to do public for this one.
app.get('/user-login', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/user-login.html'))
);

app.listen(PORT, () =>
    console.log(`click me http://localhost:${PORT}`)
);