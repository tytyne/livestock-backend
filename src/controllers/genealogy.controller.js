import AnimalService from "../services/animal.service"
const{updateAnimalMother,updateAnimalFather,createAnimal,getAnimalById,getAllanimals,updateById,deleteById}=AnimalService

const { v4: uuidv4 } = require('uuid');

export default class genealogyController{
//save genealogy
static async storegenealogy(req,res,next){
try{

  const {resource_name,resource_id}= req.params
    const formData = req.body;
    formData.id = uuidv4()
    const {gender}=req.query
    if(gender ==="Female"){
      const data = await createAnimal(formData)
      console.log("check dataaaaa",data)

      // return res.status(200).json({message:"animal created!",data})

    }
    else if(gender==="Male"){
      const data = await createAnimal(formData)
      console.log("check dataaaaa",data)
    //  return  res.status(200).json({message:"animal created!",data})
     
    }
    
  
}
catch (e) {
    return next(new Error(e));
  }
}

//get a genealogy by Id
static async getgenealogy(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await getAnimalById(id)
        res.status(200).json({message:"get genealogy by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all genealogy
static async getgenealogies(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const data = await getAllanimals(resource_id)
        res.status(200).json({message:"All genealogys",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
// update genealogy
static async updategenealogy(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const formData = req.body
        const dbResponse = await updateById(formData,id)
        res.status(200).json({message:"update a genealogy!!",dbResponse})
      
    }
    catch (e) {
        return next(new Error(e));
      }
}
//delete genealogy

static async deletegenealogy(req,res,next){
    try{
        const {resource_name,resource_id}= req.params
        const id=req.params.id
        const data = await deleteById(id)
        res.status(200).json({message:"genealogy deleted succesfully!"})
    }
    catch (e) {
        return next(new Error(e));
      }
}
}