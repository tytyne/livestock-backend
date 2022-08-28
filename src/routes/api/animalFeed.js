import express from "express"
import animalFeedController from "../../controllers/animalFeed.controller"
import checkAuthorisation from "../../middlewares/authentication"
import AnimalValidation from "../../validation/animal.validation"
import checkOwnership from "../../middlewares/chekOwnership"
const {checkAnimalOwner}=checkOwnership
const router = express.Router()

router.post("/create",checkAuthorisation,animalFeedController.storeAnimalFeed)
router.get("/:id",checkAuthorisation,checkAnimalOwner,animalFeedController.getAnimalFeed)
router.get("/check/all",checkAuthorisation,animalFeedController.getAnimalFeeds)
router.put("/:id",checkAuthorisation,checkAnimalOwner,animalFeedController.updateAnimalFeed)
router.delete("/:id",checkAuthorisation,checkAnimalOwner,animalFeedController.deleteAnimalFeed)

export default router