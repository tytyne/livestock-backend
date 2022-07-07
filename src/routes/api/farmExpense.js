import express from "express"
import farmExpenseController from "../../controllers/farmExpense.controller"
import checkAuthorisation from "../../middlewares/authentication"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/create",checkAuthorisation,farmExpenseController.storeFarmExpense)
router.get("/:id",checkAuthorisation,farmExpenseController.getFarmExpense)
router.get("/check/all",checkAuthorisation,farmExpenseController.getFarmExpenses)
router.put("/:id",checkAuthorisation,farmExpenseController.updateFarmExpense)
router.delete("/:id",checkAuthorisation,farmExpenseController.deleteFarmExpense)

export default router