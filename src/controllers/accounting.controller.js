import TransactionService from "../services/transaction.service"
const{createTransaction,getTransactionById,getAllTransactions,getAllTransactionsByAnimal,updateTransactionById,deleteTransactionById,getIncomeExpenseAnimalTotal,allRangeTransactionsCount}=TransactionService
import AnimalService from "../services/animal.service";
const{getAnimalById}=AnimalService
import  GroupAnimalService from "../services/groupAnimal.service"
const{getGroupAnimalById}=GroupAnimalService
const { v4: uuidv4 } = require('uuid');

export default class AccountingController{
//save Transaction
static async storeTransaction(req,res,next){
try{
    const{farmId}=req.params;
    const formData = req.body;
    formData.id = uuidv4()
    const {ressource_name,ressource_id}= req.params
    formData.createdBy = req.user.id;
    formData.farm_id=farmId;
    
    console.log("checking name",ressource_name)
    if(ressource_name!==null){

      if(ressource_name==='livestock_group'){
        const checking = await getGroupAnimalById(ressource_id)
        console.log("check farm_id",checking)
        formData.farm_id=checking.dataValues.farm_id
       
        formData.ref_Id= ressource_id
        formData.ref_type= ressource_name
      }
      else if(ressource_name==='animal'){
        const checking = await getAnimalById(ressource_id)
        console.log("check farm_id",checking)
        formData.farm_id=checking.dataValues.farm_id
        formData.ref_Id= ressource_id
        formData.ref_type= ressource_name
      }
      else{
        formData.farm_id=ressource_id
        
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
        const {resource_name,resource_id,farmId}= req.params
        // const id=req.params.id
        const data = await getTransactionById(resource_id)
        const result = await getIncomeExpenseAnimalTotal(resource_id)
        res.status(200).json({message:"get Transaction by Id",result})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Transaction
static async getTransactions(req,res,next){
    try{
        const {resource_name,resource_id,farmId}= req.params
  
        const data = await getAllTransactionsByAnimal(resource_id)
      
        const result = await getIncomeExpenseAnimalTotal(resource_id)
        
        
        let trial = {...result}
        trial['result2'] = trial['0'];
        delete trial['0'];
        let results = { data,...trial}
       
       return  res.status(200).json({message:"All Transactions",results})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Transaction
static async updateTransaction(req,res,next){
    try{
        const {resource_name,resource_id,farmId}= req.params
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
        const {resource_name,resource_id,farmId}= req.params
        const id=req.params.id
        const data = await deleteTransactionById(id)
        return res.status(200).json({message:"Transaction deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}


static async RangeTransactions(req,res,next){

    try{
        const {resource_name,resource_id,farmId}= req.params
        const data = await allRangeTransactionsCount()
        return res.status(200).json({message:"All Transactions",data})
    }
    catch (e) {
        return next(new Error(e));
      }

}
}