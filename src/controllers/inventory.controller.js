import InventoryService from "../services/inventory.service"
const{getAllInventories,getInventoryById,updateInventoryById,deleteInventoryById,storeInventory}=InventoryService
const { v4: uuidv4 } = require('uuid');

export default class ItemController{


//get a inventory by Id
static async createInventory(req,res,next){
    try{
        const {farmId}=req.params
        const formData = req.body;
        formData.id = uuidv4();
        formData.farm_id= farmId;
        const data = await storeInventory(formData)
        res.status(200).json({message:"get inventory by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

//get a inventory by Id
static async getInventory(req,res,next){
    try{
        const id=req.params.id
        const data = await getInventoryById(id)
        res.status(200).json({message:"get inventory by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all inventories
static async getInventories(req,res,next){
    try{
        const {farmId}=req.params
        const data = await getAllInventories(farmId)
        res.status(200).json({message:"All inventories",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

//update inventory
static async updateInventory(req,res,next){
    try{
        const id=req.params.id
        const data = await updateInventoryById(id)
        res.status(200).json({message:"All inventories",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}


}