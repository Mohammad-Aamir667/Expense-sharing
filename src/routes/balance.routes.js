import express from "express";
import {
    getUserBalance,
    getSimplifiedBalances
} from "../controllers/balance.controller.js";

const router = express.Router();

router.get("/simplified", getSimplifiedBalances);
router.get("/:userId", getUserBalance);

export default router;
