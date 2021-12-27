import Joi from 'joi'


export const signup=Joi.object({  

    email:Joi.string().min(5).email().required(),
    password:Joi.string().min(8).required(),
    fullname:Joi.string().min(3).required(),
    username:Joi.string().min(5).required(),

})