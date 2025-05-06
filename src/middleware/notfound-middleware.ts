import { NextFunction, Request, Response } from "express";

const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.error(`[404] Not Found - ${req.method} ${req.originalUrl}`);

  res.status(404).json({
    success: false,
    message: "Resource not found",
  });
};

export default notFoundMiddleware;