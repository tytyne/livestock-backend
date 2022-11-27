



import Joi from "joi";

class transactionValidation {
  static save(req, res, next) {
   
    const Schema = Joi.object({
      type: Joi.string().valid('expense', 'income').messages(),
      amount: Joi.string().min(3).messages(),
      date: Joi.date().min(3).messages(),
      reporting_year: Joi.number().email().messages(),
      vendor: Joi.string().min(3).messages(),
      category: Joi.string().messages(),
      ref_Id: Joi.number().min(3).messages(),
      ref_type: Joi.string().min(3).messages(),
      check_number: Joi.string().email().messages(),
      keywords: Joi.string().min(3).messages(),
      description: Joi.number().messages(),
    });

    const result = Schema.validate(req.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.details[0].message });
    }
    next();
  }
}

export default transactionValidation;


// const schema = Joi.object().keys({
//   type: Joi.string().valid('ios', 'android'),
// });

// const myObj = { type: 'none' };
// const result = Joi.validate(myObj, schema);
// console.log(result);








    // vendor:DataTypes.STRING,
    // category:DataTypes.STRING,
    // ref_Id:DataTypes.STRING,
    // ref_type:DataTypes.STRING,
    // check_number:DataTypes.STRING,
    // keywords:DataTypes.STRING,
    // description:DataTypes.STRING,