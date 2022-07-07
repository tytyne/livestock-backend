
import ItemService from "../services/item.service"
import calculatePrice from "../utils/calculationHelper"
const{createItem,getItemById}=ItemService


export default class FarmExpenseController{
    //create operation

    static async storeFarmExpense(req,res,next){
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
            return res.status(200).json({message:"store farm expense"}) 

        }
        catch(e){
            return next(new Error(e))
        }

    }
    // Edit Operation
    static async updateFarmExpense(req,res,next){
        try{
            return res.status(200).json({message:"update farm expense"})   

        }
        catch(e){
            return next(new Error(e))
        }

    }
    //get one operation
    static async getFarmExpense(req,res,next){
        try{

            // const data = await getAllOperations(req.user.id)
            // console.log("check data",data)
            return res.status(200).json({message:"get one farm expense"})

        }
        catch(e){
            return next(new Error(e))
        }

    }
     //get all operations
     static async getFarmExpenses(req,res,next){
        try{
            // const data = await getAllOperations()
            // console.log("check data",data)
            return res.status(200).json({message:"all farm expenses"})

        }
        catch(e){
            return next(new Error(e))
        }

    }
    //delete operation
    static async deleteFarmExpense(req,res,next){
        try{

            return res.status(200).json({message:"delete one farm expense"})
        }
        catch(e){
            return next(new Error(e))
        }

    }

}
