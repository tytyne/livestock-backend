import FarmService from "../../services/farm.service";
const {
  getAllFarmReports,
  
} = FarmService;
import TransactionService from "../../services/transaction.service";
const{getIncomeExpenseFarm,getIncomeExpenseFarmTotal,getAllTransactionByFarm,getExpenseFarm,getIncomeFarm,TransactionsCategories}=TransactionService

export default class FarmReport {

    static async farmsReports(req,res,next){
        try {
            const data = await getAllFarmReports();
            
            res.status(200).json({ message: "All farms", data });
          } catch (e) {
            return next(new Error(e));
          }

    }

    static async farmTransactions(req,res,next){
      try {
        
          const{id} =req.params
          const data = await getAllTransactionByFarm(id);
          
          res.status(200).json({ message: "All Farm Transactions", data });
        } catch (e) {
          return next(new Error(e));
        }

  }


    static async IncomeExpenseReports(req,res,next){
      try{

      const{ressource_id} =req.params




      // const data = await getAllTransactionsByAnimal(resource_id)
      
      // const result = await getIncomeExpenseAnimalTotal(resource_id)
      
      
      // let trial = {...result}
      // trial['result2'] = trial['0'];
      // delete trial['0'];
      // let results = { data,...trial}
     
            const dataExpense = await getExpenseFarm(ressource_id);
            const dataIncome = await getIncomeFarm(ressource_id);
            // console.log("check data",data)
            const total =  await getIncomeExpenseFarmTotal(ressource_id);
            // const result ={...data,total}
            return res.status(200).json({ message: "All expenses!",dataExpense });
      }
      catch(e){
        return next(new Error(e));
      }

      



    }
}