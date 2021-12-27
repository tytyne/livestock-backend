import express from "express"
import farmerController from "../../controllers/farmer.controler"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/farmer/create",checkAuthorisation,farmerController.storeFarmer)
router.get("/farmer",farmerController.getFarmer)
router.get("/all",farmerController.getFarmers)
router.put("/farmer",farmerController.updateFarmer)
router.delete("/oop",farmerController.deleteFarmer)

export default router