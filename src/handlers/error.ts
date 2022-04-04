import { Request, Response, NextFunction } from 'express'
import IError from '../interfaces/error'

export default (error: IError, req: Request, res: Response, next: NextFunction) => res.status(error.status || 500).json({
    error: {
        message: error.message || "Oops... Something went wrong."
    }
})