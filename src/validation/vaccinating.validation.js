import Joi from "joi"

class VaccinatingValidation{
    static save(req,res,next){
        const Schema=Joi.object({
 
        onsetDate: Joi.date().required().messages(),
        description:Joi.string().messages(),
        quantity:Joi.number().required().messages(),
        nextAppointment:Joi.date().greater(Joi.ref('onsetDate')).messages(),
      
         })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }
        next()

    }

}

export  default VaccinatingValidation






