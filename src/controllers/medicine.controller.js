import MedicineService from "../services/medicine.service"
const{ getAllMedicines,getMedicineById}=MedicineService

export default class VaccinationController{


//get a medicine by Id

static async getMedicine(req,res,next){
    try{
        const id=req.params.id
        const data = await getMedicineById(id)
        res.status(200).json({message:"get medicine",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Medicines

static async getMedicines(req,res,next){
    try{
        const data = await getAllMedicines()
        res.status(200).json({message:"All Medicines",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

}