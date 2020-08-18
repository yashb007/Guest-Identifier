
const mongoose = require('mongoose')
const User = mongoose.model("User")
exports.register = (req,res)=>{
    const {name , age , email ,contact} =  req.body;
    const   user = new User ({
        name,
        age,
        email,
        contact
    })
    user.save().then((user)=>{
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
