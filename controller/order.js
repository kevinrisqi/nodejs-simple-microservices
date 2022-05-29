const orderModel = require('../model/orderModel');

const addOrder = async (req, reply) => {
    try {
        let payload = req.body;
        let result = await orderModel.definePlatform(payload);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
};

const getOrder = async (req, reply) => {
    let payload = req.params.id;
    try {
        let result = await orderModel.getOrderbyPhone(payload);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

module.exports = {
    addOrder,
    getOrder,
}