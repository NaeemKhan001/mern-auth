import express from "express";
import user from "./user.route.js";
import auth from "./auth.route.js";

const router = express.Router();

router.use("/user", user);
router.use("/auth", auth);

export default router;
