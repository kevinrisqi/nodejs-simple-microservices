const { executeQuery } = require("../config/db");

const status = { 1: "Menunggu antrian", 2: "Sedang dikerjakan", 3: "Selesai" };

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
    let getBrand = await executeQuery("SELECT * FROM user WHERE id = ?", [5]);

    //TODO: Dummy Object
    // const brand = [
    //     { brand_hp: "samsung", platform: "android", origin: "south korea" },
    //     { brand_hp: "iphone 7", platform: "ios", origin: "United States" }
    // ];

    console.log(getBrand);

    //TODO: Mapping
    let brand = getBrand.map(res => {
        return res.brand_hp.toLowerCase();
    });

    // let brand = ['ipad'];

    //TODO: Define platform
    const platform = ios.find(item => brand[0] == item.toLowerCase()) ? 'IOS' : 'Android';
    
    
    return platform;


};

test().then(res => {
    console.log(res);
})

module.exports = {
    add,
    test,
};
