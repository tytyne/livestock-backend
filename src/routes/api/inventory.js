import express from "express"
import inventoryController from "../../controllers/inventory.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/:farmId/create",checkAuthorisation,inventoryController.createInventory)
router.get("/:farmerId/:id",checkAuthorisation,inventoryController.getInventory)
router.get("/:farmId/check/all",checkAuthorisation,inventoryController.getInventories)
router.put("/:farmId/:id",checkAuthorisation,inventoryController.updateInventory)
router.post("/:farmId/:inventoryId/:action",checkAuthorisation,inventoryController.quantityInventory)
router.post("/:farmId/:search",checkAuthorisation,inventoryController.searchingInventory)
router.get("/:farmerId/:id/log",checkAuthorisation,inventoryController.inventoryLogsByInventory)

export default router