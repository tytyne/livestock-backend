
import ItemService from "../services/item.service"
import calculationHelper from "../utils/calculationHelper"
const{calculatePrice}=calculationHelper
const{getItemById}=ItemService



export default class FarmExpenseController{
    //create Farm expense

    static async storeFarmExpense(req,res,next){
       try{
        const id = req.params.id;
        const item= await getItemById(formData.itemId)
        const itemData=item.dataValues
        console.log("check item",item.dataValues.categoryId)
        formData.item_name=itemData.name;
        formData.amount=itemData.price
        const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
        formData.total=formula
        formData.createdBy=req.user.id
        console.log("checking formDataaa",formData)
        const data = await updateAnimalExpenseById(formData)
        return res.status(200).json({message:"store farm expense",data}) 

        }
        catch(e){
            return next(new Error(e))
        }

    }
    // Edit Farm Expense
    static async updateFarmExpense(req,res,next){
        try{
            return res.status(200).json({message:"update farm expense"})   

        }
        catch(e){
            return next(new Error(e))
        }

    }
    //get one Farm Expense
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
     //get all Farm Expenses
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
    //delete Farm expense
    static async deleteFarmExpense(req,res,next){
        try{

            return res.status(200).json({message:"delete one farm expense"})
        }
        catch(e){
            return next(new Error(e))
        }

    }

}
