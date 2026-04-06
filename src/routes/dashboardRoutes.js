import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import ctrl from "../controllers/dashboardController.js";

const router = Router();

router.get("/", auth, ctrl.getDashboard);

export default router;