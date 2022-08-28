import express from "express"
import purposeListController from "../../controllers/purposeList.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()


router.get("/:id",purposeListController.getpurposeList)
router.get("/check/all",purposeListController.getpurposeLists)


export default router