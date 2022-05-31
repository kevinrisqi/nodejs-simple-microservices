const adminModel = require('../model/adminModel');

const getAllOrder = async (req, reply) => {
    try {
        let result = await adminModel.getOrder();
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

module.exports = {
    getAllOrder,
    getOrderByStatus,
}