var mongoose = require('mongoose');

const image = mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    url : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('image',image)