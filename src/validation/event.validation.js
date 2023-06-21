import Joi from "joi"

class EventValidation{
    static save(req,res,next){
        const Schema=Joi.object({
   
        title:Joi.string().messages(),
        priority: Joi.string().messages(),
        status: Joi.string().messages(),
        hours_spent: Joi.string().messages(),
        todo: Joi.string().messages(),
        period:Joi.string().messages(),
        color:Joi.string().messages(),
        checklist:Joi.string().messages(),
        start_time: Joi.date().messages(),
        end_time: Joi.date().greater(Joi.ref('start_time')).messages(),
        all_day: Joi.boolean().messages(),
        description: Joi.string().messages(),
        reference_type: Joi.string().messages(),
        created_by: Joi.string().messages(),
        createdBy: Joi.string().messages(),
        complete: Joi.boolean().messages(),

         })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }

        next()

    }

}

export  default EventValidation






