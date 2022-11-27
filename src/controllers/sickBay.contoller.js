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
import TransactionService from "../services/transaction.service"
const {createTransaction}=TransactionService

export default class SickBayController {
  //save an SickBay
  static async storeSickBay(req, res, next) {
    try {
      const {resource_name,resource_id}= req.params
      const formData = req.body;
      
      formData.createdBy = req.user.id;
      if(resource_name ==="animal"){
        formData.animalId= resource_id
      }
      else if(resource_name==="animal_group"){
        formData.groupAnimalId= resource_id
      }
      
      const item= await getMedicineById(formData.medicineId)
      const itemData=item.dataValues
      formData.medicine_name=itemData.name;
      const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
      formData.price=formula
      formData.measurement = itemData.measurement
      const data = await createSickBay(formData);
      await createTransaction({
        type: "expense",
        amount:`- ${formula}`,
        date: `${formData.onsetDate}`,
        vendor: " ",
        category: `Medicine`,
        check_number:"",
        ref_Id: `${resource_id}`,
        ref_type: "animal",
        reporting_year:"2022",
        keywords: "",
        description: ""

      })
      
      return res.status(200).json({ message: "SickBay created!", data });

    
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an SickBay by Id
  static async getSickBay(req, res, next) {
    try {
      const {resource_name,resource_id}= req.params
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
      const {resource_name,resource_id}= req.params
      const data = await getAllSickBay(resource_id);
      res.status(200).json({ message: "All SickBays", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an SickBay
  static async updateSickBay(req, res, next) {
    try {

      const {resource_name,resource_id}= req.params

      const id = req.params.id;
      const formData = req.body;

      const item= await getMedicineById(formData.medicineId)
      const itemData=item.dataValues
      formData.medicine_name=itemData.name;
      const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
      formData.price=formula
      formData.measurement = itemData.measurement

      const data = await updateSickBayById(formData, id);
      res.status(200).json({ message: "update an SickBay!!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete an SickBay

  static async deleteSickBay(req, res, next) {
    try {
      const {resource_name,resource_id}= req.params
      if(resource_name ==="animal"){
        formData.animalId= resource_id
      }
      else if(resource_name==="animal_group"){
        formData.groupAnimalId= resource_id
      }
      const id = req.params.id;
      const data = await deleteSickBayById(id);
      res.status(200).json({ message: "delete a SickBay" });
    } catch (e) {
      return next(new Error(e));
    }
  }

 

}
