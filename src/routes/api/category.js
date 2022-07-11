import express from "express"
import categoryController from "../../controllers/category.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()


router.get("/:id",categoryController.getcategory)
router.get("/check/all",categoryController.getcategories)


export default router