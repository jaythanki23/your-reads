import { Request, Response } from "express";

const errorHandler = (err: any, req: Request, res: Response, next: any) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  console.log(err);

  res.status(statusCode);

  res.json({
    message: err.message
  });
}

export { errorHandler }