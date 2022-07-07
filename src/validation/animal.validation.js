import Joi from "joi"

class AnimalValidation{
    static save(req,res,next){
        const Schema=Joi.object({
 
        farmId:Joi.number().min(1).required().messages(), 
        earring_num:Joi.number().min(3).required().messages(),  
        sex:Joi.string().required().messages(), 
        animal_cat:Joi.string().min(3).required().messages(),
        birthdate:Joi.date().required().messages(),
        birthkgs:Joi.string().min(2).required().messages(),
        parent:Joi.string().min(3).required().messages(),
        expected_exit:Joi.date().required().messages(),
        expected_exit_kgs:Joi.number().required().messages()
         })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }
        next()

  }
}

export default AnimalValidation;
