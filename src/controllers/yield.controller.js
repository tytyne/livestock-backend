import YieldService from "../services/yield.service"
import AnimalService from "../services/animal.service";
const{createYield,getYieldById,getAllYields,updateYieldById,deleteYieldById}=YieldService
const {getAnimalById} = AnimalService

export default class YieldController{
//save Yield
static async storeYield(req,res,next){
try{
    const {animal_id}= req.params
    const formData = req.body;
    const animalDetails = await getAnimalById(animal_id)
    formData.animal_id = animal_id;
    const data = await createYield(formData)
    console.log("check data",data)
    res.status(200).json({message:"Yield created!"})
}
catch (e) {
    return next(new Error(e));
  }
}

//get a Yield by Id
static async getYield(req,res,next){
    try{
        const id=req.params.id
        const data = await getYieldById(id)
        res.status(200).json({message:"get Yield by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all Yield
static async getYields(req,res,next){
    try{
        const {animal_id}= req.params
        const data = await getAllYields(animal_id)
        res.status(200).json({message:"All Yields",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update Yield
static async updateYield(req,res,next){
    try{
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateYieldById(formData,id)
        res.status(200).json({message:"update a Yield!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete Yield

static async deleteYield(req,res,next){
    try{
        const id=req.params.id
        const data = await deleteYieldById(id)
        res.status(200).json({message:"Yield deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}