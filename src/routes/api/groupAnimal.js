import express from "express"
import groupAnimalController from "../../controllers/groupAnimalController"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:farmId/create",checkAuthorisation,groupAnimalController.storeGroupAnimal)
router.get("/:farmId/:id",checkAuthorisation,groupAnimalController.getGroupAnimalIdCheck)
router.get("/:farmId/check/all",checkAuthorisation,groupAnimalController.getGroupAnimals)
router.put("/:farmId/:id",checkAuthorisation,checkAnimalOwner,groupAnimalController.updateGroupAnimal)
router.delete("/:farmId/:id",checkAuthorisation,checkAnimalOwner,groupAnimalController.deleteGroupAnimal)
// router.put("/:farmId/:add_animal/:id",checkAuthorisation,groupAnimalController.EditGroupAnimal)

export default router