import { Request, Response, NextFunction } from "express";
import Image from "../models/Image";
import Video from "../models/Video";
import Content,{ContentDocument} from "../models/Content";
import ContentServices from "../services/content";
import { BadRequestError } from "../helper/apiError";

export const createContentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    title,
    partnerId,
    description,
    originalUrl,
    publishDate,
    paragraph,
    images,
    videos,
  } = req.body;
  try {
    const newContent = new Content({
      title,
      partnerId,
      description,
      originalUrl,
      publishDate,
      paragraph,
      images,
      videos,
    });
    const content = await ContentServices.createContent(newContent);
    res.status(201).json(content);
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
