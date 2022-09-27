import express from "express"
import feedController from "../../controllers/feed.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()


router.get("/:id",feedController.getFeedId)
router.get("/bycategory/:id",feedController.getFeedCategory)
router.get("/check/all",feedController.getFeedLists)


export default router