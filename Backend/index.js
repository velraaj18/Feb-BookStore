// Use ESM syntax for importing in Node.js

import express from "express";
import { PORT } from "./config.js";
import { mongoDb } from "./config.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

mongoose
  .connect(mongoDb)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}!`);
    });
  })
  .catch((err) => console.log(err));
