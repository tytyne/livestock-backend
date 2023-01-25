import TransactionService from "../services/transaction.service"
const{createTransaction,getTransactionById,getAllTransactions,updateTransactionById,deleteTransactionById}=TransactionService
const { v4: uuidv4 } = require('uuid');

export default class TransactionController{
//save Transaction
static async storeTransaction(req,res,next){
try{
    const formData = req.body;
    formData.id = uuidv4()
    formData.createdBy = req.user.id;
    console.log("data",formData)
    const data = await createTransaction(formData)
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
        const data = await getAllTransactions()
        res.status(200).json({message:"All Transactions",data})
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
}