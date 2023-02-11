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
  updateAnimalByGroupId
} = AnimalService;
import CalculationHelper from "../utils/calculationHelper";
const { electronicId, gettingAge } = CalculationHelper
import GroupAnimalService from "../services/groupAnimal.service";
const{PushRecords}=GroupAnimalService
const { v4: uuidv4 } = require('uuid');

export default class AnimalController {
  //save an animal
  static async storeAnimal(req, res, next) {
    try {
      const formData = req.body;
      // formData.harvest_label="lbs";
      formData.id = uuidv4()
      formData.electronic_id = await electronicId(formData.earring_num);
      formData.createdBy = req.user.id;
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
    const id = req.params.id;
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
static async searchingAnimal(req,res,next){

  try{
    const {name} = req.query;
    const data = await searchAnimals(name);
    console.log(data)
    return res.status(200).json({ message: "searched animals",data});
  }
  catch(e){
    return next(new Error(e));
  }
}

static async  EditGroupAnimal(req,res,next){
  try{
    // const id = req.params.id
    const {add_group,id}=req.params
   
    const animal = await getAnimalById(id)
    console.log("check animal data",id)
    const animalData = animal.dataValues
    console.log("check animalData",animalData)
    const records = {
        ...records,
      animalData
    }
    // console.log("check records",records.animalData)
    console.log("check group ",add_group)
   
    const koko = await PushRecords(records,add_group)
    console.log("check koko",koko)
    const data  = await updateAnimalByGroupId(add_group,id)
    return res.status(200).json({message:"animal updated!"})

  }
  catch(e){
    return next(new Error(e))
  }
}

}
