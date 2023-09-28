const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: [true, 'Name is necessary']
    },
    password: {
        type: String,
        require: true
    },
    posts: Array
})

module.exports = userSchema