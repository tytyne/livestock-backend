import express from "express"
import EventController from "../../controllers/event.controller"

const router = express.Router()
router.post("/create",EventController.storeEvent)
router.get("/check/all",EventController.getEvents)
router.delete("/delete",EventController.deleteEvent)
router.get("/titi/one",EventController.getEvent)
router.put("/titi/one",EventController.updateEvent)


export default router