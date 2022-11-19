import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{TreatmentMethod,TreatmentType} = models;


/**
 * @description This model deals with  two models
 */

class generalService{
   
    static async getTreatmentMethodById(id){
        let data = await TreatmentMethod.findOne({where:{id:id}})
        return data

    }
    static async getAllTreatmentMethods(){
        let data = await TreatmentMethod.findAll()
       
        return data

    }
    static async getTreatmentTypeById(id){
        let data = await TreatmentType.findOne({where:{id:id}})
        return data

    }
    static async getAllTreatmentTypes(){
        let data = await TreatmentType.findAll()
       
        return data

    }
   


}
export default generalService