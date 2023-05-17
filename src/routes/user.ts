import { Router } from "express";

import {
  createUserController,
  loginWithPasswordController,
} from "../controllers/user";

const router = Router();

router.post("/create", createUserController);

router.post("/login/:partnerId", loginWithPasswordController);
export default router;
