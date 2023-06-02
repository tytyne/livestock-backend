import express from "express"
import activityController from "../../controllers/activity.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:resource_name/:resource_id/create",checkAuthorisation,activityController.storeActivity)
router.get("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,activityController.getActivity)
router.get("/:resource_name/:resource_id/check/all",checkAuthorisation,activityController.getActivities)
// router.put("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,activityController.updateTransaction)
// router.delete("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,activityController.deleteTransaction)

export default router