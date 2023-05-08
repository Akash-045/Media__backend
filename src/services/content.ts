import Content, { ContentDocument } from "../models/Content";

const createContent = async (
  content: ContentDocument
): Promise<ContentDocument> => {
  return content.save();
};

const getContentById = async (
  contentId: string
): Promise<ContentDocument | null> => {
  const contentById = Content.findById({ id: contentId });
  return contentById;
};

const deleteContentById = async (
  contentId: string
): Promise<ContentDocument | null> => {
  const contentById = Content.findByIdAndDelete({ id: contentId });
  return contentById;
};
export default { createContent, getContentById, deleteContentById };
