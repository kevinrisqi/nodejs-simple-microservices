const orderModel = require('../model/orderModel');

const addOrder = async (req, reply) => {
    try {
        let result = await orderModel.definePlatform();
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
};

module.exports = {
    addOrder,
}