import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Vaccination} = models;


/**
 * @description This model deals with Vaccination model
 */

class VaccinationService{
   
    static async getVaccinationById(id){
        let data = await Vaccination.findOne({where:{id:id}})
        return data

    }
    static async getAllVaccinations(){
        let data = await Vaccination.findAll()
       
        return data

    }
   


}
export default VaccinationService