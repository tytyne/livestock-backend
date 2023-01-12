import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Animal} = models;

/**
 * @description This model deals with Genealogy model
 */

class GenealogyService{
    static async createGenealogy(value){
        let data = await Animal.create(value)
        return data
    }
    static async getGenealogyById(id){
        let data = await Animal.findOne({where:{id:id}})
        return data

    }
   
    static async getAllGenealogy(animal_id){
        let data = await Animal.findAll({where:{animalId:animal_id}})
        return data

    }
    static async updateGenealogyById(value,id){
        let data = await Animal.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteGenealogyById(id){
        let data = await Animal.destroy({where:{id:id}})
        return data
    }
  

}
export default GenealogyService