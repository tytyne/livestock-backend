import AnimalService from "../services/animal.service";
import GroupAnimalService from "../services/groupAnimal.service";
const {
  createGroupAnimal,
  getGroupAnimalById,
  getAllGroupAnimals,
  updateGroupAnimalById,
  deleteGroupAnimalById,
  searchGroupAnimals

} = GroupAnimalService;
const {updateAnimalByGroupId,createAnimal,countingAnimals} = AnimalService

import CalculationHelper from "../utils/calculationHelper";
const{calculateDays,calculateWeeks,calculateMonths,calculateYears}=CalculationHelper
const { v4: uuidv4 } = require('uuid');

export default class GroupAnimalController {
  //save an GroupAnimal
  static async storeGroupAnimal(req, res, next) {
    try {
      const formData = req.body;
      formData.id = uuidv4()
      formData.createdBy = req.user.id;
     if (formData.type ==='set')
     {
      formData.is_group=true;
      console.log("check data",formData)
      const data = await createAnimal(formData);

      
      res.status(200).json({ message: "an animal created!", data });
     }
      else{
        console.log("check data",formData)
        const data = await createGroupAnimal(formData);
        returnres.status(200).json({ message: "an GroupAnimal created!", data });
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
      for (let index = 0; index < data.length; index++) {
    
        const checking = await countingAnimals(data[index].id)
        data[index] = data[index].toJSON();
        // if(checking){
        console.log("checking data",checking)
          data[index].group_qty = checking;
        // }


      }


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
      
      const {add_group,id}=req.params
     
      const data  = await updateAnimalByGroupId(add_group,id)

      return res.status(200).json({message:"animal is added",data})
  
    }
    catch(e){
      return next(new Error(e))
    }
  }
  static async searchingGroupAnimal(req,res,next){

    try{
      const {name} = req.query;
      const data = await searchGroupAnimals(name);
      console.log(data)
      return res.status(200).json({ message: "searched group animals",data});
    }
    catch(e){
      return next(new Error(e));
    }
  }
 

}
