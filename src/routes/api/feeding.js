import express from "express"
import feedingController from "../../controllers/Feeding.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:farmId/:resource_name/:resource_id/create",checkAuthorisation,feedingController.storeFeeding)
router.get("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,feedingController.getFeeding)
router.get("/:farmId/:resource_name/:resource_id/check/all",checkAuthorisation,feedingController.getFeedings)
router.put("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,feedingController.updateFeeding)
router.delete("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,feedingController.deleteFeeding)

export default router