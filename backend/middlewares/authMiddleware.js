import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access, You are not an admin...",
      });
    } else {
      next(); // Further execution will be working, User can access if he is admin...
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware...",
    });
  }
};

/* 
This is a middlewre, so we can have 3 arguments ... req,res,next. So in Middleware it is simple that request when we get by Get method, after that next will be validate thab our res will be submitted. If we dont write next the execution will be paused.
In this we will use header as a req.body bcoz token is stored in req.header.authorization..

0 - USER, 1 - ADMIN
*/
