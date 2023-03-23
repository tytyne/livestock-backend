import TreatmentService from "../services/treatment.service"
const{createTreatment,getTreatmentById,getAllTreatmentsAnimal,getAllTreatmentsGroup,
  updateTreatmentById,deleteTreatmentById,upcomingTreatments,createBulkTreatment
}=TreatmentService
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
    let bunchTreatment;
    formData.id = uuidv4()
    formData.createdBy = req.user.id;
   
    if(resource_name==='livestock_group'){
      const checking = await getGroupAnimalById(resource_id)
      // const hello=checking.dataValues.farm_id
      formData.groupId= resource_id
      const data = await createTreatment(formData);

      const allAnimals=checking.dataValues.records
      const response = allAnimals.map(s=>s.id)
      
      if(formData.per_head){
        //means i have to divide
        for (let i = 0; i < response.length; i++) {
          bunchTreatment={
            "id":uuidv4(),
            "amount":`${parseFloat(formData.amount)/response.length}`,
            "batch": `${formData.batch}`,
            "cost":`${parseFloat(formData.cost)/response.length}`,
            "date": `${formData.date}`,
            "description":`${formData.description}`,
            "keywords":`${formData.keywords}`,
            "mode": `${formData.mode}`,
            "product":`${formData.product}`,
            "retreat_date":`${formData.retreat_date}`,
            "site":`${formData.site}`,
            "technician":`${formData.technician}`,
            "type":`${formData.type}`,
            "record_transaction":`${formData.record_transaction}`,
            "animalId":response[i]
            
        }
        await createTreatment(bunchTreatment);
        console.log("check bunch",bunchTreatment)
          
         
        }
         return res.status(200).json({message:"hello sweetie!",bunchTreatment})

      }else{
        //send as it is 
        
        for (let i = 0; i < response.length; i++) {
          bunchTreatment={
              "id":uuidv4(),
              "amount":`${formData.amount}`,
              "batch": `${formData.batch}`,
              "cost": `${formData.cost}`,
              "date": `${formData.date}`,
              "description":`${formData.description}`,
              "keywords":`${formData.keywords}`,
              "mode": `${formData.mode}`,
              "product":`${formData.product}`,
              "retreat_date":`${formData.retreat_date}`,
              "site":`${formData.site}`,
              "technician":`${formData.technician}`,
              "type":`${formData.type}`,
              "record_transaction":`${formData.record_transaction}`,
              "animalId":response[i]
              
          }
          await createTreatment(bunchTreatment);
      
        }
    
        return res.status(200).json({message:"treatment created!",data})
    
      }

    }

    if(resource_name==='animal'){
      const checking = await getAnimalById(resource_id)
      // console.log("check farmId",checking)
      formData.id = uuidv4()
      const hello =checking.dataValues.farm_id
      formData.animalId= resource_id
      console.log("check ",formData)
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

    return res.status(200).json({message:"Treatment created!",data})
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
        if(resource_name==="animal"){
          const data = await getAllTreatmentsAnimal(resource_id);
          return res.status(200).json({ message: "All treatments", data });
        }
        else if(resource_name==="livestock_group"){
          const data = await getAllTreatmentsGroup(resource_id);
          return res.status(200).json({ message: "All treatments", data });
        }
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