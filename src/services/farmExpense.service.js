import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{FarmExpense} = models;

class FarmExpenseService{
   
    static async createFarmExpense(value){

        let expense= await FarmExpense.create(value)
        return expense
    }

    static async updateFarmExpenseById(id,value){

        let expense = await FarmExpense.update(value,{where:{id:id}})
        return expense

    }

    static async getFarmExpenseById(id){
        let expense = await FarmExpense.findOne({where:{id:id}})
        return expense

    }

    static async getAllFarmExpenses(userId){
        let expense = await FarmExpense.findAll({where:{createdBy:userId}})
        return expense
    }

    static async deleteByIdFarmExpense(id){
        let expense = await FarmExpense.destroy({where:{id:id}})
        return expense
    }
    


}
export default FarmExpenseService