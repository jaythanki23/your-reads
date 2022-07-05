import { Request, Response } from "express";
import Book from "../models/Book";

// @desc    Get all the books with status as 'read'
// @route   /books/read
// @access  Private
const read = (req: Request, res: Response) => {
  console.log("read");
}

export { read };