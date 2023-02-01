const  { User } = require("../mongodb");

const createUser = async (req, res) => {
    let body = req.body;
    let UserData = new User(body);
    let result = await UserData.save();
    res.status(201).json({ result });
  }

const updateUser =  async (req,res) => {
    const {email} = req.params;
    const data = req.body;
    let result = await User.updateOne({'email': email},{ $set: data });
    res.status(200).json({result})
  }

const getUsers = async (req, res) => {
  let result = await User.find({});

  res.status(200).json({ result });
}
const deleteUser = async (req, res) => {
  const {id} = req.params;
  const result = await User.deleteOne({ name: id});
  res.status(200).json({ result });
}
  module.exports = {createUser , updateUser  ,getUsers,deleteUser}