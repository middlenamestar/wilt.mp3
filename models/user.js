const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next) {
    if(this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if(err) {
                return next(err);
            } else {
                bcrypt.hash(this.password, salt, function(err, hash) {
                    if(err) {
                        return next(err);
                    } else {
                        this.password = hash;
                        next();
                    };
                });
            };
        });
    } else {
        return next();
    };
});

module.exports = mongoose.model('user', userSchema);