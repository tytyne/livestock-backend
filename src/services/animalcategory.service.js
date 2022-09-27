import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{AnimalCategory} = models;


/**
 * @description This model deals with AnimalCategory model
 */

class AnimalCategoryService{

    static async createAnimalCategory(value){

        let item = await AnimalCategory.create(value)
        return item
    }
   
    static async getAnimalCategoryById(id){
        let items = await AnimalCategory.findOne({where:{id:id}})
        return items

    }
    static async getAllAnimalCategory(){
        let items = await AnimalCategory.findAll()
       
        return items

    }

    // update animalCategory

    static async updateAnimalCategoryId(value,id){

        let item = await AnimalCategory.update(value,{where:{id:id}})
        return item

    }
    //delete animal category

    static async deleteAnimalCategoryById(id){
        let item = await AnimalCategory.destroy({where:{id:id}})
        return item
    }
   


}
export default AnimalCategoryService