// import MedicineService from "../services/medicine.service"
import calculationHelper from "../utils/calculationHelper"
const{calculatePrice}=calculationHelper
// const{getMedicineById}=MedicineService
import SickBayService from "../services/sickBay.service";
const {
  createSickBay,
  getSickBayById,
  getAllSickBayAnimal,
  getAllSickBayGroup,
  updateSickBayById,
  deleteSickBayById,
  searchSickbay
} = SickBayService;
import TransactionService from "../services/transaction.service"
const {createTransaction}=TransactionService
import AnimalService from "../services/animal.service";
const{getAnimalById}=AnimalService
import  GroupAnimalService from "../services/groupAnimal.service"
const{getGroupAnimalById}=GroupAnimalService
import ActivityService from "../services/activity.service";
const{createActivity}=ActivityService
const { v4: uuidv4 } = require('uuid');


export default class SickBayController {
  //save an SickBay
  static async storeSickBay(req, res, next) {
    try {
      const {resource_name,resource_id,farmId}= req.params
      const formData = req.body;
      console.log("formdata",formData)
      formData.id = uuidv4()
      formData.createdBy = req.user.id;
      formData.farm_id=farmId
      let bunchSickBay;

     
      if(resource_name==='livestock_group'){
        const formula= await calculatePrice(formData.quantity,formData.price);
        formData.total=formula
        formData.groupId= resource_id
        const data = await createSickBay(formData);
        const checking = await getGroupAnimalById(resource_id)
        const allAnimals=checking.dataValues.records
        const response = allAnimals.map(s=>s.id)
        if(formData.per_head){
          //means i have to divide
          for (let i = 0; i < response.length; i++) {
            bunchSickBay={
              "id":uuidv4(),
              "onsetDate":`${formData.onsetDate}`,
              "intervention":`${formData.intervention}`,
              "observation":`${formData.observation}`,
              "quantity":`${parseFloat(formData.quantity)/response.length}`,
              "price":`${parseFloat(formData.price)/response.length}`,
              // "medicineId":`${formData.medicineId}`,
              "total":`${parseFloat(formula)/response.length}`,
              "total":6000,
              // "record_transaction":`${formData.record_transaction}`,
              "animalId":response[i]
              
          }
          if(formData.record_transaction === true){
            const checking = await getGroupAnimalById(resource_id)
            const hello =checking.dataValues.farm_id
            formData.animalId= resource_id
            await createTransaction({
              id:uuidv4(),
              type: "expense",
              amount:`${parseFloat(formula)/response.length}`,
             date: `${formData.onsetDate}`,
              vendor: " ",
              category:`Veterinary, breeding, and medicine`,
              check_number:"",
              ref_Id:response[i],
              farm_id:`${hello}`,
              ref_type:"",
              reporting_year:new Date().getFullYear(),
              keywords: "",
              description: `${formData.description}`
        
            })
          }
      
        await createSickBay( bunchSickBay);
        
        await createActivity({
          id:uuidv4(),
          category: `sickbay`,
          description: `${formData.price}`,
          date: `${formData.onsetDate}`,
          ref_id:response[i],
        })
      


          }
          return res.status(200).json({message:"Sickbay created!",data})
        }
        else{
          //send as it is 
          
          for (let i = 0; i < response.length; i++) {
            bunchSickBay={
                "id":uuidv4(),
                "onsetDate":`${formData.onsetDate}`,
                "intervention":`${formData.intervention}`,
                "observation":`${formData.observation}`,
                "quantity":`${formData.quantity}`,
                "price":`${formData.price}`,
                "animalId":response[i]
                
            }
            if(formData.record_transaction === true){
              const checking = await getGroupAnimalById(resource_id)
              const hello =checking.dataValues.farm_id
              formData.animalId= resource_id
              await createTransaction({
                id:uuidv4(),
                type: "expense",
                amount:`${formula}`,
                date: `${formData.onsetDate}`,
                vendor: " ",
                category:`Veterinary, breeding, and medicine`,
                check_number:"",
                ref_Id:response[i],
                farm_id:`${hello}`,
                ref_type:"",
                reporting_year:new Date().getFullYear(),
                keywords: "",
                description: `${formData.description}`
          
              })
            }
     
          await createSickBay( bunchSickBay);
         
          await createActivity({
            id:uuidv4(),
            category: `sickbay`,
            description: `${formData.price}`,
            date: `${formData.onsetDate}`,
            ref_id:response[i],
          })
          }
        
      
          return res.status(200).json({message:"sickbay created!",data})
      
        }
      }

      else if(resource_name==='animal'){
        const checking = await getAnimalById(resource_id)
        const hello =checking.dataValues.farm_id
        formData.animalId= resource_id
        const formula= await calculatePrice(formData.quantity,formData.price);
        formData.total=formula
      
        const data = await createSickBay(formData);
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
            farm_id:`${hello}`,
            reporting_year:new Date().getFullYear(),
            keywords: "",
            description: `${formData.description}`
           
      
          })
          
        }
        
        await createActivity({
          id:uuidv4(),
          category: `sickbay`,
          description: `${formData.price}`,
          date: `${formData.onsetDate}`,
          ref_id:`${resource_id}`,
        })
      
        return res.status(200).json({ message: "SickBay created!", data });
  
      }
      
    
    
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an SickBay by Id
  static async getSickBay(req, res, next) {
    try {
      const {resource_name,resource_id,farmId}= req.params
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
  
      const {resource_name,resource_id,farmId}= req.params
      if(resource_name==="animal"){
        const data = await getAllSickBayAnimal(resource_id);
        return res.status(200).json({ message: "All sickbays", data });
      }
      else if(resource_name==="livestock_group"){
        const data = await getAllSickBayGroup(resource_id);
        return res.status(200).json({ message: "All sickbays", data });
      }
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an SickBay
  static async updateSickBay(req, res, next) {
    try {

      const {resource_name,resource_id,farmId}= req.params

      const id = req.params.id;
      const formData = req.body;
      const formula= await calculatePrice(formData.quantity,formData.price);
      formData.total=formula
      

      const data = await updateSickBayById(formData, id);
      res.status(200).json({ message: "update an SickBay!!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete an SickBay

  static async deleteSickBay(req, res, next) {
    try {
      const {resource_name,resource_id,farmId}= req.params
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
  static async searchingSickay(req,res,next){

    try{
      const {name} = req.query;
      const data = await searchSickbay(name);
      return res.status(200).json({ message: "searched sickbays",data});
    }
    catch(e){
      return next(new Error(e));
    }
}
 

}
    

       