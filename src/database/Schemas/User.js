const mongoose = require('mongoose');
const { Schema } = mongoose; // destructuring to get schema method inside moongose lib

const UserSchema = new Schema({
    password: { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    createAt: { type: Date, required: true, default: Date.now },
});

module.exports =  mongoose.model('users', UserSchema); // convert 'UserSchema' into model called 'User'