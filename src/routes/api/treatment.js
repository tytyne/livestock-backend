import express from "express"
import treatmentController from "../../controllers/treatment.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:resource_name/:resource_id/create",checkAuthorisation,treatmentController.storeTreatment)
router.get("/:resource_name/:resource_id/:id",checkAuthorisation,treatmentController.getTreatment)
router.get("/:resource_name/:resource_id/check/all",checkAuthorisation,treatmentController.getTreatments)
router.put("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,treatmentController.updateTreatment)
router.delete("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,treatmentController.deleteTreatment)

export default router