import express from "express"
import medicineController from "../../controllers/medine.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/create",checkAuthorisation,medicineController.storeMedicine)
router.get("/:id",checkAuthorisation,medicineController.getMedicine)
router.get("/all",checkAuthorisation,medicineController.getMedicines)
router.put("/:id",checkAuthorisation,medicineController.updateMedicine)
router.delete("/:id",checkAuthorisation,medicineController.deleteMedicine)

export default router