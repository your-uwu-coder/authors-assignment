const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema ({

    name: {
        type: String,
        required: [true, 'Author is required'],
        minLength: [3, 'Author name must be more than 3 characters']
    }

}, {timestamps:true} )

const Author = mongoose.model('author', AuthorSchema)
module.exports = Author; 