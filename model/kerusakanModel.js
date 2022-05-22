const { executeQuery } = require("../config/db");

const findAll = async () => {
  let result = await executeQuery("SELECT * FROM kerusakan", []);
  return result;
};

const findOne = async (id) => {
  let result = await executeQuery("SELECT * FROM kerusakan WHERE id=?", [id]);
  return result;
};

const deleteOne = async (id) => {
  let result = await executeQuery("DELETE FROM kerusakan where id=?", [id]);
  return result;
};

const add = async (payload) => {
  let result = await executeQuery(
    "INSERT INTO kerusakan(jenis_kerusakan, lama_pengerjaan, harga) VALUES (?,?,?)",
    [payload.jenis_kerusakan, payload.lama_pengerjaan, payload.harga]
  );
  return result;
};

const update = async (id, payload) => {
  let result = await executeQuery(
    `UPDATE kerusakan SET jenis_kerusakan=?, lama_pengerjaan=?, harga=? WHERE id=${id}`,
    [payload.jenis_kerusakan, payload.lama_pengerjaan, payload.harga]
  );
  return result;
};

module.exports = {
  findAll,
  findOne,
  deleteOne,
  add,
  update
};
