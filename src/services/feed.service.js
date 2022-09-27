import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Feed} = models;


/**
 * @description This model deals with PurposeList model
 */

class FeedService{
   
    static async getFeedById(id){
        let data = await Feed.findOne({where:{id:id}})
        return data

    }
    static async getFeedByCategoryId(categoryName){
        let data = await Feed.findOne({where:{animalCategoryId:categoryName}})
        return data

    }
    static async getAllFeeds(){
        let data = await Feed.findAll()
       
        return data

    }
   


}
export default FeedService