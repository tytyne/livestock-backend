import express from "express"
import measurementController from "../../controllers/measurement.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:animal_id/create",checkAuthorisation,measurementController.storeMeasurement)
router.get("/:animal_id/:id",checkAuthorisation,measurementController.getMeasurement)
router.get("/:animal_id/check/all",checkAuthorisation,measurementController.getMeasurements)
router.put("/:animal_id/:id",checkAuthorisation,measurementController.updateMeasurement)
router.delete("/:animal_id/:id",checkAuthorisation,measurementController.deleteMeasurement)

export default router