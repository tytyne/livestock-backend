import ServiceService from "../services/vetservice.service"
const{createService,getServiceById,getAllServices,updateById,deleteById}=ServiceService

export default class VetserviceController{
//save a Service
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

//get a Service by Id
static async getService(req,res,next){
    try{
        const id=req.params.id
        const data = await getServiceById(id)
        res.status(200).json({message:"get Service by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all service
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
        const dbResponse = await updateById(formData,id)
        res.status(200).json({message:"update a Service!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete a service

static async deleteService(req,res,next){
    try{
        const id=req.params.id
        const data = await deleteById(id)
        res.status(200).json({message:"Service deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}