import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import User from "../models/User";

const protect = async (req: any, res: Response, next: NextFunction) => {
  let token: string;

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // verify token
      const decoded:any = jwt.verify(token, process.env.JWT_SECRET as Secret);

      // Get the user from the token
      req.user = await User.findById(decoded.id).select('-password');

      next();

    } catch (error) {
      console.log(error);
      res.status(401).json({
        error: 'Not authorized'
      });
    }
  } else {
    res.status(401).json({
      error: 'No token. Not authorized'
    });
  }
}

export default protect;