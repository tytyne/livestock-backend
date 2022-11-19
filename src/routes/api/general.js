import express from "express"
import generalController from "../../controllers/general.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()


router.get("/type/:id",generalController.getTreatmentType)
router.get("/type/all",generalController.getTreatmentTypes)
router.get("/method/:id",generalController.getTreatmentMethod)
router.get("/method/all",generalController.getTreatmentMethods)

export default router