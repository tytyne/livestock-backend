import express from "express"
import VetServiceController from "../../controllers/vetservice.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/create",checkAuthorisation,VetServiceController.storeVetService)
router.get("/:id",checkAuthorisation,VetServiceController.getVetService)
router.get("/check/all",checkAuthorisation,VetServiceController.getVetServices)
router.put("/:id",checkAuthorisation,VetServiceController.updateVetService)
router.delete("/:id",checkAuthorisation,VetServiceController.deleteVetService)

export default router