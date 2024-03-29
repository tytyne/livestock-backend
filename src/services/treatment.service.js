import Models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Treatment} = Models;
import {
    Op, where, cast, col,sequelize
  } from 'sequelize';

/**
 * @description This model deals with Treatment model
 */

class TreatmentService{
    static async createTreatment(value){
        let data = await Treatment.create(value)
        return data
    }
    static async createBulkTreatment(values){
        let data = await Treatment.bulkCreate(values, {returning: true})
        console.log("valentineeee",data)
        return data
    }
    static async getTreatmentById(id){
        let data = await Treatment.findOne({where:{id:id}})
        return data

    }
   
    static async getAllTreatmentsAnimal(animal_id){
        let data = await Treatment.findAll({where:{animalId:animal_id}})
        return data

    }

    static async getAllTreatmentsGroup(animal_id){
        let data = await Treatment.findAll({where:{groupId:animal_id}})
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
            where:{
                $between: [startDate, endDate]
            }   
        }
        )
        return data
    }
    
  //

    
    static async allTreatments(startDate,endDate){

        const data = await Treatment.findAll({
            where: {
                date: { [Op.between]: [startDate, endDate] },
            },
            include:[
                {
                    model:Models.Animal,
                    as:"animal"
                
                }    
            
            ]
        });
        return data
    }

    static async  selectTreatments(){

        const data = await Treatment.findAll({
           
            include:[
                {
                    model:Models.Animal,
                    as:"animal"
                
                }    
            
            ]
        });
        
        return data
    }

    // static async searchTreatment(sss){
    //     let data = await Treatment.findAll({  where: {
    //         [Op.or]: [
    //           { type: sss },
    //           { product: sss }
    //         ]
    //       } })
    //     return data
    // }
    
    static async AllTreatmentsReports(startDate,endDate){
        let data = await Treatment.findAll({ 
            where:{
                $between: [startDate, endDate]
            },
            include:[
                {
                    model:Models.Animal,
                    as:"animal"
                
                }    
            
            ] })
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
   
    ],
    group:["type"] , })
    return data

    }

    static async searchTreatment(sss){
        let data  = await Treatment.findAll({
                    where: {
                      [Op.or]: [
                        {
                            type: { [Op.like]: `%${sss}%` },
                          },
                        {
                            mode: { [Op.like]: `%${sss}%` },
                        }
                      ]
                    }
                  });
        return data
    }


  

}
export default TreatmentService