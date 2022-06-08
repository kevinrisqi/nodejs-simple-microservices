const orderModel = require('../model/orderModel');

const addOrder = async (req, reply) => {
    try {
        let payload = req.body;
        let result = await orderModel.addOrder(payload);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
};

const getAllOrder = async (req, reply) => {
    try {
        let result = await orderModel.findAllOrder();
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

const getOrderPhone = async (req, reply) => {
    let payload = req.params.phone_number;
    try {
        let result = await orderModel.getOrderbyPhone(payload);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

const getOrderStatus = async (req, reply) => {
    let payload = req.params.status;
    try {
        let result = await orderModel.getOrderbyStatus(payload);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

const changeStatusOrder = async (req, reply) => {
    let payload = { id: req.params.id, status: req.params.status };
    try {
        let result = await orderModel.changeStatusbyTechnician(payload);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

module.exports = {
    addOrder,
    getAllOrder,
    getOrderPhone,
    getOrderStatus,
    changeStatusOrder
}