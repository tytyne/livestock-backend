import express from "express";
import User from "./users.js";
import Farmer from "./farmers"
import Animal  from "./animals"
import Medicine from "./medicine"
import Service from "./service"


const router = express.Router();

router.use("/vet", User);
router.use("/farmer",Farmer)
router.use("/animal",Animal)
router.use("/medicine",Medicine)
router.use("/service",Service)

export default router;
