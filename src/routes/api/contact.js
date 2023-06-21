import express from "express"
import contactController from "../../controllers/contact.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/:farmId/",checkAuthorisation,contactController.storecontact)
router.get("/:farmId/:id",checkAuthorisation,contactController.getcontact)
router.get("/:farmId/check/all",checkAuthorisation,contactController.getContacts)


export default router