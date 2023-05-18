import Express from "express";
import cors from "cors";

import contentRouter from "./routes/content";
import userRouter from "./routes/user";
import apiErrorHandler from "./middleware/apiErrorHandeler";

import passport from "passport";
import { jwtStrategy } from "./config/passport";

const app = Express();

app.use(Express.json());
app.use(cors());

app.use(passport.initialize());
passport.use(jwtStrategy);

app.use("/contents", contentRouter);
app.use("/users", userRouter);

app.use(apiErrorHandler);


export default app;
