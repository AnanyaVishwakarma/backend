import { Router } from "express";
import { auth, authorize } from "../middlewares/auth.js";
import ctrl from "../controllers/recordController.js";

const router = Router();

router.get("/", auth, authorize("admin"), ctrl.getAll);
router.post("/", ctrl.create);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

export default router;