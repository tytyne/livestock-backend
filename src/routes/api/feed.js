import express from "express"
import feedController from "../../controllers/feed.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/create",checkAuthorisation,feedController.storeFeed)
router.get("/:id",checkAuthorisation,feedController.getFeed)
router.get("/all",checkAuthorisation,feedController.getFeeds)
router.put("/:id",checkAuthorisation,feedController.updateFeed)
router.delete("/:id",checkAuthorisation,feedController.deleteFeed)

export default router