import AnimalExpenseService from "../services/animalExpense.service"
const{createAnimalExpense,getAllAnimalExpenses,deleteByIdAnimalExpense,updateAnimalExpenseById,getAnimalExpenseById}=AnimalExpenseService
import ItemService from "../services/item.service"
import calculationHelper from "../utils/calculationHelper"
const{calculatePrice}=calculationHelper
const{getItemById}=ItemService
import moment from "moment"


export default class AnimalExpenseController{

    //create animal expense
    static async storeAnimalExpense(req,res,next){
       try{
            const formData=req.body
            console.log("check formData",formData)
            const item= await getItemById(formData.itemId)
            const itemData=item.dataValues
            console.log("check item",item.dataValues.categoryId)
            formData.item_name=itemData.name;
            formData.amount=itemData.price
            const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
            formData.total=formula
            formData.createdBy=req.user.id
            console.log("checking formDataaa",formData)
            const data = await createAnimalExpense(formData)
            return res.status(200).json({message:"store animal expense",data}) 

        }
        catch(e){
            return next(new Error(e))
        }

    }
    // Edit animal expense
    static async updateAnimalExpense(req,res,next){
        try{
            const id = req.params.id;
            const formData=req.body
            const item= await getItemById(formData.itemId)
            const itemData=item.dataValues
            console.log("check item",item.dataValues.categoryId)
            formData.item_name=itemData.name;
            formData.amount=itemData.price
            const formula= await calculatePrice(itemData.price,formData.quantity,itemData.unit);
            formData.total=formula
            formData.createdBy=req.user.id
            console.log("checking formDataaa",formData)
            const data = await updateAnimalExpenseById(id,formData)
            return res.status(200).json({message:"update animal expense",data})   

        }
        catch(e){
            return next(new Error(e))
        }

    }
    //get one animal expense
    static async getAnimalExpense(req,res,next){
        try{

            const id = req.params.id;
            const data = await getAnimalExpenseById(id);
            return res.status(200).json({message:"get one animal expense",data})

        }
        catch(e){
            return next(new Error(e))
        }

    }
     //get all animal expenses
     static async getAnimalExpenses(req,res,next){
        try {
            const data = await getAllAnimalExpenses(req.user.id);
            console.log("check expenses",data)
            res.status(200).json({ message: "Animal expenses", data });
          } catch (e) {
            return next(new Error(e));
          }
        

    }
    //delete animal expense
    static async deleteAnimalExpense(req,res,next){
        try {
            const id = req.params.id;
            const data = await deleteByIdAnimalExpense(id);
            res.status(200).json({ message: "delete a animal",data});
          } catch (e) {
            return next(new Error(e));
          }

    }



}
