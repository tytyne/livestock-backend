import express from "express"
import animalReport from "../../reports/Location-reports/animalReport"
import farmReport from "../../reports/Location-reports/farmReport"
import farmerReport from "../../reports/Location-reports/farmerReport"
import checkOwnership from "../../middlewares/chekOwnership"
import checkAuthorisation from "../../middlewares/authentication"
import EventReport from "../../reports/shortcuts/eventReport"
import TreatmentReport from "../../reports/health-reports/treatmentReport"

const {checkAnimalOwner}=checkOwnership
const router = express.Router()



//reports 

router.get("/animal-farm-farmer",checkAuthorisation,animalReport.animalsReports)
router.get("/farmers-district",checkAuthorisation,farmerReport.farmersReports)
router.get("/farm-farmers",checkAuthorisation,farmReport.farmsReports)
router.get("/farm/:id/cash_flow",checkAuthorisation,farmReport.IncomeExpenseReports)
router.get("/farm/accounting/:id",checkAuthorisation,farmReport.farmTransactions)
router.get("/parent-animals",checkAuthorisation,farmReport.farmsReports)
router.get("/due-date",checkAuthorisation,EventReport.getDueDate)
// router.get("/:startTime/:endTime?",checkAuthorisation,TreatmentReport.getUpcommingTreatments)
router.get("/livestock/treatments",checkAuthorisation,TreatmentReport.holla)
router.get("/types",checkAuthorisation,TreatmentReport.getTreatmentsType)

export default router