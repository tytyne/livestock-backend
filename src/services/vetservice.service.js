import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Vetservice} = models;
console.log("check service",Vetservice)

/**
 * @description This model deals with Service model
 */

class ServiceService{
    static async createService(formData){
        let service = await Vetservice.create(formData)
        return service
    }
    static async getServiceById(id){
        let service = await Vetservice.findOne({where:{id:id}})
        return service

    }
    static async getAllServices(){
        let service = await Vetservice.findAll()
        return service

    }
    static async updateById(id,value){
        let service = await Vetservice.update(value,{where:{id:id}})
        return service

    }

    static async deleteById(id){
        let service = await Vetservice.destroy({where:{id:id}})
        return service
    }


}
export default ServiceService