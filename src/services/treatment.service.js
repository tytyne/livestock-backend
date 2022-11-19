import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Treatment} = models;

/**
 * @description This model deals with Treatment model
 */

class TreatmentService{
    static async createTreatment(value){
        let data = await Treatment.create(value)
        return data
    }
    static async getTreatmentById(id){
        let data = await Treatment.findOne({where:{id:id}})
        return data

    }
   
    static async getAllTreatments(){
        let data = await Treatment.findAll()
        return data

    }
    static async updateTreatmentById(value,id){
        let data = await Treatment.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteTreatmentById(id){
        let data = await Treatment.destroy({where:{id:id}})
        return data
    }
  

}
export default TreatmentService