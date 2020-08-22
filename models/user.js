const mongoose = require('mongoose')
const Event = require('./event')
const {ObjectId} = mongoose.Schema.Types

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
    },
    photo1:{
        type: Buffer
    },
    photo2:{
        type: Buffer
    },
    attendEvent:[{
        type:ObjectId,
        ref:"Event"
    }]
})

 module.exports =  mongoose.model("User",userSchema)