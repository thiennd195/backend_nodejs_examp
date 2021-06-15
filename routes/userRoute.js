const express = require('express')
const route = express.Router()
const {body} = require('express-validator')
const {register, login} = require('../controller/userController')

route.post('/register',[
    body('username').not().isEmpty().withMessage('empty_username'),
    body('fullname').not().isEmpty().withMessage('empty_fullname'),
    body('password').not().isEmpty()
    .withMessage('empty_password'),
    body("rePassword").custom(
        (value, { req, loc, path }) => {
            if (value !== req.body.password) {
                throw new Error('password_notmatch');
            } else {
                return value;
            }
        }
    ),
],register
)
route.post('/login',login)



module.exports=route