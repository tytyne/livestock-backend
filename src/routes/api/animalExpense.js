import express from "express"
import animalExpenseController from "../../controllers/animalExpense.controller"
import checkAuthorisation from "../../middlewares/authentication"
// import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/create",checkAuthorisation,animalExpenseController.storeAnimalExpense)
router.get("/:id",checkAuthorisation,animalExpenseController.getAnimalExpense)
router.get("/check/all",checkAuthorisation,animalExpenseController.getAnimalExpenses)
router.put("/:id",checkAuthorisation,animalExpenseController.updateAnimalExpense)
router.delete("/:id",checkAuthorisation,animalExpenseController.deleteAnimalExpense)

export default router