import express from "express"
import groupAnimalController from "../../controllers/groupAnimalController"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/create",checkAuthorisation,groupAnimalController.storeGroupAnimal)
router.get("/:id",checkAuthorisation,groupAnimalController.getGroupAnimalIdCheck)
router.get("/check/all",checkAuthorisation,groupAnimalController.getGroupAnimals)
router.put("/:id",checkAuthorisation,checkAnimalOwner,groupAnimalController.updateGroupAnimal)
router.delete("/:id",checkAuthorisation,checkAnimalOwner,groupAnimalController.deleteGroupAnimal)
router.put("/:id/:add_animal",checkAuthorisation,groupAnimalController.EditGroupAnimal)

export default router