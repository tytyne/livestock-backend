import TreatmentService from "../services/treatment.service"
const{createTreatment,getTreatmentById,getAllTreatmentsAnimal,getAllTreatmentsGroup,
  updateTreatmentById,deleteTreatmentById,upcomingTreatments,createBulkTreatment,searchTreatment
}=TreatmentService
import TransactionService from "../services/transaction.service"
const {createTransaction}=TransactionService
import EventService from "../services/event.service";
const { createEvent } = EventService
import AnimalService from "../services/animal.service";
const{getAnimalById}=AnimalService
import  GroupAnimalService from "../services/groupAnimal.service"
const{getGroupAnimalById}=GroupAnimalService
import ActivityService from "../services/activity.service";
const{createActivity}=ActivityService
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

        if(formData.record_transaction === true){
          const checking = await getGroupAnimalById(resource_id)
          const hello =checking.dataValues.farm_id
          formData.animalId= resource_id
          await createTransaction({
            id:uuidv4(),
            type: "expense",
            amount:`${parseFloat(formData.cost)/response.length}`,
            date: `${formData.date}`,
            vendor: " ",
            category:`Veterinary, breeding, and medicine`,
            check_number:"",
            ref_Id: response[i],
            farmId:`${hello}`,
            reporting_year:new Date().getFullYear(),
            keywords: "",
            description: `${formData.description}`
      
          })
        }
        if(formData.retreat_date){
          await createEvent({
            id:uuidv4(),
            title: `Retreat ${formData.type}`,
            description: `${formData.type}`,
            start_time: `${formData.retreat_date}`,
            end_time: `${formData.retreat_date}`,
            assigned_to_id: `${req.user.id}`,
            // animal_id:`${resource_id}`,
            reference_id:response[i],
      
          })
          
        }
        if(formData.withdrawal_date)
        await createEvent({
          id:uuidv4(),
          title: `Withdrawal ${formData.type}`,
          description: `${formData.type}`,
          start_time: `${formData.date}`,
          end_time: `${formData.retreat_date}`,
          assigned_to_id: `${req.user.id}`,
          // animal_id:`${resource_id}`,
          reference_id:response[i],
    
        })
        await createTreatment(bunchTreatment);
        console.log("check bunch",bunchTreatment)
        await createActivity({
          id:uuidv4(),
          category: `${resource_name}`,
          description: `${formData.description}`,
          date: `${formData.date}`,
          ref_id:response[i],
        })
          
         
        }
         return res.status(200).json({message:"treatment group created!",bunchTreatment})

      }else{
        
        
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
          if(formData.record_transaction === true){
            const checking = await getGroupAnimalById(resource_id)
            const hello =checking.dataValues.farm_id
            formData.animalId= resource_id
            await createTransaction({
              id:uuidv4(),
              type: "expense",
              amount:`${formData.cost}`,
              date: `${formData.date}`,
              vendor: " ",
              category:`Veterinary, breeding, and medicine`,
              check_number:"",
              ref_Id:response[i],
              farmId:`${hello}`,
              ref_type:"",
              reporting_year:new Date().getFullYear(),
              keywords: "",
              description: `${formData.description}`
        
            })
          }
          if(formData.retreat_date){
            await createEvent({
              id:uuidv4(),
              title: `Retreat ${formData.type}`,
              description: `${formData.type}`,
              start_time: `${formData.retreat_date}`,
              end_time: `${formData.retreat_date}`,
              assigned_to_id: `${req.user.id}`,
              animal_id:`${resource_id}`,
              reference_id:`${resource_id}`,
        
            })
            
          }
          if(formData.withdrawal_date){
          await createEvent({
            id:uuidv4(),
            title: `Withdrawal ${formData.type}`,
            description: `${formData.type}`,
            start_time: `${formData.date}`,
            end_time: `${formData.retreat_date}`,
            assigned_to_id: `${req.user.id}`,
            animal_id:`${resource_id}`,
            reference_id:`${resource_id}`,
      
          })
        }
          await createTreatment(bunchTreatment);
          await createActivity({
            id:uuidv4(),
            category: `${resource_name}`,
            description: `${formData.description}`,
            date: `${formData.date}`,
            ref_id:response[i],
          })
      
        }
    
        return res.status(200).json({message:"treatment group created!",data})
    
      }

    }

    else if(resource_name==='animal'){
      const checking = await getAnimalById(resource_id)
      // console.log("check farmId",checking)
      formData.id = uuidv4()
      const hello =checking.dataValues.farm_id
      formData.animalId= resource_id
      console.log("check ",formData)
      const data = await createTreatment(formData);
      await createActivity({
        id:uuidv4(),
        category: `${resource_name}`,
        description: `${formData.description}`,
        date: `${formData.date}`,
        ref_id:`${resource_id}`,
      })
      
      if(formData.record_transaction === true){
        await createTransaction({
          id:uuidv4(),
          type: "expense",
          amount:`${formData.cost}`,
          date: `${formData.date}`,
          vendor: " ",
          category:`Veterinary, breeding, and medicine kekekke`,
          check_number:"",
          ref_Id: `${resource_id}`,
          farmId:`${hello}`,
          ref_type: `${resource_name}`,
          reporting_year:new Date().getFullYear(),
          keywords: "",
          description: `${formData.description}`
    
        })
      }
      if(formData.retreat_date){
        await createEvent({
          id:uuidv4(),
          title: `Retreat ${formData.type}`,
          description: `${formData.type}`,
          start_time: `${formData.retreat_date}`,
          end_time: `${formData.retreat_date}`,
          assigned_to_id: `${req.user.id}`,
          // animal_id:`${resource_id}`,
          reference_id:`${resource_id}`,
    
        })
        
      }
      if(formData.withdrawal_date)
      await createEvent({
        id:uuidv4(),
        title: `Withdrawal ${formData.type}`,
        description: `${formData.type}`,
        start_time: `${formData.date}`,
        end_time: `${formData.retreat_date}`,
        assigned_to_id: `${req.user.id}`,
        // animal_id:`${resource_id}`,
        reference_id:`${resource_id}`,
  
      })


    return res.status(200).json({message:"Animal Treatment created!",data})
    }



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

static async searchingTreatments(req,res,next){

  try{
    const {name} = req.query;
    const data = await searchTreatment(name);
    return res.status(200).json({ message: "searched treatments",data});
  }
  catch(e){
    return next(new Error(e));
  }
}
}