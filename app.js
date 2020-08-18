const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express()

const PORT = process.env.port ||  8080


mongoose.connect("mongodb+srv://guest:nLLs2pi66N7eKBzs@cluster0.n8ftq.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected', () => {
    console.log("Connect to mongo");
})
mongoose.connection.on('error', (err) => {
    console.log(" Does not Connect to mongo",err);
})

require('./models/user')

app.use(express.json())
app.use(bodyParser.json())
//app.use(cors());
app.use(require('./routers/user'))

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