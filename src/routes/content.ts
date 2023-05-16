import { Router } from "express";
import {
  createContentController,
  getContentByIdController,
  deleteContentByIdController,
} from "../controllers/content";
import {permissionCheckWrite, permissionCheckRead} from "../middleware/permissionCheck";
import passport from "passport";


const router = Router();

router.post("/create/:partnerId", passport.authenticate("jwt", {session: false}), permissionCheckWrite, createContentController);

router.get("/view/:contentId", passport.authenticate("jwt", {session: false}), permissionCheckRead, getContentByIdController);

router.delete("/delete/:contentId", passport.authenticate("jwt", {session: false}), permissionCheckWrite, deleteContentByIdController);

export default router;

/*const router = Router();

router.post("/", permissionCheck, createContentController);
router.get("/:contentId", permissionCheck, getContentByIdController);
router.delete("/:contentId", permissionCheck, deleteContentByIdController);

export default router;*/