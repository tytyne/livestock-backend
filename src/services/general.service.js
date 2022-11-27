import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{TreatmentMethod,TreatmentType,ListExpense} = models;


/**
 * @description This model deals with  four models
 */

class generalService{
   
    static async getTreatmentMethodById(id){
        let data = await TreatmentMethod.findOne({where:{id:id}})
        return data

    }
    static async getAllTreatmentMethods(){
        let data = await TreatmentMethod.findAll()
       
        return data

    }
    static async getTreatmentTypeById(id){
        let data = await TreatmentType.findOne({where:{id:id}})
        return data

    }
    static async getAllTreatmentTypes(){
        let data = await TreatmentType.findAll()
       
        return data

    }
    //expenses
    static async getExpenseById(id){
        let data = await ListExpense.findOne({where:{id:id}})
        return data

    }
    static async getAllExpenses(typo){
        let data = await ListExpense.findAll({where:{type:typo}})
       
        return data

    }

    //income
    // static async getIncomeById(id){
    //     let data = await ListIncome.findOne({where:{id:id}})
    //     return data

    // }
    // static async getAllIncomes(){
    //     let data = await ListIncome.findAll()
    //     return data

    // }
   


}
export default generalService