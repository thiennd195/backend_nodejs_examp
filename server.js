
require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const productRoutes = require("./routes/productRoutes")
const authRoute = require("./routes/userRoute")
const config=require('./utils/config')

const cors = require('cors')


connectDB()

const app = express()


const PORT = config.PORT

app.use(cors())

app.use(express.json())

app.use('/products',productRoutes)
app.use('/auth',authRoute)



app.listen(PORT,()=>console.log(`Server running ${PORT}`))
