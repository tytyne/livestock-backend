import express from "express"
import farmController from "../../controllers/farm.controller"
import checkAuthorisation from "../../middlewares/authentication"
import FarmValidation from "../../validation/farm.validation"
import {checkNidExist} from "../../middlewares/auth"
import checkOwnership from "../../middlewares/chekOwnership"
const {scopedFarmsOwner,checkFarmOwner}=checkOwnership

const router = express.Router()

// router.post("/create",checkAuthorisation,FarmerValidation.save,checkNidExist,farmerController.storeFarmer)

router.post("/create",checkAuthorisation,farmController.storeFarm)
router.get("/:id",checkAuthorisation,checkFarmOwner,farmController.getFarm)
router.get("/check/all",checkAuthorisation,scopedFarmsOwner,farmController.getFarming)
router.put("/:id",checkAuthorisation,farmController.updateFarm)
router.delete("/:id",checkAuthorisation,farmController.deleteFarm)
router.get("/count/all",checkAuthorisation,farmController.countingFarms)
router.get("/",checkAuthorisation,farmController.searchingFarm)

export default router