// Use ESM syntax for importing in Node.js

import express from "express";
import { PORT } from "./config.js";
import { mongoDb } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import Bookroutes from "./routes/BookRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors("https://feb-book-store-client.vercel.app"));

// middleware for routes
app.use("/books", Bookroutes);

mongoose
  .connect(mongoDb)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}!`);
    });
  })
  .catch((err) => console.log(err));
