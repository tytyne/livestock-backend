import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Item} = models;


/**
 * @description This model deals with Item model
 */

class ItemService{
    static async createItem(value){
        let items = await Item.create(value)
        return items
    }
    static async getItemById(id){
        let items = await Item.findOne({where:{id:id}})
        return items

    }
    static async getAllItems(){
        let items = await Item.findAll()
        
        return items

    }
    static async updateItemById(id,value){
        let items = await Item.update(value,{where:{id:id}})
        return items

    }

    static async deleteItemById(id){
        let items = await Item.destroy({where:{id:id}})
        return items
    }


}
export default ItemService