import { Request, Response } from "express";

const errorMiddleware = (err: Error, req: Request, res: Response) => {
  console.error(`[ERROR] ${err.name}: ${err.message}`);

  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong',
  });
};

export default errorMiddleware;