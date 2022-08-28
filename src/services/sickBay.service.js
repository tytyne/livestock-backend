import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{SickBay} = models;

/**
 * @description This model deals with SickBay model
 */

class SickBayService{
    static async createSickBay(value){
        let data = await SickBay.create(value)
        return data
    }
    static async getSickBayById(id){
        let data = await SickBay.findOne({where:{id:id}})
        return data

    }
   
    static async getAllSickBay(vetId){
        let data = await SickBay.findAll({where:{createdBy:vetId}})
        return data

    }
    static async updateSickBayById(value,id){
        let data = await SickBay.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteSickBayById(id){
        let data = await SickBay.destroy({where:{id:id}})
        return data
    }
  

}
export default SickBayService