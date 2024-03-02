import express from "express";

import { Book } from "../models/bookModel.js";

const router = express.Router();
router.use(express.json());

// To post a new Book
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
  try {
    const book = await Book.find({});
    return res.status(200).send(book);
  } catch (error) {
    console.error(error);
    res.status(404).send("No book found");
  }
});

// To get a specific book using ID
router.get("/:id", async (req, res) => {
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

// To update a book by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!book) {
      res.status(404).send("Book not found");
    }
    return res.status(200).send({
      message: "Book updated Successfully",
      book: book,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error });
  }
});

// To delete a book using ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      return res.status(404).send({
        message: "Book not found",
      });
    }
    return res.status(200).send({
      message: "Book deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error });
  }
});

export default router;
