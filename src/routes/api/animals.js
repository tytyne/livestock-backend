import express from "express"
import animalController from "../../controllers/animal.contoller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
const router = express.Router()

router.post("/create",AnimalValidation.save,checkAuthorisation,animalController.storeAnimal)
router.get("/:id",checkAuthorisation,animalController.getAnimal)
router.get("/earring",checkAuthorisation,animalController.getAnimalEaring)
router.get("/check/all",checkAuthorisation,animalController.getAnimals)
router.put("/:id",checkAuthorisation,animalController.updateAnimal)
router.delete("/:id",checkAuthorisation,animalController.deleteAnimal)

export default router