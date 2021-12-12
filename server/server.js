import devBundle from "./devBundle";
import express from "express";
import path from "path";
import template from "../template";
import { MongoClient } from "mongodb";

const APP = express(),
  CURRENT_WORKING_DIR = process.cwd(),
  PORT = process.env.PORT || 3000,
  URL = process.env.MONGODB_URI || "mongodb://localhost27017/mern-setup";

// APP compiler
devBundle.compile(APP);

// Middlewares
APP.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

// Routes
APP.get("/", (req, res) => res.status(200).send(template()));

// Server
APP.listen(PORT, (err) => {
  err && console.log(err);
  console.info("Server started on port %s.", PORT);
});

// Mongo DB Conection
MongoClient.connect(URL, (err, db) => {
  console.log("Conected successfully to mongodb server");
  db && db.close();
});
