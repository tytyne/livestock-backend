import express from "express"
import sickBayController from "../../controllers/sickBay.contoller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/create",checkAuthorisation,sickBayController.storeSickBay)
router.get("/:id",checkAuthorisation,checkAnimalOwner,sickBayController.getSickBay)
router.get("/check/all",checkAuthorisation,sickBayController.getSickBays)
router.put("/:id",checkAuthorisation,checkAnimalOwner,sickBayController.updateSickBay)
router.delete("/:id",checkAuthorisation,checkAnimalOwner,sickBayController.deleteSickBay)

export default router