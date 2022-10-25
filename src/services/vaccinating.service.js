import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Vaccinating} = models;

/**
 * @description This model deals with vaccinating model
 */

class VaccinatingService{
    static async createVaccinatingProcess(value){
        let data = await Vaccinating.create(value)
        return data
    }
    static async getVaccinatingProcessById(id){
        let data = await Vaccinating.findOne({where:{id:id}})
        return data

    }
   
    static async getAllVaccinatingProcess(){
        let data = await Vaccinating.findAll()
        return data

    }
    static async updateVaccinatingProcessById(value,id){
        let data = await Vaccinating.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteVaccinatingProcessById(id){
        let data = await Vaccinating.destroy({where:{id:id}})
        return data
    }
  

}
export default VaccinatingService