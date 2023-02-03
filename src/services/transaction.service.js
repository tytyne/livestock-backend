import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Transaction} = models;

/**
 * @description This model deals with Transaction model
 */

class TransactionService{
    static async createTransaction(value){
        let data = await Transaction.create(value)
        return data
    }
    static async getTransactionById(id){
        let data = await Transaction.findOne({where:{id:id}})
        return data

    }
   
    static async getAllTransactions(){
        let data = await Transaction.findAll()
        return data

    }
    
    static async getAllTransactionsByAnimal(animal_id){
        let data = await Transaction.findAll({where:{ref_Id:animal_id}})
        return data

    }
    static async getAllTransactionByAnimal(animal_id){
        let data = await Transaction.findAll({where:{ref_Id:animal_id}})
        return data

    }
    static async updateTransactionById(value,id){
        let data = await Transaction.update(value,{where:{id:id},returning: true,
            plain: true,})
        return data

    }

    static async deleteTransactionById(id){
        let data = await Transaction.destroy({where:{id:id}})
        return data
    }

    static async searchTransactions(sss){
        let data = await Transaction.findAll({ where: {description: sss } })
        return data
    }
  


    // This is assuming you have 2 different types of transaction like income money and expense money
// so it will retun two sums separately

async allRangeTransactionsCount(options = {}) {
    try {
      const requests = await sequelize.query(
          `SELECT 
            COUNT(*) AS total_cnt,
            COALESCE(SUM("transaction_total") FILTER (WHERE "type" = 'income'),0) AS intotal,
            COALESCE(SUM("transaction_total") FILTER (WHERE "type" = 'expense'),0)  AS outtotal
        FROM "Accountings"
        
        WHERE ("createdAt"::date BETWEEN :fromdate AND :todate);`, // Fetching by range is only at here at WHERE part
        {
          replacements:
          {
            fromdate: options.fromdate,
            todate: options.todate,
            // user_id: options.user_id,
            // product_id: options.product_id
          }
        }
      );
      return requests;
    } catch (error) {
      throw new Error(error);
    }
  }

}
export default TransactionService