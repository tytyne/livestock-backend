
import AncentorService from "../services/Ancentor.service"
const{createAncentor,getAncentorById,getAllAncentors,updateAncentorById,deleteAncentorById}=AncentorService
import TransactionService from "../services/transaction.service"
const { v4: uuidv4 } = require('uuid');


export default class AncentorController{
//save Ancentor
static async storeAncentor(req,res,next){
try{
    const formData = req.body;
    const {resource_name,resource_id}= req.params
    formData.id = uuidv4()
    formData.createdBy = req.user.id;
    if(resource_name==="animal"){
      formData.animalId= resource_id
    }
    else if(resource_name==="animal_group"){
      formData.groupAnimalId= resource_id
    }
    const data = await createAncentor(formData)
 

    res.status(200).json({message:"Ancentor created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a Ancentor by Id
static async getAncentor(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await getAncentorById(id)
        res.status(200).json({message:"get Ancentor by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Ancentor
static async getAncentors(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const data = await getAllAncentors(resource_id)
        res.status(200).json({message:"All Ancentors",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Ancentor
static async updateAncentor(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateAncentorById(formData,id)
        res.status(200).json({message:"update a Ancentor!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Ancentor

static async deleteAncentor(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await deleteAncentorById(id)
        res.status(200).json({message:"Ancentor deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}