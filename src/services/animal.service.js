import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Animal} = models;

/**
 * @description This model deals with Animal model
 */

class AnimalService{
    static async createAnimal(value){
        let animal = await Animal.create(value)
        return animal
    }
    static async getAnimalById(id,vetId){
        let animal = await Animal.findOne({where:{id:id,createdBy:vetId}})
        return animal

    }
    static async getAllanimals(vetId){
        let animal = await Animal.findAll({where:{createdBy:vetId}})
        return animal

    }
    static async updateById(id,value){
        let animal = await Animal.update(value,{where:{id:id,createdBy:vetId}})
        return animal

    }

    static async deleteById(id,vetId){
        let animal = await Animal.destroy({where:{id:id,createdBy:vetId}})
        return animal
    }


}
export default AnimalService