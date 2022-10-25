import express from "express";
import User from "./users.js";
import Farmer from "./farmers"
import Farm from "./farm"
import Animal  from "./animals"
import Item from "./items"
import Admin from "./admin"
import Event from "./event"
import FarmExpense from "./farmExpense"
import AnimalExpense from "./animalExpense"
import Category from "./category"
import AnimalCategory from "./animalcategory"
import Vaccination from "./vaccination"
import PurposeList from "./purposelist"
import Sickbay from "./sickbay"
import AnimalFeed from "./animalFeed"
import GroupAnimal from "./groupAnimal"
import Medicine from "./medicine"
import Feed from "./feed"
import Vaccinating from "./vaccinating"


const router = express.Router();

router.use("/", User);
router.use("/farmer",Farmer)
router.use("/farm",Farm)
router.use("/animal",Animal)
router.use("/event",Event)
router.use("/item",Item)
router.use("/admin",Admin)
router.use("/farm-expense",FarmExpense)
router.use("/animal-expense",AnimalExpense)
router.use("/category",Category)
router.use("/animalcategory",AnimalCategory)
router.use("/vaccination",Vaccination)
router.use("/purposelist",PurposeList)
router.use("/sickbay",Sickbay)
router.use("/animalFeed",AnimalFeed)
router.use("/groupAnimal",GroupAnimal)
router.use("/medicine",Medicine)
router.use("/feed",Feed)
router.use("/vaccinating",Vaccinating)

export default router;
