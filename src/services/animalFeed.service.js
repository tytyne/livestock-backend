import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{AnimalFeed} = models;

/**
 * @description This model deals with AnimalFeed model
 */

class AnimalFeedService{
    static async createAnimalFeed(value){
        let data = await AnimalFeed.create(value)
        return data
    }
    static async getAnimalFeedById(id){
        let data = await AnimalFeed.findOne({where:{id:id}})
        return data

    }
   
    static async getAllAnimalFeed(vetId){
        let data = await AnimalFeed.findAll({where:{createdBy:vetId}})
        return data

    }
    static async updateAnimalFeedById(value,id){
        let data = await AnimalFeed.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteAnimalFeedById(id){
        let data = await AnimalFeed.destroy({where:{id:id}})
        return data
    }
  

}
export default AnimalFeedService