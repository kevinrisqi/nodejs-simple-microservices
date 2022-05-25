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

const add = (payload) => {
    let result = executeQuery(
        "INSERT INTO order (nama, alamat, email, nomer_hp, brand_hp, platform, keluhan, antrian,status) VALUES (?,?,?,?,?,?,?,?,?)", [payload.nama, payload.alamat, payload.email, payload.nomer_hp, payload.brand_hp, payload.platform, payload.keluhan, payload.antrian, payload.status]
    );
    return result;
};

const definePlatform = async () => {

    let getBrand = await executeQuery("SELECT * FROM user WHERE id = ?", [5]);

    //TODO: Dummy Object
    // const brand = [
    //     { brand_hp: "samsung", platform: "android", origin: "south korea" },
    //     { brand_hp: "iphone 7", platform: "ios", origin: "United States" }
    // ];

    //TODO: Mapping
    let brand = getBrand.map(res => {
        return res.brand_hp.toLowerCase();
    });

    // let brand = ['iphone 3'];

    //TODO: Define platform
    const platform = ios.find(item => brand[0] == item.toLowerCase()) ? 'IOS' : 'Android';

    return platform;

};

definePlatform().then(res => {
    console.log(res);
})

module.exports = {
    add,
    definePlatform,
};
