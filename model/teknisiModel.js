const { executeQuery } = require("../config/db");

const findAll = async () => {
  let result = await executeQuery("SELECT * FROM teknisi", []);
  return result;
};

const findOne = async (id) => {
    let result = await executeQuery("SELECT * FROM teknisi where id=?", [
      id,
    ]);
    return result;
}

const deleteOne = async (id) => {
  let result = await executeQuery("DELETE FROM teknisi WHERE id=?", [id]);
  return result;
}

const add = async (payload) => {
  let result = await executeQuery(
    "INSERT INTO teknisi(nama, spesialis, platform, jumlah_antrian) VALUES (?,?,?,?)",
    [payload.nama, payload.spesialis, payload.platform, payload.jumlah_antrian]
  );
  return result;
}

const update = async (id, payload) => {
  let result = await executeQuery(
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
