import VaccinatingService from "../services/vaccinating.service";
const {
  createVaccinatingProcess,
  getVaccinatingProcessById,
  getAllVaccinatingProcessAnimal,
  getAllVaccinatingProcessGroup,
  updateVaccinatingProcessById,
  deleteVaccinatingProcessById,
  searchVaccinating
} = VaccinatingService;

import calculationHelper from "../utils/calculationHelper"
const { calculatePrice } = calculationHelper
// import VaccinationService from "../services/vaccination.services"
// const { getVaccinationById } = VaccinationService
import GroupAnimalService from "../services/groupAnimal.service";
const {

  getGroupAnimalById,

} = GroupAnimalService;

import EventService from "../services/event.service";

const { createEvent } = EventService
import TransactionService from "../services/transaction.service"
const {createTransaction}=TransactionService
import AnimalService from "../services/animal.service";
const{getAnimalById}=AnimalService
const { v4: uuidv4 } = require('uuid');





export default class VaccinatingController {
  //save an vaccinating animal or group-animal

  static async storeVaccinating(req,res,next){
    try{

      const {resource_name,resource_id}= req.params
      const formData = req.body;
      // console.log(req.user.id)
      formData.id = uuidv4()
      formData.createdBy = req.user.id;
      // const item = await getVaccinationById(formData.vaccinationId)
      // const itemData = item.dataValues
      // formData.name = itemData.name;
      // formData.measurement = itemData.measurement;
      const formula = await calculatePrice(formData.quantity, formData.price);
      formData.total
       = formula
      
       if(resource_name==='livestock_group'){
        const checking = await getGroupAnimalById(resource_id)
        const hello=checking.dataValues.farm_id
       
        formData.groupId= resource_id
        const data = await createVaccinatingProcess(formData);
        if(formData.per_head){
          //means i have to divide
              bunchVaccinating={
              "id":uuidv4(),
              "onsetDate":`${formData.onsetDate}`,
              "description":`${formData.description}`,
              // "vaccinationId":`${formData.vaccinationId}`,
              "quantity":`${formData.quantity}/${response.length}`,
              "nextAppointment":`${formData.nextAppointment}`,
              "record_transaction":`${formData.record_transaction}`,
              "price":`${formData.price}/${$response.length}`,
              "total":`${formula}/${$response.length}`,
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
          await createVaccinatingProcess(bunchVaccinating);
            
          return res.status(200).json({message:"vaccination created!"})
        }
        else{
          //send as it is 
          
          for (let i = 0; i < response.length; i++) {
              bunchVaccinating={
                "id":uuidv4(),
                "onsetDate":`${formData.onsetDate}`,
                "description":`${formData.description}`,
                // "vaccinationId":`${formData.vaccinationId}`,
                "quantity":`${formData.quantity}`,
                "nextAppointment":`${formData.nextAppointment}`,
                "record_transaction":`${formData.record_transaction}`,
                "price":`${formData}`,
                "total":`${formula}`,
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
          await createVaccinatingProcess(bunchVaccinating);
          }
        return res.status(200).json({message:"vacinnating created"})
        }
       }
       else if(resource_name==='animal'){
       const checking = await getAnimalById(resource_id)
        const hello =checking.dataValues.farm_id
        formData.animalId= resource_id
        const formula= await calculatePrice(formData.quantity,formData.price);
        formData.total=formula
        const data = await createVaccinatingProcess(formData);
        if(formData.record_transaction === true){
          await createTransaction({
            id:uuidv4(),
            type: "expense",
            amount:`${formula}`,
            date: `${formData.onsetDate}`,
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
        
      await createEvent({
        id:uuidv4(),
        title: `vaccinating ${resource_id}`,
        description: `vaccinating `,
        start_time: `${formData.nextAppointment}`,
        end_time: `${formData.nextAppointment}`,
        assigned_to_id: `${req.user.id}`,
        animal_id:`${resource_id}`

      })
      return res.status(200).json({message:"animal vacinnating created",data})

       }
    }
    catch (e) {
      return next(new Error(e));
    }
  }

  //get an AnimalVaccination by Id
  static async getVaccinating(req, res, next) {
    try {
      const id = req.params.id;
      const data = await getVaccinatingProcessById(id);
      res.status(200).json({ message: "get Vaccinating Process by Id", data });
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get all AnimalVaccinations
  static async getVaccinatings(req, res, next) {
    try {
      const {resource_name,resource_id}= req.params
      if(resource_name==="animal"){
        const data = await getAllVaccinatingProcessAnimal(resource_id);
        return res.status(200).json({ message: "All vaccinatting", data });
      }
      else if(resource_name==="livestock_group"){
        const data = await getAllVaccinatingProcessGroup(resource_id);
        return res.status(200).json({ message: "All vaccinattings", data });
      }
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an AnimalVaccination
  static async updateVaccinating(req, res, next) {
    try {
      const id = req.params.id;
      const formData = req.body;
      // const item = await getVaccinationById(formData.vaccinationId)
      // const itemData = item.dataValues
      // formData.name = itemData.name;
      const formula = await calculatePrice(formData.quantity, formData.price);
      formData.price = formula
     
      const groupAnimalData = await getGroupAnimalById(formData.groupAnimalId)
      

      // if (groupAnimalData.dataValues.purposeId === 2 && groupAnimalData.ageInWeeks > 25) {
      //   return res.status(400).json({ message: "no vaccination needed!" });
      // }
      // if (groupAnimalData.dataValues.ageInWeeks > 23) {
      //   return res.status(400).json({ message: "no vaccination needed!" });
      // }
      await createEvent({
        title: "vaccinating chicken",
        description: `vaccinating chickens group ${formData.groupAnimalId}`,
        start: `${formData.nextAppointment}`,
        end: `${formData.nextAppointment}`,
        userId: `${req.user.id}`

      })
      const data = await updateVaccinatingProcessById(formData, id);
      res.status(200).json({ message: "update a vaccinating Process!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete a Vaccinating Process

  static async deleteVaccinating(req, res, next) {
    try {
      const id = req.params.id;
      const data = await deleteVaccinatingProcessById(id);
      res.status(200).json({ message: "delete a Vaccinating Process" });
    } catch (e) {
      return next(new Error(e));
    }
  }

  static async searchingVaccinating(req,res,next){

    try{
      const {name} = req.query;
      const data = await searchVaccinating(name);
      // console.log(data)
      return res.status(200).json({ message: "searched vaccinating",data});
    }
    catch(e){
      return next(new Error(e));
    }
  }



}
