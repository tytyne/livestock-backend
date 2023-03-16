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
import Feeding from "./feeding"
import GroupAnimal from "./groupAnimal"
import Medicine from "./medicine"
import Feed from "./feed"
import Vaccinating from "./vaccinating"
import Report from "./reports"
import Treatment from "./treatment"
import General from "./general"
import Transaction from "./transaction"
import Accounting from "./accounting"
import Measurement from "./measurement"
import Activity from "./activities"
import Yield from "./yield"
import Note from "./note"
import Breeding from "./breeding"
import Contact from "./contact"


const router = express.Router();

router.use("/", User);
router.use("/farmer",Farmer)
router.use("/farm",Farm)
router.use("/animal",Animal)
router.use("/task",Event)
router.use("/item",Item)
router.use("/admin",Admin)
router.use("/farm-expense",FarmExpense)
router.use("/animal-expense",AnimalExpense)
router.use("/category",Category)
router.use("/animalcategory",AnimalCategory)
router.use("/vaccination",Vaccination)
router.use("/purposelist",PurposeList)
router.use("/sickbay",Sickbay)
router.use("/feeding",Feeding)
router.use("/livestock_groups",GroupAnimal)
router.use("/medicine",Medicine)
router.use("/feed",Feed)
router.use("/vaccinating",Vaccinating)
router.use("/reports",Report)
router.use("/treatment",Treatment)
router.use("/general",General)
router.use ("/transaction",Transaction)
router.use("/accounting",Accounting)
router.use("/measurement",Measurement)
router.use("/activities",Activity)
router.use("/yield",Yield)
router.use("/notes",Note)
router.use("/breeding",Breeding)

router.use("/contact",Contact)

export default router;
