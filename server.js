
require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const productRoutes = require("./routes/productRoutes")
const cors = require('cors')


connectDB()

const app = express()


const PORT = process.env.PORT||5000

app.use(cors())

app.use(express.json())

app.use('/products',productRoutes)


app.listen(PORT,()=>console.log(`Server running ${PORT}`))
