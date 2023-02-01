const  { User } = require("../mongodb");

const updateUserByEmail = async (email, data) => {
    return User.updateOne({'email': email},{ $set: data });
}

const createUser = async (body) => {
    let UserData = new User(body);
    return await UserData.save();
}

const getUsers = async () => {
    return User.find({});
}

const getUserByEmil = async (Email) => {
    return User.find({ email: Email});
}

const deleteUser = async (email) => {
    return User.deleteOne({ email: email});
}

const generateUserToken = async (user) => {
    return await user.generateAuthToken()
}
module.exports = {updateUserByEmail, createUser, getUsers, getUserByEmil, deleteUser, generateUserToken}