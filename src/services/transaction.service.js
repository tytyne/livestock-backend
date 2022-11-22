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
  

}
export default TransactionService