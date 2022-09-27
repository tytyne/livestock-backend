import express from "express"
import animalCategoryController from "../../controllers/animalCategory.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/create",animalCategoryController.storeAnimalCategory)
router.get("/:id",animalCategoryController.getAnimalCategory)
router.get("/check/all",animalCategoryController.getAnimalCategories)
router.put("/:id",animalCategoryController.updateCategoryAnimalCategory)
router.delete("/:id",animalCategoryController.deleteCategoryAnimalCategory)


export default router