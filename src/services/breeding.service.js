import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Breeding} = models;


/**
 * @description This model deals with Breeding model
 */

class BreedingService{

    static async createBreeding(value){
        let data = await Breeding.create(value)
        return data
    }
   
    static async getBreedingById(id){
        let data = await Breeding.findOne({where:{id:id}})
        return data

    }
   
    static async getAllBreedings(){
        let data = await Breeding.findAll()
       
        return data

    }

    // update breeding

    static async updateBreedingById(value,id){

        let data = await Breeding.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteBreedingById(id){
        let data = await Breeding.destroy({where:{id:id}})
        return data
    }
    static async searchBreeding(sss){
        let data = await Breeding.findAll({ where: {description: sss } })
        return data
    }
   


}
export default BreedingService