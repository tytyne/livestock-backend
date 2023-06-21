import express from "express"
import InputController from "../../controllers/input.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/:farmId/create",checkAuthorisation,InputController.storeInput)
router.get("/:farmId/:id",checkAuthorisation,InputController.getInput)
router.get("/:farmId/check/all",checkAuthorisation,InputController.getInputs)
router.put("/:farmId/:id",checkAuthorisation,InputController.updateInput)
router.delete("/:farmId/:id",checkAuthorisation,InputController.deleteInput)

export default router