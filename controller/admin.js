const adminModel = require('../model/adminModel');

const getAllOrder = async (req, reply) => {
    try {
        let result = await adminModel.getOrder();
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

const getAllTechnician = async (req, reply) => {
    try {
        let result = await adminModel.getTechnician();
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

const getSpesificOrder = async (req, reply) => {
    try {
        let result = await adminModel.getSpesificOrder();
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

const getSpesificTechnician = async (req, reply) => {
    try {
        let result = await adminModel.getSpesificTechnician();
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

const getOrderByStatus = async (req, reply) => {
    let status = req.params.status;
    try {
        let result = await adminModel.getOrderStatus(status);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

const getOrderByName = async (req, reply) => {
    let name = req.params.name;
    try {
        let result = await adminModel.getOrderName(name);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

module.exports = {
    getAllOrder,
    getSpesificOrder,
    getOrderByStatus,
    getOrderByName,
    getAllTechnician,
    getSpesificTechnician
}