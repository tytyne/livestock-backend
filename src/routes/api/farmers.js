import express from "express"
import farmerController from "../../controllers/farmer.controller"
import checkAuthorisation from "../../middlewares/authentication"
import FarmerValidation from "../../validation/farmer.validation"
import {checkNidExist} from "../../middlewares/auth"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkFarmerOwner}=checkOwnership

const router = express.Router()

// router.post("/create",checkAuthorisation,FarmerValidation.save,checkNidExist,farmerController.storeFarmer)

router.post("/create",checkAuthorisation,farmerController.storeFarmer)
router.get("/:id",checkAuthorisation,checkFarmerOwner,farmerController.getFarmer)
router.get("/check/all",checkAuthorisation,farmerController.getFarmers)
router.put("/:id",checkAuthorisation,checkFarmerOwner,farmerController.updateFarmer)
router.delete("/:id",checkAuthorisation,checkFarmerOwner,farmerController.deleteFarmer)
router.get("/count/all",checkAuthorisation,farmerController.countingFarmers)

export default router