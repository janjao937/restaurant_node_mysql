import { NextFunction, Request, Response } from 'express';

export const getTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({message: "ok"});
  }catch(error) {
    next(error);
  }
};

