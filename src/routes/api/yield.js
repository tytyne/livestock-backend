import express from "express"
import yieldController from "../../controllers/yield.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:animal_id/create",checkAuthorisation,yieldController.storeYield)
router.get("/:animal_id/:id",checkAuthorisation,yieldController.getYield)
router.get("/:animal_id/check/all",checkAuthorisation,yieldController.getYields)
router.put("/:animal_id/:id",checkAuthorisation,yieldController.updateYield)
router.delete("/:animal_id/:id",checkAuthorisation,yieldController.deleteYield)

export default router