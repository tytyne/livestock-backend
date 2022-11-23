import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Measurement} = models;

/**
 * @description This model deals with Measurement model
 */

class MeasurementService{
    static async createMeasurement(value){
        let data = await Measurement.create(value)
        return data
    }
    static async getMeasurementById(id){
        let data = await Measurement.findOne({where:{id:id}})
        return data

    }
   
    static async getAllMeasurements(animal_id){
        let data = await Measurement.findAll({where:{animalId:animal_id}})
        return data

    }
    static async updateMeasurementById(value,id){
        let data = await Measurement.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteMeasurementById(id){
        let data = await Measurement.destroy({where:{id:id}})
        return data
    }
  

}
export default MeasurementService