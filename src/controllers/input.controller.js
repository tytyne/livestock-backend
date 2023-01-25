import InputService from "../services/input.service"
import AnimalService from "../services/animal.service";
const{createInput,getInputById,getAllInputs,updateInputById,deleteInputById}=InputService
const {getAnimalById} = AnimalService
const { v4: uuidv4 } = require('uuid');

export default class InputController{
//save Input
static async storeInput(req,res,next){
try{
    const {animal_id}= req.params
    const formData = req.body;
    formData.id = uuidv4()
    formData.createdBy = req.user.id;
    const animalDetails = await getAnimalById(animal_id)
    formData.animal_id = animal_id;
    const data = await createInput(formData)
    console.log("check data",data)
    res.status(200).json({message:"Input created!"})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a Input by Id
static async getInput(req,res,next){
    try{
        const id=req.params.id
        const data = await getInputById(id)
        res.status(200).json({message:"get Input by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Input
static async getInputs(req,res,next){
    try{
        const {animal_id}= req.params
        const data = await getAllInputs(animal_id)
        res.status(200).json({message:"All Inputs",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Input
static async updateInput(req,res,next){
    try{
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateInputById(formData,id)
        res.status(200).json({message:"update a Input!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Input

static async deleteInput(req,res,next){
    try{
        const id=req.params.id
        const data = await deleteInputById(id)
        res.status(200).json({message:"Input deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}