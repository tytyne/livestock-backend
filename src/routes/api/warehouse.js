import express from "express"
import warehouseController from "../../controllers/warehouse.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/:farmId/create",checkAuthorisation,warehouseController.storeWarehouse)
router.get("/:farmId/:id",checkAuthorisation,warehouseController.getWarehouse)
router.get("/:farmId/check/all",checkAuthorisation,warehouseController.getWarehouses)
router.put("/:farmId/:id",checkAuthorisation,warehouseController.updateWarehouse)


export default router