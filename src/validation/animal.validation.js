import Joi from "joi"

class AnimalValidation{
    static save(req,res,next){
        const Schema=Joi.object({ 
        earring_num:Joi.number().min(3).required().messages(),  
        birth_date:Joi.date().required().messages(),
        birth_weight:Joi.string().min(2).messages(),
        animalCategory_id:Joi.number().messages(),
        farm_id:Joi.number().messages(),
        purpose_id:Joi.number().messages(),  
        birth_date: Joi.date().messages(),
        birth_weight:Joi.number().min(2).messages(),
        bred_date:Joi.date().messages(),
        breed:Joi.string().min(2).messages(),
        breeding_status:Joi.string().min(2).messages(),
        breeding_stock:Joi.boolean().messages(),
        coloring:Joi.string().min(2).messages(),
        condition_score:Joi.number().messages(),
        death_date:Joi.date().messages(),
        deceased_reason:Joi.string().messages(),
        description:Joi.string().min(2).messages(),
        father_id:Joi.string().messages(),
        gender:Joi.string().min(2).messages(),
        harvest_label:Joi.string().min(2).messages(),
        harvest_unit:Joi.string().min(2).messages(),
        is_group:Joi.boolean(),
        is_neutered:Joi.boolean(),
        keywords:Joi.string().min(2).messages(),
        market_price:Joi.number().min(2).messages(),
        mother_id:Joi.number().min(2).messages(),
        name:Joi.string().min(2).messages(),
        on_feed:Joi.boolean().messages(),
        other_tag_number:Joi.string().min(2).messages(),
        purchase_date: Joi.date().messages(),
        purchase_price:Joi.number().messages(),
        purchased:Joi.boolean(),
        purchased_from_id:Joi.string().min(2).messages(),
        registry_number:Joi.string().min(2).messages(),
        retention_score:Joi.number().messages(),
        sale_date:Joi.date().messages(),
        status:Joi.string().min(2).messages(),
        tag_color:Joi.string().min(2).messages(),
        tag_number:Joi.string().min(2).messages(),
        type:Joi.string().min(2).messages(),
        internal_id:Joi.string().messages(),
        weight: Joi.number().messages(),
        height:Joi.number().messages(),
        electronic_id: Joi.string().min(2).messages()

        })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }
        next()

  }
}

export default AnimalValidation;
