import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Feeding} = models;

/**
 * @description This model deals with AnimalFeed model
 */

class FeedingService{
    static async createFeeding(value){
        // let data = await Feeding.create(value)
        let data =Feeding.bulkCreate(
            [
             value
            ],
            {
              ignoreDuplicates: true,
            }
        )
        return data
    }
    static async getFeedigById(id){
        let data = await Feeding.findOne({where:{id:id}})
        return data

    }
   
    static async getAllFeeding(animal_id){
        let data = await Feeding.findAll({where:{animalId:animal_id}})
        return data

    }
    static async updateFeedingById(value,id){
        let data = await Feeding.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteFeedingById(id){
        let data = await Feeding.destroy({where:{id:id}})
        return data
    }
  

}
export default FeedingService