import express from "express";
import { Test } from "../controllers/user.controller";

const router = express.Router();

router.get("/", Test);

export default router;
