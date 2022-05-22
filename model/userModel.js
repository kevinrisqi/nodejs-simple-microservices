const { executeQuery } = require('../config/db');

const findAll = () => {
    let result = executeQuery("SELECT * FROM user", []);
    return result;
}

const findOne = (id) => {
    let result = executeQuery("SELECT * FROM user WHERE id=?", [id]);
    return result;
}

const deleteOne = (id) => {
    let result = executeQuery("DELETE FROM user where id=?", [id]);
    return result;
}

const add = (payload) => {
    let result = executeQuery(
        "INSERT INTO user(nama, alamat, email, nomer_hp, brand_hp, keluhan) VALUES (?,?,?,?,?,?)",
        [payload.nama, payload.alamat, payload.email, payload.nomer_hp, payload.brand_hp, payload.keluhan]);
    return result;
}

const update = (id, payload) => {
    let result = executeQuery(
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