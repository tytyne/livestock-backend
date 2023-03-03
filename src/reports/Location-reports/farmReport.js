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
        const{id} =req.params
     
        const dataExpense = await getExpenseFarm(id);
        const dataIncome = await getIncomeFarm(id);
        const total =  await getIncomeExpenseFarmTotal(id);
            let trial = {...total}
            trial['pl-result'] = trial['0'];
            delete trial['0'];
            const pl = {dataExpense,dataIncome,...trial}
            return res.status(200).json({ message: "pl report!",pl});
      }
      catch(e){
        return next(new Error(e));
      }
    }

}