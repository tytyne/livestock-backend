import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Feed} = models;

/**
 * @description This model deals with Feed model
 */

class FeedService{
    static async createFeed(value){
        let feed = await Feed.create(value)
        return feed
    }
    static async getFeedById(id){
        let feed = await Feed.findOne({where:{id:id}})
        return feed

    }
    static async getAllFeed(){
        let feed = await Feed.findAll()
        return feed

    }
    static async updateById(id,value){
        let feed = await Feed.update(value,{where:{id:id}})
        return feed

    }

    static async deleteById(id){
        let feed = await Feed.destroy({where:{id:id}})
        return feed
    }


}
export default FeedService