import mongoose, { Document } from "mongoose";
import { ImageDocument, ImageSchema } from "./Image";
import { VideoDocument, VideoSchema } from "./Video";

export type ContentDocument = Document & {
  title: string;
  partnerId: string;
  description: string;
  originalUrl: string;
  publishDate: string;
  paragraph: string;
  //write images and video here
  //type is an array
  images:[];
  videos: [];
  // media: [];
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
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  Images: [
    {
      type: ImageSchema,
    },
  ],
  Videos: [
    {
      type: VideoSchema,
    },
  ],
  //what does it mean ?
  //array
  images: [{ ImageSchema }],
  videos: [{ VideoSchema }],
});

export default mongoose.model<ContentDocument>("Content", ContentSchema);
