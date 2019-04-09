var FIBOS = require('fibos.js');
var config = require('../config.json');
var special_config = {
    httpEndpoint: 'http://ca-rpc.fibos.io:8870',
    verbose: false,
    location: 1,
    url: 'http://producer-name.io'
}
var fibos = FIBOS({
    chainId: config.chainId,
    keyProvider: config.private_key,
    httpEndpoint: special_config.httpEndpoint,
    verbose: false,
    logger: {
        log: null,
        error: null
    }   
})


let producerjson = {
    "producer_account_name": "fibosrockskr",
    "org": {
        "candidate_name": "Fibos Rocks",
        "website": "http://fibos.rocks",
        "email": "support@fibos.rocks",
        "branding": {
            "logo_256": "https://raw.githubusercontent.com/fibosRocks/logo/master/fibsorockskr.png",
            "logo_1024": "",
            "logo_svg": ""
        }
    },
    "nodes": [
        {
            "location": {
                "name": "Tokyo",
                "country": "JP",
                "latitude": 34.8,
                "longitude": 138.4
            },
            "node_type": "full",
            "api_endpoint": "http://api.fibos.rocks",
            "ssl_endpoint": "https://api.fibos.rocks"
        },
        {
            "location": {
                "name": "Tokyo",
                "country": "JP",
                "latitude": 34.8,
                "longitude": 138.4
            },
            "node_type": "producer"
        },
        {
            "location": {
                "name": "Tokyo",
                "country": "JP",
                "latitude": 34.8,
                "longitude": 138.4
            },
            "node_type": "seed",
            "p2p_endpoint": "seed.fibos.rocks:10100"
        }
    ]
}

//View the table 查看列表
var r1 = fibos.getTableRowsSync(true, "producerjson", "producerjson", "producerjson")
console.log(r1);

//Add to the table 添加节点信息
var ctx2 = fibos.contractSync("producerjson");
var r2 = ctx2.setSync({
    "owner": config.producerName,
    "json": JSON.stringify(producerjson)
}, {
        "authorization": config.producerName
    })

console.log(r2);




