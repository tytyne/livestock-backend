import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Farm} = models;

import {
  Op, where, cast, col,db,sequelize
} from 'sequelize';



/**
 * @description This model deals with Farm model
 */

class FarmService{
    static async createFarm(formData){
        let farm = await Farm.create(formData)
        return farm
    }
    static async getFarmById(id){
        let farm = await Farm.findOne({include: [
            {
              model: models.Farmer,
              as: "farmer"
            },
            {
              model: models.User,
              as: "user"
            }
          ],where:{id:id}});
        return farm  

    }
    static async getAllFarms(userID){
        let farms = await Farm.findAll({include: [
            {
              model: models.Farmer,
              as: "farmer"
            },
            {
              model: models.User,
              as: "user"
            }
          ],where:{createdBy:userID}})
        return farms

    }
   
    static async updateFarmById(value,id){
        let farm = await Farm.update(value,{where:{id:id},returning: true,
            plain: true,})

        
        return farm

    }

    static async deleteFarmById(id,D){
        let farm = await Farm.destroy({where:{id:id}})
        return farm
    }
    static async countFarms(userID){
        let farm = await Farm.count({where:{createdBy:userID}})
        return farm
    }
  
    static async getAllFarmReports(){
      let farmer = await Farm.findAll({ attributes: ["farmerId",[models.sequelize.fn("COUNT",models.sequelize.col("id")),'count_farm',
     
    
    ], 
        
           
    
    ],
    group:["farmerId"] , })
    return farmer
     

  }





  static async searchFarm(sss){
    let data = await Farm.findAll({ where: { name: sss } })
    return data
}



}
export default FarmService