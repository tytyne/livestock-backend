import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{GroupAnimal,Animal} = models;
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
   
    static async getAllGroupAnimals(farm_id){
        let data = await GroupAnimal.findAll({where:{farm_id:farm_id}})
        return data

    }

    static async getAllGroupAnimalss(){


        let data = await GroupAnimal.findAll({
            where: models.sequelize.where(models.sequelize.fn('ISJSON', models.sequelize.col('records')), 1)
          })

        // let data = await GroupAnimal.findAll<GroupAnimal>({
        //     where: { '$bar.jsonb_field$': {
        //       $contains: sequelize.literal(`'{ "inner_field1": "text to find" }'::json`)
        //     },
        //     include: [{ model: Animal }]
        // }});
    
          return data;
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

    static async searchGroupAnimals(sss,farm_id){
        let animals = await Animal.findAll({where:{is_group:true,name: sss,farm_id:farm_id },
            attributes: ['id','name','group_qty'],
            })
        let group = await GroupAnimal.findAll({ where: { name: sss,farm_id:farm_id } })
        let data = [...animals,...group]
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

   
    static async addNewRecords(newdata,gid){
       ;
        let data = await GroupAnimal.update({ records: models.sequelize.literal(`'${JSON.stringify(newdata)}'::jsonb|| records`) }, { where: { id:gid} });

        return data
    }
 

}
export default GroupAnimalService