import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing

// Register[POST]
// router.post("/register", (req, res) => {})
// But we use MVC(Model View Controller) for this...

router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;

/*
We can as much as we need middleware before routes 
*/
