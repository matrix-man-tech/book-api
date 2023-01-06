require('dotenv').config()
const expressAsyncHandler = require('express-async-handler')
const User = require('../../models/user/User')
const generateToken = require('../../config/token/generateToken')
const validateMongodbId = require('../../utils/validateMongodbId')

const userRegisterCtrl = expressAsyncHandler(async (req,res) =>{
    
    const { email } = req.body
    const userExists = await User.findOne({ email })

    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
    
        try {
            const user = await User.create({
                firstName: req?.body?.firstName,
                lastName: req?.body?.lastName,
                email: req?.body?.email,
                password: req?.body?.password
            })
            res.json(user)
        } catch (error) {
            res.json(error);
        }
    })

const loginUserCtrl = expressAsyncHandler(async (req,res)=>{
    const { email,password } = req.body
    const userFound = await User.findOne({email})
   
    if(userFound && (await userFound.isPasswordMatched(password))){
        res.json({
            id:userFound?._id,
            firstName:userFound?.firstName,
            lastName:userFound?.lastName,
            email:userFound?.email,
            token:generateToken(userFound?._id)
        })
    }
    else{
        res.status(401)
        throw new Error("Invalid credentials")
    }
})

module.exports = {userRegisterCtrl,loginUserCtrl}