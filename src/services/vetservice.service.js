import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{VetService} = models;
console.log("check  vetservice",VetService)

/**
 * @description This model deals with Service model
 */

class VetServices{
    static async createVetService(formData){
        let service = await VetService.create(formData)
        return service
    }
    static async getVetServiceById(id){
        let service = await VetService.findOne({where:{id:id}})
        return service

    }
    static async getAllVetServices(){
        let service = await VetService.findAll()
        return service

    }
    static async updateVetServiceById(id,value){
        let service = await VetService.update(value,{where:{id:id}})
        return service

    }

    static async deleteVetServiceById(id){
        let service = await VetService.destroy({where:{id:id}})
        return service
    }


}
export default VetServices