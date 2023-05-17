
import calculationHelper from "../utils/calculationHelper"
const{calculatePrice,getDatesInRange}=calculationHelper
// import FeedService from "../services/feed.service"
// const{getFeedById} = FeedService
import FeedingService from "../services/feeding.service";
const{createOneFeeding,createBulkFeeding,getFeedingById,getAllFeedingAnimal,getAllFeedingGroup,updateFeedingById,deleteFeedingById}=FeedingService
import TransactionService from "../services/transaction.service"
const {createTransaction}=TransactionService
import AnimalService from "../services/animal.service";
const{getAnimalById}=AnimalService
import  GroupAnimalService from "../services/groupAnimal.service"
const{getGroupAnimalById}=GroupAnimalService
const { v4: uuidv4 } = require('uuid');


export default class FeedingController {
  //save an AnimalFeed
  static async storeFeeding(req, res, next) {
    try {

      const {resource_name,resource_id}= req.params
      const formData = req.body;
      formData.id = uuidv4()
      formData.createdBy = req.user.id;
      let bunchFeeding;

      if(resource_name==="livestock_group"){
        
        const formula= await calculatePrice(formData.quantity,formData.price);
        formData.total=formula
        formData.groupId=resource_id;
        const data = await createOneFeeding(formData);
        const checking = await getGroupAnimalById(resource_id)
        formData.groupId=resource_id;
        const allAnimals=checking.dataValues.records
        const response = allAnimals.map(s=>s.id)
        if(formData.per_head){
          //means i have to divide
          for (let i = 0; i < response.length; i++) {
            bunchFeeding={
              "id":uuidv4(),
              "onsetDate":`${formData.onsetDate}`,
              "quantity":`${parseFloat(formData.quantity)/response.length}`,
              "description":`${formData.description}`,
              "price":`${formData.price}`,
              "total":`${parseFloat(formula)/response.length}`,
              // "repeat_until_date":`${formData.repeat_until_date}`,
              "measurement":`${formData.measurement}`,
              "animalId":response[i]

              
            }
            // if(formData.repeat_until_date){
                
            // }
         
          await createOneFeeding(bunchFeeding);
              
          }
          return res.status(200).json({message:"feeding created!!",data})
  
        }else{
          
          for (let i = 0; i < response.length; i++) {
          
            bunchFeeding={
              "id":uuidv4(),
              "onsetDate":`${formData.onsetDate}`,
              "quantity":`${formData.quantity}`,
              "description":`${formData.description}`,
              "price":`${formData.price}`,
              "total":`${formula}`,
              "measurement":`${formData.measurement}`,
              // "repeat_until_date":`${formData.repeat_until_date}`,
              "animalId":response[i]
                
            }
            // if(formData.repeat_until_date){
              
            // }
            
            await createOneFeeding(bunchFeeding);
        
          }
      
          return res.status(200).json({message:"feeding created!",data})
      
        }
      }
   

      else if(resource_name==='animal'){
        // const item= await getFeedById(formData.feedId)
        // const itemData=item.dataValues
        // formData.feed_name=itemData.name;
        // formData.measurement = itemData.measurement;
        const formula= await calculatePrice(formData.quantity,formData.price);
        formData.total=formula
        const checking = await getAnimalById(resource_id)
        const hello =checking.dataValues.farm_id
        formData.animalId= resource_id
      
        // if(formData.record_transaction === true){
        //   await createTransaction({
        //     id:uuidv4(),
        //     type: "expense",
        //     amount:`${formData.cost}`,
        //     date: `${formData.date}`,
        //     vendor: " ",
        //     category:`Veterinary, breeding, and medicine`,
        //     check_number:"",
        //     ref_Id: `${resource_id}`,
        //     farmId:`${hello}`,
        //     ref_type: `${resource_name}`,
        //     reporting_year:new Date().getFullYear(),
        //     keywords: "",
        //     description: `${formData.description}`
           
      
        //   })
        // }
        const data = await createOneFeeding(formData);
        
        return res.status(200).json({ message: "Feeding created!", data });
  
      }

   
     

    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an AnimalFeed by Id
  static async getFeeding(req, res, next) {
    try {
      const id = req.params.id;
      const data = await getFeedingById(id);
      res.status(200).json({ message: "get AnimalFeed by Id", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
 
  //get all AnimalFeeds
  static async getFeedings(req, res, next) {
    try {
      const {resource_name,resource_id}= req.params
      if(resource_name==="animal"){
        const data = await getAllFeedingAnimal(resource_id);
        return res.status(200).json({ message: "All AnimalFeeds by animal", data });
      }
      else if(resource_name==="livestock_group"){
        const data = await getAllFeedingGroup(resource_id);
        return res.status(200).json({ message: "All AnimalFeeds", data });
      }
      
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an AnimalFeed
  static async updateFeeding(req, res, next) {
    try {
      const id = req.params.id;
      const formData = req.body;
      const {resource_name,resource_id}= req.params
      if(resource_name==="animal"){
        formData.animalId= resource_id
      }
      // const item= await getFeedById(formData.feedId)
      // const itemData=item.dataValues
      // formData.feed_name=itemData.name;
      const formula= await calculatePrice(formData.price,formData.quantity,formData.price);
      formData.total=formula   
      const data = await updateFeedingById(formData, id);
      res.status(200).json({ message: "update an AnimalFeed!!", data });

    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete an AnimalFeed

  static async deleteFeeding(req, res, next) {
    try {
      const id = req.params.id;
      const data = await deleteFeedingById(id);
      res.status(200).json({ message: "delete a AnimalFeed" });
    } catch (e) {
      return next(new Error(e));
    }
  }


}
