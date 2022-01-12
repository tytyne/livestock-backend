import express from "express";
import User from "./users.js";
import Farmer from "./farmers"
import Animal  from "./animals"
import Medicine from "./medicine"
import Vetservice from "./vetservice"
import Feed from "./feed"


const router = express.Router();

router.use("/", User);
router.use("/farmer",Farmer)
router.use("/animal",Animal)
router.use("/medicine",Medicine)
router.use("/service",Vetservice)
router.use("/feed",Feed)

export default router;
