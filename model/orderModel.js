const { executeQuery } = require("../config/db");

const status = { 1: "Menunggu antrian", 2: "Sedang dikerjakan", 3: "Selesai" };

const platform = { 1: "Android", 2: "IOS" };

// console.log('tes');

const ios = [
    "Iphone 1",
    "Iphone 2",
    "Iphone 3",
    "Iphone 4",
    "Iphone 5",
    "Iphone 6",
    "Iphone 7",
    "Iphone X",
    "Iphone 11",
    "Iphone 12",
    "Iphone 13",
    "Iphone XR",
    "Ipad",
];

const add = () => {
    let result = executeQuery(
        "INSERT INTO order (urutan, id_user, id_kerusakan, id_teknisi, status)"
    );
};

const test = async () => {
    let getPlatform = await executeQuery("SELECT * FROM user WHERE id = ?", [1]);
    // // if (getPlatform.)

    // //TODO: Create Object
    const brand = [
        { name: "samsung", platform: "android", origin: "south korea" },
    ];

    // // let result = brand[0];

    // //TODO: Mapping
    const platform = new Map(
        brand.map(object => {
            return [object.brand_hp, object.id];
        }),
    );

    // let result = getPlatform;
    // let result = status[1] + ' ' + platform[1];
    return platform;


};

console.log(test());

module.exports = {
    add,
    test,
};
