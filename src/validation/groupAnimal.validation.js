
class GroupAnimalValidation{
    static save(req,res,next){
        const Schema=Joi.object({
 
            earring_num:Joi.number().min(3).required().messages(),  
            // sex:Joi.string().required().messages(), 
            birth_date:Joi.date().required().messages(),
            birth_weight:Joi.string().min(2).required().messages(),
            // parent:Joi.string().min(3).required().messages(),

         })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }
        next()

  }
}

export default GroupAnimalValidation;