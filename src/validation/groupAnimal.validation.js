
class GroupAnimalValidation{
    static save(req,res,next){
        const Schema=Joi.object({
 
        farmId:Joi.number().min(1).required().messages(), 
        purposeId:Joi.number().min(1).required().messages(),
        animalCategoryId:Joi.number().min(1).required().messages(),    
        name:Joi.string().required().messages(),
        number:Joi.number().min(1).required().messages(),  
        femaleNumber:Joi.number().min(1).required().messages(),
        maleNumber:Joi.number().min(1).required().messages(),       
        bornDate:Joi.date().required().messages(),
        ageInWeeks:Joi.string().required().messages(),
        ageInMonths:Joi.string().required().messages(),
        expected_exit:Joi.date().required().messages(),
         })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }
        next()

  }
}

export default GroupAnimalValidation;