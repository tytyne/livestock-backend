import BreedingService from "../services/breeding.service"
const{createBreeding,getBreedingById,getAllBreedings,updateBreedingById,deleteBreedingById}=BreedingService
import TransactionService from "../services/transaction.service"


export default class BreedingController{
//save Breeding
static async storeBreeding(req,res,next){
try{
    const formData = req.body;
    const {resource_name,resource_id}= req.params
    formData.createdBy = req.user.id;
    if(resource_name==="animal"){
      formData.animalId= resource_id
    }
    else if(resource_name==="animal_group"){
      formData.groupAnimalId= resource_id
    }
    const data = await createBreeding(formData)
 

    res.status(200).json({message:"Breeding created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a Breeding by Id
static async getBreeding(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await getBreedingById(id)
        res.status(200).json({message:"get Breeding by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Breeding
static async getBreedings(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const data = await getAllBreedings(resource_id)
        res.status(200).json({message:"All Breedings",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Breeding
static async updateBreeding(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateBreedingById(formData,id)
        res.status(200).json({message:"update a Breeding!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Breeding

static async deleteBreeding(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await deleteBreedingById(id)
        res.status(200).json({message:"Breeding deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}