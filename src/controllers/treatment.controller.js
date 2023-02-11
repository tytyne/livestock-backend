import TreatmentService from "../services/treatment.service"
const{createTreatment,getTreatmentById,getAllTreatments,updateTreatmentById,deleteTreatmentById,upcomingTreatments}=TreatmentService
import TransactionService from "../services/transaction.service"
const {createTransaction}=TransactionService
import EventService from "../services/event.service";
const { createEvent } = EventService
import AnimalService from "../services/animal.service";
const{getAnimalById}=AnimalService
import  GroupAnimalService from "../services/groupAnimal.service"
const{getGroupAnimalById}=GroupAnimalService
const { v4: uuidv4 } = require('uuid');

export default class TreatmentController{
//save Treatment
static async storeTreatment(req,res,next){
try{
    const formData = req.body;
    const {resource_name,resource_id}= req.params
    formData.id = uuidv4()
    formData.createdBy = req.user.id;
   
    if(resource_name==='livestock_group'){
      const checking = await getGroupAnimalById(resource_id)
      // console.log("check farmId",checking)
      const hello=checking.dataValues.farm_id
     
      formData.animalId= resource_id
      const data = await createTreatment(formData);
      if(fformData.record_transaction === true){
        await createTransaction({
          id:uuidv4(),
          type: "expense",
          amount:`${formData.cost}`,
          date: `${formData.date}`,
          vendor: " ",
          category:`Veterinary, breeding, and medicine`,
          check_number:"",
          ref_Id: `${resource_id}`,
          farmId:`${hello}`,
          ref_type: `${resource_name}`,
          reporting_year:new Date().getFullYear(),
          keywords: "",
          description: `${formData.description}`
    
        })
      }
    
      
      return res.status(200).json({ message: "SickBay created!", data });

    }

    if(resource_name==='animal'){
      const checking = await getAnimalById(resource_id)
      // console.log("check farmId",checking)
      const hello =checking.dataValues.farm_id
      formData.animalId= resource_id
      const data = await createTreatment(formData);
      if(formData.record_transaction === true){
        await createTransaction({
          id:uuidv4(),
          type: "expense",
          amount:`${formData.cost}`,
          date: `${formData.date}`,
          vendor: " ",
          category:`Veterinary, breeding, and medicine`,
          check_number:"",
          ref_Id: `${resource_id}`,
          farmId:`${hello}`,
          ref_type: `${resource_name}`,
          reporting_year:new Date().getFullYear(),
          keywords: "",
          description: `${formData.description}`
    
        })
      }

    res.status(200).json({message:"Treatment created!",data})
    }
  
    await createEvent({
      id:uuidv4(),
      title: `treat ${resource_id}`,
      description: `${formData.type}`,
      start_time: `${formData.date}`,
      end_time: `${formData.retreat_date}`,
      assigned_to_id: `${req.user.id}`,
      animal_id:`${resource_id}`

    })


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
        return res.status(200).json({message:"All Treatments",data})
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