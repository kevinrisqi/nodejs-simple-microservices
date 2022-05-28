const { executeQuery } = require("../config/db");

const status = { 1: "Menunggu antrian", 2: "Sedang dikerjakan", 3: "Selesai" };

const ios = [
    "Iphone",
    "Iphone 2",
    "Iphone 3",
    "Iphone 3 S",
    "Iphone 3 G",
    "Iphone 3GS",
    "Iphone 4",
    "Iphone 4 G",
    "Iphone 4 S",
    "Iphone 5",
    "Iphone 5 S",
    "Iphone 6",
    "Iphone 6 S",
    "Iphone 6 Plus",
    "Iphone 6 S+",
    "Iphone 6 S Plus",
    "Iphone 7",
    "Iphone 7+",
    "Iphone 7 Plus",
    "Iphone 8",
    "Iphone 8 Plus",
    "Iphone 8 +",
    "Iphone X Pro",
    "Iphone X",
    "Iphone 10",
    "Iphone XR",
    "Iphone XS",
    "Iphone 11",
    "Iphone 11 Mini",
    "Iphone 11 Pro",
    "Iphone 11 Pro Max",
    "Iphone 12",
    "Iphone 12 Pro",
    "Iphone 12 Pro Max",
    "Iphone 12 Mini",
    "Iphone 13",
    "Iphone 13 Pro",
    "Iphone 13 Pro Max",
    "Iphone 13 Mini",
    "Ipad",
    "Ipad Pro",
    "Iphone SE 2016",
    "Iphone SE 2020",
    "Iphone SE 2021",
    "Iphone SE 2022",
];

    //TODO: To instance Total Queue
    let totalQueue = 0;


const definePlatform = async (payload) => {

    //TODO: Create Datetime
    var currentDate = new Date();

    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var day = currentDate.getDay();

    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();

    var dateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    //TODO: Insert data to order
    const insertOrder = await executeQuery(
        "INSERT INTO orders(nama, alamat, email, nomer_hp, brand_hp, keluhan) VALUES (?,?,?,?,?,?)",
        [payload.nama, payload.alamat, payload.email, payload.nomer_hp, payload.brand_hp, payload.keluhan]);

    //TODO: Get ID in last row
    const getId = await executeQuery("SELECT MAX(id) AS id FROM orders", []);

    //TODO: Mapping to ID
    const idOrder = getId.map(res => {
        return res.id
    })

    //TODO: Get brand by ID
    const getBrand = await executeQuery("SELECT brand_hp FROM orders WHERE id=?", [idOrder]);

    //TODO: Mapping to Brand
    let brand = getBrand.map(res => {
        return res.brand_hp.toLowerCase();
    });

    //TODO: Define platform
    let platform = ios.find(item => brand[0] == item.toLowerCase()) ? 'IOS' : 'Android';

    //TODO: Get a Technician
    let technician = await executeQuery("SELECT * FROM teknisi WHERE jumlah_antrian != 3 and platform =? LIMIT 1", [platform]);

    //TODO: Mapping to ID Technician
    let idTechnician = technician.map(res => {
        return res.id
    })

    //TODO: Mapping to queue
    let queue = technician.map(res => {
        return parseInt(res.jumlah_antrian)
    });

    if (queue >= 3 || queue.length === 0) {
        //TODO: Total Queue
        totalQueue = parseInt(totalQueue) + 1;

        //TODO: Update status in orders table
        let statusOrder = await executeQuery(`UPDATE orders SET platform=?, status=?, antrian=? WHERE id=${idOrder}`, [platform, status[1], totalQueue]);
        // console.log('maks order');
    } else {
        //TODO: Technician Queue
        queue = parseInt(queue) + 1;

        //TODO: Total Queue
        totalQueue = parseInt(totalQueue) + 1;

        //TODO: Update Queue in Teknisi Table
        let updateTechnician = await executeQuery(`UPDATE teknisi SET jumlah_antrian=? WHERE id=${idTechnician}`, [queue]);

        //TODO: Update Order
        let updateOrder = await executeQuery(`UPDATE orders SET platform=?, status=?, antrian=?, id_teknisi=?, serviceAt=? WHERE id=${idOrder}`, [platform, status[2], totalQueue, idTechnician, dateTime]);
        // console.log('masuk');
    }


    console.log(queue);
    return queue;

};

// definePlatform().then(res => {
//     console.log(res);
// })

module.exports = {
    definePlatform,
};
