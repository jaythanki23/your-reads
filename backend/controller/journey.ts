import { Request, Response } from "express";
import Journey from "../models/Journey";

// @desc    Get a journey - GET
// @route   /books/journey
// @access  Private
const getJourney = async (req: any, res: Response) => {
  try {
    const journeys = await Journey.find({ user: req.user._id, book: req.query.bookID });
    res.status(200).send(journeys);
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
}

// @desc    Create a journey - POST
// @route   /books/journey
// @access  Private
const createJourney = async (req: any, res: Response) => {
  if(!req.body) {
    res.status(400).json({
      error: "Please add some data"
    });
  }

  const { book, from, to, title, date, note } = req.body;

  const checkJourney = await Journey.findOne({ user: req.user._id, book, from, to});

  if(!checkJourney) {
    try {
      const journey = await Journey.create({
        user: req.user._id,
        book,
        from,
        to,
        title,
        date,
        note
      });

      res.status(201).json({
        message: "Journey Recorded"
      });

    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error"
      });
    }
  } else {
    res.status(400).json({
      error: "Journey already recorded"
    });
  }
}

export { createJourney, getJourney };