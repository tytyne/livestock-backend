import OffspringService from "../services/Offspring.service"
const{createOffspring,getOffspringById,getAllOffsprings,updateOffspringById,deleteOffspringById}=OffspringService
import TransactionService from "../services/transaction.service"


export default class OffspringController{
//save Offspring
static async storeOffspring(req,res,next){
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
    const data = await createOffspring(formData)
 

    res.status(200).json({message:"Offspring created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a Offspring by Id
static async getOffspring(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await getOffspringById(id)
        res.status(200).json({message:"get Offspring by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Offspring
static async getOffsprings(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const data = await getAllOffsprings(resource_id)
        res.status(200).json({message:"All Offsprings",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Offspring
static async updateOffspring(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateOffspringById(formData,id)
        res.status(200).json({message:"update a Offspring!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Offspring

static async deleteOffspring(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await deleteOffspringById(id)
        res.status(200).json({message:"Offspring deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}