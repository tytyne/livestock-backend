import express from "express"
import EventController from "../../controllers/event.controller"
import EventValidation from "../../validation/event.validation"
import checkAuthorisation from "../../middlewares/authentication"
import checkOwnership from "../../middlewares/chekOwnership"
const{checkEventOwner}= checkOwnership

const router = express.Router()
router.post("/create",checkAuthorisation,EventValidation.save,EventController.storeEvent)
router.get("/check/all",checkAuthorisation,EventController.getEvents)
router.delete("/:id",checkAuthorisation,checkEventOwner,EventController.deleteEvent)
router.get("/:id",checkAuthorisation,checkEventOwner,EventController.getEvent)
router.put("/:id",checkAuthorisation,checkEventOwner,EventValidation.save,EventController.updateEvent)


export default router