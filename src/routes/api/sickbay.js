import express from "express"
import sickBayController from "../../controllers/sickBay.contoller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:resource_name/:resource_id/create",checkAuthorisation,sickBayController.storeSickBay)
router.get("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,sickBayController.getSickBay)
router.get("/:resource_name/:resource_id/check/all",checkAuthorisation,sickBayController.getSickBays)
router.put("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,sickBayController.updateSickBay)
router.delete("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,sickBayController.deleteSickBay)

export default router