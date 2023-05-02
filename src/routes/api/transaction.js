import express from "express"
import transactionController from "../../controllers/transaction.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:resource_name/:resource_id/create",checkAuthorisation,transactionController.storeTransaction)
router.get("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,transactionController.getTransaction)
router.get("/:resource_name/:resource_id/check/all",checkAuthorisation,transactionController.getTransactions)
router.put("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,transactionController.updateTransaction)
router.delete("/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,transactionController.deleteTransaction)
router.get("/",checkAuthorisation,transactionController.searchingTransaction)

export default router