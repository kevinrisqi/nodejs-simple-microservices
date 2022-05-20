const { executeQuery } = require("../config/db");

const getAllKerusakan = async (req, reply) => {
  try {
    let kerusakanData = await executeQuery("SELECT * FROM kerusakan", []);
    reply.status(200).send(kerusakanData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const getKerusakanById = async (req, reply) => {
  let id = req.params.id;
  try {
    let kerusakanData = await executeQuery("SELECT * FROM kerusakan where id=?", [
      id,
    ]);
    reply.status(200).send(kerusakanData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const deleteKerusakanById = async (req, reply) => {
  let id = req.params.id;
  try {
    let kerusakanData = await executeQuery("DELETE FROM kerusakan where id=?", [
      id,
    ]);
    reply.status(200).send(kerusakanData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const addKerusakan = async (req, reply) => {
  try {
    const { jenis_kerusakan, lama_pengerjaan, harga } = req.body;
    let kerusakanData = await executeQuery(
      "INSERT INTO kerusakan(jenis_kerusakan, lama_pengerjaan, harga) VALUES (?,?,?)",
      [jenis_kerusakan, lama_pengerjaan, harga]
    );
    reply.status(200).send(kerusakanData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const updateKerusakan = async (req, reply) => {
    let id = req.params.id;
  try {
    const { jenis_kerusakan, lama_pengerjaan, harga } = req.body;
    let kerusakanData = await executeQuery(
      `UPDATE kerusakan SET jenis_kerusakan=?, lama_pengerjaan=?, harga=? WHERE id=${id}`,
      [jenis_kerusakan, lama_pengerjaan, harga]
    );
    reply.status(200).send(kerusakanData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

module.exports = {
  getAllKerusakan: getAllKerusakan,
  getKerusakanById: getKerusakanById,
  deleteKerusakanById: deleteKerusakanById,
  addKerusakan: addKerusakan,
  updateKerusakan: updateKerusakan,
};
