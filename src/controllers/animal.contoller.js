import AnimalService from "../services/animal.service";
const {
  createAnimal,
  getAnimalById,
  getAnimalByEarring,
  getAllanimals,
  updateById,
  deleteById,
  countAnimals,
  searchAnimals,
  searchAnimal,
  updateAnimalByGroupId,
  updateAnimalFather,
  updateAnimalMother,
  getAllAncentors,
  getAllOffstrings,
  getAllFemaleAnimals,
  getAllMaleAnimals
  
} = AnimalService;
import CalculationHelper from "../utils/calculationHelper";
const { electronicId, gettingAge } = CalculationHelper
import GroupAnimalService from "../services/groupAnimal.service";
const{pushingNewRecords,addNewRecords}=GroupAnimalService
const { v4: uuidv4 } = require('uuid');

export default class AnimalController {
  //save an animal
  static async storeAnimal(req, res, next) {
    try {
      const {farmId}=req.params
      const formData = req.body;
      // formData.harvest_label="lbs";
      formData.id = uuidv4()
      formData.electronic_id = await electronicId(formData.earring_num);
      formData.createdBy = req.user.id;
      formData.farm_id= farmId;
      const data = await createAnimal(formData);
      res.status(200).json({ message: "an animal created!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an animal by Id
  static async getAnimal(req, res, next) {
    try {
      const {id,farmId}= req.params;
      const checkdata = await getAnimalById(id);
      const data = checkdata.dataValues

      const checking = await gettingAge(data.birth_date)
      

      if (checking > 1) {

        data.age = `${Math.round(parseFloat(checking))} months`;
      }
      else if (checking === 1) {
        data.age = `${Math.round(parseFloat(checking))} month`;
      }
      else if (checking < 1) {

        const checkingdata = Math.round(parseFloat(checking * 30))
       
        if (checkingdata > 1) {
          data.age = `${checkingdata} days`;
        }
        else if (checkingdata === 1) {
          data.age = `${checkingdata} day `;

        }
        else{
          data.age = ` `;
        }
      }
      
      else{
        data.age = ` `;
      }
      
    res.status(200).json({ message: "get animal by Id", data });
  } catch(e) {
    return next(new Error(e));
  }
}
  //animal by earing number
  static async getAnimalEaring(req, res, next) {
  try {
    const input = req.query;
    const {farmId}=req.params
    const data = await getAnimalByEarring(input);
    res.status(200).json({ message: "get animal by earring number", data });
  } catch (e) {
    return next(new Error(e));
  }
}
  //get all animals
  static async getAnimals(req, res, next) {
  try {
    const {farmId}= req.params;
    const data = await getAllanimals(farmId);
   
    for (let index = 0; index < data.length; index++) {
    
      const checking = await gettingAge(data[index].birth_date)
   
      data[index] = data[index].toJSON();
     
        if (checking > 1) {

          data[index].age = `${Math.round(parseFloat(checking))} months`;
      }
      else if (checking === 1) {
        data[index].age = `${Math.round(parseFloat(checking))} month`;
      }
      else if (checking < 1) {

        const checkingdata = Math.round(parseFloat(checking * 30))
       
        if (checkingdata > 1) {
          data[index].age = `${checkingdata} days`;
        }
        else if (checkingdata === 1) {
          data[index].age = `${checkingdata} day `;

        }
        else{
          data[index].age = `0 day`;
        }
      }
      
      else{
        data[index].age = `0 day`;
      }
      
   }
   
    res.status(200).json({ message: "All animals", data });
  } catch (e) {
    return next(new Error(e));
  }
}
  // update an animal
  static async updateAnimal(req, res, next) {
  try {
    const {id,farmId}= req.params;
    const formData = req.body;
    const data = await updateById(formData, id);
    res.status(200).json({ message: "update an animal!!", data });
  } catch (e) {
    return next(new Error(e));
  }
}
  //delete an animal

  static async deleteAnimal(req, res, next) {
  try {
    const {farmId}=req.params
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
    const {farmId}=req.params
    const data = await countAnimals();
    res.status(200).json({ message: "number of animals", data });
  } catch (e) {
    return next(new Error(e));
  }

 
}
static async searchingAnimal(req,res,next){

  try{
    const {farmId}=req.params
    const {name} = req.query;
    const data = await searchAnimals(name,farmId);
    console.log(data)
    return res.status(200).json({ message: "searched animals",data});
  }
  catch(e){
    return next(new Error(e));
  }
}

static async searchingForAnimals(req,res,next){

  try{
    const {farmId}=req.params
    const {name} = req.query;
    const data = await searchAnimal(name);
    console.log(data)
    return res.status(200).json({ message: "searched animals!",data});
  }
  catch(e){
    return next(new Error(e));
  }
}

static async  EditGroupAnimal(req,res,next){
  try{
    // const id = req.params.id
    const {farmId}=req.params
    const {id,add_group}=req.params
   
    const animal = await getAnimalById(id)
    // console.log("check animal data",animal)
    const animalData = animal.dataValues
    // console.log("check animalData",animalData)
    const records = {
        ...records,
      animalData
    }
    console.log("check records",records)
    // console.log("check group ",add_group)
   
    const updatedAnimal = await addNewRecords(records.animalData,add_group)
    console.log("check animalll",updatedAnimal)
    const data  = await updateAnimalByGroupId(id,add_group)
    return res.status(200).json({message:"animal updated!",data})

  }
  catch(e){
    return next(new Error(e))
  }
}
// adding mother or father
static async addingParenting(req,res,next){
  try{
    const {farmId}=req.params
    const{gender,parent_of} = req.query
    if(gender=="male"){
      const formData = req.body;
      formData.id = uuidv4()
      formData.electronic_id = await electronicId(formData.earring_num);
      formData.createdBy = req.user.id;
      formData.gender=gender;
      const data = await createAnimal(formData);
      console.log("check dataaaa",data.dataValues.id)
      // return res.status(200).json({message:"giiii!"})
      const newParent = await updateAnimalFather(parent_of,data.dataValues.id)
      return res.status(200).json({message:"parent added successfully!",newParent})

    }
    else if(gender=="female"){
      const formData = req.body;
      formData.id = uuidv4()
      formData.electronic_id = await electronicId(formData.earring_num);
      formData.createdBy = req.user.id;
      formData.gender=gender;
      const data = await createAnimal(formData);
      console.log("check dataaaa",data.dataValues.id)
      // return res.status(200).json({message:"female!"})
      const newParent = await updateAnimalMother(parent_of,data.dataValues.id)
      return res.status(200).json({message:"parent added successfully!",newParent})

    }
    else{
      return res.status(400).json({message:"gender not specified"})
    }
  }
  catch(e){
    return next(new Error(e))
  }
}
//view offstring
static async getOffstring(req,res,next){
  try{
    const {farmId,id}=req.params
    // const{id}=req.params
    const data = await getAllOffstrings(id,)
    return res.status(200).json({message:"offstrings are",data})
  }
  catch(e){
    return next(new Error(e))
  }
}


// view ancestory
static async getAnceStory(req,res,next){
  try{
    // const{id}=req.params
    const {farmId,id}=req.params
    const data = await getAllAncentors(id)
    return res.status(200).json({message:"ancestory are",data})
  }
  catch(e){
    return next(new Error(e))
  }
}
//females
static async femaleAnimals(req,res,next){
  try{
    const {farmId}=req.params
    const data = await getAllFemaleAnimals(farmId)
    return res.status(200).json({message:"females are",data})

  }
  catch(e){
    return next(new Error(e))
  }
  

}

//males
static async maleAnimals(req,res,next){
  try{
    const {farmId}=req.params
    const data = await getAllMaleAnimals(farmId)
    return res.status(200).json({message:"males are",data})
  }
  catch(e){
    return next(new Error(e))
  }

}

}
