import express from "express"
import EventController from "../../controllers/event.controller"
import EventValidation from "../../validation/event.validation"

const router = express.Router()
router.post("/create",EventValidation.save,EventController.storeEvent)
router.get("/check/all",EventController.getEvents)
router.delete("/:id",EventController.deleteEvent)
router.get("/:id",EventController.getEvent)
router.put("/:id",EventValidation.save,EventController.updateEvent)


export default router