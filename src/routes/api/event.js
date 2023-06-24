import express from "express"
import EventController from "../../controllers/event.controller"
import EventValidation from "../../validation/event.validation"
import checkAuthorisation from "../../middlewares/authentication"
import checkOwnership from "../../middlewares/chekOwnership"
const{checkEventOwner}= checkOwnership

const router = express.Router()
router.post("/:farmId/:resource_name/:resource_id/create",checkAuthorisation,EventValidation.save,EventController.storeEventWithResource)
router.post("/:farmIdz/create",checkAuthorisation,EventValidation.save,EventController.storeEvent)
router.get("/:farmId/:resource_name/:resource_id/check/all",checkAuthorisation,EventController.getEvents)
router.delete("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,EventController.deleteEvent)
router.get("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,EventController.getEvent)
router.put("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,EventValidation.save,EventController.updateEventWithResource)
router.put("/:farmId/:id",checkAuthorisation,EventValidation.save,EventController.updateEvent)
router.get("/:farmId/",checkAuthorisation,EventController.searchingEvent)
router.put("/:farmId/:resource_name/:resource_id/:id/complete",checkAuthorisation,EventController.makingEventComplete)
router.get("/:farmId/:resource_name/:resource_id",checkAuthorisation,EventController.GroupEventsWithRessource)

export default router