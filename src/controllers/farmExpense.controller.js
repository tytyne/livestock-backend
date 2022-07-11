import FarmExpenseService from "../services/farmExpense.service"
const{createFarmExpense,getAllFarmExpenses,deleteByIdFarmExpense,updateFarmExpenseById,getFarmExpenseById}=FarmExpenseService
import ItemService from "../services/item.service"
import calculationHelper from "../utils/calculationHelper"
const{calculatePrice}=calculationHelper
const{getItemById}=ItemService



export default class FarmExpenseController{
    //create Farm expense

    static async storeFarmExpense(req,res,next){
       try{
        const formData=req.body
        formData.createdBy=req.user.id
        if(formData.categoryId===4){
            formData.item_name=formData.item_name;
            formData.quantity=formData.quantity
            formData.price=formData.price
            const data = await createFarmExpense(formData)
            return res.status(200).json({message:"store farm expense",data}) 
        }else{
            const item= await getItemById(formData.itemId)
            const itemData=item.dataValues
            
            formData.item_name=itemData.name;
            const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
            formData.price=formula
            
            const data = await createFarmExpense(formData)
            return res.status(200).json({message:"store farm expense",data}) 

        }
      

        }
        catch(e){
            return next(new Error(e))
        }

    }
    // Edit Farm Expense
    static async updateFarmExpense(req,res,next){
        try{
            const id = req.params.id;
            const formData=req.body
            formData.createdBy=req.user.id
            if(formData.categoryId===4){
                formData.item_name=formData.item_name;
                formData.quantity=formData.quantity
                formData.price=formData.price
                const data = await createFarmExpense(formData)
                return res.status(200).json({message:"store farm expense",data}) 
            }else{
                const item= await getItemById(formData.itemId)
                const itemData=item.dataValues
                formData.item_name=itemData.name;
                const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
                formData.price=formula
                const data = await updateFarmExpenseById(id,formData)
                return res.status(200).json({message:"store farm expense",data}) 
    
            }
        

        }
        catch(e){
            return next(new Error(e))
        }

    }
    //get one Farm Expense
    static async getFarmExpense(req,res,next){
        try{

            const id = req.params.id;
            const data = await getFarmExpenseById(id);
            return res.status(200).json({message:"get one farm expense",data})

        }
        catch(e){
            return next(new Error(e))
        }

    }
     //get all Farm Expenses
     static async getFarmExpenses(req,res,next){
        try{
            const data = await getAllFarmExpenses(req.user.id);
            res.status(200).json({ message: "Farm expenses", data });

        }
        catch(e){
            return next(new Error(e))
        }

    }
    //delete Farm expense
    static async deleteFarmExpense(req,res,next){
        try{
            const id = req.params.id;
            const data = await deleteByIdFarmExpense(id);
            res.status(200).json({ message: "delete a animal",data});
        }
        catch(e){
            return next(new Error(e))
        }

    }

}
