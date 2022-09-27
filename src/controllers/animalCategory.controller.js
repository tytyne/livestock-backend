import AnimalCategoryService from "../services/animalcategory.service"
const { getAllAnimalCategory, getAnimalCategoryById ,updateAnimalCategoryId,deleteAnimalCategoryById,createAnimalCategory} = AnimalCategoryService

export default class ItemController {




    //save a category animal
  static async storeAnimalCategory(req, res, next) {
    try {
      const formData = req.body;
      const data = await createAnimalCategory(formData);
      res.status(200).json({ message: "a category animal created!", data });
    } catch (e) {
      return next(new Error(e));
    }
  }

    //get a animal category by Id
    static async getAnimalCategory(req, res, next) {
        try {
            const id = req.params.id
            const data = await getAnimalCategoryById(id)
            res.status(200).json({ message: "get animal category by Id", data })
        }
        catch (e) {
            return next(new Error(e));
        }
    }
    //get all  animal categories
    static async getAnimalCategories(req, res, next) {
        try {
            const data = await getAllAnimalCategory()
            res.status(200).json({ message: "All animal categories", data })
        }
        catch (e) {
            return next(new Error(e));
        }
    }



    static async updateCategoryAnimalCategory(req,res,next){
        try{
            const id=req.params.id
            const formData = req.body
            console.log("check formdata",formData)
            const data = await updateAnimalCategoryId(formData,id)
            console.log("check data",data)
            return res.status(200).json({message:"update a category animal!",data})
          
        }
        catch (e) {
          return next(new Error(e));
        }
      }


  static async deleteCategoryAnimalCategory(req, res, next) {
    try {
      const id = req.params.id;
      const data = await deleteAnimalCategoryById(id);
      res.status(200).json({ message: "delete a category animal" });
    } catch (e) {
      return next(new Error(e));
    }
  }


}