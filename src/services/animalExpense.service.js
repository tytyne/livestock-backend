import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{AnimalExpense} = models;


class AnimalExpenseService{
   
    static async createAnimalExpense(value){

        let expense= await AnimalExpense.create(value)
        return expense
    }

    static async updateAnimalExpenseById(id,value){

        let expense = await AnimalExpense.update(value,{where:{id:id}})
        return expense

    }

    static async getAnimalExpenseById(id){
        let expense = await AnimalExpense.findOne({where:{id:id}})
        return expense

    }

    static async getAllAnimalExpenses(userId){
        let expense = await AnimalExpense.findAll({where:{createdBy:userId}})
        // let expense = await AnimalExpense.findAll()
        return expense
    }

    static async deleteByIdAnimalExpense(id){
        let expense = await AnimalExpense.destroy({where:{id:id}})
        return expense
    }
  


}

export default AnimalExpenseService