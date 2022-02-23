import express from "express"
import serviceController from "../../controllers/service.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/create",checkAuthorisation,serviceController.storeService)
router.get("/:id",checkAuthorisation,serviceController.getService)
router.get("/check/all",checkAuthorisation,serviceController.getServices)
router.put("/:id",checkAuthorisation,serviceController.updateService)
router.delete("/:id",checkAuthorisation,serviceController.deleteService)

export default router