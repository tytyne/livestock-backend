import Joi from "joi"

class FarmerValidation{
    static registration(req,res,next){
        const Schema=Joi.object({
 
        fullname:Joi.string().min(3).required().messages(),
        phone:Joi.string().min(3).required().messages(),   
        animal_cat:Joi.string().min(3).required().messages(),
        nid:Joi.string().min(3).required().messages(),
        gender:Joi.string().min(3).required().messages(),
        farmer_cat:Joi.string().min(3).required().messages(),
        farmer_cat:Joi.string().min(3).required().messages(),
        farmer_cat:Joi.string().min(3).required().messages(),
         })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }
        next()

    }

}

export  default FarmerValidation



// fullname: DataTypes.STRING,
// userId: DataTypes.INTEGER,
// phone: DataTypes.STRING,
// animal_cat: DataTypes.STRING,
// nid:DataTypes.STRING,
// gender: DataTypes.STRING,
// farmer_cat:DataTypes.STRING,
// bank_acc: DataTypes.STRING,
// location:DataTypes.STRING,