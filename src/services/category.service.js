import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Category} = models;


/**
 * @description This model deals with Item model
 */

class CategoryService{
   
    static async getCategoryById(id){
        let items = await Category.findOne({where:{id:id}})
        return items

    }
    static async getAllCategories(){
        let items = await Category.findAll()
       
        return items

    }
   


}
export default CategoryService