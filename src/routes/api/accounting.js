import express from "express"
import accountingController from "../../controllers/accounting.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/:farmId/:ressource_name/:ressource_id/create",checkAuthorisation,accountingController.storeTransaction)
router.get("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,accountingController.getTransaction)
router.get("/:farmId/:resource_name/:resource_id/check/all",checkAuthorisation,accountingController.getTransactions)
router.put("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,accountingController.updateTransaction)
router.delete("/:farmId/:resource_name/:resource_id/:id",checkAuthorisation,checkAnimalOwner,accountingController.deleteTransaction)
router.get("/:farmId/:resource_name/:resource_id/check/all/range",checkAuthorisation,accountingController.RangeTransactions)

export default router