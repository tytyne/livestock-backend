import GroupAnimalService from "../services/groupAnimal.service";
const {
  createGroupAnimal,
  getGroupAnimalById,
  getAllGroupAnimals,
  updateGroupAnimalById,
  deleteGroupAnimalById,
} = GroupAnimalService;
import CalculationHelper from "../utils/calculationHelper";
const{calculateDays,calculateWeeks,calculateMonths,calculateYears}=CalculationHelper

export default class GroupAnimalController {
  //save an GroupAnimal
  static async storeGroupAnimal(req, res, next) {
    try {
      const formData = req.body;
      formData.createdBy = req.user.id;
      // formData.ageInDays = await calculateDays(formData.birthdate);
      // formData.ageInWeeks = await calculateWeeks(formData.birthdate);
      // formData.ageInMonths = await calculateMonths(formData.birthdate);
      // formData.ageInYears = await calculateYears(formData.birthdate)
      const data = await createGroupAnimal(formData);
      res.status(200).json({ message: "an GroupAnimal created!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an GroupAnimal by Id
  static async getGroupAnimalIdCheck(req, res, next) {
    try {
      const id = req.params.id;
      const data = await getGroupAnimalById(id);
      console.log("check dataaaa",data)
      res.status(200).json({ message: "get GroupAnimal by Id",data});
    } catch (e) {
      return next(new Error(e));
    }
  }
 
  //get all GroupAnimals
  static async getGroupAnimals(req, res, next) {
    try {
      const data = await getAllGroupAnimals(req.user.id);
      res.status(200).json({ message: "All GroupAnimals", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an GroupAnimal
  static async updateGroupAnimal(req, res, next) {
    try {
      const id = req.params.id;
      
      const formData = req.body;
      formData.createdBy = req.user.id;
      // formData.ageInDays = await calculateDays(formData.birthdate);
      // formData.ageInWeeks = await calculateWeeks(formData.birthdate);
      // formData.ageInMonths = await calculateMonths(formData.birthdate);
      // formData.ageInYears = await calculateYears(formData.birthdate)
      const data = await updateGroupAnimalById(formData, id);
      res.status(200).json({ message: "update an GroupAnimal!!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete an GroupAnimal

  static async deleteGroupAnimal(req, res, next) {
    try {
      const id = req.params.id;
      const data = await deleteGroupAnimalById(id);
      res.status(200).json({ message: "delete a GroupAnimal" });
    } catch (e) {
      return next(new Error(e));
    }
  }

 

}
