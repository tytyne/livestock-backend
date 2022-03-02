import express from "express"
import itemController from "../../controllers/item.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/create",checkAuthorisation,itemController.storeItem)
router.get("/:id",checkAuthorisation,itemController.getItem)
router.get("/check/all",checkAuthorisation,itemController.getItems)
router.put("/:id",checkAuthorisation,itemController.updateItem)
router.delete("/:id",checkAuthorisation,itemController.deleteItem)

export default router