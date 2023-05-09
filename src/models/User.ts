import mongoose, { Document } from "mongoose";
import Permission, { PermissionDocument, PermissionSchema } from "./Permission";

export type UserDocument = Document & {
  partnerId: string;
  key: string;
  permissions: PermissionDocument[];//array of string but database its string(objectid)
};

export const UserSchema = new mongoose.Schema({
  partnerId: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  //array of id
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Permission,
    },
  ],
});

export default mongoose.model<UserDocument>("User", UserSchema);