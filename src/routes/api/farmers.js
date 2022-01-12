import express from "express"
import farmerController from "../../controllers/farmer.controler"
import checkAuthorisation from "../../middlewares/authentication"
import FarmerValidation from "../../validation/farmer.validation"

const router = express.Router()

router.post("/create",checkAuthorisation,FarmerValidation.save,farmerController.storeFarmer)
router.get("/:id",checkAuthorisation,farmerController.getFarmer)
router.get("/check/all",checkAuthorisation,farmerController.getFarmers)
router.put("/:id",checkAuthorisation,farmerController.updateFarmer)
router.delete("/:id",checkAuthorisation,farmerController.deleteFarmer)

export default router