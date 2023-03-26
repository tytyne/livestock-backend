import express from "express"
import animalController from "../../controllers/animal.contoller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/create",checkAuthorisation,animalController.storeAnimal)
router.get("/:id",checkAuthorisation,animalController.getAnimal)
router.get("/earring",checkAuthorisation,checkAnimalOwner,animalController.getAnimalEaring)
router.get("/check/all",checkAuthorisation,animalController.getAnimals)
// router.put("/:id",checkAuthorisation,checkAnimalOwner,animalController.updateAnimal)
router.delete("/:id",checkAuthorisation,checkAnimalOwner,animalController.deleteAnimal)
router.get("/count/all",checkAuthorisation,animalController.countingAnimals)
router.get("/",checkAuthorisation,animalController.searchingAnimal)
router.put("/:id/:add_group",checkAuthorisation,animalController.EditGroupAnimal)
router.post("/new",checkAuthorisation,animalController.addingParenting)
router.get("/:id/ancestory",checkAuthorisation,animalController.getAnceStory)
router.get("/:id/offstring",checkAuthorisation,animalController.getOffstring)
router.get("/females/all",animalController.femaleAnimals)
router.get("/males/all",animalController.maleAnimals)

export default router