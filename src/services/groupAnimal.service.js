import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{GroupAnimal} = models;

/**
 * @description This model deals with GroupAnimal model
 */

class GroupAnimalService{
    static async createGroupAnimal(value){
        let data = await GroupAnimal.create(value)
        return data
    }
    static async getGroupAnimalById(id){
        let data = await GroupAnimal.findOne({where:{id:id}})
        return data

    }
   
    static async getAllGroupAnimals(vetId){
        let data = await GroupAnimal.findAll({where:{createdBy:vetId}})
        return data

    }
    static async updateGroupAnimalById(value,id){
        let data = await GroupAnimal.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteGroupAnimalById(id){
        let data = await GroupAnimal.destroy({where:{id:id}})
        return data
    }

    static async updateGroupAnimalStatus(fvalue,mvalue,id){
        let data = await GroupAnimal.literal(`femaleNumber`-fvalue,`maleNumber`- mvalue,{where:{id:id},returning: true,
            plain: true,})
        return data


    }

    static async AllTypes(){
        
        let data = await  GroupAnimal.findAll()
        return data
        

    }

    
  

}
export default GroupAnimalService