import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{InventoryLog} = models;


/**
 * @description This model deals with Inventory model
 */

class InventoryLogService{
    static async storeInventoryLog(value){
        let inventoryLog = await InventoryLog.create(value)
        return inventoryLog
    }
    static async getInventoryLogById(id){
        let inventoryLog = await InventoryLog.findOne({where:{id:id}})
        return inventoryLog

    }
    static async getAllInventoryLogs(farmId){
        let inventoryLog = await InventoryLog.findAll({where:{farm_id:farmId}})
        return inventoryLog

    }
    static async updateInventoryLogById(id,value){
        let inventoryLog = await InventoryLog.update(value,{where:{id:id}})
        return inventoryLog

    }
    
    static async deleteInventoryLogById(id){
        let inventoryLog = await InventoryLog.destroy({where:{id:id}})
        return inventoryLog
    }
    static async LastAmountInventoryLog(inventoryId){
        let inventoryLog =  await InventoryLog.findAll({
            limit: 1,
            where: {
              inventory_id:inventoryId
            },
            order: [ [ 'createdAt', 'DESC' ]]
          })
        return inventoryLog
    }

    static async logsByInventoryId(inventory_id){

        let inventoryLog = await InventoryLog.findAll()
        console.log("check inventory",inventoryLog)
        return inventoryLog
    }


}
export default InventoryLogService