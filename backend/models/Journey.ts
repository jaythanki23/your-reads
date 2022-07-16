import mongoose from "mongoose";

const journeySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  date: {
    type: String
  },
  from: {
    type: Number
  },
  to: {
    type: Number
  },
  title: {
    type: String
  },
  note: {
    type: String
  }
});

const Journey = mongoose.model("Journey", journeySchema);

export default Journey;