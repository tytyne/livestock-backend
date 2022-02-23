import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Service} = models;
console.log("check service",Service)

/**
 * @description This model deals with Service model
 */

class ServiceService{
    static async createService(formData){
        let service = await Service.create(formData)
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
    static async updateServiceById(id,value){
        let service = await Service.update(value,{where:{id:id}})
        return service

    }
    static async deleteServiceById(id){
        let service = await Service.destroy({where:{id:id}})
        return service
    }


}
export default ServiceService