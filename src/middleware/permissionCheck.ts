import { Response, Request, NextFunction } from "express";

import { ForbiddenError } from "../helper/apiError";
import { UserDocument } from "../models/User";


enum PermissionType {
  READ = "READ",
  WRITE = "WRITE"
}

// authorization
export const permissionCheckWrite = async (req: any, res: Response, next: NextFunction) => {
  
const userData = req.user as UserDocument;

  const userRoles = userData.permissions

  const hasWriteAccess = userRoles.some((permission) => permission.access.includes(PermissionType.WRITE));
  if (hasWriteAccess) {
    next();
  } else {
    throw new ForbiddenError();
  }
}

export const permissionCheckRead = async (req: any, res: Response, next: NextFunction) => {
  
  const userData = req.user as UserDocument;
  
    const userRoles = userData.permissions
  
    const hasWriteAccess = userRoles.some((permission) => permission.access.includes(PermissionType.READ));
    if (hasWriteAccess) {
      next();
    } else {
      throw new ForbiddenError();
    }
  }

  /* import { Response, Request, NextFunction } from "express";

import { ForbiddenError } from "../helper/apiError";
import { UserDocument } from "../models/User";

const mappings = {
  GET: "READ",
  POST: "CREATE",
  PUT: "UPDATE",
  DELETE: "DELETE",
};

// authorization
const permissionCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = (req as any).user as UserDocument;

  const userRoles = userData.permissions;
  const requestMethod = req.method as keyof typeof mappings;

  const isIncluded = userRoles.some(
    (item) => item.access === mappings[requestMethod]
  );

  if (isIncluded) {
    next();
  } else {
    next(new ForbiddenError());
  }
};
export default permissionCheck;*/