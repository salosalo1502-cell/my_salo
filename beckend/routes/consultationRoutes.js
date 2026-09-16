import express from "express";
import sendConsultation from "../controllers/consultationController.js";

const router = express.Router();

router.post("/consultation", sendConsultation);

export default router;


