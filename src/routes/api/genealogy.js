import express from "express"
import feedingController from "../../controllers/genealogy.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:resource_name/:resource_id/create",checkAuthorisation,feedingController.storeFeeding)
router.get("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,feedingController.getFeeding)
router.get("/:resource_name/:resource_id/check/all",checkAuthorisation,feedingController.getFeedings)
router.put("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,feedingController.updateFeeding)
router.delete("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,feedingController.deleteFeeding)

export default router