import Content, { ContentDocument } from "../models/Content";

const createContent = async (
  content: ContentDocument
): Promise<ContentDocument> => {
  return await Content.create(content);
};

const getContentById = async (
  contentId: string
): Promise<ContentDocument | null> => {
  const contentById = await Content.findById({ _id: contentId });
  return contentById;
};

const deleteContentById = async (
  contentId: string
): Promise<ContentDocument | null> => {
  const contentById = await Content.findByIdAndDelete({ _id: contentId });
  return contentById;
}; 
export default { createContent, getContentById, deleteContentById };
