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
  media: (ImageDocument | VideoDocument)[]; //media can be Image or Video
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
  },
  paragraph: {
    type: String,
    required: true,
  },

  media: {
    type: Array,
    required: true
  }
});

export default mongoose.model<ContentDocument>("Content", ContentSchema);

// {
//   "title": "Example Content",
//   "description": "This is an example content.",
//   "originalUrl": "https://example.com/content",
//   "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   "images": [
//     {
//       "title": "Example Image 1",
//       "alt": "Example Image 1",
//       "height": "500",
//       "width": "800",
//       "source": "https://example.com/image1.jpg",
//       "credits": "John Doe"
//     },
//     {
//       "title": "Example Image 2",
//       "alt": "Example Image 2",
//       "height": "600",
//       "width": "900",
//       "source": "https://example.com/image2.jpg",
//       "credits": "Jane Doe"
//     }
//   ]
// }