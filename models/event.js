const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    date : {
        type: String,
        required : true
    },
    time : {
        type:String,
        required : true
    },
    Price : {
        type: String,
        required : true
    },
    photo:{
        type: Buffer
    }
})

  module.exports = mongoose.model("Event",eventSchema)