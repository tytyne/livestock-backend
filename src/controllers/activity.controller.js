import TransactionService from "../services/transaction.service"
const{getTransactionById,getAllTransactions,updateTransactionById,deleteTransactionById,getAllTransactionsByAnimal}=TransactionService

export default class ActivityController{

//get a Transaction by Id
static async getTransaction(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await getTransactionById(id)
        res.status(200).json({message:"get Activity by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Transaction
static async getTransactions(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const data = await getAllTransactionsByAnimal(resource_id)
        res.status(200).json({message:"All Activities",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Transaction
static async updateTransaction(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateTransactionById(formData,id)
        res.status(200).json({message:"update an activity!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Transaction

static async deleteTransaction(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await deleteTransactionById(id)
        res.status(200).json({message:" activity deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}