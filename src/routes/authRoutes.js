import router from "express";
import ctrl from "../controllers/authController.js";

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);

export default router;