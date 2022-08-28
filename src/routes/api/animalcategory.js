import express from "express"
import animalCategoryController from "../../controllers/animalCategory.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()


router.get("/:id",animalCategoryController.getAnimalCategory)
router.get("/check/all",animalCategoryController.getAnimalCategories)


export default router