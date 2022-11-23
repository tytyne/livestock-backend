import express from "express"
import EventController from "../../controllers/event.controller"
import EventValidation from "../../validation/event.validation"
import checkAuthorisation from "../../middlewares/authentication"
import checkOwnership from "../../middlewares/chekOwnership"
const{checkEventOwner}= checkOwnership

const router = express.Router()
router.post("/:resource_name/:resource_id/create",checkAuthorisation,EventValidation.save,EventController.storeEventWithResource)
router.get("/:resource_name/:resource_id/check/all",checkAuthorisation,EventController.getEvents)
router.delete("/:resource_name/:resource_id/:id",checkAuthorisation,checkEventOwner,EventController.deleteEvent)
router.get("/:resource_name/:resource_id/:id",checkAuthorisation,EventController.getEvent)
router.put("/:resource_name/:resource_id/:id",checkAuthorisation,checkEventOwner,EventValidation.save,EventController.updateEvent)


export default router