import Content, { ContentDocument } from "../models/Content";
import User, { UserDocument } from "../models/User";

const createContent = async (
  content: ContentDocument
): Promise<ContentDocument> => {
  return content.save();
};

const getContentById = async (
  contentId: string
): Promise<ContentDocument | null> => {
  const contentById = Content.findById({ _id: contentId });
  return contentById;
};


const deleteContentById = async (
  contentId: string
): Promise<ContentDocument | null> => {
  const contentById = Content.findByIdAndDelete({ _id: contentId });
  return contentById;
};
export default { createContent, getContentById, deleteContentById };
