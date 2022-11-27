
import calculationHelper from "../utils/calculationHelper"
const{calculatePrice,getDatesInRange}=calculationHelper
import FeedService from "../services/feed.service"
const{getFeedById} = FeedService

import FeedingService from "../services/feeding.service";
const{createFeeding,getFeedigById,getAllFeeding,updateFeedingById,deleteFeedingById}=FeedingService
import TransactionService from "../services/transaction.service"
const {createTransaction}=TransactionService

export default class FeedingController {
  //save an AnimalFeed
  static async storeFeeding(req, res, next) {
    try {

      const {resource_name,resource_id}= req.params
      const formData = req.body;
      console.log("check formData",formData)
      formData.createdBy = req.user.id;
      if(resource_name ==="animal"){
        formData.animalId= resource_id
      }
      else if(resource_name==="animal_group"){
        formData.groupAnimalId= resource_id
      }
      const item= await getFeedById(formData.feedId)
      const itemData=item.dataValues
      formData.feed_name=itemData.name;
      const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
      formData.price=formula
      if (formData.repeat_until_date!=null){
        const d1 = new Date(formData.onsetDate)
        const d2 = new Date(formData.repeat_until_date)
        const checkdata = await getDatesInRange(d1, d2);
      

        // console.log("check holllaaaa",checkdata )
        for (let i = 0; i < checkdata.length; i++) {
          {
            
              formData.onsetDate=checkdata[i];
            
              const data = await createFeeding(formData);
              await createTransaction({
               type: "expense",
               amount:`${formula}`,
               date: `${formData.onsetDate}`,
               vendor: " ",
               category: "feeding",
               check_number:"",
               ref_Id: `${resource_id}`,
               ref_type: "animal",
               reporting_year:"2022",
               keywords: "",
               description: ""
       
             })
               
              return res.status(200).json({ message: "feeding array created ...!",data});
               
         
          }
         
        
        }
       
 
      }
      
      const data = await createFeeding(formData);
       await createTransaction({
        type: "expense",
        amount:`${formula}`,
        date: `${formData.onsetDate}`,
        vendor: " ",
        category: "feeding",
        check_number:"",
        ref_Id: `${resource_id}`,
        ref_type: "animal",
        reporting_year:"2022",
        keywords: "",
        description: ""

      })
    
    
    return  res.status(200).json({ message: "feeding created!", data });
     

    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an AnimalFeed by Id
  static async getFeeding(req, res, next) {
    try {
      const id = req.params.id;
      const data = await getFeedigById(id);
      res.status(200).json({ message: "get AnimalFeed by Id", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
 
  //get all AnimalFeeds
  static async getFeedings(req, res, next) {
    try {
      const {resource_name,resource_id}= req.params
      const data = await getAllFeeding(resource_id);
      res.status(200).json({ message: "All AnimalFeeds", data });
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
      const item= await getFeedById(formData.feedId)
      const itemData=item.dataValues
      formData.feed_name=itemData.name;
      const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
      formData.price=formula   
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