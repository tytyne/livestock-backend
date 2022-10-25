import express from "express"
import vaccinatingController from "../../controllers/vaccinating.controller"
import checkAuthorisation from "../../middlewares/authentication"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/create",checkAuthorisation,vaccinatingController.storeVaccinating)
router.get("/:id",checkAuthorisation,vaccinatingController.getVaccinating)
// router.get("/check/all",checkAuthorisation,checkAnimalOwner,vaccinatingController.getVaccinatings)
router.get("/check/all",checkAuthorisation,vaccinatingController.getVaccinatings)
router.put("/:id",checkAuthorisation,vaccinatingController.updateVaccinating)
router.delete("/:id",checkAuthorisation,vaccinatingController.deleteVaccinating)

export default router