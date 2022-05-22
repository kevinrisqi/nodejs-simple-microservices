const kerusakanModel = require("../model/kerusakanModel");

const getAllKerusakan = async (req, reply) => {
  try {
    let kerusakanData = await kerusakanModel.findAll();
    reply.status(200).send(kerusakanData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const getKerusakanById = async (req, reply) => {
  let id = req.params.id;
  try {
    let kerusakanData = await kerusakanModel.findOne(id);
    reply.status(200).send(kerusakanData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const deleteKerusakanById = async (req, reply) => {
  let id = req.params.id;
  try {
    let kerusakanData = await kerusakanModel.deleteOne(id);
    reply.status(200).send(kerusakanData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const addKerusakan = async (req, reply) => {
  try {
    const payload = req.body;
    let kerusakanData = await kerusakanModel.add(payload);
    reply.status(200).send(kerusakanData);
  } catch (error) {
    reply.status(500).send(error);
  }
};

const updateKerusakan = async (req, reply) => {
  let id = req.params.id;
  try {
    const payload = req.body;
    let kerusakanData = await kerusakanModel.update(id, payload);
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
