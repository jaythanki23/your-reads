import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
  },
  authors: {
    type: Array
  },
  categories: {
    type: Array
  },
  image: {
    type: String,
  },
  pages: {
    type: Number
  },
  description: {
    type: String
  },
  publishedDate: {
    type: String
  },
  status: {
    type: String
  }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;