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
   
    static async getAllVaccinatingProcess(animal_id){
        let data = await Vaccinating.findAll({where:{animalId:animal_id},
            include: [
                {
                    model: models.Vaccination,
                    as: "vaccination",
                    attributes: ['name'],
                
            },
            {
                model: models.User,
                as: "user",
                attributes: ['firstname', 'lastname'],
            
            },
            {
                model: models.Animal,
                as: "animal",
                attributes: ['name'],
            
            }
            ],
            // attributes: [{ exclude: "createdBy","vaccinationId" }]
            attributes: { exclude: "createdBy" },
            attributes: { exclude: "vaccinationId" },
            attributes: { exclude: "animalId" },
        })
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
    static async searchVaccinating(sss){
        let data = await Vaccinating.findAll({ where: {description: sss } })
        return data
    }
  

}
export default VaccinatingService