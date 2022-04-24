import express from "express";
import User from "./users.js";
import Farmer from "./farmers"
import Farm from "./farm"
import Animal  from "./animals"
import Item from "./items"
import Operation from "./operation"
import Admin from "./admin"
import Event from "./event"


const router = express.Router();

router.use("/", User);
router.use("/farmer",Farmer)
router.use("/farm",Farm)
router.use("/animal",Animal)
router.use("/event",Event)
router.use("/item",Item)
router.use("/operation",Operation)
router.use("/admin",Admin)

export default router;
