import express from "express"
import InputController from "../../controllers/input.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/create",checkAuthorisation,InputController.storeInput)
router.get("/:id",checkAuthorisation,InputController.getInput)
router.get("/check/all",checkAuthorisation,InputController.getInputs)
router.put("/:id",checkAuthorisation,InputController.updateInput)
router.delete("/:id",checkAuthorisation,InputController.deleteInput)

export default router