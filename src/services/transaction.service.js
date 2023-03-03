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

    static async getAllTransactionsByGroup_animal(group_id){
      let data = await Transaction.findAll({where:{ref_Id:group_id}})
      return data

  }

    static async getAllTransactionByAnimal(animal_id){
        let data = await Transaction.findAll({where:{ref_Id:animal_id}})
        return data

    }

    static async getAllTransactionByFarm(farm_id){
      let data = await Transaction.findAll({where:{farmId:farm_id},
        attributes:['date','vendor','category','description','type','amount'],
      })
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
  
    static async getExpenseFarm(farm_id){
    
        let farm = await Transaction.findAll({ 
       where: {farmId:farm_id,type:'expense'},
       group: ['category','type'],
      
      attributes: ["category",'type',[models.sequelize.fn("SUM",models.sequelize.col("amount")),'amount',]],

       })
    return farm
  }



  static async getIncomeFarm(farm_id){
    let farm = await Transaction.findAll({ 
      where: {farmId:farm_id,type:'income'},
      group: ['category','type'],
     
     attributes: ["category",'type',[models.sequelize.fn("SUM",models.sequelize.col("amount")),'amount',]],

      })
    return farm
    }
    

  static async getIncomeExpenseFarmTotal(farm_id){
      let farm =Transaction.findAll({
        where:{farmId:farm_id},
        attributes: [
           
            [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'income'  THEN amount ELSE 0 END`)), 'income_amount'], 
            [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'expense'  THEN amount ELSE 0 END`)), 'expense_amount'],
            [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'income'  THEN amount ELSE 0 END - CASE WHEN type = 'expense'  THEN amount ELSE 0 END`)), 'profit_amount'],   
        ],   
  });
  
    return farm
  }

  static async getIncomeExpenseAnimalTotal(animal_id){
    
    let animal =Transaction.findAll({
      // group: [models.sequelize.fn('date_trunc', 'day',models.sequelize.col('createdAt'))],
      attributes: [
         
          [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'income'  THEN amount ELSE 0 END`)), 'income_amount'], 
          [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'expense'  THEN amount ELSE 0 END`)), 'expense_amount'],
          [models.sequelize.fn('SUM', models.sequelize.literal(`CASE WHEN type = 'income'  THEN amount ELSE 0 END - CASE WHEN type = 'expense'  THEN amount ELSE 0 END`)), 'profit_amount'],
          
          

         
      ],   
      
  },{where:{ref_Id:animal_id}});

      return animal
    }

   

    // This is assuming you have 2 different types of transaction like income money and expense money
// so it will retun two sums separately

  // Promise.all([getExpenseFarm, getIncomeFarm, getIncomeExpenseAnimalTotal])
  //   .then(responses => {
  //       console.log('**********COMPLETE RESULTS****************');
  //       console.log(responses[0]); // user profile
  //       console.log(responses[1]); // all reports
  //       console.log(responses[2]); // report details
  //   })
  //   .catch(err => {
  //       console.log('**********ERROR RESULT****************');
  //       console.log(err);
  //   });


static async allRangeTransactionsCount(options = {}) {
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

static async TransactionsCategories(){
    let data = await Transaction.findAll({ attributes: ["category",[models.sequelize.fn("SUM",models.sequelize.col("amount")),'amount',]],
    
group:["category"] , })
return data

}

}
export default TransactionService