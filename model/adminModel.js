const { executeQuery } = require('../config/db');

const getOrder = async () => {
    const query = await executeQuery("SELECT * FROM orders", []);

    return query;
}

const get = async () => {
    const query = await executeQuery("SELECT * FROM orders", []);

    return query;
}

const getSpesificOrder = async () => {
    const query = await executeQuery("SELECT orders.nama AS nama_customer, brand_hp, teknisi.nama AS nama_teknisi, orders.lama_pengerjaan FROM orders JOIN kerusakan ON orders.id_kerusakan = kerusakan.id JOIN teknisi ON orders.id_teknisi = teknisi.id", []);

    return query;
}

const getOrderStatus = async (status) => {
    const query = await executeQuery("SELECT * FROM orders WHERE status=?", [status]);

    return query;
}

const getOrderName = async (name) => {
    const query = await executeQuery("SELECT * FROM orders WHERE nama=?", [name]);

    return query;
}

module.exports = {
    getOrder,
    getSpesificOrder,
    getOrderStatus,
    getOrderName,
}