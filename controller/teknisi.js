const { executeQuery } = require("../config/db");
const teknisiModel = require('../model/teknisiModel');

const getAllTeknisi = async (req, reply) => {
  try {
    let teknisiData = await teknisiModel.findAll();
    reply.status(200).send(teknisiData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const getTeknisiById = async (req, reply) => {
  let id = req.params.id;
  try {
    let teknisiData = await executeQuery("SELECT * FROM teknisi where id=?", [
      id,
    ]);
    reply.status(200).send(teknisiData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const deleteTeknisiById = async (req, reply) => {
  let id = req.params.id;
  try {
    let teknisiData = await executeQuery("DELETE FROM teknisi where id=?", [
      id,
    ]);
    reply.status(200).send(teknisiData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const addTeknisi = async (req, reply) => {
  try {
    const { nama, spesialis, platform, jumlah_antrian } = req.body;
    let teknisiData = await executeQuery(
      "INSERT INTO teknisi(nama, spesialis, platform, jumlah_antrian) VALUES (?,?,?,?)",
      [nama, spesialis, platform, jumlah_antrian]
    );
    reply.status(200).send(teknisiData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const updateTeknisi = async (req, reply) => {
    let id = req.params.id;
  try {
    const { nama, spesialis, platform, jumlah_antrian } = req.body;
    let teknisiData = await executeQuery(
      `UPDATE teknisi SET nama=?, spesialis=?, platform=?, jumlah_antrian=? WHERE id=${id}`,
      [nama, spesialis, platform, jumlah_antrian]
    );
    reply.status(200).send(teknisiData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

module.exports = {
  getAllTeknisi: getAllTeknisi,
  getTeknisiById: getTeknisiById,
  deleteTeknisiById: deleteTeknisiById,
  addTeknisi: addTeknisi,
  updateTeknisi: updateTeknisi,
};
