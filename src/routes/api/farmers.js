import express from "express"
import farmerController from "../../controllers/farmer.controller"
import checkAuthorisation from "../../middlewares/authentication"
import FarmerValidation from "../../validation/farmer.validation"
import {checkNidExist} from "../../middlewares/auth"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkFarmerOwner}=checkOwnership

const router = express.Router()


router.post("/:farmId/create",checkAuthorisation,farmerController.storeFarmer)
router.get("/:farmId/:id",checkAuthorisation,farmerController.getFarmer)
router.get("/:farmId/check/all",checkAuthorisation,farmerController.getFarmers)
router.put("/:farmId/:id",checkAuthorisation,farmerController.updateFarmer)
router.delete("/:farmId/:id",checkAuthorisation,farmerController.deleteFarmer)
router.get("/:farmId/count/all",checkAuthorisation,farmerController.countingFarmers)
router.get("/:farmId/search/farmers/",checkAuthorisation,farmerController.searchingFarmer)

export default router