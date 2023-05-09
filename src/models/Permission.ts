import mongoose, { Document } from "mongoose";

export type PermissionDocument = Document & {
  access: string;
};

export const PermissionSchema = new mongoose.Schema({
  access: {
    type: String,
    enum: ["READ", "WRITE", "UPDATE", "DELETE"],//update and delete are optional so you can delete route
  },
});

export default mongoose.model<PermissionDocument>(
  "Permission",
  PermissionSchema
);