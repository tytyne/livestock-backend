import express from "express"
import contactController from "../../controllers/contact.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()

router.post("/",checkAuthorisation,contactController.storecontact)
router.get("/:id",checkAuthorisation,contactController.getcontact)
router.get("/check/all",checkAuthorisation,contactController.getContacts)


export default router