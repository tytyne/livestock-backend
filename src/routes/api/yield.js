import express from "express"
import yieldController from "../../controllers/yield.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:resource_name/:resource_id/create",checkAuthorisation,yieldController.storeYield)
router.get("/:resource_name/:resource_id/:id",checkAuthorisation,yieldController.getYield)
router.get("/:resource_name/:resource_id/check/all",checkAuthorisation,yieldController.getYields)
router.put("/:resource_name/:resource_id/:id",checkAuthorisation,yieldController.updateYield)
router.delete("/:resource_name/:resource_id/:id",checkAuthorisation,yieldController.deleteYield)

export default router