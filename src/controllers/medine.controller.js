import MedicineService from "../services/medicine.service"
const{createMedicine,getMedicineById,getAllMedicines,updateById,deleteById}=MedicineService

export default class MedicineController{
//save a medicine
static async storeMedicine(req,res,next){
try{
    const formData = req.body;
    const data = createMedicine(formData)
    console.log("check data",data)
    res.status(200).json({message:"Medicine created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a medicine by Id
static async getMedicine(req,res,next){
    try{
        const id=req.params.id
        const data = await getMedicineById(id)
        res.status(200).json({message:"get medicine by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all medicine
static async getMedicines(req,res,next){
    try{
        const data = await getAllMedicines()
        res.status(200).json({message:"All Medicines",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update a medicine
static async updateMedicine(req,res,next){
    try{
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateById(formData,id)
        res.status(200).json({message:"update a medicine!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete a medicine

static async deleteMedicine(req,res,next){
    try{
        const id=req.params.id
        const data = await deleteById(id)
        res.status(200).json({message:"medicine deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}