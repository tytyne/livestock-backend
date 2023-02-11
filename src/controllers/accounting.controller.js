import TransactionService from "../services/transaction.service"
const{createTransaction,getTransactionById,getAllTransactions,updateTransactionById,deleteTransactionById,allRangeTransactionsCount}=TransactionService
import AnimalService from "../services/animal.service";
const{getAnimalById}=AnimalService
import  GroupAnimalService from "../services/groupAnimal.service"
const{getGroupAnimalById}=GroupAnimalService
const { v4: uuidv4 } = require('uuid');

export default class AccountingController{
//save Transaction
static async storeTransaction(req,res,next){
try{
    const formData = req.body;
    formData.id = uuidv4()
    const {ressource_name,ressource_id}= req.params
    formData.createdBy = req.user.id;
    console.log("checking name",ressource_name)
    if(ressource_name!==null){

      if(ressource_name==='livestock_group'){
        const checking = await getGroupAnimalById(ressource_id)
        console.log("check farmId",checking)
        formData.farmId=checking.dataValues.farm_id
       
        formData.ref_Id= ressource_id
        formData.ref_type= ressource_name
      }
      else if(ressource_name==='animal'){
        const checking = await getAnimalById(ressource_id)
        console.log("check farmId",checking)
        formData.farmId=checking.dataValues.farm_id
        formData.ref_Id= ressource_id
        formData.ref_type= ressource_name
      }
      else{
        formData.farmId=ressource_id
        
      }
     

    }
    const data = await createTransaction(formData)
   return res.status(200).json({message:"Transaction created!",data})
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


static async RangeTransactions(req,res,next){

    try{
        const {resource_name,resource_id}= req.params
        const data = await allRangeTransactionsCount()
        res.status(200).json({message:"All Transactions",data})
    }
    catch (e) {
        return next(new Error(e));
      }

}
}