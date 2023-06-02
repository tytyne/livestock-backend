import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Activity} = models;
const { Op,sequelize ,literal} = require("sequelize");


/**
 * @description This model deals with Activity model
 */

class ActivityService{
    static async createActivity(value){
        let data = await Activity.create(value)
        return data
    }
    static async getActivityById(id){
        let data = await Activity.findOne({where:{id:id}})
        return data

    }
   
    static async getAllActivities(){
        let data = await Activity.findAll()
        return data

    }
    
    static async getAllActivitiesByAnimal(animal_id){
        let data = await Activity.findAll({where:{ref_Id:animal_id}})
        return data

    }
    static async getAllActivitiesByGroup_animal(group_id){
        let data = await Activity.findAll({where:{ref_Id:group_id}})
        return data
  
    }
  
   
    static async getAllActivitiesByFarm(farm_id){
        let data = await Activity.findAll({where:{farmId:farm_id},
         
        })
        return data
  
    }
      static async updateActivityById(value,id){
          let data = await Activity.update(value,{where:{id:id},returning: true,
              plain: true,})
          return data
  
    }

}

export default ActivityService