import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{AnimalCategory} = models;


/**
 * @description This model deals with AnimalCategory model
 */

class AnimalCategoryService{
   
    static async getAnimalCategoryById(id){
        let items = await AnimalCategory.findOne({where:{id:id}})
        return items

    }
    static async getAllAnimalCategory(){
        let items = await AnimalCategory.findAll()
       
        return items

    }
   


}
export default AnimalCategoryService