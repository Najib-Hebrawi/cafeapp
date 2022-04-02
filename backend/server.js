const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const routeUrls = require('./routes/routes')
const cors = require('cors')
const app = express()
//

/*
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
//
dotenv.config()
 mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
})
 const mongo = mongoose.connection
//
mongo.on('error', (error) => console.log(error))
mongo.once('open', () => console.log("Connect"))
//
app.use('/app', routeUrls)
//
app.listen(4000, () => console.log('Server Started'))
*/

dotenv.config()
mongoose.connect(process.env.MONGO_URL , () => console.log("Database is connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)
app.listen(4000, () => console.log("server is up and running"))

