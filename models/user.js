const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    age : {
        type: Number,
        required : true
    },
    contact : {
        type: Number,
        //required : true
    }
})

  mongoose.model("User",userSchema)