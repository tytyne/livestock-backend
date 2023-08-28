import WarehouseService from "../services/warehouse.service"
const{createWarehouse,getWarehouseById,getAllWarehouses,updateWarehouseById}=WarehouseService
const { v4: uuidv4 } = require('uuid');

export default class WarehouseController{

//create warehouse
static async storeWarehouse(req,res,next){
    try{
        const {farmId}=req.params
        const formData = req.body;
        formData.id = uuidv4();
        formData.farm_id= farmId;
        const data = await createWarehouse(formData)
        return res.status(200).json({message:"Warehouse created!",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

//get a warehouse by Id
static async getWarehouse(req,res,next){
    try{
        const id=req.params.id
        const data = await getWarehouseById(id)
        res.status(200).json({message:"get warehouse by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all warehouses
static async getWarehouses(req,res,next){
    try{
        const {farmId}=req.params
        const data = await getAllWarehouses(farmId)
        res.status(200).json({message:"All warehouses",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}


//update warehouse
static async updateWarehouse(req,res,next){
    try{
        const id=req.params.id
        const data = await updateWarehouseById(id)
        res.status(200).json({message:"update warehouse!",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}


}