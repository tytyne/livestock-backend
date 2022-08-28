import AnimalVaccinationService from "../services/animalVaccination.service";
const {
  createAnimalVaccination,
  getAnimalVaccinationById,
  getAllAnimalVaccination,
  updateAnimalVaccinationById,
  deleteAnimalVaccinationById,
} = AnimalVaccinationService;
import GroupAnimalService from "../services/groupAnimal.service"
const{getGroupAnimalById}=GroupAnimalService
import calculationHelper from "../utils/calculationHelper"
const{calculatePrice}=calculationHelper
import VaccineService from "../services/vaccination.services"

export default class AnimalVaccinationController {
  //save an AnimalVaccination
  static async storeAnimalVaccination(req, res, next) {
    try {
      const formData = req.body;
      formData.createdBy = req.user.id;

      
      if(formData.animalCategoryId===2){
        const item= await getMedicineById(formData.medicineId)
          const itemData=item.dataValues
          formData.name=itemData.name;
          const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
          formData.price=formula
          const groupAnimalData = await getGroupAnimalById(formData.groupAnimalId)
          if(groupAnimalData.ageInWeeks > 23){
            return res.status(400).json({ message: "no vaccination needed!" });
          }



      }else{
        return res.status(400).json({ message: "no vaccination needed!" });
      }
      const data = await createAnimalVaccination(formData);
      return res.status(200).json({ message: "an AnimalVaccination created!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an AnimalVaccination by Id
  static async getAnimalVaccination(req, res, next) {
    try {
      const id = req.params.id;
      const data = await getAnimalVaccinationById(id);
      res.status(200).json({ message: "get AnimalVaccination by Id", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
 
  //get all AnimalVaccinations
  static async getAnimalVaccinations(req, res, next) {
    try {
      const data = await getAllAnimalVaccination(req.user.id);
      res.status(200).json({ message: "All AnimalVaccinations", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an AnimalVaccination
  static async updateAnimalVaccination(req, res, next) {
    try {
      const id = req.params.id;
      const formData = req.body;
      const data = await updateAnimalVaccinationById(formData, id);
      res.status(200).json({ message: "update an AnimalVaccination!!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete an AnimalVaccination

  static async deleteAnimalVaccination(req, res, next) {
    try {
      const id = req.params.id;
      const data = await deleteAnimalVaccinationById(id);
      res.status(200).json({ message: "delete a AnimalVaccination" });
    } catch (e) {
      return next(new Error(e));
    }
  }

 

}
