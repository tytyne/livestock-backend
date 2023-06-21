import express from "express"
import vaccinatingController from "../../controllers/vaccinating.controller"
import checkAuthorisation from "../../middlewares/authentication"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:farmId/:resource_name/:resource_id/create",checkAuthorisation,vaccinatingController.storeVaccinating)
router.get("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,vaccinatingController.getVaccinating)
// router.get("/check/all",checkAuthorisation,checkAnimalOwner,vaccinatingController.getVaccinatings)
router.get("/:farmId/:resource_name/:resource_id/check/all",checkAuthorisation,vaccinatingController.getVaccinatings)
router.put("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,vaccinatingController.updateVaccinating)
router.delete("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,vaccinatingController.deleteVaccinating)
router.get("/:farmId/",checkAuthorisation,vaccinatingController.searchingVaccinating)

export default router