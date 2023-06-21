import express from "express"
import transactionController from "../../controllers/transaction.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:farmId/:resource_name/:resource_id/create",checkAuthorisation,transactionController.storeTransaction)
router.get("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,transactionController.getTransaction)
router.get("/:farmId/:resource_name/:resource_id/check/all",checkAuthorisation,transactionController.getTransactions)
router.put("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,transactionController.updateTransaction)
router.delete("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,transactionController.deleteTransaction)
router.get("/:farmId/",checkAuthorisation,transactionController.searchingTransaction)

export default router