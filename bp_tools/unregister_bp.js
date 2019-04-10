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
var publicKey = config.public_key; 
var producerName = config.producerName; 
var ctx = fibos.contractSync('eosio');
var result = ctx.unregprodSync(producerName);
console.log(result);