import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

import UserServices from "../services/user";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const jwtStrategy = new JwtStrategy(
    {
        secretOrKey: JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (payload, done) => {
        const partnerId =  payload.id;
        const foundUser = await UserServices.findUserById(partnerId);
        if (!foundUser) {
            return "No user found."
        }
        done(null, foundUser);
    }
)