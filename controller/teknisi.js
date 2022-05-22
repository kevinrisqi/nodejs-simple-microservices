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
    let teknisiData = await teknisiModel.findOne(id);
    reply.status(200).send(teknisiData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const deleteTeknisiById = async (req, reply) => {
  let id = req.params.id;
  try {
    let teknisiData = teknisiModel.deleteOne(id);
    reply.status(200).send(teknisiData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const addTeknisi = async (req, reply) => {
  try {
    const payload = req.body;
    let teknisiData = await teknisiModel.add(payload);
    reply.status(200).send(teknisiData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const updateTeknisi = async (req, reply) => {
    let id = req.params.id;
  try {
    let payload = req.body;
    let teknisiData = await teknisiModel.update(id,payload);
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
