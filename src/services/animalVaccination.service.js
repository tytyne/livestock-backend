import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{AnimalVaccination} = models;

/**
 * @description This model deals with AnimalVaccination model
 */

class AnimalVaccinationService{
    static async createAnimalVaccination(value){
        let data = await AnimalVaccination.create(value)
        return data
    }
    static async getAnimalVaccinationById(id){
        let data = await AnimalVaccination.findOne({where:{id:id}})
        return data

    }
   
    static async getAllAnimalVaccination(vetId){
        let data = await AnimalVaccination.findAll({where:{createdBy:vetId}})
        return data

    }
    static async updateAnimalVaccinationById(value,id){
        let data = await AnimalVaccination.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteAnimalVaccinationById(id){
        let data = await AnimalVaccination.destroy({where:{id:id}})
        return data
    }
  

}
export default AnimalVaccinationService