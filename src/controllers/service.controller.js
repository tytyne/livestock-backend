
import ServiceService from "../services/serviceService"

const{createService,getServiceById,getAllServices,deleteServiceById,updateServiceById}=ServiceService

export default class ServiceController{
//save a service
static async storeService(req,res,next){
try{
    const formData = req.body;
    const data = await createService(formData)
    console.log("check data",data)
    res.status(200).json({message:"Service created!",data})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a service by Id
static async getService(req,res,next){
    try{
        const id=req.params.id
        const data = await getServiceById(id)
        res.status(200).json({message:"get service by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all services
static async getServices(req,res,next){
    try{
        const data = await getAllServices()
        res.status(200).json({message:"All Services",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update a service
static async updateService(req,res,next){
    try{
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateServiceById(formData,id)
        res.status(200).json({message:"update a service!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete a service

static async deleteService(req,res,next){
    try{
        const id=req.params.id
        const data = await deleteServiceById(id)
        res.status(200).json({message:"service deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}