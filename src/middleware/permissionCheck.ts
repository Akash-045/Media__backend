import { Response, Request, NextFunction } from "express";

import { ForbiddenError } from "../helper/apiError";
import { UserDocument } from "../models/User";

// authorization
const permissionCheck = async (req: any, res: Response, next: NextFunction) => {
  const userData = req.user as UserDocument;
  

  const userRoles = userData.permissions;//is array
  const requestMethod = req.method;//if the user have permisssion or not

  const isIncluded = userRoles.some((item) => item.access === requestMethod);

  if (isIncluded) {
    next();
  } else {
    throw new ForbiddenError();
  }
};
export default permissionCheck;