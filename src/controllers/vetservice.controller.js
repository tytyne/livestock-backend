import VetService from "../services/vetservice.service"
const{createVetService,getAllVetServices,getVetServiceById,updateVetServiceById,deleteVetServiceById}=VetService

export default class VetserviceController{
//save a Service
static async storeVetService(req,res,next){
try{
    const formData = req.body;
    const data = await createVetService(formData)
    console.log("check data",data)
    res.status(200).json({message:"Service created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a Service by Id
static async getVetService(req,res,next){
    try{
        const id=req.params.id
        const data = await getVetServiceById(id)
        res.status(200).json({message:"get Service by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all service
static async getVetServices(req,res,next){
    try{
        const data = await getAllVetServices()
        res.status(200).json({message:"All Services",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update a service
static async updateVetService(req,res,next){
    try{
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateVetServiceById(formData,id)
        res.status(200).json({message:"update a Service!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete a service

static async deleteVetService(req,res,next){
    try{
        const id=req.params.id
        const data = await deleteVetServiceById(id)
        res.status(200).json({message:"Service deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}