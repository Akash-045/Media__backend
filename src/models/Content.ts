import mongoose, { Document } from "mongoose";
import { ImageDocument } from "./Image";
import { VideoDocument } from "./Video";

export type ContentDocument = Document & {
  title: string;
  partnerId: string;
  description: string;
  originalUrl: string;
  publishDate: string;
  paragraph: string;
  media: (ImageDocument | VideoDocument)[];
};

const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  partnerId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    default: Date.now,
    //type: String,
    //required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },

  media: {
    type: Array,
    required: true,
  },
});

export default mongoose.model<ContentDocument>("Content", ContentSchema);
