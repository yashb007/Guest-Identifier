
const mongoose = require('mongoose')
const User = require('../models/user')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')


const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"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"
    }
}))



exports.getUserById = (req,res,next,id)=>{
    User.findById(id).exec((err,user) => {
        if(err){
            return res.status(400).json({
                error : "No category  found in db"
            })
        }
        req.user = user
        next()
    })
}

exports.register = (req,res)=>{
    const {name , age , email ,contact} =  req.body;
    const   user = new User ({
        name,
        age,
        email,
        contact
    })
    user.save().then((user)=>{
        console.log(req.body.email)
        transporter.sendMail({
            to:req.body.email,
            from:"bansaly37@gmail.com",
            subject:"Registration Completed",
            html:"<h1>Thanks for registration. See you soon at the venue</h1>"
        }).then(()=>{
            console.log("Email success")
        })
        res.json(user)
    
    }).catch(e =>{
        res.send(e)
    })   
}

exports.getAllUser = (req,res) =>{
    User.find().exec((err, user) => {
        if(err){
            return res.status(400).json({
                error : "Not User to display in db"
            })
        }
        res.json(user)
    })
}
