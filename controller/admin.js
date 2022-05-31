const adminModel = require('../model/adminModel');

const getAllOrder = async (req, reply) => {
    try {
        let result = 'test';
        reply.status(200).send(result);
    } catch (error) {
        reply.status(400).send(error);
    }
}

module.exports = {
    getAllOrder,
}