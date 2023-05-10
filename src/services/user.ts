import User, { UserDocument } from "../models/User";

const createUser =  async (
    user: UserDocument
): Promise<UserDocument> => {
    return user.save();
}

const findUserById = async (
    partnerId: string
): Promise<UserDocument | null> => {
    const foundUser = User.findOne({partnerId: partnerId});
    return foundUser;
}


export default { createUser, findUserById };