import TransactionService from "../services/transaction.service"
const{createTransaction,getTransactionById,getAllTransactions,updateTransactionById,deleteTransactionById}=TransactionService

export default class AccountingController{
//save Transaction
static async storeTransaction(req,res,next){
try{
    const formData = req.body;
    const {resource_name,resource_id}= req.params
    formData.createdBy = req.user.id;
    if(resource_name!==null){
      formData.ref_Id= resource_id
      formData.ref_type= resource_name
    }
    if (formData.type=="expense"){
        formData.amount= `-`.concat(formData.amount);
    }
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
        const {resource_name,resource_id}= req.params
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
        const {resource_name,resource_id}= req.params
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
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await deleteTransactionById(id)
        res.status(200).json({message:"Transaction deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}