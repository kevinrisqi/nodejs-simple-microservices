const { executeQuery } = require("../config/db");

const findAll = () => {
  let result = executeQuery("SELECT * FROM teknisi", []);
  return result;
};

const findOne = () => {
    let result = executeQuery("SELECT * FROM teknisi where id"
}

module.exports = {
  findAll,
};
