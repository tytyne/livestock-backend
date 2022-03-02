import Joi from "joi"

class EventValidation{
    static save(req,res,next){
        const Schema=Joi.object({
   
        title:Joi.string().required().messages(),
        start: Joi.date().required().messages(),
        end:  Joi.date().greater(Joi.ref('start')).messages(),
      
         })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }
        next()

    }

}

export  default EventValidation






