import OperationService from "../services/operation.service"
const{createOperation,getAllOperations}=OperationService
import ItemService from "../services/item.service"
import calculatePrice from "../utils/calculationHelper"
const{createItem,getItemById}=ItemService


export default class OperationController{
    //create operation

    static async storeOperation(req,res,next){
       try{
            // const formData=req.body
            // const item= await getItemById(formData.itemId)
            // formData.item_name=item.name;
            // formData.item_type=item.type;
            // const formula= parseInt((item.price * formData.quantity)/item.unit);
            // formData.amount=formula
            // formData.userIDD=req.user.id
            // console.log("check formdata",formData)
            // const data = await createOperation(formData)
            // return res.status(200).json({message:"operation created!",data})
            return res.status(200).json({message:"store operation"}) 

        }
        catch(e){
            return next(new Error(e))
        }

    }
    // Edit Operation
    static async updateOperation(req,res,next){
        try{
            return res.status(200).json({message:"update operation"})   

        }
        catch(e){
            return next(new Error(e))
        }

    }
    //get one operation
    static async getOperation(req,res,next){
        try{

            const data = await getAllOperations(req.user.id)
            console.log("check data",data)
            return res.status(200).json({message:"get one operation",data})

        }
        catch(e){
            return next(new Error(e))
        }

    }
     //get all operations
     static async getOperations(req,res,next){
        try{
            const data = await getAllOperations()
            console.log("check data",data)
            return res.status(200).json({message:"all operations",data})

        }
        catch(e){
            return next(new Error(e))
        }

    }
    //delete operation
    static async deleteOperation(req,res,next){
        try{

            return res.status(200).json({message:"delete one operation"})
        }
        catch(e){
            return next(new Error(e))
        }

    }

}

