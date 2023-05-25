import express from 'express';
import {registerController} from '../controllers/authController.js';

// router object
const router = express.Router(); 

// routing 

// Register[POST]
// router.post("/register", (req, res) => {})

// But we use MVC(Model View Controller) for this...
router.post("/register", registerController);

export default router;
