const { executeQuery } = require("../config/db");

const getAllUser = async (req, reply) => {
  try {
    let userData = await executeQuery("SELECT * FROM user", []);
    reply.status(200).send(userData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const getUserById = async (req, reply) => {
  let id = req.params.id;
  try {
    let userData = await executeQuery("SELECT * FROM user where id=?", [
      id,
    ]);
    reply.status(200).send(userData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const deleteUserById = async (req, reply) => {
  let id = req.params.id;
  try {
    let userData = await executeQuery("DELETE FROM user where id=?", [
      id,
    ]);
    reply.status(200).send(userData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const addUser = async (req, reply) => {
  try {
    const { nama, alamat, email, nomer_hp, brand_hp, keluhan } = req.body;
    let userData = await executeQuery(
      "INSERT INTO user(nama, alamat, email, nomer_hp, brand_hp, keluhan) VALUES (?,?,?,?,?,?)",
      [nama, alamat, email, nomer_hp, brand_hp, keluhan]
    );
    reply.status(200).send(userData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const updateUser = async (req, reply) => {
    let id = req.params.id;
  try {
    const { nama, alamat, email, nomer_hp, brand_hp, keluhan } = req.body;
    let userData = await executeQuery(
      `UPDATE user SET nama=?, alamat=?, email=?, nomer_hp=?, brand_hp=?, keluhan=? WHERE id=${id}`,
      [nama, alamat, email, nomer_hp, brand_hp, keluhan]
    );
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
