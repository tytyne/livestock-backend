import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Farmer} = models;


/**
 * @description This model deals with Farmer model
 */

class FarmerService{
    static async createFarmer(formData){
        let farmer = await Farmer.create(formData)
        return farmer
    }
    static async getFarmerById(id){
        let farmer = await Farmer.findOne({where:{id:id}})
        return farmer  

    }
    static async getAllFarmers(userIDD){
        let farmer = await Farmer.findAll({where:{createdBy:userIDD}})
        return farmer

    }
    static async checkNID(value) {
        let user;
          user = await Farmer.findOne({ where: {nid: value } });
          return user; 
    }
    static async updateById(value,id){
        let farmer = await Farmer.update(value,{where:{id:id},returning: true,
            plain: true,})

        
        return farmer

    }


    static async deleteById(id){
        let farmer = await Farmer.destroy({where:{id:id}})
        return farmer
    }
    static async countFarmers(userID){
        let farmer = await Farmer.count({where:{createdBy:userID}})
        return farmer
    }


}
export default FarmerService