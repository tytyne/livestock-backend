import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Input} = models;

/**
 * @description This model deals with Input model
 */

class InputService{
    static async createInput(value){
        let data = await Input.create(value)
        return data
    }
    static async getInputById(id){
        let data = await Input.findOne({where:{id:id}})
        return data

    }
   
    static async getAllInputsAnimal(animal_id){
        let data = await Input.findAll({where:{animalId:animal_id}})
        return data

    }
    static async getAllInputsGroup(group_id){
        let data = await Input.findAll({where:{groupId:group_id}})
        return data

    }
    static async updateInputById(value,id){
        let data = await Input.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteInputById(id){
        let data = await Input.destroy({where:{id:id}})
        return data
    }
  

}
export default InputService