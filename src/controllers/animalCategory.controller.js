import AnimalCategoryService from "../services/animalcategory.service"
const{getAllAnimalCategory,getAnimalCategoryById}=AnimalCategoryService

export default class ItemController{


//get a animal category by Id
static async getAnimalCategory(req,res,next){
    try{
        const id=req.params.id
        const data = await getAnimalCategoryById(id)
        res.status(200).json({message:"get animal category by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all  animal categories
static async getAnimalCategories(req,res,next){
    try{
        const data = await getAllAnimalCategory()
        res.status(200).json({message:"All animal categories",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}

}