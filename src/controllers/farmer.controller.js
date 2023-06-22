import FarmerService from "../services/farmer.service"
const{createFarmer,getFarmerById,getAllFarmers,updateById,deleteById,countFarmers,searchFarmer}=FarmerService
const { v4: uuidv4 } = require('uuid');

export default class FarmerController{
//save a farmer
static async storeFarmer(req,res,next){
try{
    const {id,farmId}=req.params
    const formData = req.body;
    formData.id = uuidv4()
    formData.farm_id= farmId;
    formData.createdBy =req.user.id
    const data = await createFarmer(formData)
    res.status(200).json({message:"a farmer created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a farmer by Id
static async getFarmer(req,res,next){
    try{
        const {id,farmId}=req.params
        const data = await getFarmerById(id)
        return res.status(200).json({message:"get farmer by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all farmers
static async getFarmers(req,res,next){
    try{
        const {id,farmId}=req.params
        const data = await getAllFarmers(farmId)
        res.status(200).json({message:"All farmers",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update a farmer
static async updateFarmer(req,res,next){
    try{
        const {id,farmId}=req.params
        const formData = req.body
        const data = await updateById(formData,id)
        return res.status(200).json({message:"update a farmer!!",data})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete a farmer

static async deleteFarmer(req,res,next){
    try{
        const {id,farmId}=req.params
        const data = await deleteById(id)
        res.status(200).json({message:"delete a farmer"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
static async countingFarmers(req,res,next){
    try{
        const {farmId}=req.params
        const data = await countFarmers(farmId)
        res.status(200).json({message:"number of farmers",data})
    }
    catch(e){
        return next(new Error(e));
    }

}
static async searchingFarmer(req,res,next){

    try{
    const {farmId}=req.params
      const {name} = req.query;
      const data = await searchFarmer(name,farmId);
      return res.status(200).json({ message: "searched farmers",data});
    }
    catch(e){
      return next(new Error(e));
    }
}
}