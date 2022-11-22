import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{GroupAnimalVaccination} = models;


/**
 * @description This model deals with GroupAnimalVaccination model
 */

class GroupAnimalVaccinationService{
    static async createAnimalVaccination(value){
        let data = await GroupAnimalVaccination.create(value)
        return data
    }
    static async getGroupAnimalVaccinationById(id){
        let data = await GroupAnimalVaccination.findOne({where:{id:id}})
        return data

    }
   
    static async getAllGroupAnimalVaccination(animal_id){
        let data = await GroupAnimalVaccination.findAll({where:{animalId:animal_id}})
        return data

    }
    static async updateGroupAnimalVaccinationById(value,id){
        let data = await GroupAnimalVaccination.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteGroupAnimalVaccinationById(id){
        let data = await GroupAnimalVaccination.destroy({where:{id:id}})
        return data
    }
  

}
export default GroupAnimalVaccinationService