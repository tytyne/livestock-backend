import AnimalFeedService from "../services/animalFeed.service";
import calculationHelper from "../utils/calculationHelper"
const{calculatePrice}=calculationHelper
const {
  createAnimalFeed,
  getAnimalFeedById,
  getAllAnimalFeed,
  updateAnimalFeedById,
  deleteAnimalFeedById,
} = AnimalFeedService;
import FeedService from "../services/feed.service";
const{getFeedById,getFeedByCategoryId}=FeedService

export default class AnimalFeedController {
  //save an AnimalFeed
  static async storeAnimalFeed(req, res, next) {
    try {
      const formData = req.body;
      formData.createdBy = req.user.id;
      
      if(formData.animalCategoryId===2){
        formData.animalId=0
        if(formData.feedId!=0){
          const item= await getFeedById(formData.feedId)
          const itemData=item.dataValues
          formData.feed_name=itemData.name;
          const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
          formData.price=formula
          
        }
        
      }else{
        formData.groupAnimalId = 0
        if(formData.feedId!=0){
          const item= await getFeedById(formData.feedId)
          const itemData=item.dataValues
          formData.feed_name=itemData.name;
          const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
          formData.price=formula
          

        }

      }
      const data = await createAnimalFeed(formData);
      res.status(200).json({ message: "an AnimalFeed created!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }

  //get an AnimalFeed by Id
  static async getAnimalFeed(req, res, next) {
    try {
      const id = req.params.id;
      const data = await getAnimalFeedById(id);
      res.status(200).json({ message: "get AnimalFeed by Id", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
 
  //get all AnimalFeeds
  static async getAnimalFeeds(req, res, next) {
    try {
      const data = await getAllAnimalFeed(req.user.id);
      res.status(200).json({ message: "All AnimalFeeds", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  // update an AnimalFeed
  static async updateAnimalFeed(req, res, next) {
    try {
      const id = req.params.id;
      const formData = req.body;
      if(formData.animalCategoryId===2){
        formData.animalId=0
        if(formData.feedId!=0){
          
          const item= await getFeedById(formData.feedId)
          const itemData=item.dataValues
          formData.feed_name=itemData.name;
          const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
          formData.price=formula
          
        }
        
      }else{
        formData.groupAnimalId = 0
        if(formData.feedId!=0){
          const item= await getFeedById(formData.feedId)
          const itemData=item.dataValues
          formData.feed_name=itemData.name;
          const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
          formData.price=formula
          

        }

      }
      const data = await updateAnimalFeedById(formData, id);
      res.status(200).json({ message: "update an AnimalFeed!!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }
  //delete an AnimalFeed

  static async deleteAnimalFeed(req, res, next) {
    try {
      const id = req.params.id;
      const data = await deleteAnimalFeedById(id);
      res.status(200).json({ message: "delete a AnimalFeed" });
    } catch (e) {
      return next(new Error(e));
    }
  }


}
