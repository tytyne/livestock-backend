import express from "express"
import farmerController from "../../controllers/farmer.controller"
import operationController from "../../controllers/operation.controller"
import checkAuthorisation from "../../middlewares/authentication"
import {checkNidExist} from "../../middlewares/auth"

const router = express.Router()



// router.post("/create",checkAuthorisatiofarmerController.storeFarmer)
// router.get("/:id",checkAuthorisation,farmerController.getFarmer)
// router.get("/check/all",checkAuthorisation,farmerController.getFarmers)
// router.put("/:id",checkAuthorisation,farmerController.updateFarmer)
// router.delete("/:id",checkAuthorisation,farmerController.deleteFarmer)
// router.get("/count/all",checkAuthorisation,farmerController.countingFarmers)
router.post("/create",checkAuthorisation,operationController.storeOperation)
router.get("/check/all",checkAuthorisation,operationController.getOperations)



export default router