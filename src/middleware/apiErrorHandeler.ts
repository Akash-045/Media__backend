import { NextFunction, Request, Response } from "express";

import ApiError from "../helper/apiError";

/*export default function (error: ApiError, req: Request, res: Response) {
  res.status(error.statusCode).json({
    status: "error",
    statusCode: error.statusCode,
    message: error.message,
  });
}*/
export default function errorHandler(
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(error.statusCode).json({
    status: 'error',
    statusCode: error.statusCode,
    message: error.message,
  });
}
