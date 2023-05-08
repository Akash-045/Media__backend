import { Request, Response, NextFunction } from "express";

import Content from "../models/Content";
import ContentServices from "../services/content";
import { BadRequestError } from "../helper/apiError";

export const createContentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, partnerId, description, originalUrl, publishDate, paragraph, images, videos } = req.body;
  try {
    const newContent = new Content({
      title,
      partnerId,
      description,
      originalUrl,
      publishDate,
      paragraph,
       media: {
        images,videos
       }
    });
    const content = await ContentServices.createContent(newContent);
    res.json(content).status(201);
  } catch (error) {
    next(new BadRequestError("Invalid Request", error));
  }
};

export const getContentByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const content = await ContentServices.getContentById(req.params.contentId);
    res.json(content);
  } catch (error) {
    next(new BadRequestError("Invalid Request", error));
  }
};

export const deleteContentByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const content = await ContentServices.deleteContentById(
      req.params.contentId
    );
    res.status(204);
  } catch (error) {
    next(new BadRequestError("Invalid Request", error));
  }
};