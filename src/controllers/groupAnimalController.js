import AnimalService from "../services/animal.service";
import GroupAnimalService from "../services/groupAnimal.service";
const {
  createGroupAnimal,
  getGroupAnimalById,
  getAllGroupAnimals,
  updateGroupAnimalById,
  deleteGroupAnimalById,

} = GroupAnimalService;
const {updateAnimalByGroupId,createAnimal} = AnimalService

import CalculationHelper from "../utils/calculationHelper";
const{calculateDays,calculateWeeks,calculateMonths,calculateYears}=CalculationHelper

export default class GroupAnimalController {
  //save an GroupAnimal
  static async storeGroupAnimal(req, res, next) {
    try {
      const formData = req.body;
      formData.createdBy = req.user.id;
     if (formData.type ==='set')
     {
      formData.is_group=true;
      const data = await createAnimal(formData);
      res.status(200).json({ message: "an animal created!", data });
     }
      else{
        const data = await createGroupAnimal(formData);
        res.status(200).json({ message: "an GroupAnimal created!", data });
      }
     
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
      const data = await updateGroupAnimalById(formData, id);
      return res.status(200).json({ message: "update an GroupAnimal!!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete an GroupAnimal

  static async deleteGroupAnimal(req, res, next) {
    try {
      const id = req.params.id;
      const data = await deleteGroupAnimalById(id);
      return res.status(200).json({ message: "delete a GroupAnimal" });
    } catch (e) {
      return next(new Error(e));
    }
  }

  // update animal group

  static async  EditGroupAnimal(req,res,next){
    try{
      const rid = req.params.id
      const {add_animal}=req.query
      const data  = await updateAnimalByGroupId(add_animal)
      console.log("check dataaaa",data)
      return res.status(200).json({message:"The animal is added!",data})

    }
    catch(e){
      return next(new Error(e))
    }
  }
 

}
