import Joi from 'joi'

export  const emailVerify=Joi.object({                                                                                                                                
    email:Joi.string().email().required()
})
export const resetPassword=Joi.object({                                                                                                                                
    password:Joi.string().min(8).required(),
    confirmPassword:Joi.string().required()
})