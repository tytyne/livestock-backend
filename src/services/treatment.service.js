import Models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Treatment} = Models;
import {
    Op, where, cast, col
  } from 'sequelize';

/**
 * @description This model deals with Treatment model
 */

class TreatmentService{
    static async createTreatment(value){
        let data = await Treatment.create(value)
        return data
    }
    static async getTreatmentById(id){
        let data = await Treatment.findOne({where:{id:id}})
        return data

    }
   
    static async getAllTreatments(animal_id){
        let data = await Treatment.findAll({where:{animalId:animal_id}})
        return data

    }
    static async updateTreatmentById(value,id){
        let data = await Treatment.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteTreatmentById(id){
        let data = await Treatment.destroy({where:{id:id}})
        return data
    }
    static async upcomingTreatments(startDate,endDate){
        let data = await Treatment.findAll({
            from: {
                $between: [startDate, endDate]
            }
        }
        )
        return data
    }

    static async searchTreatment(sss){
        let data = await Treatment.findAll({  where: {
            [Op.or]: [
              { type: sss },
              { product: sss }
            ]
          } })
        return data
    }
    
    static async AllTreatmentsReports(){
        let data = await Treatment.findAll({ 
            include:[
                {
                    model:Models.Animal,
                    as:"animal"
                
                }] })
        return data

    }

    // static async TreatmentTypes(){

    //     let data = await Treatment.findAll({
    //         group: ['type'],
    //         attributes: ['type', [sequelize.fn('COUNT', 'type'), 'typeCount']],
    //     })

    //     return data
    // }


    static async TreatmentTypes(){
        let data = await Treatment.findAll({ attributes: ["type",[Models.sequelize.fn("COUNT",Models.sequelize.col("type")),'treatments',
     
    
    ], 
        // [Models.sequelize.fn("COUNT",Models.sequelize.col("gender",{where:{gender:'male'}})),'gender_male'],
        // [Models.sequelize.fn("COUNT",Models.sequelize.col("gender",{where:{gender:'female'}})),'gender_female']
           
    
    ],
    group:["type"] , })
    return data

}


  

}
export default TreatmentService