import AnimalService from "../services/animal.service";
import GroupAnimalService from "../services/groupAnimal.service";
const {
  createGroupAnimal,
  getGroupAnimalById,
  getAllGroupAnimals,
  getAllGroupAnimalss,
  updateGroupAnimalById,
  deleteGroupAnimalById,
  searchGroupAnimals

} = GroupAnimalService;
const {updateAnimalByGroupId,createAnimal,countingAnimals,animalLikeGroup} = AnimalService

import CalculationHelper from "../utils/calculationHelper";
const{calculateDays,calculateWeeks,calculateMonths,calculateYears}=CalculationHelper
const { v4: uuidv4 } = require('uuid');

export default class GroupAnimalController {
  //save an GroupAnimal
  static async storeGroupAnimal(req, res, next) {
    try {
      const {farmId} = req.params
      const formData = req.body;
      formData.id = uuidv4()
      formData.createdBy = req.user.id;
      formData.farm_id=farmId;
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
        return res.status(200).json({ message: "an GroupAnimal created!", data });
      }
     
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an GroupAnimal by Id
  static async getGroupAnimalIdCheck(req, res, next) {
    try {
      const {farmId} = req.params
      const id = req.params.id;
      const data = await getGroupAnimalById(id);
      // console.log("records",JSON.parse(data.dataValues.records))
      return res.status(200).json({ message: "get GroupAnimal by Id",data});
    } catch (e) {
      return next(new Error(e));
    }
  }
 
  //get all GroupAnimals
  static async getGroupAnimals(req, res, next) {
    try {

      const {farmId} = req.params
      const datat = await getAllGroupAnimals(farmId);
      console.log("check dataaaa",datat)
      for (let index = 0; index < datat.length; index++) {
    
        const checking = await countingAnimals(datat[index].id)
        console.log("checkinggg",checking)
        datat[index] = datat[index].toJSON();
          datat[index].group_qty = checking;
        
      }
      const  animalGroup = await animalLikeGroup(farmId)
      for (let index = 0; index < animalGroup.length; index++) {
        animalGroup[index] = animalGroup[index].toJSON();
        animalGroup[index].type =`set`
      }

      console.log("animal grpup",animalGroup)
      const data = [...animalGroup,...datat]


      res.status(200).json({ message: "All GroupAnimals", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an GroupAnimal
  static async updateGroupAnimal(req, res, next) {
    try {
      const {farmId} = req.params
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
      const {farmId} = req.params
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
      const {farmId} = req.params
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
      const {farmId} = req.params
      const {name} = req.query;
      const data = await searchGroupAnimals(name,farmId);
      console.log(data)
      return res.status(200).json({ message: "searched group animals",data});
    }
    catch(e){
      return next(new Error(e));
    }
  }
 

}
