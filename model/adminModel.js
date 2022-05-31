const { executeQuery } = require('../config/db');

const getOrder = async () => {
    const query = await executeQuery("SELECT * FROM orders", []);

    return query;
}

const getOrderStatus = async (status) => {
    const query = await executeQuery("SELECT * FROM orders WHERE status=?", [status]);

    return query;
}

module.exports = {
    getOrder,
    getOrderStatus,
}