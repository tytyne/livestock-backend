import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Farm} = models;


/**
 * @description This model deals with Farm model
 */

class FarmService{
    static async createFarm(formData){
        let farm = await Farm.create(formData)
        return farm
    }
    static async getFarmById(id){
        let farm = await Farm.findOne({where:{id:id}})
        return farm  

    }
    static async getAllFarms(userID){
        let farms = await Farm.findAll({where:{createdBy:userID}})
        return farms

    }
   
    static async updateFarmById(value,id){
        let farm = await Farm.update(value,{where:{id:id},returning: true,
            plain: true,})

        
        return farm

    }

    static async deleteFarmById(id,D){
        let farm = await Farm.destroy({where:{id:id}})
        return farm
    }
    static async countFarms(userID){
        let farm = await Farm.count({where:{createdBy:userID}})
        return farm
    }


}
export default FarmService