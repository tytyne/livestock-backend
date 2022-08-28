import MedicineService from "../services/medicine.service"
import calculationHelper from "../utils/calculationHelper"
const{calculatePrice}=calculationHelper
const{getMedicineById}=MedicineService
import SickBayService from "../services/sickBay.service";
const {
  createSickBay,
  getSickBayById,
  getAllSickBay,
  updateSickBayById,
  deleteSickBayById,
} = SickBayService;

export default class SickBayController {
  //save an SickBay
  static async storeSickBay(req, res, next) {
    try {
      const formData = req.body;
      formData.createdBy = req.user.id;
      

      if(formData.animalCategoryId===2){
        formData.animalId=0
        if(formData.medicineId!=0){
          const item= await getMedicineById(formData.medicineId)
          const itemData=item.dataValues
          formData.medicine_name=itemData.name;
          const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
          formData.price=formula
          
        }
        
      }else{
        formData.groupAnimalId = 0
        if(formData.medicineId!=0){
          const item= await getMedicineById(formData.medicineId)
          const itemData=item.dataValues
          formData.medicine_name=itemData.name;
          const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
          formData.price=formula
          

        }

      }
       
      const data = await createSickBay(formData);
      return res.status(200).json({ message: "SickBay created!", data });

    
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an SickBay by Id
  static async getSickBay(req, res, next) {
    try {
      const id = req.params.id;
      const data = await getSickBayById(id);
      res.status(200).json({ message: "get SickBay by Id", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
 
  //get all SickBays
  static async getSickBays(req, res, next) {
    try {
      const data = await getAllSickBay(req.user.id);
      res.status(200).json({ message: "All SickBays", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an SickBay
  static async updateSickBay(req, res, next) {
    try {
      const id = req.params.id;
      const formData = req.body;
      if(formData.animalCategoryId===2){
        formData.animalId=0
        if(formData.medicineId!=0){
          
          const item= await getMedicineById(formData.medicineId)
          const itemData=item.dataValues
          formData.medicine_name=itemData.name;
          const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
          formData.price=formula
          
        }
        
      }else{
        formData.groupAnimalId = 0
        if(formData.medicineId!=0){
          const item= await getMedicineById(formData.medicineId)
          const itemData=item.dataValues
          formData.medicine_name=itemData.name;
          const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
          formData.price=formula
          

        }

      }
      const data = await updateSickBayById(formData, id);
      res.status(200).json({ message: "update an SickBay!!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete an SickBay

  static async deleteSickBay(req, res, next) {
    try {
      const id = req.params.id;
      const data = await deleteSickBayById(id);
      res.status(200).json({ message: "delete a SickBay" });
    } catch (e) {
      return next(new Error(e));
    }
  }

 

}
