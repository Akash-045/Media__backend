import Content, { ContentDocument } from "../models/Content";

const createContent = async (
  content: ContentDocument
): Promise<ContentDocument> => {
  return content.save();
};//return await Content.create(content);

const getContentById = async (
  contentId: string
): Promise<ContentDocument | null> => {
  const contentById = await Content.findById({ _id: contentId });
  return contentById;
};//added await in line 12

const deleteContentById = async (
  contentId: string
): Promise<ContentDocument | null> => {
  const contentById = await Content.findByIdAndDelete({ _id: contentId });
  return contentById
};//added await in line 19
export default { createContent, getContentById, deleteContentById };