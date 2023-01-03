import express from "express"
import breedingController from "../../controllers/breeding.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:resource_name/:resource_id/create",checkAuthorisation,breedingController.storeBreeding)
router.get("/:resource_name/:resource_id/:id",checkAuthorisation,breedingController.getBreeding)
router.get("/:resource_name/:resource_id/check/all",checkAuthorisation,breedingController.getBreedings)
router.put("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,breedingController.updateBreeding)
router.delete("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,breedingController.deleteBreeding)

export default router