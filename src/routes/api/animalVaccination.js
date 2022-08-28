import express from "express"
import animalVaccinationController from "../../controllers/animalVaccination.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/create",checkAuthorisation,animalVaccinationController.storeAnimalVaccination)
router.get("/:id",checkAuthorisation,checkAnimalOwner,animalVaccinationController.getAnimalVaccination)
router.get("/check/all",checkAuthorisation,animalVaccinationController.getAnimalVaccinations)
router.put("/:id",checkAuthorisation,checkAnimalOwner,animalVaccinationController.updateAnimalVaccination)
router.delete("/:id",checkAuthorisation,checkAnimalOwner,animalVaccinationController.deleteAnimalVaccination)

export default router