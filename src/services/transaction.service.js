import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Transaction} = models;
const { Op,sequelize ,literal} = require("sequelize");

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
  
    static async getIncomeExpenseFarm(farm_id){
    
    let farm =Transaction.findAll({
      group: ['category',models.sequelize.fn('date_trunc', 'day',models.sequelize.col('createdAt'))],
      raw: true,
      attributes: [
          'category',

          [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'income'  THEN amount ELSE 0 END`)), 'income_amount'], 
          [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'expense'  THEN amount ELSE 0 END`)), 'expense_amount'] 

         
      ],   
      
  },{where:{farmId:farm_id}});

      return farm
    }

    static async getIncomeExpenseFarmTotal(farm_id){
    
      let farm =Transaction.findAll({
        group: [models.sequelize.fn('date_trunc', 'day',models.sequelize.col('createdAt'))],
        attributes: [
           
            [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'income'  THEN amount ELSE 0 END`)), 'income_amount'], 
            [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'expense'  THEN amount ELSE 0 END`)), 'expense_amount'],
            [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'income'  THEN amount ELSE 0 END - CASE WHEN type = 'expense'  THEN amount ELSE 0 END`)), 'profit_amount'],
            
            

           
        ],   
        
    },{where:{farmId:farm_id}});
  
        return farm
      }

   

    // This is assuming you have 2 different types of transaction like income money and expense money
// so it will retun two sums separately

static async getIncomeExpenseFarmy(options = {}) {
    try {
      const requests = await sequelize.query(
          `SELECT 
            COUNT(*) AS total_cnt,
            COALESCE(SUM("transaction_total") FILTER (WHERE "type" = 'income'),0) AS intotal,
            COALESCE(SUM("transaction_total") FILTER (WHERE "type" = 'expense'),0)  AS outtotal
        FROM "Accountings"
        
        WHERE ("createdAt"::date BETWEEN :date AND :todate);`, // Fetching by range is only at here at WHERE part
        {
          replacements:
          {
            date: options.date,
            date: options.todate,
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