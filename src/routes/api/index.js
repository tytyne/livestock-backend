import express from "express";
import User from "./users.js";
import Farmer from "./farmers"
import Animal  from "./animals"
import Item from "./items"
import Operation from "./operation"

import Event from "./event"


const router = express.Router();

router.use("/", User);
router.use("/farmer",Farmer)
router.use("/animal",Animal)
router.use("/event",Event)
router.use("/item",Item)
router.use("/operation",Operation)

export default router;
