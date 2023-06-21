import express from "express"
import treatmentController from "../../controllers/treatment.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:farmId/:resource_name/:resource_id/create",checkAuthorisation,treatmentController.storeTreatment)
router.get("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,treatmentController.getTreatment)
router.get("/:farmId/:resource_name/:resource_id/check/all",checkAuthorisation,treatmentController.getTreatments)
router.put("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,treatmentController.updateTreatment)
router.delete("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,treatmentController.deleteTreatment)
router.get("/:farmId/",checkAuthorisation,treatmentController.searchingTreatments)

export default router