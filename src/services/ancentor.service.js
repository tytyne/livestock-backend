import models from "../database/models/index"
import "regenerator-runtime/runtime";
const { Animal } = models;

/**
 * @description This model deals with Animal model
 */

class AncentorService {
    
    static async getAllanimals(vetId) {
        let animal = await Animal.findAll({ where: { createdBy: vetId } })
        return animal

    }
   
    // update father

    static async updateAnimalFather(ressource_id,fatherId){
        const animal = await Animal.update({father_id:fatherId}, {
          where: { id: ressource_id },
          returning: true,
          plain: true,
          })
        return animal
      }


    // update mother

    static async updateAnimalMother(ressource_id,motherId){
        const animal = await Animal.update({mother_id:motherId}, {
          where: { id: ressource_id },
          returning: true,
          plain: true,
          })
        return animal
      }
}

export default AncentorService