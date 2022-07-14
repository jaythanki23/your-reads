import { Request, Response } from "express";
import Book from "../models/Book";

// @desc    Get all the books with the queried status
// @route   /books/read
// @access  Private
const getRead = async (req: any, res: Response) => {
  try {
    const books = await Book.find({ user: req.user._id, status: req.query.status });
    res.status(200).send(books);
  } catch (error) {
    res.status(500).json({
      error: error
    });
  }
}

// @desc    Insert a book
// @route   /books/read
// @access  Private
const createRead = async (req: any, res: Response) => {
  if(!req.body) {
    res.status(400).json({
      error: "Please add some data"
    });
  }

  const { id, title, authors, categories, image, description, pages, publishedDate, status } = req.body;

  const checkBook = await Book.findOne({ user: req.user._id, id: id });

  // console.log(checkBook);

  if(!checkBook) {
    try {
      const book = await Book.create({
        id,
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
    // console.log("I am in!!");
    res.status(400).json({
      error: "Book already added"
    })
  }  
}

// @desc    Remove book
// @route   /books/:id
// @access  Private
const removeBook = async (req: any, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);

    if(!book) {
      res.status(404).json({
        error: "Book not found"
      });
    }

    await book.remove();

    res.status(200).json({
      message: "Book removed"
    });
  }
  
  catch (error) {
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
}

// @desc    Update a book
// @route   /books/:id
// @access  Private
const updateBook = async (req: any, res: Response) => {
  const book = await Book.findById(req.params.id);

  if(!book) {
    res.status(400).json({
      error: "Book not found"
    });
  } else {
    try {
      const result = await book.update( { status: req.body.status }); 
      
      // res.status(200).send(result);
      res.status(200).json({
        message: "Book updated"
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error"
      });
    }
  }

}

export { createRead, getRead, removeBook, updateBook };