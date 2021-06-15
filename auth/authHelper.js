const {sign} = require ('jsonwebtoken')
const {JWT_SECRET} = require('../utils/config')

const getToken=(user)=>{
  
    return sign({user},JWT_SECRET,{expiresIn:'48h'})
}
const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        const onlyToken = token.slice(7, token.length)
        jwt.verify(onlyToken, config.JWT_SECRET, (error, decode) => {
            if(error){
                return res.status(401).send(({msg: 'Invalid Token'}))
            }
            req.user = decode;
            next();
            return;
        })
    } else {
        return res.status(401).send({msg: 'Token is not supplied'})
    }
}

module.exports={getToken,isAuth}

