import { Request, Response } from "express";
import Book from "../models/Book";

// @desc    Get all the books with status as 'read'
// @route   /books/read
// @access  Private
const getRead = async (req: any, res: Response) => {
  try {
    const books = await Book.find({ user: req.user._id, status: "read" });
    res.status(200).send(books);
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
}

// @desc    Insert a book with status as 'read'
// @route   /books/read
// @access  Private
const createRead = async (req: any, res: Response) => {
  if(!req.body) {
    res.status(400).json({
      error: "Please add some data"
    });
  }

  const { bookId, title, authors, categories, image, description, pages, publishedDate, status } = req.body;

  const checkBook = await Book.findOne({ bookId });

  if(!checkBook) {
    try {
      const book = await Book.create({
        bookId,
        title,
        authors,
        categories,
        image,
        description,
        pages,
        publishedDate,
        status,
        user: req.user._id
      });
      
      res.status(201).json({
        message: "Book added"
      })
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error"
      });
    }
  } else {
    res.status(400).json({
      error: "Book already exists"
    })
  }

  
}

export { createRead, getRead };