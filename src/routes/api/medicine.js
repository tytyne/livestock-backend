import express from "express"
import medicineController from "../../controllers/medicine.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()


router.get("/:id",medicineController.getMedicine)
router.get("/check/all",medicineController.getMedicines)


export default router