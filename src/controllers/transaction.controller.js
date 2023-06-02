import TransactionService from "../services/transaction.service"
const{createTransaction,getTransactionById,updateTransactionById,deleteTransactionById,searchTransactions,getAllTransactionsByAnimal,getAllTransactionsByGroup_animal}=TransactionService
import ActivityService from "../services/activity.service";
const{createActivity}=ActivityService
const { v4: uuidv4 } = require('uuid');

export default class TransactionController{
//save Transaction
static async storeTransaction(req,res,next){
try{
    const {resource_name,resource_id}= req.params
    const formData = req.body;
    formData.id = uuidv4()
    formData.createdBy = req.user.id;
    console.log("data",formData)
    const data = await createTransaction(formData)
    await createActivity({
        id:uuidv4(),
        category: `${resource_name}`,
        description: `${formData.description}`,
        date: `${formData.date}`,
        ref_id:`${resource_id}`,
      })
    res.status(200).json({message:"Transaction created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a Transaction by Id
static async getTransaction(req,res,next){
    try{
        const id=req.params.id
        const data = await getTransactionById(id)
        res.status(200).json({message:"get Transaction by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Transaction
static async getTransactions(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        if(resource_name==="animal"){
            const data = await getAllTransactionsByAnimal(resource_id);
            return res.status(200).json({ message: "All Transactions", data });
          }
          else if(resource_name==="livestock_group"){
            const data = await getAllTransactionsByGroup_animal(resource_id);
            return res.status(200).json({ message: "All Transactions", data });
          }
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Transaction
static async updateTransaction(req,res,next){
    try{
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateTransactionById(formData,id)
        res.status(200).json({message:"update a Transaction!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Transaction

static async deleteTransaction(req,res,next){
    try{
        const id=req.params.id
        const data = await deleteTransactionById(id)
        res.status(200).json({message:"Transaction deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
static async searchingTransaction(req,res,next){

    try{
      const {name} = req.query;
      const data = await searchTransactions(name);
      return res.status(200).json({ message: "searched transactions",data});
    }
    catch(e){
      return next(new Error(e));
    }
}
}