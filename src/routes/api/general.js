import express from "express"
import generalController from "../../controllers/general.controller"
import checkAuthorisation from "../../middlewares/authentication"
const router = express.Router()


router.get("/type/:id",generalController.getTreatmentType)
router.get("/type/check/all",generalController.getTreatmentTypes)
router.get("/method/:id",generalController.getTreatmentMethod)
router.get("/method/check/all",generalController.getTreatmentMethods)

router.get("/expense/:id",generalController.getExpense)
router.get("/expense/check/all",generalController.getExpenses)

router.get("/income/:id",generalController.getIncome)
router.get("/income/check/all",generalController.getIncomes)

export default router