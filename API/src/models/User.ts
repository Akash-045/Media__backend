import mongoose, { Document } from "mongoose";
import { PermissionDocument, PermissionSchema } from "./Permission";
import { v4 as uuidv4 } from "uuid";

export type UserDocument = Document & {
  partnerId: string;
  key: string;
  permissions: PermissionDocument[]; //
};

export const UserSchema = new mongoose.Schema({
  partnerId: {
    type: String,
    required: false,
    default: uuidv4,
  },
  key: {
    type: String,
    required: false,
  },
  permissions: [PermissionSchema],
});

export default mongoose.model<UserDocument>("User", UserSchema);
