import Joi from "joi"

class FarmerValidation{
    static save(req,res,next){
        const Schema=Joi.object({
 
        firstname:Joi.string().min(3).required().messages(),
        lastname:Joi.string().min(3).required().messages(),
        phone:Joi.number().min(10).required().messages(),   
        nid:Joi.number().min(3).required().messages(),
        gender:Joi.string().min(3).required().messages(),
        farmer_cat:Joi.string().required().messages(),
        province:Joi.string().min(3).required().messages(),
        district:Joi.string().min(3).required().messages(),
        cell:Joi.string().min(3).required().messages(),
        sector:Joi.string().min(3).required().messages(),
        village:Joi.string().min(3).required().messages(),
         })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }
        next()

    }

}

export  default FarmerValidation


