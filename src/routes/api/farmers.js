import express from "express"
import farmerController from "../../controllers/farmer.controler"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/create",checkAuthorisation,farmerController.storeFarmer)
router.get("/:id",checkAuthorisation,farmerController.getFarmer)
router.get("/all",checkAuthorisation,farmerController.getFarmers)
router.put("/:id",checkAuthorisation,farmerController.updateFarmer)
router.delete("/:id",checkAuthorisation,farmerController.deleteFarmer)

export default router