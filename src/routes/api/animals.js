import express from "express"
import animalController from "../../controllers/animal.contoller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/create",AnimalValidation.save,checkAuthorisation,animalController.storeAnimal)
router.get("/:id",checkAuthorisation,animalController.getAnimal)
router.get("/earring",checkAuthorisation,checkAnimalOwner,animalController.getAnimalEaring)
router.get("/check/all",checkAuthorisation,animalController.getAnimals)
router.put("/:id",checkAuthorisation,checkAnimalOwner,animalController.updateAnimal)
router.delete("/:id",checkAuthorisation,checkAnimalOwner,animalController.deleteAnimal)
router.get("/count/all",checkAuthorisation,animalController.countingAnimals)

export default router