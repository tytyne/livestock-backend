import express from "express"
import EventController from "../../controllers/event.controller"
import EventValidation from "../../validation/event.validation"
import checkAuthorisation from "../../middlewares/authentication"
import checkOwnership from "../../middlewares/chekOwnership"
const{checkEventOwner,scopedEventOwner}= checkOwnership


const router = express.Router()

router.post("/create",checkAuthorisation,EventController.storeEvent)
router.get("/:id",checkAuthorisation,checkEventOwner,EventController.getEvent)
router.get("/check/all",checkAuthorisation,scopedEventOwner,EventController.getMyEvents)
router.put("/:id",checkAuthorisation,EventValidation.save,EventController.updateEvent)
router.put("/:id/complete",checkAuthorisation,EventController.makingEventComplete)

export default router