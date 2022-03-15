import express from "express";
import User from "./users";
import Farmer from "./farmers";
import Animal from "./animals";
import Medicine from "./medicine";
import VetService from "./vetservice";
import Feed from "./feed";
import Service from "./service";
import Event from "./event";

const router = express.Router();

router.use("/", User);
router.use("/farmer", Farmer);
router.use("/animal", Animal);
router.use("/medicine", Medicine);
router.use("/vetservice", VetService);
router.use("/feed", Feed);
router.use("/service", Service);
router.use("/event", Event);

export default router;
