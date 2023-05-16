import mongoose, { Document } from "mongoose";

enum PermissionType {
  READ = "READ",
  WRITE = "WRITE"
}

export type PermissionDocument = Document & {
  access: PermissionType | PermissionType[];
};

export const PermissionSchema = new mongoose.Schema({  

  access: {
    type: [String],
    enum: [PermissionType.READ, PermissionType.WRITE],
    required: true,
  },
});

export default mongoose.model<PermissionDocument>(
  "Permission",
  PermissionSchema
);
/* import mongoose, { Document } from "mongoose";

export type PermissionDocument = Document & {
  access: string;
};

export const PermissionSchema = new mongoose.Schema({
  access: {
    type: String,
    enum: ["READ", "WRITE", "UPDATE", "DELETE"],
  },
});

export default mongoose.model<PermissionDocument>(
  "Permission",
  PermissionSchema
);*/ 