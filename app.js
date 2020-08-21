const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoute =  require('./routers/user')
const eventRoute =  require('./routers/event')
const adminRoute = require('./routers/admin')
const PORT = process.env.port ||  8080

mongoose.connect("mongodb+srv://guest:nLLs2pi66N7eKBzs@cluster0.n8ftq.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser: true,
useCreateIndex : true,
useUnifiedTopology: true}).then(() =>{
    console.log("DB CONNECTED")
}).catch((err)=>{
    console.log("OOOPS NOT CONNECTED",err)
})
const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());
app.use('/user',userRoute)
app.use('/event',eventRoute)
app.use('/admin',adminRoute)

app.get('*', (req, res) => res.json({ working: "fine" }))
app.post('*', (req, res) => res.json({ working: "fine" }))

app.get('/st',(req,res)=>{
    res.json({ working: "fine" })
})
// if(process.env.NODE_ENV=="production"){
//     app.use(Express.static('client/build'))
//     const path = require('path')
//     app.get('*',(req,rse)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`)
})