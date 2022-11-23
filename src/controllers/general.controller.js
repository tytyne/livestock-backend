import generalService from "../services/general.service"
const{getAllTreatmentMethods,getAllTreatmentTypes,getTreatmentTypeById,getTreatmentMethodById,getAllExpenses,getExpenseById,getAllIncomes,getIncomeById}= generalService

export default class PurposeListController{


//get  by Id treatment Method
static async getTreatmentMethod(req,res,next){
    try{
        const id=req.params.id
        const data = await getTreatmentMethodById(id)
        res.status(200).json({message:"treatment Method by Id",data})
    }
    catch (e) {
        return next(new Error(e));
    }
}
//get all treatment methods
static async getTreatmentMethods(req,res,next){
    try{
        const data = await getAllTreatmentMethods()
        console.log("check treatment method",data)
        res.status(200).json({message:"All treatment Method",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

//get  by Id treatment type
static async getTreatmentType(req,res,next){
    try{
        const id=req.params.id
        const data = await getTreatmentTypeById(id)
        res.status(200).json({message:"treatment Type by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all treatment type
static async getTreatmentTypes(req,res,next){
    try{
        const data = await getAllTreatmentTypes()
        res.status(200).json({message:"All treatment Type",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

// expenses


//get  by Id expense
static async getExpense(req,res,next){
    try{
        const id=req.params.id
        const data = await getExpenseById(id)
        res.status(200).json({message:"expense category by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all expenses
static async getExpenses(req,res,next){
    try{
        const data = await getAllExpenses()
        res.status(200).json({message:"All expenses Type",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

//incomes

//get  by Id income category
static async getIncome(req,res,next){
    try{
        const id=req.params.id
        const data = await getIncomeById(id)
        res.status(200).json({message:"expense by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all income categories
static async getIncomes(req,res,next){
    try{
        const data = await getAllIncomes ()
        res.status(200).json({message:"All expenses",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

}