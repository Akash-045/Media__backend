import { Router } from "express";
import {
  createContentController,
  getContentByIdController,
  deleteContentByIdController,
} from "../controllers/content";
import permissionCheck from "../middleware/permissionCheck";

const router = Router();

router.post("/", permissionCheck, createContentController);
router.get("/:contentId", permissionCheck, getContentByIdController);
router.delete("/:contentId", permissionCheck, deleteContentByIdController);

export default router