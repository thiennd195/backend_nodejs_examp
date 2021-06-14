require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async()=>{

    try {
        await mongoose.connect('mongodb+srv://user-123:user-123@cluster0.tuxc2.mongodb.net/shop?retryWrites=true&w=majority',{
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