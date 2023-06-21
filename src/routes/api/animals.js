import express from "express"
import animalController from "../../controllers/animal.contoller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:farmId/create",checkAuthorisation,animalController.storeAnimal)
router.get("/:farmId/:id",checkAuthorisation,animalController.getAnimal)
router.get("/:farmId/earring",checkAuthorisation,checkAnimalOwner,animalController.getAnimalEaring)
router.get("/:farmId/check/all",checkAuthorisation,animalController.getAnimals)
// router.put("/:id",checkAuthorisation,checkAnimalOwner,animalController.updateAnimal)
router.delete("/:farmId/:id",checkAuthorisation,checkAnimalOwner,animalController.deleteAnimal)
router.get("/:farmId/count/all",checkAuthorisation,animalController.countingAnimals)
router.get("/:farmId/",checkAuthorisation,animalController.searchingAnimal)
router.put("/:farmId/:id/:add_group",checkAuthorisation,animalController.EditGroupAnimal)
router.post("/:farmId/new",checkAuthorisation,animalController.addingParenting)
router.get("/:farmId/:id/ancestory",checkAuthorisation,animalController.getAnceStory)
router.get("/:farmId/:id/offstring",checkAuthorisation,animalController.getOffstring)
router.get("/:farmId/females/all",animalController.femaleAnimals)
router.get("/:farmId/males/all",animalController.maleAnimals)
router.get("/:farmId/search/animals/",checkAuthorisation,animalController.searchingForAnimals)


export default router