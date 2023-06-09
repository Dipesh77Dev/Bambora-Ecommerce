import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing

// Register[POST]
// router.post("/register", (req, res) => {})
// But we use MVC(Model View Controller) for this...

router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// Test Routes
router.get("/test", requireSignIn, isAdmin, testController);

// Protected Routes
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Forget password || POST
router.post("/forgot-password", forgotPasswordController);

export default router;

/*
We can as much as we need middleware before routes 
*/
