import TreatmentService from "../services/treatment.service"
const{createTreatment,getTreatmentById,getAllTreatments,updateTreatmentById,deleteTreatmentById}=TreatmentService

export default class TreatmentController{
//save Treatment
static async storeTreatment(req,res,next){
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
    const data = await createTreatment(formData)
    res.status(200).json({message:"Treatment created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a Treatment by Id
static async getTreatment(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await getTreatmentById(id)
        res.status(200).json({message:"get Treatment by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Treatment
static async getTreatments(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const data = await getAllTreatments(resource_id)
        res.status(200).json({message:"All Treatments",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Treatment
static async updateTreatment(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateTreatmentById(formData,id)
        res.status(200).json({message:"update a Treatment!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Treatment

static async deleteTreatment(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await deleteTreatmentById(id)
        res.status(200).json({message:"Treatment deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}