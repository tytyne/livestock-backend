import express from "express";
import User from "./users.js";
import Farmer from "./farmers"

const router = express.Router();

router.use("/", User);
router.use("/",Farmer)

export default router;
