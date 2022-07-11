import CategoryService from "../services/category.service"
const{getAllCategories,getCategoryById}=CategoryService

export default class ItemController{


//get a category by Id
static async getcategory(req,res,next){
    try{
        const id=req.params.id
        const data = await getCategoryById(id)
        res.status(200).json({message:"get category by Id",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}
//get all categories
static async getcategories(req,res,next){
    try{
        const data = await getAllCategories()
        res.status(200).json({message:"All categories",data})
    }
    catch (e) {
        return next(new Error(e));
      }
}


}