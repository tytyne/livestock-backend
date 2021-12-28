import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Farmer} = models;

/**
 * @description This model deals with Farmer model
 */

class FarmerService{
    static async createFarmer(value){
        let farmer = await Farmer.create(value)
        return farmer
    }
    static async getFarmerById(id,userId){
        let farmer = await Farmer.findOne({where:{id:id,createdBy:userId}})
        return farmer

    }
    static async getAllFarmers(userId){
        let farmer = await Farmer.findAll({where:{createdBy:userId}})
        return farmer

    }
    static async updateById(id,value){
        let farmer = await Farmer.update(value,{where:{id:id,createdBy:userId}})
        return farmer

    }

    static async deleteById(id,userId){
        let farmer = await Farmer.destroy({where:{id:id,createdBy:userId}})
        return farmer
    }


}
export default FarmerService