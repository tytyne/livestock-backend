import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Service} = models;

/**
 * @description This model deals with Service model
 */

class ServiceService{
    static async createService(value){
        let service = await Service.create(value)
        return service
    }
    static async getServiceById(id){
        let service = await Service.findOne({where:{id:id}})
        return service

    }
    static async getAllServices(){
        let service = await Service.findAll()
        return service

    }
    static async updateById(id,value){
        let service = await Service.update(value,{where:{id:id}})
        return service

    }

    static async deleteById(id){
        let service = await Service.destroy({where:{id:id}})
        return service
    }


}
export default ServiceService