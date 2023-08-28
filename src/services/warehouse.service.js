import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Warehousing} = models;
const { Op,sequelize ,literal} = require("sequelize");

/**
 * @description This model deals with Warehouse model
 */

class WarehouseService{
    static async createWarehouse(value){
        let warehouse = await Warehousing.create(value)
        return warehouse
    }
    static async getWarehouseById(id){
        let warehouse = await Warehousing.findOne({where:{id:id}})
        return warehouse

    }
    static async getAllWarehouses(farmId){
        let warehouses = await Warehousing.findAll({where:{farm_id:farmId}})
        
        return warehouses

    }

    static async updateWarehouseById(id,value){
        let warehouse = await Warehousing.update(value,{where:{id:id}})
        return warehouse

    }

    static async deleteWarehouseById(id){
        let warehouse = await Warehousing.destroy({where:{id:id}})
        return warehouse
    }


}
export default WarehouseService