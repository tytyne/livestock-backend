import VaccinatingService from "../services/vaccinating.service";
const {
  createVaccinatingProcess,
  getVaccinatingProcessById,
  getAllVaccinatingProcess,
  updateVaccinatingProcessById,
  deleteVaccinatingProcessById,
} = VaccinatingService;

import calculationHelper from "../utils/calculationHelper"
const { calculatePrice } = calculationHelper
import VaccinationService from "../services/vaccination.services"
const { getVaccinationById } = VaccinationService
import GroupAnimalService from "../services/groupAnimal.service";
const {

  getGroupAnimalById,

} = GroupAnimalService;

import EventService from "../services/event.service";

const { createEvent } = EventService
import TransactionService from "../services/transaction.service"
const {createTransaction}=TransactionService
const { v4: uuidv4 } = require('uuid');




export default class VaccinatingController {
  //save an vaccinating animal or group-animal

  static async storeVaccinating(req, res, next) {
    // try {
      const {resource_name,resource_id}= req.params
      const formData = req.body;
      console.log(req.user.id)
      formData.id = uuidv4()
      formData.createdBy = req.user.id;
      if(resource_name==="animal"){
        formData.animalId= resource_id
      }
      else if(resource_name==="animal_group"){
        formData.groupId= resource_id
      }

      const item = await getVaccinationById(formData.vaccinationId)
      const itemData = item.dataValues
      formData.name = itemData.name;
      formData.measurement = itemData.measurement;
      const formula = await calculatePrice(itemData.price, formData.quantity, itemData.unit);
      formData.price = formula
     
      await createEvent({
        id:uuidv4(),
        title: `vaccinating ${resource_id}`,
        description: `vaccinating `,
        start_time: `${formData.nextAppointment}`,
        end_time: `${formData.nextAppointment}`,
        assigned_to_id: `${req.user.id}`,
        animal_id:`${resource_id}`

      })

      // await createTransaction({
      //   type: "expense",
      //   amount:`- RWF ${formula}`,
      //   date: `${formData.onsetDate}`,
      //   vendor: " ",
      //   category: `Vaccination`,
      //   check_number:"",
      //   ref_Id: `${resource_id}`,
      //   ref_type: "animal",
      //   reporting_year:"2022",
      //   keywords: "",
      //   description: ""

      // })
      
      const data = await createVaccinatingProcess(formData);

      return res.status(200).json({ message: "a Vaccinating Process created!", data });
    // } 
    
    
    // catch (e) {
    //   return next(new Error(e));
    // }
  }

  //get an AnimalVaccination by Id
  static async getVaccinating(req, res, next) {
    try {
      const id = req.params.id;
      const data = await getVaccinatingProcessById(id);
      // for (let index = 0; index < data.length; index++) {

      //   data[index].createdBy = `holla`;
      //   data[index].createdBy = `holla`;
      //   data[index].createdBy = `holla`;

      // }
      res.status(200).json({ message: "get Vaccinating Process by Id", data });
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get all AnimalVaccinations
  static async getVaccinatings(req, res, next) {
    try {
      const {resource_name,resource_id}= req.params
      const data = await getAllVaccinatingProcess(resource_id);
      res.status(200).json({ message: "All Vaccinating Process", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an AnimalVaccination
  static async updateVaccinating(req, res, next) {
    try {
      const id = req.params.id;
      const formData = req.body;
      const item = await getVaccinationById(formData.vaccinationId)
      const itemData = item.dataValues
      formData.name = itemData.name;
      const formula = await calculatePrice(itemData.price, formData.quantity, itemData.unit);
      formData.price = formula
      console.log(groupAnimalData);
      const groupAnimalData = await getGroupAnimalById(formData.groupAnimalId)
      console.log(groupAnimalData.dataValues)

      if (groupAnimalData.dataValues.purposeId === 2 && groupAnimalData.ageInWeeks > 25) {
        return res.status(400).json({ message: "no vaccination needed!" });
      }
      if (groupAnimalData.dataValues.ageInWeeks > 23) {
        return res.status(400).json({ message: "no vaccination needed!" });
      }
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



}
