import express from "express"
import noteController from "../../controllers/note.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:farmId/:resource_name/:resource_id/create",checkAuthorisation,noteController.storeNote)
router.get("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,noteController.getNote)
router.get("/:farmId/:resource_name/:resource_id/check/all",checkAuthorisation,noteController.getNotes)
router.put("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,noteController.updateNote)
router.delete("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,noteController.deleteNote)

export default router