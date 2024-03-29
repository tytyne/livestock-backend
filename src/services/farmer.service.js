import Models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Farmer} = Models;
import {
    Op, where, cast, col
  } from 'sequelize';


/**
 * @description This model deals with Farmer model
 */

class FarmerService{
    static async createFarmer(formData){
        let farmer = await Farmer.create(formData)
        return farmer
    }
    static async getFarmerById(id){
        let farmer = await Farmer.findOne({include:'user'},{where:{id:id}})
        return farmer  

    }
    static async getAllFarmers(farm_id){
        let farmer = await Farmer.findAll({include:'user'},{where:{farm_id:farm_id}})
        return farmer

    }
    static async checkNID(value) {
        let user;
          user = await Farmer.findOne({include:'user'},{ where: {nid: value } });
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
    static async countFarmers(farm_id){
        let farmer = await Farmer.count({where:{farm_id:farm_id}})
        return farmer
    }


    static async searchFarmer(sss,farm_id){
        let data  = await Farmer.findAll({
                    where: {
                      [Op.or]: [
                        {
                            firstname: { [Op.like]: `%${sss}%` },
                          },
                        {
                            lastname: { [Op.like]: `%${sss}%` },
                        }
                      ]
                    }
                  },{where:{farm_id:farm_id}});
        return data
    }


    static async farmerGroupByDistrictReports(){
        let farmer = await Farmer.findAll({ attributes: ["district","gender",[Models.sequelize.fn("COUNT",Models.sequelize.col("nid")),'farmers',
     
    
    ], 
        [Models.sequelize.fn("COUNT",Models.sequelize.col("gender",{where:{gender:'male'}})),'gender_male'],
        [Models.sequelize.fn("COUNT",Models.sequelize.col("gender",{where:{gender:'female'}})),'gender_female']
           
    
    ],
    group:["district","gender"] , })
    return farmer

}


}
export default FarmerService