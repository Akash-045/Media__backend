import { Request, Response } from "express";

import ApiError from "../helper/apiError";

export default function (error: ApiError, req: Request, res: Response) {
  res.json({
    status: "error",
    statusCode: error.statusCode,
    message: error.message,
  }).status(error.statusCode);
}