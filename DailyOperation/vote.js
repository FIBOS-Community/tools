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
var ctx = fibos.contractSync('eosio');
 
var fibosnodes = ['','','']; // 具体账号数据请开发者根据实际情况自行填写
fibosnodes.sort()；

var a = ctx.voteproducerSync('account', '', fibosnodes); // 具体账号数据请开发者根据实际情况自行填写
