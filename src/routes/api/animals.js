import express from "express"
import animalController from "../../controllers/animal.contoller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/create",checkAuthorisation,animalController.storeAnimal)
router.get("/:id",checkAuthorisation,animalController.getAnimal)
router.get("/all",checkAuthorisation,animalController.getAnimals)
router.put("/:id",checkAuthorisation,animalController.updateAnimal)
router.delete("/:id",checkAuthorisation,animalController.deleteAnimal)

export default router