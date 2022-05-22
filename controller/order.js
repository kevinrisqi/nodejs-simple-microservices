const orderModel = require('../model/orderModel');

const getAllOrder = async (req, reply) => {
    try {
        let result = await orderModel.test();
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
};

module.exports = {
    getAllOrder,
}