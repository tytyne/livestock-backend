import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{GroupAnimal} = models;
const { Op,sequelize,literal,fn} = require("sequelize");

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

    static async searchGroupAnimals(sss){
        let data = await GroupAnimal.findAll({ where: { name: sss } })
        return data
    }

    // update records

    static async PushRecords(records,farm_id){
        let trial = await GroupAnimal.update(
            {
                records
            },
            {
                where: {
                    id:farm_id
                }
            }
        );
        return trial 
    }

    static async pushingNewRecords(newdata,fid){

        var newrev = JSON.stringify({data: newdata, created: new Date() });
        let data = await GroupAnimal.upsert({
            records: models.sequelize.fn( 'array_append',  models.sequelize.col('records'), newrev ,{where: {
                id:fid
        }})
        })

        return data
    }


    static async addNewRecords(newdata,gid){
        let newrev = JSON.stringify({data: newdata, created: new Date() });
        await GroupAnimal.update({ records: models.sequelize.literal(`'${JSON.stringify(newrev)}'::json|| records`) }, { where: { id:gid} });
        return newrev
    }

    
  

}
export default GroupAnimalService