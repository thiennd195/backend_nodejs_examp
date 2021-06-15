require('dotenv').config()
module.exports= {
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://user-123:user-123@cluster0.tuxc2.mongodb.net/shop?retryWrites=true&w=majority',
  
}