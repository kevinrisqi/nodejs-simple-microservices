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
    let dateTime = getDate();

    
    //TODO: Insert data to order
    const insertOrder = await executeQuery(
        "INSERT INTO orders(nama, alamat, email, nomer_hp, brand_hp, keluhan, id_kerusakan) VALUES (?,?,?,?,?,?,?)",
        [payload.nama, payload.alamat, payload.email, payload.nomer_hp, payload.brand_hp, payload.keluhan, payload.id_kerusakan]);

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

    //TODO: Get duration from kerusakan table
    let damage = await executeQuery(`SELECT * from orders JOIN kerusakan on kerusakan.id = orders.id_kerusakan WHERE orders.id IN (SELECT MAX(orders.id) FROM orders)`, []);

    //TODO: Mapping to Lama Pengerjaan
    let durationTechnician = damage.map(res => {
        return parseInt(res.lama_pengerjaan);
    })

    var result = '';

    if (queue >= 3 || queue.length === 0) {
        //TODO: Total Queue
        totalQueue = parseInt(totalQueue) + 1;

        //TODO: Update status in orders table
        let statusOrder = await executeQuery(`UPDATE orders SET platform=?, status=?, antrian=? WHERE id=${idOrder}`, [platform, status[1], totalQueue]);
        // console.log('maks order');

        result = await executeQuery(`SELECT nama, nomer_hp, brand_hp, keluhan, status FROM orders WHERE id=${idOrder}`, []);
    } else {
        //TODO: Technician Queue
        queue = parseInt(queue) + 1;

        //TODO: Total Queue
        totalQueue = parseInt(totalQueue) + 1;

        //TODO: Instance duration work
        var durationWork = 0;

        switch (queue) {
            case 1:
                durationWork = parseInt(durationTechnician);
                console.log('case 1 is success');
                break;
            case 2:
                //TODO: Get -1 Previous Row
                let previousRow = await executeQuery(`SELECT * FROM orders WHERE id IN (SELECT MAX(id) - 1 FROM orders)`);

                //TODO: Mapping to first duration from order table
                let duration = previousRow.map(res => {
                    return parseInt(res.lama_pengerjaan);
                });

                //TODO: Calculate total duration work by queue
                durationWork = parseInt(durationTechnician) + parseInt(duration);
                console.log('case 2 is success')
                break;
            case 3:
                //TODO: Get -1 Previous Row
                let previousFirstRow = await executeQuery(`SELECT * FROM orders WHERE id IN (SELECT MAX(id) - 1 FROM orders)`);

                //TODO: Mapping to first duration from order table
                let firstDuration = previousFirstRow.map(res => {
                    return parseInt(res.lama_pengerjaan);
                });

                //TODO: Get -2 Previous Row
                let previousSecondRow = await executeQuery(`SELECT * FROM orders WHERE id IN (SELECT MAX(id) - 2 FROM orders)`);

                //TODO: Mapping to second duration from order table
                let secondDuration = previousSecondRow.map(res => {
                    return parseInt(res.lama_pengerjaan);
                });

                //TODO: Calculate total duration work by queue
                durationWork = parseInt(durationTechnician) + parseInt(firstDuration) + parseInt(secondDuration);
                console.log('case 3 is success')
                break;
            default:
                break;
        }

        //TODO: Update Queue in Teknisi Table
        let updateTechnician = await executeQuery(`UPDATE teknisi SET jumlah_antrian=? WHERE id=${idTechnician}`, [queue]);

        //TODO: Update Order
        let updateOrder = await executeQuery(`UPDATE orders SET platform=?, status=?, antrian=?, id_teknisi=?, serviceAt=?, lama_pengerjaan=? WHERE id=${idOrder}`, [platform, status[2], queue, idTechnician, dateTime, durationWork]);
        // console.log('masuk');

        //TODO: User retrieve data after insert order if user already get teknisi
        result = await executeQuery(`SELECT teknisi.id, teknisi.nama, orders.lama_pengerjaan, kerusakan.harga from orders join teknisi on orders.id_teknisi = teknisi.id JOIN kerusakan on orders.id_kerusakan = kerusakan.id WHERE orders.id=${idOrder}`,[]);
    }
    

    console.log(`Antrian ke ${queue} || Lama Pengerjaan : ${durationWork} || Durasi Teknisi: ${durationTechnician}`);
    console.log(result);
    return result;

};

const getOrderbyPhone = async (payload) => {

    const result = await executeQuery(`SELECT orders.nama as nama_user, orders.alamat, orders.brand_hp, orders.keluhan, orders.status, teknisi.nama as nama_teknisi, kerusakan.jenis_kerusakan FROM orders JOIN kerusakan on orders.id_kerusakan = kerusakan.id LEFT JOIN teknisi on teknisi.id = orders.id_teknisi WHERE orders.nomer_hp = ?`, [payload]);

    console.log(result);
    return result;
}

const getOrderbyStatus = async (payload) => {

    const result = await executeQuery('SELECT * FROM orders WHERE status = ?', [payload]);

    console.log(result);
    return result;
}

const changeStatusbyTechnician = async (payload) => {

    const updateStatus = await executeQuery(`UPDATE orders SET status=? WHERE id=${payload.id}`, [payload.status]);

    const getDataOrder = await executeQuery(`SELECT * FROM orders WHERE id=?`, [payload.id]);

    var idTechnician = getDataOrder.map(res => {
        return res.id_teknisi
    });

    var tempStatus = getDataOrder.map(res => {
        return res.status
    })

    if (tempStatus == status[3]) {
        var minQueue = await executeQuery(`UPDATE teknisi SET jumlah_antrian = (jumlah_antrian - 1) WHERE id=?`, [idTechnician]);
    } else if (tempStatus == status[2]) {

    }


    console.log(minQueue);
    return minQueue;
}

const getDate = () => {
    //TODO: Create Datetime
    var currentDate = new Date();

    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getUTCDate();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();

    var dateTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    // console.log(dateTime);

    return dateTime;
}

// console.log(getDate());


// definePlatform().then(res => {
//     console.log(res);
// })

module.exports = {
    definePlatform,
    getOrderbyPhone,
    getOrderbyStatus,
    changeStatusbyTechnician
};
