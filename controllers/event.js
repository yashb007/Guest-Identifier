
const mongoose = require('mongoose')
const Event = require('../models/event')


exports.getEventById = (req,res,next,id)=>{
    Event.findById(id).exec((err,event) => {
        if(err){
            return res.status(400).json({
                error : "No event found in db"
            })
        }
        req.event = event
        next()
    })
}
exports.add = (req,res)=>{
    const {name , date , time ,Price} =  req.body;
    const   event = new Event ({
        name ,
         date ,
         time ,
        Price
    })
    event.save().then((event)=>{
        res.json(event)
    
    }).catch(e =>{
        res.send(e)
    })   
}

exports.delete = (req,res) =>{
     Event.findByIdAndDelete({_id : req.event._id}, (err,eve) => {
         if(err || !eve){
            return res.status(400).json({
                error : "Not able to delete"
            })   
         }
         res.send(eve)
     })
}

exports.edit = (req, res) => {
    Event.findByIdAndUpdate(
        {_id : req.event._id},
        {$set :req.body},
        {new :true ,useFindAndModify : false},
        (err, event) =>{
            if(err ||!event){
                return res.status(400).json({
                    error : "No updation "
                })
            }
            
           res.send(event)

            }
       
    )
}



exports.getAllEvent = (req,res) =>{
    Event.find().exec((err, event) => {
        if(err){
            return res.status(400).json({
                error : "Not events to display in db"
            })
        }
        res.json(event)
    })
}
