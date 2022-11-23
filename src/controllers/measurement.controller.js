import MeasurementService from "../services/measurement.service"
const{createMeasurement,getMeasurementById,getAllMeasurements,updateMeasurementById,deleteMeasurementById}=MeasurementService

export default class MeasurementController{
//save Measurement
static async storeMeasurement(req,res,next){
try{
    const formData = req.body;
    const {animal_id}= req.params
    formData.createdBy = req.user.id;
    if(animal_id){
      formData.animalId=animal_id
    }
   
    const data = await createMeasurement(formData)
    res.status(200).json({message:"Measurement created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a Measurement by Id
static async getMeasurement(req,res,next){
    try{
        const {animal_id}= req.params
        const id=req.params.id
        const data = await getMeasurementById(id)
        res.status(200).json({message:"get Measurement by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Measurement
static async getMeasurements(req,res,next){
    try{
        const {animal_id}= req.params
        const data = await getAllMeasurements(animal_id)
        res.status(200).json({message:"All Measurements",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Measurement
static async updateMeasurement(req,res,next){
    try{
        const {animal_id}= req.params
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateMeasurementById(formData,id)
        res.status(200).json({message:"update a Measurement!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Measurement

static async deleteMeasurement(req,res,next){
    try{
        const {animal_id}= req.params
        const id=req.params.id
        const data = await deleteMeasurementById(id)
        res.status(200).json({message:"Measurement deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}