import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Stocking} = models;


/**
 * @description This model deals with Inventory model
 */

class InventoryService{
    static async storeInventory(value){
        let inventory = await Stocking.create(value)
        return inventory
    }
    static async getInventoryById(id){
        let inventory = await Stocking.findOne({where:{id:id}})
        return inventory

    }
    static async getAllInventories(farmId){
        let inventory = await Stocking.findAll({where:{farm_id:farmId}})
        return inventory

    }
    static async updateInventoryById(id,value){
        let inventory = await Stocking.update(value,{where:{id:id}})
        return inventory

    }
    
    static async deleteInventoryById(id){
        let inventory = await Stocking.destroy({where:{id:id}})
        return inventory
    }

    static async searchInventory(sss,farmId){
          //search inventory
        let data = await Stocking.findAll({where:{name:sss,farm_id:farmId}})
        return data
    }

}
export default InventoryService