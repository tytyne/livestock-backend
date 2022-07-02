import express from "express"
import farmController from "../../controllers/farm.controller"
import checkAuthorisation from "../../middlewares/authentication"
import FarmValidation from "../../validation/farm.validation"
import {checkNidExist} from "../../middlewares/auth"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkFarmOwner}=checkOwnership

const router = express.Router()

// router.post("/create",checkAuthorisation,FarmerValidation.save,checkNidExist,farmerController.storeFarmer)

router.post("/create",checkAuthorisation,farmController.storeFarm)
router.get("/:id",checkAuthorisation,checkFarmOwner,farmController.getFarm)
router.get("/check/all",checkAuthorisation,farmController.getFarming)
router.put("/:id",checkAuthorisation,checkFarmOwner,farmController.updateFarm)
router.delete("/:id",checkAuthorisation,checkFarmOwner,farmController.deleteFarm)
router.get("/count/all",checkAuthorisation,farmController.countingFarms)

export default router