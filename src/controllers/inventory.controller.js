import InventoryService from "../services/inventory.service"
import InventoryLogService from "../services/inventoryLog.service"
import calculationHelper from "../utils/calculationHelper"
const { getAllInventories, getInventoryById, updateInventoryById, deleteInventoryById, storeInventory ,searchInventory} = InventoryService
const { storeInventoryLog, getInventoryLogById, getAllInventoryLogs, updateInventoryLogById, deleteInventoryLogById,LastAmountInventoryLog,logsByInventoryId} = InventoryLogService
const {AddingToInventory,RemoveToInventory,ManualToInventory} = calculationHelper
const { v4: uuidv4 } = require('uuid');

export default class ItemController {


    //get a inventory 
    static async createInventory(req, res, next) {
        try {
            const { farmId } = req.params
            const formData = req.body;
            formData.id = uuidv4();
            formData.farm_id = farmId;
            const data = await storeInventory(formData)
            res.status(200).json({ message: "get inventory by Id", data })
        }
        catch (e) {
            return next(new Error(e));
        }
    }

    //get a inventory by Id
    static async getInventory(req, res, next) {
        try {
            const id = req.params.id
            const data = await getInventoryById(id)
            res.status(200).json({ message: "get inventory by Id", data })
        }
        catch (e) {
            return next(new Error(e));
        }
    }
    //get all inventories
    static async getInventories(req, res, next) {
        try {
            const { farmId } = req.params
            const data = await getAllInventories(farmId)
            res.status(200).json({ message: "All inventories", data })
        }
        catch (e) {
            return next(new Error(e));
        }
    }

    //update inventory
    static async updateInventory(req, res, next) {
        try {
            const id = req.params.id
            const data = await updateInventoryById(id)
            res.status(200).json({ message: "All inventories", data })
        }
        catch (e) {
            return next(new Error(e));
        }
    }

    // add inventory
    static async quantityInventory(req, res, next) {
        try {
            const { farmId,inventoryId,action } = req.params
            let lastInventoryLog = await LastAmountInventoryLog(inventoryId)
            const formData = req.body;
            formData.id = uuidv4();
            formData.inventory_id = inventoryId;
            if(action==='add'){
                if (lastInventoryLog === undefined || lastInventoryLog.length == 0) {
                    formData.original_qty = formData.amount
                    formData.qty_remaining = formData.amount
                    let data =  await storeInventoryLog(formData)
                    return res.status(200).json({ message: "inventory log", data })
                }else{
                    let lastInventoryData=lastInventoryLog[0].dataValues
                    formData.original_qty = await AddingToInventory(parseFloat(lastInventoryData.original_qty),parseFloat(formData.amount))
                    formData.qty_remaining = await AddingToInventory(parseFloat(lastInventoryData.qty_remaining),parseFloat(formData.amount))
                    let data =  await storeInventoryLog(formData)
                    return res.status(200).json({ message: "inventory log", data })
                }  

            }
            else if(action ==='remove'){
                if (lastInventoryLog=== undefined || lastInventoryLog.length == 0) {
                    return res.status(200).json({ message: "select inventory"})
                }
                else{
                    let lastInventoryData=lastInventoryLog[0].dataValues
                    let originalQtyData = lastInventoryData.original_qty
                    if(originalQtyData < formData.amount){
                        return res.status(200).json({ message: "you do not have that amount in inventory "})  
                    }else{
                        // formData.original_qty = await RemoveToInventory(parseFloat(lastInventoryData.original_qty),parseFloat(formData.amount))
                        formData.qty_remaining = await RemoveToInventory(parseFloat(lastInventoryData.original_qty),parseFloat(formData.amount))
                        let data =  await storeInventoryLog(formData)
                        return res.status(200).json({ message: "inventory log", data }) 
                    }
                }
                // let lastAmountData=lastAmount[0].dataValues
                // formData.qty_remaining = await RemoveToInventoryToInventory(lastAmountData.amount,formData.amount)
                // let data =  await storeInventoryLog(formData)
                // return res.status(200).json({ message: "inventory log", data })

            }
            else if(action ==='manual'){
                formData.qty_remaining = await ManualToInventoryToInventory(lastAmount.amount,formData.amount)
                let data =  await storeInventoryLog(formData)
                return res.status(200).json({ message: "inventory log", data })
            }

         }
        catch (e) {
            return next(new Error(e))
        }

    }
    static async searchingInventory(req,res,next){

        try{
          const {farmId}=req.params
          const {name} = req.query;
          const data = await searchInventory(name,farmId);
          console.log(data)
          return res.status(200).json({ message: "searched inventories",data});
        }
        catch(e){
          return next(new Error(e));
        }
    }
    // inventory logs
    static async inventoryLogsByInventory(req,res,next){

        // try{
          const {inventoryId}=req.params
          const data = await logsByInventoryId();
          console.log("check data",data)
          return res.status(200).json({ message: "inventories logs",data});
        // }
        // catch(e){
        //   return next(new Error(e));
        // }
    }

}