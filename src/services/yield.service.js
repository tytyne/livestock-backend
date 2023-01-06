import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Yield} = models;

/**
 * @description This model deals with Yield model
 */

class YieldService{
    static async createYield(value){
        let data = await Yield.create(value)
        return data
    }
    static async getYieldById(id){
        let data = await Yield.findOne({where:{id:id}})
        return data

    }
   
    static async getAllYields(animal){
        let data = await Yield.findAll({where:{animal_id:animal}})
        return data

    }
    static async updateYieldById(value,id){
        let data = await Yield.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteYieldById(id){
        let data = await Yield.destroy({where:{id:id}})
        return data
    }
  

}
export default YieldService