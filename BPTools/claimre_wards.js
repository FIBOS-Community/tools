var FIBOS = require('fibos.js');
var config = require('../config.json');
var special_config = {
    httpEndpoint: 'http://ca-rpc.fibos.io:8870',
    verbose: false,
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
var result = fibos.claimrewardsSync(producerName); // 具体账号数据请开发者根据实际情况自行填写
console.log(result);