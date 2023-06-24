import express from "express"
import peopleController from "../../controllers/people.controller"
import checkAuthorisation from "../../middlewares/authentication"
import { checkEmailExist,checkUsernameExist } from "../../middlewares/auth.js";
import checkOwnership from "../../middlewares/chekOwnership"
const router = express.Router()

router.post("/:farmId/create",checkAuthorisation,[checkEmailExist,checkUsernameExist],peopleController.signup)
router.get("/:farmId/check/all",checkAuthorisation,peopleController.getAllPeople)
router.get("/:farmId/:id",checkAuthorisation,peopleController.getOnePerson)
router.delete("/:farmId/:id",checkAuthorisation,peopleController.deletingOnePerson)
export default router