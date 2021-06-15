const User = require('../models/User')
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator');
const { getToken } = require('../auth/authHelper');

const register = async(req,res)=>{
    try {
        const validatorErrors = validationResult(req);
        if(!validatorErrors.isEmpty()){
            console.log(validatorErrors.array())
            return res.status(400).send(validatorErrors.array())
        }
        const {username,password} = req.body
        
        const user = await User.findOne({username})
        console.log(user,'tes')
        if(user) { return res.status(401).send([{ param: 'username', msg: 'Username used'}])}
        else{
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password,salt)
            
            const newUser = new User({
                username:req.body.username,
                fullname:req.body.fullname,
                password:hashPassword
            }) 
          
            const userNew= await newUser.save();
            if(userNew){
                

                res.status(200).json({message:'Register success!'})
            }
            else{
                res.status(401).json({message:"invalid_user_data"})
            }
        }     
    } catch (error) {
        return res.status(500).send([{ msg: 'server_error' }])

        
    }
}

const login = async (req,res)=>{
    try {
        const {username,password} = req.body
        const user = await User.findOne({username})
        if(!user) res.status(401).json({error:'Tài khoản không tồn tại!'})
        else{
        
            const match = await bcrypt.compare(password,user.password)
           
            if(!match) res.status(401).json({error:"Mật khẩu không đúng!"})
            else{
                const token = getToken(user)
                res.status(200).json({_id:user._id,fullname:user.fullname,token:token})
            }
        }
    } catch (error) {
        console.log('err',error)

        return res.status(500).send([{ msg: 'server_error' }])

        
    }
}



module.exports={register,login}