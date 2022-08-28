import AnimalService from "../services/animal.service";
const {
  createAnimal,
  getAnimalById,
  getAnimalByEarring,
  getAllanimals,
  updateById,
  deleteById,
  countAnimals
} = AnimalService;
import CalculationHelper from "../utils/calculationHelper";
const{calculateDays,calculateWeeks,calculateMonths,calculateYears}=CalculationHelper

export default class AnimalController {
  //save an animal
  static async storeAnimal(req, res, next) {
    try {
      const formData = req.body;
      formData.createdBy = req.user.id;
      formData.ageInDays = await calculateDays(formData.birthdate);
      formData.ageInWeeks = await calculateWeeks(formData.birthdate);
      formData.ageInMonths = await calculateMonths(formData.birthdate);
      formData.ageInYears = await calculateYears(formData.birthdate)
      const data = await createAnimal(formData);
      res.status(200).json({ message: "an animal created!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an animal by Id
  static async getAnimal(req, res, next) {
    try {
      const id = req.params.id;
      const data = await getAnimalById(id);
      res.status(200).json({ message: "get animal by Id", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //animal by earing number
  static async getAnimalEaring(req, res, next) {
    try {
      const input = req.query;
      const data = await getAnimalByEarring(input);
      res.status(200).json({ message: "get animal by earring number", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //get all animals
  static async getAnimals(req, res, next) {
    try {
      const data = await getAllanimals(req.user.id);
      res.status(200).json({ message: "All animals", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an animal
  static async updateAnimal(req, res, next) {
    try {
      const id = req.params.id;
      const formData = req.body;
      formData.ageInDays = await calculateDays(formData.birthdate);
      formData.ageInWeeks = await calculateWeeks(formData.birthdate);
      formData.ageInMonths = await calculateMonths(formData.birthdate);
      formData.ageInYears = await calculateYears(formData.birthdate)
      const data = await updateById(formData, id);
      res.status(200).json({ message: "update an animal!!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete an animal

  static async deleteAnimal(req, res, next) {
    try {
      const id = req.params.id;
      const data = await deleteById(id);
      res.status(200).json({ message: "delete a animal" });
    } catch (e) {
      return next(new Error(e));
    }
  }

  // counting animals
  
  static async countingAnimals(req, res, next) {
    try {
      const data = await countAnimals(req.user.id);
      res.status(200).json({ message: "number of animals", data });
    } catch (e) {
      return next(new Error(e));
    }
  }

}
