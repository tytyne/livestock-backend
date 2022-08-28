import express from "express"
import vaccinationController from "../../controllers/vaccination.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()


router.get("/:id",vaccinationController.getVaccination)
router.get("/check/all",vaccinationController.getVaccinations)


export default router