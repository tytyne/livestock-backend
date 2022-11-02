import express from "express"
import animalReport from "../../reports/Location-reports/animalReport"
import farmReport from "../../reports/Location-reports/farmReport"
import farmerReport from "../../reports/Location-reports/farmerReport"
import checkOwnership from "../../middlewares/chekOwnership"
import checkAuthorisation from "../../middlewares/authentication"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()



//reports 

router.get("/animal-farm-farmer",checkAuthorisation,animalReport.animalsReports)
router.get("/farmers-district",checkAuthorisation,farmerReport.farmersReports)
router.get("/farms-district",checkAuthorisation,farmReport.farmsReports)

export default router