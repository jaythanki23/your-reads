import jwt, { Secret } from 'jsonwebtoken';
import User from '../models/User.js';
import { Request, Response } from 'express';

// @desc  Auth user
// @route  /auth/google
// @access Public
const auth = async (req: Request, res: Response) => {
  const { name, email, image, givenName, familyName } = req.body;

  if(!name || !email || !image || !givenName || !familyName) {
    res.status(400).json({
      error: "Please add all the fields"
    });
    // throw new Error("Please add all the fields");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if(userExists) {
    res.status(200).json({
      token: generateToken(userExists._id)
    });
    // throw new Error('User already exists');
  } else {
    // Create user
    const user = await User.create({
      name,
      email,
      image,
      givenName,
      familyName
    });

    if(user) {
      res.status(201).json({
        token: generateToken(user._id)
      })
    } else {
      res.status(400).json({
        error: "Invalid user data"
      });
      // throw new Error("Invalid user data");
    }
  }
}

// @desc  Get user
// @route  /auth/me
// @access Private
const getMe = async (req: any, res: Response) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    image: req.user.image
  }) 
};

// Generate JWT
const generateToken = (id: any) =>  {
  return jwt.sign({ id }, process.env.JWT_SECRET as Secret, {
    expiresIn: '30d',
  })
};

export { auth, getMe };
