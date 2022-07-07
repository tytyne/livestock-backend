import AnimalExpenseService from "../services/animalExpense.service"
const{createAnimalExpense}=AnimalExpenseService
import ItemService from "../services/item.service"
import calculationHelper from "../utils/calculationHelper"
const{calculatePrice}=calculationHelper
const{createItem,getItemById,getAllItems}=ItemService


export default class AnimalExpenseController{
    //create operation

    static async storeAnimalExpense(req,res,next){
    //    try{
            const formData=req.body
            console.log("check formData",formData)
            const item= await getItemById(formData.itemId)
            const itemData=item.dataValues
            console.log("check item",item.dataValues.categoryId)
            formData.item_name=itemData.name;
            formData.amount=itemData.price
            const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
            console.log("normal price",itemData.price)
            console.log("new quantity",formData.quantity)
            console.log("existing unit",itemData.unit)
            formData.total=formula
            formData.createdBy=req.user.id
            // console.log("checking formDataaa",formData)
            const data = await createAnimalExpense(formData)
            return res.status(200).json({message:"store animal expense"}) 

        // }
        // catch(e){
        //     return next(new Error(e))
        // }

    }
    // Edit Operation
    static async updateAnimalExpense(req,res,next){
        try{
            return res.status(200).json({message:"update animal expense"})   

        }
        catch(e){
            return next(new Error(e))
        }

    }
    //get one operation
    static async getAnimalExpense(req,res,next){
        try{

           
            return res.status(200).json({message:"get one animal expense"})

        }
        catch(e){
            return next(new Error(e))
        }

    }
     //get all operations
     static async getAnimalExpenses(req,res,next){
        try{
            
            return res.status(200).json({message:"all animal expense"})

        }
        catch(e){
            return next(new Error(e))
        }

    }
    //delete operation
    static async deleteAnimalExpense(req,res,next){
        try{

            return res.status(200).json({message:"delete one animal expense"})
        }
        catch(e){
            return next(new Error(e))
        }

    }

}
