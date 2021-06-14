require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async()=>{

    try {
        await mongoose.connect(process.env.MONGO_URI,{
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