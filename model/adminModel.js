const { executeQuery } = require('../config/db');

const getOrder = async () => {
    const queryOrder = await executeQuery("SELECT * FROM orders", []);

    return queryOrder;
}