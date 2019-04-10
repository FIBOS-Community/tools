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

//Add to the table 添加节点信息
var ctx2 = fibos.contractSync("producerjson");
//Remove from the table 删除节点信息
var r2 = ctx2.delSync({
    "owner": config.producerName
}, {
        "authorization": config.producerName
    })

console.log(r2);



