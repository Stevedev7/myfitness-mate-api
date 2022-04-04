import { Request, Response, NextFunction } from 'express'

interface ResponseError extends Error {
    status?: number;
  }

export default (error: ResponseError, req: Request, res: Response, next: NextFunction) => res.status(error.status || 500).json({
    error: {
        message: error.message || "Oops... Something went wrong."
    }
})