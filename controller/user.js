const userModel = require("../model/userModel");

const getAllUser = async (req, reply) => {
  try {
    let userData = await userModel.findAll();
    reply.status(200).send(userData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const getUserById = async (req, reply) => {
  let id = req.params.id;
  try {
    let userData = await userModel.findOne(id);
    reply.status(200).send(userData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const deleteUserById = async (req, reply) => {
  let id = req.params.id;
  try {
    let userData = await userModel.deleteOne(id);
    reply.status(200).send(userData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const addUser = async (req, reply) => {
  try {
    let payload = req.body;
    let userData = await userModel.add(payload);
    reply.status(200).send(userData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const updateUser = async (req, reply) => {
    let id = req.params.id;
  try {
    const payload = req.body;
    let userData = await userModel.update(id, payload);
    reply.status(200).send(userData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

module.exports = {
  getAllUser: getAllUser,
  getUserById: getUserById,
  deleteUserById: deleteUserById,
  addUser: addUser,
  updateUser: updateUser,
};
