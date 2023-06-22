import express from "express"
import sickBayController from "../../controllers/sickBay.contoller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:farmId/:resource_name/:resource_id/create",checkAuthorisation,sickBayController.storeSickBay)
router.get("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,sickBayController.getSickBay)
router.get("/:farmId/:resource_name/:resource_id/check/all",checkAuthorisation,sickBayController.getSickBays)
router.put("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,sickBayController.updateSickBay)
router.delete("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,sickBayController.deleteSickBay)
router.get("/:farmId/",checkAuthorisation,sickBayController.searchingSickay)

export default router