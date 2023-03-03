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
        const result = await getIncomeExpenseFarmTotal(id)
        let trial = {...result}
        trial['review'] = trial['0'];
        delete trial['0'];
        let results = { data,...trial}
       
       return  res.status(200).json({message:"All Transactions",results})
      
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
            trial['cashflow-result'] = trial['0'];
            delete trial['0'];
            const cashflow = {dataExpense,dataIncome,...trial}
            return res.status(200).json({ message: "casflow report!",cashflow});
      }
      catch(e){
        return next(new Error(e));
      }
    }

}