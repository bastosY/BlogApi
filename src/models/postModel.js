const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'Tittle is necessary']
    },
    description: {
        type: String,
        require: [true, 'Description is necessary']
    },
    content:  {
        type: String,
        require: [true, 'Content is necessary']
    },
    autor: {
        type: Array,
        require: true
    },
    category: String,
    coments: Array,
    createDate: {
        type: Date,
        require: true
    }
})

module.exports = postSchema