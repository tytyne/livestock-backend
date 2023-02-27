import FarmService from "../../services/farm.service";
const {
  getAllFarmReports,
  
} = FarmService;
import TransactionService from "../../services/transaction.service";
const{getIncomeExpenseFarm,getIncomeExpenseFarmTotal}=TransactionService

export default class FarmReport {

    static async farmsReports(req,res,next){
        try {
            const data = await getAllFarmReports();
            
            res.status(200).json({ message: "All animals", data });
          } catch (e) {
            return next(new Error(e));
          }

    }
    static async IncomeExpenseReports(req,res,next){
      try{

      const{ressource_id} =req.params

            const data = await getIncomeExpenseFarm(ressource_id);
            // console.log("check data",data)
            const total =  await getIncomeExpenseFarmTotal(ressource_id);
            const result ={...data,total}
            return res.status(200).json({ message: "All expenses!",total});
      }
      catch(e){
        return next(new Error(e));
      }

      



    }
}