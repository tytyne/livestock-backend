import Joi from "joi";

class UserValidation {
  static save(req, res, next) {
    console.log(req.body);
    const Schema = Joi.object({
      firstname: Joi.string().min(3).required().messages(),
      lastname: Joi.string().min(3).required().messages(),
      username: Joi.string().min(3).required().messages(),
      email: Joi.string().email().required().messages(),
      password: Joi.string().min(3).required().messages(),
      occupation: Joi.number().required().messages(),
    });

    const result = Schema.validate(req.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.details[0].message });
    }
    next();
  }
}

export default UserValidation;
