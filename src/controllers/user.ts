import { Request, Response } from "express";
import User from "../models/User";
import UserServices from "../services/user"
import generateToken from "../utils/generateToken";

export const createUserController = async (
    req: Request,
    res: Response
) => {
    try {
        const { key, permissions } = req.body;

        const newUser = new User({
            key: key,
            permissions: permissions,
        });
        const user = await UserServices.createUser(newUser);
        res.json({partnerId: user.partnerId});
    } catch (error) {
        console.log(error);
    }
}

export const loginWithPasswordController = async (
    req: Request,
    res: Response
) => {
    try {
        const userData = await UserServices.findUserById(req.params.partnerId);

        if (!userData) {
            res.json({message: `No user with id ${req.params.partnerId}`});
            return;
        }

        if (userData.key !== req.body.key) {
            res.json({message: "Wrong key"});
            return;
        }

        res.json({partnerId: userData.partnerId, token: generateToken(userData.partnerId), message: `Login successful`});
    } catch (error) {
        console.log(error);
    }
}