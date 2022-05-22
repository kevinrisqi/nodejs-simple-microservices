const { executeQuery } = require('../config/db');

const findAll = async () => {
    let result = await executeQuery("SELECT * FROM user", []);
    return result;
}

const findOne = async (id) => {
    let result = await executeQuery("SELECT * FROM user WHERE id=?", [id]);
    return result;
}

const deleteOne = async (id) => {
    let result = await executeQuery("DELETE FROM user where id=?", [id]);
    return result;
}

const add = async (payload) => {
    let result = await executeQuery(
        "INSERT INTO user(nama, alamat, email, nomer_hp, brand_hp, keluhan) VALUES (?,?,?,?,?,?)",
        [payload.nama, payload.alamat, payload.email, payload.nomer_hp, payload.brand_hp, payload.keluhan]);
    return result;
}

const update = async (id, payload) => {
    let result = await executeQuery(
        `UPDATE user SET nama=?, alamat=?, email=?, nomer_hp=?, brand_hp=?, keluhan=? WHERE id=${id}`,
        [payload.nama, payload.alamat, payload.email, payload.nomer_hp, payload.brand_hp, payload.keluhan]
      );
    return result;
}

module.exports = {
    findAll,
    findOne,
    deleteOne,
    add,
    update
}