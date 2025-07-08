import express from "express"
import { login, register, updateProfile, logout } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleMulter } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(singleMulter,register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile/update").post(isAuthenticated, singleMulter,updateProfile)


export default router