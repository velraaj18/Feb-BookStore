// Use ESM syntax for importing in Node.js

import express from "express";
import { PORT } from "./config.js";
import { mongoDb } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json());

// To post a new Book
app.post("/books", async (req, res) => {
  try {
    const newBook = req.body;
    const book = await Book.create(newBook);
    return res.status(201).send({ book });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Error: " + error);
  }
});

// to get all the books
app.get("/books", async (req, res) => {
  try {
    const book = await Book.find({});
    const count = book.length;
    return res.status(200).send({
      count,
      book,
    });
  } catch (error) {
    console.error(error);
    res.status(404).send("No book found");
  }
});

// To get a specific book using ID
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send("No book found");
    }
    return res.status(200).send(book);
  } catch (error) {
    console.error(error);
    res.status(404).send("NO book found");
  }
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
