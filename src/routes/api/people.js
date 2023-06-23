import express from "express"
import peopleController from "../../controllers/people.controller"
import checkAuthorisation from "../../middlewares/authentication"
import checkOwnership from "../../middlewares/chekOwnership"
const router = express.Router()

router.post("/:farmId/create",checkAuthorisation,peopleController.signup)
router.get("/:farmId/check/all",checkAuthorisation,peopleController.getAllPeople)
router.get("/:farmId/:id",checkAuthorisation,peopleController.getOnePerson)
export default router