import { Request, Response } from "express";
import Journey from "../models/Journey.js";

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

// @desc    Delete a journey - DELETE
// @route   /books/journey/:id
// @access  Private
const deleteJourney = async (req: any, res: Response) => {
    const journey = await Journey.findById(req.params.id);

    if(!journey) {
      res.status(404).json({
        error: "Journey not found"
      });
    } else {
      try {
        await journey.remove();

        res.status(200).json({
          message: "Journey removed"
        });

      } catch (error) {
        res.status(500).json({
          error: "Internal Server Error"
        });
      }
    }
}

// @desc    Update a journey - PUT
// @route   /books/journey/:id
// @access  Private
const updateJourney = async (req: any, res: Response) => {
    const journey = await Journey.findById(req.params.id);

    if(!journey) {
      res.status(404).send({
        error: "Journey not found"
      });
    } else {
      const { from, to, title, date, note } = req.body;

      try {
        const updatedJourney = await journey.update({ from, to, title, date, note });

      res.status(200).json({
        message: "Journey updated"
      }); 

      } catch (error) {
        res.status(500).json({
          error: "Internal Server Error"
        });
      }
    }
}

export { createJourney, getJourney, deleteJourney, updateJourney };