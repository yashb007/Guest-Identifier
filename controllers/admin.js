
const mongoose = require('mongoose')
const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

exports.signup = (req,res) =>{
    const admin = new Admin(req.body)
    admin.save().then((user)=>{
       res.send({
           name : user.name,
           email : user.email,
           id : user._id
       })
    }).catch((e)=>{
        res.status(400).send(e)
    })
}


exports.signin = (req,res)=>{
    const {email, password} = req.body;
    
    Admin.findOne({email}, (err, user) => {
        if(err || !user){
          return  res.status(400).json({
                error : "Admin does not exist"
                        })
        }
        if(!(user.password == password)){
           return  res.status(401).json({
                error : "Email and password do not match"
           
        })}
        const token = jwt.sign({_id : user._id},"billiondollar")
            res.cookie("token", token, {expire : new Date() +9999})
            const {_id, name , email, role} = user
            return res.send({token,user : {_id, name , email, role}})
        })
}

exports.signout = (req,res)=>{
    res.clearCookie("token")
    res.send({ message : "User signout Successfully"})
}

