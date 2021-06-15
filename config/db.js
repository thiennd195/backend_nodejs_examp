require('dotenv').config()
const mongoose = require('mongoose')
const {MONGODB_URL} = require('../utils/config')

const connectDB = async()=>{

    try {
        await mongoose.connect(MONGODB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('connetc succesfull')
    } catch (error) {
        console.log('connect fail;')
        process.exit(1)

        
    }
}

module.exports= connectDB