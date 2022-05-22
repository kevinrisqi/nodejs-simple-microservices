const { executeQuery } = require("../config/db");

const findAll = () => {
  let result = executeQuery("SELECT * FROM teknisi", []);
  return result;
};

const findOne = (id) => {
    let result = executeQuery("SELECT * FROM teknisi where id=?", [
      id,
    ]);
    return result;
}

const deleteOne = (id) => {
  let result = executeQuery("DELETE FROM teknisi WHERE id=?", [id]);
  return result;
}

const add = (payload) => {
  let result = executeQuery(
    "INSERT INTO teknisi(nama, spesialis, platform, jumlah_antrian) VALUES (?,?,?,?)",
    [payload.nama, payload.spesialis, payload.platform, payload.jumlah_antrian]
  );
  return result;
}

const update = (id, payload) => {
  let result = executeQuery(
    `UPDATE teknisi SET nama=?, spesialis=?, platform=?, jumlah_antrian=? WHERE id=${id}`,
    [payload.nama, payload.spesialis, payload.platform, payload.jumlah_antrian]
  );
  return result;
}

module.exports = {
  findAll,
  findOne,
  deleteOne,
  add,
  update
};
