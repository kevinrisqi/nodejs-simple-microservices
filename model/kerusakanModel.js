const { executeQuery } = require("../config/db");

const findAll = () => {
  let result = executeQuery("SELECT * FROM kerusakan", []);
  return result;
};

const findOne = (id) => {
  let result = executeQuery("SELECT * FROM kerusakan WHERE id=?", [id]);
  return result;
};

const deleteOne = (id) => {
  let result = executeQuery("DELETE FROM kerusakan where id=?", [id]);
  return result;
};

const add = (payload) => {
  let result = executeQuery(
    "INSERT INTO kerusakan(jenis_kerusakan, lama_pengerjaan, harga) VALUES (?,?,?)",
    [payload.jenis_kerusakan, payload.lama_pengerjaan, payload.harga]
  );
  return result;
};

const update = (id, payload) => {
  let result = executeQuery(
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
