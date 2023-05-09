import { Request, Response } from "express";

import ApiError from "../helper/apiError";

//by this function i can access all status in json form
export default function (error: ApiError, req: Request, res: Response) {
  res.status(error.statusCode).json({
    status: "error",
    statusCode: error.statusCode,
    message: error.message,
  });
}