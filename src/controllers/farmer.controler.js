import FarmerService from "../services/farmer.service"
const{createFarmer,getFarmerById,getAllFarmers,updateById,deleteById}=FarmerService

export default class FarmerController{
//save a farmer
static async storeFarmer(req,res,next){
try{
    const formData = req.body;
    formData.createdBy =req.user.id
    console.log("check formdata",formData)
    const data = await createFarmer(formData)
    console.log("check data",data)
    res.status(200).json({message:"a farmer created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a farmer by Id
static async getFarmer(req,res,next){
    try{
        const id=req.params.id
        const data = await getFarmerById(id,req.user.id)
        res.status(200).json({message:"get farmer by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all farmers
static async getFarmers(req,res,next){
    try{
        const data = await getAllFarmers(req.user.id)
        res.status(200).json({message:"All farmers",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update a farmer
static async updateFarmer(req,res,next){
    try{
        const id=req.params.id
        const formData = req.body
        const data = await updateById(formData,id,req.user.id)
        res.status(200).json({message:"update a farmer!!",data})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete a farmer

static async deleteFarmer(req,res,next){
    try{
        const id=req.params.id
        const data = await deleteById(id,req.user.id)
        res.status(200).json({message:"delete a farmer"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}