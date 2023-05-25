// const express = require("express");
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";


// configure env
dotenv.config();
// dotenv.config({path: ''}); if we have in diffn path


// database config
connectDB();


// rest object
const app = express();


// routes
app.use("/api/auth", authRoutes);


// middlewares
app.use(express.json()); // We can use bodyparser also but this is an inbuild functn...
app.use(morgan('dev'));


// rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to our ecommerce app",
  });
  // res.send(<h1>Hello</h1>); - Error
  //   res.send("<h1>Hello</h1>");
});


// port
// const PORT = 8080;
const PORT = process.env.PORT || 8080;


// run/listen on port
app.listen(PORT, () => {
  console.log(`Server is running on port - ${PORT}`.bgCyan.white);
});
