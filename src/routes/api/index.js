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

export default router;
